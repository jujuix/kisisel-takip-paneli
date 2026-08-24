const getTagValue = (entry, tagName) => {
  const match = entry.match(new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)</${tagName}>`));
  return match ? match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, '$1').trim() : '';
};

export default async function handler(request, response) {
  const playlistId = request.query?.playlistId;
  if (!playlistId || !/^[A-Za-z0-9_-]+$/.test(playlistId)) {
    return response.status(400).json({ error: 'Geçersiz playlist ID' });
  }

  try {
    const rssResponse = await fetch(`https://www.youtube.com/feeds/videos.xml?playlist_id=${playlistId}`);
    if (!rssResponse.ok) return response.status(rssResponse.status).json({ error: 'Playlist alınamadı' });

    const xml = await rssResponse.text();
    const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(match => {
      const entry = match[1];
      return {
        id: getTagValue(entry, 'yt:videoId'),
        title: getTagValue(entry, 'media:title') || getTagValue(entry, 'title')
      };
    }).filter(video => video.id && video.title);

    return response.status(200).json({ videos });
  } catch {
    return response.status(502).json({ error: 'YouTube playlist servisine ulaşılamadı' });
  }
}
