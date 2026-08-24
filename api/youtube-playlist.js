const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const parseDuration = (value) => {
  const match = value.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0);
};

const youtubeRequest = async (resource, params, apiKey) => {
  const query = new URLSearchParams({ ...params, key: apiKey });
  const result = await fetch(`${YOUTUBE_API_URL}/${resource}?${query}`);
  const data = await result.json();
  if (!result.ok || data.error) throw new Error(data.error?.message || 'YouTube API isteği başarısız');
  return data;
};

export default async function handler(request, response) {
  const playlistId = request.query?.playlistId;
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return response.status(500).json({ error: 'YOUTUBE_API_KEY Vercel ortam değişkenlerinde tanımlı değil' });
  if (!playlistId || !/^[A-Za-z0-9_-]+$/.test(playlistId)) {
    return response.status(400).json({ error: 'Geçersiz playlist ID' });
  }

  try {
    const playlistItems = [];
    let pageToken = '';
    do {
      const page = await youtubeRequest('playlistItems', { part: 'snippet,contentDetails', playlistId, maxResults: '50', ...(pageToken ? { pageToken } : {}) }, apiKey);
      playlistItems.push(...(page.items || []));
      pageToken = page.nextPageToken || '';
    } while (pageToken);

    const videoIds = playlistItems.map(item => item.contentDetails?.videoId).filter(Boolean);
    const durations = new Map();
    for (let index = 0; index < videoIds.length; index += 50) {
      const page = await youtubeRequest('videos', { part: 'contentDetails', id: videoIds.slice(index, index + 50).join(',') }, apiKey);
      (page.items || []).forEach(item => durations.set(item.id, parseDuration(item.contentDetails?.duration || '')));
    }
    const videos = playlistItems.map(item => ({ id: item.contentDetails?.videoId, title: item.snippet?.title, durationSeconds: durations.get(item.contentDetails?.videoId) || 0 })).filter(video => video.id && video.title);

    return response.status(200).json({ videos });
  } catch (error) {
    return response.status(502).json({ error: error.message || 'YouTube playlist servisine ulaşılamadı' });
  }
}
