export const MONTH_NAMES = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

export const GUN_ADLARI = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

export const KONU_DURUMLARI = [
  { id: "baslanmadi", ad: "Başlanmadı", renk: "#9ca3af" },
  { id: "calisiyor", ad: "Çalışılıyor", renk: "#2563eb" },
  { id: "bitti", ad: "Bitti", renk: "#16a34a" },
  { id: "tekrar_gerekli", ad: "Tekrar Edilecek", renk: "#f59e0b" },
  { id: "tekrar_edildi", ad: "Tekrar Edildi", renk: "#7c3aed" }
];

export const YANLIS_SEBEPLERI = [
  "Bilgi eksikliği", "Dikkat hatası", "Soruyu yanlış okuma",
  "İşlem hatası", "Süre yetmedi", "Konuyu biliyorum ama uygulayamadım", "Diğer"
];

// TÜM SİTE İÇİN VEKTÖREL SVG İKON HARİTASI
export const VEKTOR_IKONLAR = {
  "📚": '<svg class="ikon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  "⏳": '<svg class="ikon" viewBox="0 0 24 24"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>',
  "📊": '<svg class="ikon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  "📖": '<svg class="ikon" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  "📝": '<svg class="ikon" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
  "❌": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  "✖️": '<svg class="ikon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  "🔥": '<svg class="ikon" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  "📈": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  "📉": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
  "⏱️": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>',
  "✅": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  "🎯": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  "💼": '<svg class="ikon" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  "🏠": '<svg class="ikon" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  "⚙️": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  "📅": '<svg class="ikon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  "📁": '<svg class="ikon" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  "🗓️": '<svg class="ikon" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg>',
  "💡": '<svg class="ikon" viewBox="0 0 24 24"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/></svg>',
  "⚡": '<svg class="ikon" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  "🤝": '<svg class="ikon" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  "🌱": '<svg class="ikon" viewBox="0 0 24 24"><path d="M12 10v12"/><path d="M12 10a6 6 0 0 1 6-6h2v2a6 6 0 0 1-6 6h-2z"/><path d="M12 14a6 6 0 0 0-6-6H4v2a6 6 0 0 0 6 6h2z"/></svg>',
  "⚠️": '<svg class="ikon" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  "🍅": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 6 12 12 16 14"/></svg>',
  "📌": '<svg class="ikon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  "🗑️": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  "🧪": '<svg class="ikon" viewBox="0 0 24 24"><path d="M10 2v7.31L4.1 19.46A2 2 0 0 0 5.76 22h12.48a2 2 0 0 0 1.66-2.54L14 9.31V2"/></svg>',
  "🎬": '<svg class="ikon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>',
  "🔄": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  "➕": '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
  "🚀": '<svg class="ikon" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
  "☕": '<svg class="ikon" viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>',
  "☀️": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  "🌙": '<svg class="ikon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  "🦉": '<svg class="ikon" viewBox="0 0 24 24"><path d="M12 2C8 2 4 5 4 10c0 4 2 8 8 12 6-4 8-8 8-12 0-5-4-8-8-8z"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="9" r="2"/></svg>',
  "✏️": '<svg class="ikon" viewBox="0 0 24 24"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
  "💾": '<svg class="ikon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  "🔗": '<svg class="ikon" viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  "📋": '<svg class="ikon" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>'
};

export const getGreetingMessage = (isim) => {
  const saat = new Date().getHours();
  let secenekler = [];
  if (saat >= 5 && saat < 12) {
    secenekler = [`Günaydın ${isim}! ☀️`, `Harika bir sabah ${isim}, bugün neler yapıyoruz? ☕`, `Enerjin tavan olsun ${isim}! 🚀`];
  } else if (saat >= 12 && saat < 18) {
    secenekler = [`Merhaba ${isim}! 👋`, `Nasıl gidiyor ${isim}? 🎯`, `Verimli bir gün olsun ${isim}! 💪`];
  } else if (saat >= 18 && saat < 23) {
    secenekler = [`İyi akşamlar ${isim}! 🌇`, `Günün nasıl geçti ${isim}? 🌟`, `Günün özetine göz atalım mı ${isim}? 📊`];
  } else {
    secenekler = [`İyi geceler ${isim}! Gece kuşu musun? 🦉`, `Gece mesaisi mi ${isim}? Dinlenmeyi unutma! 🌙`];
  }
  return secenekler[Math.floor(Math.random() * secenekler.length)];
};

export const ALL_WIDGETS = [
  { id: "gunluk-ozet", baslik: "Günlük Özet", ikon: "📊", kategori: "Genel", varsayilanGenislik: 4 },
  { id: "pomodoro", baslik: "Pomodoro & Sayaç", ikon: "🍅", kategori: "Genel", varsayilanGenislik: 2 },
  { id: "not-defteri", baslik: "Not Defteri", ikon: "📝", kategori: "Genel", varsayilanGenislik: 2 },
  { id: "takvim", baslik: "Takvim & Toplantılar", ikon: "📅", kategori: "Planlama", varsayilanGenislik: 2 },
  { id: "gorevler", baslik: "Görev Kartları", ikon: "✅", kategori: "Planlama", varsayilanGenislik: 2 },
  { id: "ders-ilerleme", baslik: "Ders İlerlemesi", ikon: "📚", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "ders-calisma-plani", baslik: "Günün Çalışma Planı", ikon: "🎯", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "ders-net-grafik", baslik: "Net Gelişim Grafiği", ikon: "📈", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "ders-zayif-konular", baslik: "Zayıf Konular", ikon: "⚠️", kategori: "Ders & Sınav", varsayilanGenislik: 4 },
  { id: "is-zaman", baslik: "Zaman Çizelgesi", ikon: "🗓️", kategori: "İş & Proje", varsayilanGenislik: 4 },
  { id: "is-fikirler", baslik: "Fikirler Alanı", ikon: "💡", kategori: "İş & Proje", varsayilanGenislik: 2 },
  { id: "is-hizli-not", baslik: "Hızlı Not", ikon: "⚡", kategori: "İş & Proje", varsayilanGenislik: 2 },
  { id: "konular-panel", baslik: "Konular", ikon: "📖", kategori: "Ders & Sınav", varsayilanGenislik: 4 },
  { id: "deneme-istatistikler", baslik: "Deneme İstatistikleri", ikon: "📊", kategori: "Ders & Sınav", varsayilanGenislik: 4 },
  { id: "deneme-ekle", baslik: "Yeni Deneme Ekle", ikon: "📝", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "deneme-gecmisi", baslik: "Deneme Geçmişi", ikon: "📈", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "yanlis-ekle", baslik: "Yanlış Soru Ekle", ikon: "➕", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "yanlis-analiz", baslik: "Yanlış Analizi", ikon: "📊", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "yanlis-arsiv", baslik: "Yanlış Arşivim", ikon: "❌", kategori: "Ders & Sınav", varsayilanGenislik: 4 },
  { id: "takip-takvim", baslik: "Çalışma Takvimi", ikon: "🔥", kategori: "Ders & Sınav", varsayilanGenislik: 2 },
  { id: "takip-hedefler", baslik: "Hedefler", ikon: "🎯", kategori: "Ders & Sınav", varsayilanGenislik: 4 },
  { id: "aliskanlik-haftalik", baslik: "Haftalık Alışkanlıklar", ikon: "🌱", kategori: "Planlama", varsayilanGenislik: 2 },
  { id: "aliskanlik-aylik", baslik: "Aylık Hedefler", ikon: "🎯", kategori: "Planlama", varsayilanGenislik: 1 },
  { id: "is-kanban", baslik: "Kanban Panosu", ikon: "📋", kategori: "İş & Proje", varsayilanGenislik: 4 },
  { id: "bugun-odak", baslik: "Bugün Odak", ikon: "📌", kategori: "İş & Proje", varsayilanGenislik: 2 },
  { id: "proje-fikirleri", baslik: "Proje Fikirleri", ikon: "💡", kategori: "İş & Proje", varsayilanGenislik: 2 },
  { id: "hizli-baglantilar", baslik: "Hızlı Bağlantılar", ikon: "🔗", kategori: "İş & Proje", varsayilanGenislik: 4}
];

export const SINAV_MUFREDATLARI = {
  kpss_ortaogretim: {
    ad: "KPSS Ortaöğretim",
    varsayilanTarih: "2026-10-25",
    dersler: [
      { ad: "Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragraf", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcük Türleri", "Cümlenin Öğeleri", "Anlatım Bozuklukları"] },
      { ad: "Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Bölme-Bölünebilme", "OBEB-OKEK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Problemler", "Kümeler", "Fonksiyonlar"] },
      { ad: "Geometri", konular: ["Doğruda ve Üçgende Açılar", "Üçgenler", "Çokgenler", "Çember ve Daire", "Analitik Geometri", "Katı Cisimler"] },
      { ad: "Tarih", konular: ["İslamiyet Öncesi Türk Tarihi", "İlk Türk-İslam Devletleri", "Osmanlı Kuruluş-Yükselme", "Osmanlı Duraklama-Gerileme", "Osmanlı Yıkılış Dönemi", "Kurtuluş Savaşı", "İnkılap Tarihi", "Atatürk İlkeleri"] },
      { ad: "Coğrafya", konular: ["Türkiye'nin Coğrafi Konumu", "Türkiye'nin Yer Şekilleri", "Türkiye'nin İklimi", "Nüfus ve Yerleşme", "Tarım ve Hayvancılık", "Madenler ve Enerji", "Ulaşım ve Ticaret"] },
      { ad: "Vatandaşlık & Güncel", konular: ["Temel Hukuk Kavramları", "Devlet Biçimleri", "1982 Anayasası", "Yasama", "Yürütme", "Yargı", "İdare Hukuku", "Uluslararası Kuruluşlar ve Güncel Olaylar"] }
    ]
  },
  kpss_onlisans: {
    ad: "KPSS Önlisans",
    varsayilanTarih: "2026-10-18",
    dersler: [
      { ad: "Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragraf", "Sözel Mantık", "Dil Bilgisi", "Yazım ve Noktalama", "Anlatım Bozukluğu"] },
      { ad: "Matematik", konular: ["Temel Kavramlar", "Rasyonel Sayılar", "Denklemler", "Üslü-Köklü", "Problemler", "Grafik ve Tablo Okuma", "Sayısal Mantık", "Kümeler & Olasılık"] },
      { ad: "Geometri", konular: ["Açılar ve Üçgenler", "Dörtgenler ve Çokgenler", "Çember ve Daire", "Analitik Geometri"] },
      { ad: "Tarih", konular: ["İlk Türk Devletleri", "Türk-İslam Tarihi", "Osmanlı Siyasi Tarihi", "Osmanlı Kültür ve Medeniyeti", "Milli Mücadele", "Atatürk İnkılapları", "Çağdaş Türk ve Dünya Tarihi"] },
      { ad: "Coğrafya", konular: ["Coğrafi Konum", "Türkiye Fiziki Coğrafyası", "Beşeri Coğrafya", "Ekonomik Coğrafya", "Bölgesel Kalkınma Projeleri"] },
      { ad: "Vatandaşlık", konular: ["Hukukun Temel Esasları", "Anayasa Tarihi", "Yasama-Yürütme-Yargı", "İdare Hukuku", "Güncel Bilgiler"] }
    ]
  },
  kpss_lisans: {
    ad: "KPSS Lisans",
    varsayilanTarih: "2026-09-06",
    dersler: [
      { ad: "Türkçe", konular: ["Sözcükte & Cümlede Anlam", "Paragrafta Anlam & Yapı", "Sözel Mantık & Muhakeme", "Dil Bilgisi", "Yazım-Noktalama"] },
      { ad: "Matematik", konular: ["Temel Sayılar & Basamaklar", "Bölünebilme & EBOB-EKOK", "Basit Eşitsizlik & Mutlak Değer", "Tüm Problem Türleri", "PKOB", "Sayısal Mantık & Muhakeme"] },
      { ad: "Geometri", konular: ["Üçgenler", "Çokgenler & Dörtgenler", "Çember-Daire", "Analitik Geometri", "Katı Cisimler"] },
      { ad: "Tarih", konular: ["İslam Öncesi Türk Tarihi", "Türk-İslam Devletleri", "Osmanlı Tarihi & Kültür Medeniyet", "Milli Mücadele & Kongreler", "İnkılaplar", "Çağdaş Türk ve Dünya Tarihi"] },
      { ad: "Coğrafya", konular: ["Türkiye'nin Konumu & Jeopolitiği", "Fiziki Özellikler & Yerşekilleri", "İklim ve Bitki Örtüsü", "Nüfus, Yerleşme & Göç", "Ekonomik Coğrafya"] },
      { ad: "Vatandaşlık & Güncel", konular: ["Temel Hukuk", "Anayasa Hukuku", "1982 Anayasası Esasları", "Yasama, Yürütme, Yargı", "İdare Hukuku", "Uluslararası Örgütler & Güncel Gelişmeler"] }
    ]
  },
  lgs: {
    ad: "LGS",
    varsayilanTarih: "2026-06-07",
    dersler: [
      { ad: "Türkçe", konular: ["Fiilimsiler", "Sözcükte & Cümlede Anlam", "Paragrafta Anlam & Yapı", "Cümlenin Ögeleri", "Metin Türleri", "Noktalama & Yazım"] },
      { ad: "Matematik", konular: ["Çarpanlar ve Katlar", "Üslü İfadeler", "Kareköklü İfadeler", "Veri Analizi", "Olasılık", "Cebirsel İfadeler", "Doğrusal Denklemler", "Eşitsizlikler", "Üçgenler"] },
      { ad: "Fen Bilimleri", konular: ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri", "Basit Makineler", "Enerji Dönüşümleri", "Elektrik Yükleri"] },
      { ad: "T.C. İnkılap Tarihi", konular: ["Bir Kahraman Doğuyor", "Milli Uyanış", "Milli Bir Destan", "Atatürkçülük", "Demokratikleşme", "Dış Politika"] },
      { ad: "İngilizce", konular: ["Friendship", "Teen Life", "In The Kitchen", "On The Phone", "The Internet", "Adventures", "Tourism"] },
      { ad: "Din Kültürü", konular: ["Kader İnancı", "Zekat ve Sadaka", "Din ve Hayat", "Hz. Muhammed'in Örnekliği", "Kur'an-ı Kerim"] }
    ]
  },
  tyt: {
    ad: "YKS: TYT",
    varsayilanTarih: "2026-06-20",
    dersler: [
      { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Dil Bilgisi"] },
      { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Rasyonel Sayılar", "Eşitsizlikler", "Mutlak Değer", "Üslü-Köklü", "Problemler", "PKOB"] },
      { ad: "TYT Geometri", konular: ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Alan & Benzerlik", "Çokgenler & Dörtgenler", "Çember ve Daire", "Katı Cisimler"] },
      { ad: "TYT Fizik", konular: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Basınç & Kaldırma", "Isı ve Sıcaklık", "Hareket ve Kuvvet", "Elektrik & Manyetizma", "Optik", "Dalgalar"] },
      { ad: "TYT Kimya", konular: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler", "Maddenin Halleri", "Karışımlar", "Asitler, Bazlar ve Tuzlar"] },
      { ad: "TYT Biyoloji", konular: ["Yaşam Bilimi Biyoloji", "Hücre ve Organelleri", "Canlılar Dünyası", "Hücre Bölünmeleri", "Kalıtım", "Ekosistem"] },
      { ad: "TYT Tarih", konular: ["Tarih ve Zaman", "İlk Türk Devletleri", "İslam Tarihi", "Osmanlı Tarihi", "Milli Mücadele", "Atatürkçülük"] },
      { ad: "TYT Coğrafya", konular: ["Doğa ve İnsan", "Dünya'nın Şekli", "Harita Bilgisi", "İklim Bilgisi", "İç ve Dış Kuvvetler", "Nüfus", "Doğal Afetler"] },
      { ad: "TYT Felsefe & Din", konular: ["Felsefenin Konusu", "Bilgi-Varlık-Ahlak Felsefesi", "İslam ve İbadet", "Ahlak ve Değerler"] }
    ]
  },
  tyt_ayt_sayisal: {
    ad: "YKS: TYT-AYT (Sayısal)",
    varsayilanTarih: "2026-06-21",
    dersler: [
      { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Dil Bilgisi"] },
      { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Rasyonel Sayılar", "Problemler", "PKOB"] },
      { ad: "AYT Matematik", konular: ["Fonksiyonlar & Polinomlar", "Trigonometri", "Logaritma", "Diziler", "Limit", "Türev", "İntegral"] },
      { ad: "AYT Geometri", konular: ["Analitik Geometri", "Çemberin Analitiği", "Katı Cisimler"] },
      { ad: "AYT Fizik", konular: ["Vektörler & Bağıl Hareket", "Newton Yasaları", "Atışlar & Momentum", "Elektrik & Manyetizma", "Dalga Mekaniği", "Modern Fizik"] },
      { ad: "AYT Kimya", konular: ["Modern Atom Teorisi", "Gazlar", "Çözeltiler", "Kimyasal Denge", "Elektrokimya", "Organik Kimya"] },
      { ad: "AYT Biyoloji", konular: ["İnsan Fizyolojisi", "Genden Proteine", "Fotosentez & Solunum", "Bitki Biyolojisi"] }
    ]
  },
  tyt_ayt_sozel: {
    ad: "YKS: TYT-AYT (Sözel)",
    varsayilanTarih: "2026-06-21",
    dersler: [
      { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Dil Bilgisi"] },
      { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Rasyonel Sayılar", "Problemler"] },
      { ad: "AYT Edebiyat", konular: ["Şiir Bilgisi & Edebi Sanatlar", "Halk Edebiyatı", "Divan Edebiyatı", "Tanzimat & Servetifünun", "Milli Edebiyat", "Cumhuriyet Dönemi"] },
      { ad: "AYT Tarih", konular: ["İlk Çağ Uygarlıkları", "Türk-İslam Tarihi", "Osmanlı Siyasi Tarihi", "Milli Mücadele"] },
      { ad: "AYT Coğrafya", konular: ["Ekosistemler", "Nüfus Politikaları", "Türkiye Ekonomisi", "Bölgesel Kalkınma"] },
      { ad: "AYT Felsefe Grubu & Din", konular: ["Mantık", "Psikoloji", "Sosyoloji", "Din Kültürü ve Mezhepler"] }
    ]
  },
  tyt_ayt_ea: {
    ad: "YKS: TYT-AYT (Eşit Ağırlık)",
    varsayilanTarih: "2026-06-21",
    dersler: [
      { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Dil Bilgisi"] },
      { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Rasyonel Sayılar", "Problemler", "PKOB"] },
      { ad: "AYT Matematik", konular: ["Polinomlar & Denklemler", "Parabol & Trigonometri", "Logaritma", "Limit, Türev, İntegral"] },
      { ad: "AYT Edebiyat", konular: ["Şiir Bilgisi", "Divan Edebiyatı", "Tanzimat & Servetifünun", "Milli Edebiyat", "Cumhuriyet Edebiyatı"] },
      { ad: "AYT Tarih-1", konular: ["İlk Türk Devletleri", "İslam & Osmanlı Tarihi", "Milli Mücadele"] },
      { ad: "AYT Coğrafya-1", konular: ["Biyoçeşitlilik", "Şehirler ve Nüfus", "Türkiye'nin Ekonomik Coğrafyası"] }
    ]
  },
  universite: {
    ad: "Üniversite (Vize / Final / Büt)",
    varsayilanTarih: "2026-11-15",
    dersler: [
      { ad: "Ders 1 (Örn: Hukuka Giriş)", konular: ["1. Hafta: Giriş", "2. Hafta: Temel Kavramlar", "3. Hafta: Vize Konuları", "4. Hafta: Final / Büt"] },
      { ad: "Ders 2 (Örn: İktisada Giriş)", konular: ["Mikro İktisat", "Makro İktisat", "Vize Çıkmış Sorular", "Final Projesi"] }
    ]
  }
};

export const createCurriculum = (kod) => {
  const sablon = SINAV_MUFREDATLARI[kod] || SINAV_MUFREDATLARI.kpss_ortaogretim;
  return sablon.dersler.map(d => ({
    id: "ders_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
    ad: d.ad,
    konular: d.konular.map(k => ({
      id: "konu_" + Date.now() + "_" + Math.random().toString(36).substring(2, 6),
      ad: k,
      durum: "baslanmadi",
      kayitlar: [],
      tekrarSayisi: 0,
      tekrarTarihi: null,
      tekrarGecmisi: []
    }))
  }));
};