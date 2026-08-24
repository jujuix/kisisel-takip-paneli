import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KONU_DURUMLARI } from '../../constants';

const getPlaylistId = (value) => {
  try {
    const url = new URL(value.trim());
    return url.searchParams.get('list') || '';
  } catch {
    return '';
  }
};

const createId = (prefix) => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

export const YoutubeKursWidget = () => {
  const { dersData, setDersData, simgesi } = useApp();
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [selectedLessonId, setSelectedLessonId] = useState(dersData.dersler?.[0]?.id || '');
  const [newLessonName, setNewLessonName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const courses = dersData.youtubeKurslari || [];

  const importPlaylist = async (event) => {
    event.preventDefault();
    const playlistId = getPlaylistId(playlistUrl);
    if (!playlistId || !selectedLessonId) {
      setStatusMessage('Geçerli bir YouTube playlist bağlantısı ve ders seçmelisin.');
      return;
    }

    setLoading(true);
    setStatusMessage('Video başlıkları alınıyor...');
    try {
      const response = await fetch(`/api/youtube-playlist?playlistId=${encodeURIComponent(playlistId)}`);
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Playlist alınamadı');
      if (!result.videos?.length) throw new Error('Playlist boş veya erişilemiyor');

      const videos = result.videos.map(video => ({
        id: video.id || createId('video'),
        title: video.title || 'Başlıksız video',
        durationHours: 0,
        status: 'baslanmadi',
        durationHours: Number((video.durationSeconds / 3600).toFixed(2))
      }));

      setDersData(previous => {
        const sourceLesson = previous.dersler.find(item => item.id === selectedLessonId);
        const lessonName = newLessonName.trim() || `${sourceLesson?.ad || 'Ders'} - Video Kursu`;
        const lesson = { id: createId('ders'), ad: lessonName, konular: [] };
        if (!lesson) return previous;
        const existingTitles = new Set(lesson.konular.map(topic => topic.ad));
        const newVideos = videos.filter(video => !existingTitles.has(video.title));
        const newTopics = newVideos.map(video => ({
          id: `youtube_${video.id}`,
          ad: video.title,
          durum: 'baslanmadi',
          kayitlar: [],
          tekrarSayisi: 0,
          tekrarTarihi: null,
          tekrarGecmisi: [],
          youtubeVideoId: video.id,
          videoSuresi: video.durationHours
        }));
        const course = {
          id: createId('kurs'),
          playlistId,
          playlistUrl: playlistUrl.trim(),
          dersId: selectedLessonId,
          videoIds: newVideos.map(video => video.id),
          createdAt: new Date().toISOString()
        };
        return {
          ...previous,
          dersler: [...previous.dersler, { ...lesson, konular: newTopics }],
          youtubeKurslari: [...(previous.youtubeKurslari || []), { ...course, dersId: lesson.id }]
        };
      });
      setPlaylistUrl('');
      setNewLessonName('');
      setStatusMessage(`${videos.length} video bulundu. Yeni videolar seçilen derse konu olarak eklendi.`);
    } catch (error) {
      setStatusMessage(error.message || 'Playlist okunamadı.');
    } finally {
      setLoading(false);
    }
  };

  const updateVideo = (lessonId, topicId, nextStatus, durationHours) => {
    setDersData(previous => ({
      ...previous,
      calismaGunleri: nextStatus === 'bitti'
        ? { ...previous.calismaGunleri, [new Date().toISOString().split('T')[0]]: true }
        : previous.calismaGunleri,
      dersler: previous.dersler.map(lesson => lesson.id !== lessonId ? lesson : {
        ...lesson,
        konular: lesson.konular.map(topic => {
          if (topic.id !== topicId) return topic;
          const wasCompleted = topic.durum === 'bitti';
          const nextRecords = !wasCompleted && nextStatus === 'bitti' && Number(durationHours) > 0
            ? [...(topic.kayitlar || []), { id: createId('video_rec'), tip: 'calisma', tarih: new Date().toISOString().split('T')[0], saat: Number(durationHours), soru: 0, dogru: 0, yanlis: 0, not: 'YouTube kurs videosu' }]
            : topic.kayitlar || [];
          return { ...topic, durum: nextStatus, videoSuresi: Number(durationHours) || 0, kayitlar: nextRecords };
        })
      })
    }));
  };

  return (
    <div className="youtube-kurs-widget">
      <div className="section-header">
        <h2>{simgesi('🎬')} YouTube Kurs Takibi</h2>
      </div>
      <form className="youtube-kurs-form" onSubmit={importPlaylist}>
        <input type="url" value={playlistUrl} onChange={event => setPlaylistUrl(event.target.value)} placeholder="YouTube playlist bağlantısını yapıştır" />
        <select value={selectedLessonId} onChange={event => setSelectedLessonId(event.target.value)}>
          <option value="">Ders seç...</option>
          {(dersData.dersler || []).map(lesson => <option key={lesson.id} value={lesson.id}>{lesson.ad}</option>)}
        </select>
          <input type="text" value={newLessonName} onChange={event => setNewLessonName(event.target.value)} placeholder="Yeni ders (örn. Matematik - Video Kursu)" />
        <button className="ders-buyuk-buton" type="submit" disabled={loading}>{loading ? 'Alınıyor...' : 'Videoları Getir'}</button>
      </form>
      {statusMessage && <p className="youtube-kurs-mesaj">{statusMessage}</p>}

      {(dersData.dersler || []).map(lesson => {
        const videoTopics = lesson.konular.filter(topic => topic.youtubeVideoId);
        if (!videoTopics.length) return null;
        return (
          <section className="youtube-kurs-ders" key={lesson.id}>
            <h3>{lesson.ad}</h3>
            {videoTopics.map(topic => {
              const state = KONU_DURUMLARI.find(item => item.id === topic.durum) || KONU_DURUMLARI[0];
              return (
                <div className="youtube-kurs-video" key={topic.id}>
                  <div className="youtube-kurs-video-baslik">{topic.ad}</div>
                  <input type="number" min="0" step="0.25" value={topic.videoSuresi || ''} placeholder="Saat" onChange={event => updateVideo(lesson.id, topic.id, topic.durum, event.target.value)} />
                  <select value={topic.durum} onChange={event => updateVideo(lesson.id, topic.id, event.target.value, topic.videoSuresi)} style={{ borderColor: state.renk }}>
                    {KONU_DURUMLARI.slice(0, 3).map(item => <option key={item.id} value={item.id}>{item.ad}</option>)}
                  </select>
                </div>
              );
            })}
          </section>
        );
      })}
      {!courses.length && <p className="bos-durum-notu">Bir playlist eklediğinde videolar burada konu olarak listelenir.</p>}
    </div>
  );
};
