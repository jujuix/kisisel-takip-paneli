// ==========================================
// İKON KÜTÜPHANESİ & MOTORU
// ==========================================

const IKON_STILI_ANAHTARI = "panelIkonStili";

const IKON = {
    kapat: '<svg class="ikon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    sil: '<svg class="ikon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>',
    menu: '<svg class="ikon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    ay: '<svg class="ikon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    gunes: '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    onceki: '<svg class="ikon" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>',
    sonraki: '<svg class="ikon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>',
    artis: '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    azalis: '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>'
};

const VEKTOR_IKONLAR = {
    "📚": '<svg class="ikon" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    "⏳": '<svg class="ikon" viewBox="0 0 24 24"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>',
    "📊": '<svg class="ikon" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    "📖": '<svg class="ikon" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    "📝": '<svg class="ikon" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    "❌": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    "🔥": '<svg class="ikon" viewBox="0 0 24 24"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    "📈": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    "📉": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>',
    "⏱️": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>',
    "✅": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
    "🏆": '<svg class="ikon" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>',
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
    "🎨": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>',
    "💾": '<svg class="ikon" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    "🗑️": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    "🧪": '<svg class="ikon" viewBox="0 0 24 24"><path d="M10 2v7.31L4.1 19.46A2 2 0 0 0 5.76 22h12.48a2 2 0 0 0 1.66-2.54L14 9.31V2"/></svg>',
    "🎬": '<svg class="ikon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/></svg>',
    "🔄": '<svg class="ikon" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    "➕": '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    "📋": '<svg class="ikon" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
    "🚀": '<svg class="ikon" viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/></svg>',
    "⏰": '<svg class="ikon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>',
    "⬇️": '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>',
    "⬆️": '<svg class="ikon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>'
};

function aktifIkonStili() {
    return localStorage.getItem(IKON_STILI_ANAHTARI) || "emoji";
}

function simgesi(emojiKarakter) {
    if (aktifIkonStili() === "svg" && VEKTOR_IKONLAR[emojiKarakter]) {
        return `<span class="vektor-ikon-kutusu">${VEKTOR_IKONLAR[emojiKarakter]}</span>`;
    }
    return emojiKarakter;
}

function tumSayfadakiEmojileriDonustur() {
    const svgAktif = aktifIkonStili() === "svg";

    // 1) Yan menü altındaki promosyon ikonu
    const promoIkon = document.querySelector(".yan-menu-promo > div:first-child");
    if (promoIkon) promoIkon.innerHTML = svgAktif ? simgesi("🌱") : "🌱";

    // 2) Başlıklar, ayarlar ve kart başlıkları (h1, h2, h3, butonlar vb.)
    document.querySelectorAll(".section-header h2, .ust-baslik h1, .ders-karti h2, .modal-baslik h3, #ayarlarSayfa h2, #ayarlarDisaAktarBtn, #ayarlarIceAktarBtn").forEach(function(el) {
        let icerik = el.innerHTML;
        Object.keys(VEKTOR_IKONLAR).forEach(function(emoji) {
            if (svgAktif) {
                if (icerik.includes(emoji)) {
                    icerik = icerik.split(emoji).join(simgesi(emoji));
                }
            } else {
                const svgKutusu = `<span class="vektor-ikon-kutusu">${VEKTOR_IKONLAR[emoji]}</span>`;
                if (icerik.includes(svgKutusu)) {
                    icerik = icerik.split(svgKutusu).join(emoji);
                }
            }
        });
        el.innerHTML = icerik;
    });

    // 3) Yan menü sekmeleri
    const yanMenuIkonlar = { "ana": "🏠", "ders": "📚", "is": "💼", "ayarlar": "⚙️" };
    document.querySelectorAll(".yan-menu-oge").forEach(function(btn) {
        const sayfa = btn.dataset.sayfa;
        const ikonSpan = btn.querySelector(".yan-menu-ikon");
        if (ikonSpan && yanMenuIkonlar[sayfa]) {
            ikonSpan.innerHTML = svgAktif ? simgesi(yanMenuIkonlar[sayfa]) : yanMenuIkonlar[sayfa];
        }
    });

    // 4) Ders sekme butonları
    const dersSekmeIkonlari = { "genel": "📊", "konular": "📖", "denemeler": "📝", "yanlislar": "❌", "takip": "🔥" };
    document.querySelectorAll(".ders-sekme-btn").forEach(function(btn) {
        const sekme = btn.dataset.dersSekme;
        if (sekme && dersSekmeIkonlari[sekme]) {
            const yazi = btn.textContent.replace(/[^\w\sğüşıöçĞÜŞİÖÇ]/gi, '').trim();
            btn.innerHTML = (svgAktif ? simgesi(dersSekmeIkonlari[sekme]) : dersSekmeIkonlari[sekme]) + " " + yazi;
        }
    });
}

// ==========================================
// YARDIMCI FONKSİYONLAR
// ==========================================

const monthNames = [
    "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
    "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
];

const gunAdlari = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

function pad(n) {
    return n < 10 ? "0" + n : "" + n;
}

function tarihStr(date) {
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function bugunStr() {
    return tarihStr(new Date());
}

// Pazartesi = 0 ... Pazar = 6
function gunIndeksi(date) {
    const g = date.getDay();
    return g === 0 ? 6 : g - 1;
}

function escapeHtml(metin) {
    const div = document.createElement("div");
    div.textContent = metin;
    return div.innerHTML;
}

function benzersizId() {
    return "id_" + Date.now() + "_" + Math.floor(Math.random() * 100000);
}

// ==========================================
// EVRENSEL VEKTÖREL İKON SÖZLÜĞÜ & MOTORU
// ==========================================



function aktifIkonStili() {
    return localStorage.getItem(IKON_STILI_ANAHTARI) || "emoji";
}

function simgesi(emojiKarakter) {
    if (aktifIkonStili() === "svg" && VEKTOR_IKONLAR[emojiKarakter]) {
        return `<span class="vektor-ikon-kutusu">${VEKTOR_IKONLAR[emojiKarakter]}</span>`;
    }
    return emojiKarakter;
}

// Sayfadaki tüm metin düğümlerinde geçen emojileri algılayıp SVG ile değiştiren genel fonksiyon
function tumSayfadakiEmojileriDonustur() {
    const svgAktif = aktifIkonStili() === "svg";
    
    // 1) Sabit Başlıklar & Sekmeler
    const baslikEslesmeleri = [
        { secici: "#dersSayfa h1", emoji: "📚", metin: " Ders Takip" },
        { secici: "#isSayfa h1", emoji: "💼", metin: " İş Takip" },
        { secici: "#ayarlarSayfa h1", emoji: "⚙️", metin: " Ayarlar" },
        { secici: '[data-ders-sekme="genel"]', emoji: "📊", metin: " Genel Bakış" },
        { secici: '[data-ders-sekme="konular"]', emoji: "📖", metin: " Konular" },
        { secici: '[data-ders-sekme="denemeler"]', emoji: "📝", metin: " Denemeler" },
        { secici: '[data-ders-sekme="yanlislar"]', emoji: "❌", metin: " Yanlışlarım" },
        { secici: '[data-ders-sekme="takip"]', emoji: "🔥", metin: " Çalışma Takibi" }
    ];

    baslikEslesmeleri.forEach(function(item) {
        const el = document.querySelector(item.secici);
        if (el) {
            el.innerHTML = (svgAktif ? simgesi(item.emoji) : item.emoji) + item.metin;
        }
    });

    // 2) Yan Menü
    const yanMenuIkonlar = { "ana": "🏠", "ders": "📚", "is": "💼", "ayarlar": "⚙️" };
    document.querySelectorAll(".yan-menu-oge").forEach(function(btn) {
        const sayfa = btn.dataset.sayfa;
        const ikonSpan = btn.querySelector(".yan-menu-ikon");
        if (ikonSpan && yanMenuIkonlar[sayfa]) {
            ikonSpan.innerHTML = svgAktif ? simgesi(yanMenuIkonlar[sayfa]) : yanMenuIkonlar[sayfa];
        }
    });
}

function istatistikKutuHtml(ikon, renk, baslik, deger, alt, ekstraSinif) {
    return `
        <div class="istatistik-kutu ${ekstraSinif || ""}">
            <div class="istatistik-kutu-ikon ikon-${renk}">${simgesi(ikon)}</div>
            <div class="istatistik-kutu-metin">
                <div class="istatistik-kutu-baslik">${baslik}</div>
                <div class="istatistik-kutu-deger">${deger}</div>
                ${alt ? `<div class="istatistik-kutu-alt">${alt}</div>` : ""}
            </div>
        </div>
    `;
}


// ==========================================
// VERİ YÖNETİMİ (localStorage)
// ==========================================

const VERI_ANAHTARI = "panelVerisi";

function varsayilanVeri() {
    return {
        kategoriler: [
            { id: "is", ad: "İş", ikon: "💼" },
            { id: "ders", ad: "KPSS / Ders", ikon: "📚" },
            { id: "kisisel", ad: "Kişisel", ikon: "🎯" }
        ],
        gorevler: {
            is: [],
            ders: [],
            kisisel: []
        },
        takvimNotlari: {},
        notKagidi: ""
    };
}

function eskiVeriyiTasi() {
    // Önceki sürümde her kategori kendi localStorage anahtarında tutuluyordu.
    // Kullanıcı verisini kaybetmemek için buradan aktarıyoruz.
    const veri = varsayilanVeri();

    const eskiEslesme = {
        is: "isGorevleri",
        ders: "dersGorevleri",
        kisisel: "kisiselGorevleri"
    };

    let tasindiMi = false;

    Object.keys(eskiEslesme).forEach(function (katId) {
        const ham = localStorage.getItem(eskiEslesme[katId]);
        if (!ham) return;

        try {
            const eskiListe = JSON.parse(ham);
            if (Array.isArray(eskiListe) && eskiListe.length > 0) {
                veri.gorevler[katId] = eskiListe.map(function (eskiGorev) {
                    const metin = typeof eskiGorev === "string" ? eskiGorev : (eskiGorev.metin || "");
                    return {
                        id: benzersizId(),
                        metin: metin,
                        tekrar: null,
                        tamamlandi: false,
                        sonTamamlanma: null,
                        olusturmaTarihi: bugunStr()
                    };
                });
                tasindiMi = true;
            }
        } catch (e) {
            // eski veri okunamadıysa yok say
        }
    });

    return tasindiMi ? veri : null;
}

function veriYukle() {
    const ham = localStorage.getItem(VERI_ANAHTARI);

    if (ham) {
        try {
            const veri = JSON.parse(ham);
            if (!veri.takvimNotlari) veri.takvimNotlari = {};

            if (typeof veri.notKagidi !== "string") {
                if (Array.isArray(veri.notDefteri) && veri.notDefteri.length > 0) {
                    // Eski "kutucuklu" not defterinden yeni kağıt formatına taşı.
                    veri.notKagidi = veri.notDefteri.map(function (n) {
                        const cizgiStil = n.tamamlandi ? ' style="text-decoration:line-through;color:#9ca3af;"' : "";
                        const oneki = n.tip === "madde" ? "• " : "";
                        return "<div" + cizgiStil + ">" + oneki + escapeHtml(n.metin) + "</div>";
                    }).join("");
                } else {
                    veri.notKagidi = "";
                }
            }
            delete veri.notDefteri;

            return veri;
        } catch (e) {
            // bozuksa varsayılana dön
        }
    }

    const tasinanVeri = eskiVeriyiTasi();
    return tasinanVeri || varsayilanVeri();
}

function veriKaydet() {
    localStorage.setItem(VERI_ANAHTARI, JSON.stringify(veri));
}

let veri = veriYukle();


// ==========================================
// GÖREV YARDIMCI FONKSİYONLARI (tekrar mantığı)
// ==========================================

function gorevBugunGosterilsinMi(gorev, haftaGunIndeksi) {
    if (!gorev.tekrar) return true;
    if (gorev.tekrar.tip === "gunluk") return true;
    if (gorev.tekrar.tip === "haftalik") {
        return gorev.tekrar.gunler.includes(haftaGunIndeksi);
    }
    return true;
}

function gorevTamamlandiMi(gorev, bugun) {
    if (!gorev.tekrar) return !!gorev.tamamlandi;
    return gorev.sonTamamlanma === bugun;
}

function gorevTamamlanmaDegistir(gorev, bugun) {
    if (!gorev.tekrar) {
        gorev.tamamlandi = !gorev.tamamlandi;
    } else {
        gorev.sonTamamlanma = (gorev.sonTamamlanma === bugun) ? null : bugun;
    }
}

function tekrarEtiketi(gorev) {
    if (!gorev.tekrar) return "Tek seferlik görev";
    if (gorev.tekrar.tip === "gunluk") return "🔁 Her gün tekrar eder";
    if (gorev.tekrar.tip === "haftalik") {
        const gunler = gorev.tekrar.gunler
            .slice()
            .sort()
            .map(function (i) { return gunAdlari[i]; })
            .join(", ");
        return "🔁 " + gunler + " günleri";
    }
    return "";
}


// ==========================================
// GENEL ONAY / BİLGİ MODALI (alert/confirm yerine)
// ==========================================

const onayModalOverlay = document.getElementById("onayModalOverlay");
const onayModalBaslikEl = document.getElementById("onayModalBaslik");
const onayModalMesajEl = document.getElementById("onayModalMesaj");
const onayModalOnaylaBtn = document.getElementById("onayModalOnayla");
const onayModalVazgecBtn = document.getElementById("onayModalVazgec");

let onayHandlerOnayla = null;
let onayHandlerVazgec = null;

function onayModaliniKapat() {
    onayModalOverlay.classList.add("gizli");
    onayHandlerOnayla = null;
    onayHandlerVazgec = null;
}

onayModalOnaylaBtn.addEventListener("click", function () {
    const handler = onayHandlerOnayla;
    onayModaliniKapat();
    if (handler) handler();
});

onayModalVazgecBtn.addEventListener("click", function () {
    const handler = onayHandlerVazgec;
    onayModaliniKapat();
    if (handler) handler();
});

onayModalOverlay.addEventListener("click", function (event) {
    if (event.target === onayModalOverlay) {
        const handler = onayHandlerVazgec;
        onayModaliniKapat();
        if (handler) handler();
    }
});

// opsiyonlar: { baslik, mesaj, onayMetni, vazgecGoster, tehlikeli, onOnay, onVazgec }
function onayGoster(opsiyonlar) {
    onayModalBaslikEl.textContent = opsiyonlar.baslik || "Uyarı";
    onayModalMesajEl.textContent = opsiyonlar.mesaj || "";
    onayModalOnaylaBtn.textContent = opsiyonlar.onayMetni || "Tamam";
    onayModalOnaylaBtn.classList.toggle("tehlikeli", !!opsiyonlar.tehlikeli);
    onayModalVazgecBtn.style.display = opsiyonlar.vazgecGoster === false ? "none" : "";

    onayHandlerOnayla = opsiyonlar.onOnay || null;
    onayHandlerVazgec = opsiyonlar.onVazgec || null;

    onayModalOverlay.classList.remove("gizli");
}

// Tek butonlu bilgilendirme modalı (alert() yerine)
function bilgiGoster(mesaj, baslik) {
    onayGoster({
        baslik: baslik || "Bilgi",
        mesaj: mesaj,
        onayMetni: "Tamam",
        vazgecGoster: false
    });
}


// ==========================================
// KATEGORİ KARTLARINI ÇİZME
// ==========================================

// Hangi kategorilerde "tamamlananları göster" açık, hangi formlar açık - sadece görsel state, kaydedilmez
const acikTamamlananlar = {};
const acikFormlar = {};
let genelAciliyetFiltresi = "hepsi";

function kategorilerAlaniniCiz() {
    const alan = document.getElementById("kategorilerAlani");
    alan.innerHTML = "";

    const bugun = bugunStr();
    const bugunGunIndeksi = gunIndeksi(new Date());

    veri.kategoriler.forEach(function (kategori) {
        alan.appendChild(kategoriKartiOlustur(kategori, bugun, bugunGunIndeksi));
    });

    // Görev durumu değiştiğinde günlük özet kartlarını da güncel tut.
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
}

function kategoriKartiOlustur(kategori, bugun, bugunGunIndeksi) {
    const kart = document.createElement("section");
    kart.className = "dashboard-card kategori-card";
    kart.dataset.id = kategori.id;

    const tumGorevler = veri.gorevler[kategori.id] || [];
    const bugunkuGorevler = tumGorevler.filter(function (g) {
        return gorevBugunGosterilsinMi(g, bugunGunIndeksi);
    });
    const aktifGorevler = bugunkuGorevler.filter(function (g) { return !gorevTamamlandiMi(g, bugun); });
    const gosterilecekAktifGorevler = genelAciliyetFiltresi === "hepsi"
        ? aktifGorevler
        : aktifGorevler.filter(function (g) { return (g.aciliyet || "orta") === genelAciliyetFiltresi; });
    const tamamlananGorevler = bugunkuGorevler.filter(function (g) { return gorevTamamlandiMi(g, bugun); });

    const toplam = bugunkuGorevler.length;
    const yuzde = toplam > 0 ? Math.round((tamamlananGorevler.length / toplam) * 100) : 0;

    const tamamlananlarAcikMi = !!acikTamamlananlar[kategori.id];
    const formAcikMi = !!acikFormlar[kategori.id];

    kart.innerHTML = `
        <div class="section-header">
            <h2>${simgesi(kategori.ikon)} ${escapeHtml(kategori.ad)}</h2>
            <div class="kategori-baslik-butonlar">
                <button class="gorev-ekle-btn" data-aksiyon="form-ac-kapa">+ Görev</button>
                <button class="kategori-sil-btn" data-aksiyon="kategori-sil" title="Kategoriyi sil">${IKON.sil}</button>
            </div>
        </div>

        <div class="ilerleme-satiri">
            <div class="ilerleme-bar">
                <div class="ilerleme-dolu" style="width:${yuzde}%"></div>
            </div>
            <span class="ilerleme-yuzde">${yuzde}%</span>
        </div>

        <div class="gorev-formu ${formAcikMi ? "" : "gizli"}" data-form>
            <div class="gorev-formu-satir">
                <input type="text" placeholder="${escapeHtml(kategori.ad)} görevini yaz..." data-gorev-input>
            </div>
            <div class="gorev-formu-satir tekrar-secim">
                <label>Tekrar:</label>
                <div class="tekrar-butonlari" data-tekrar-grubu>
                    <button type="button" class="tekrar-btn aktif" data-tekrar-deger="tek">Tek seferlik</button>
                    <button type="button" class="tekrar-btn" data-tekrar-deger="gunluk">Her gün</button>
                    <button type="button" class="tekrar-btn" data-tekrar-deger="haftalik">Belirli günler</button>
                </div>
            </div>
            <div class="gun-checkbox-grubu gizli" data-gun-grubu>
                ${gunAdlari.map(function (ad, i) {
                    return `<button type="button" class="gun-pil" data-gun-degeri="${i}">${ad}</button>`;
                }).join("")}
            </div>
            <div class="gorev-formu-satir tekrar-secim">
                <label>Aciliyet:</label>
                <div class="tekrar-butonlari" data-aciliyet-grubu>
                    <button type="button" class="tekrar-btn aciliyet-btn" data-aciliyet-deger="dusuk">🟢 Düşük</button>
                    <button type="button" class="tekrar-btn aciliyet-btn aktif" data-aciliyet-deger="orta">🟡 Orta</button>
                    <button type="button" class="tekrar-btn aciliyet-btn" data-aciliyet-deger="acil">🔴 Acil</button>
                </div>
            </div>
            <div class="gorev-formu-satir">
                <button class="gorev-kaydet-btn" data-aksiyon="gorev-kaydet">Kaydet</button>
            </div>
        </div>

        <div class="task-list" data-aktif-liste>
            ${gosterilecekAktifGorevler.length === 0
                ? '<div class="bos-liste-notu">Bu filtrede görev yok.</div>'
                : gosterilecekAktifGorevler.map(function (g) { return gorevSatiriHtml(g, false); }).join("")}
        </div>

        <div class="gorev-alt-bar">
            <button class="tamamlananlariGoster" data-aksiyon="tamamlanan-ac-kapa">
                ${tamamlananlarAcikMi ? "Tamamlananları gizle" : "Tamamlanan görevleri göster"} (${tamamlananGorevler.length})
            </button>
            <button class="tumGorevleriSil" data-aksiyon="tum-gorevleri-sil">Tüm görevleri sil</button>
        </div>

        <div class="tamamlanan-gorevler ${tamamlananlarAcikMi ? "" : "gizli"}" data-tamamlanan-liste>
            ${tamamlananGorevler.length === 0
                ? '<div class="bos-liste-notu">Tamamlanan görev yok.</div>'
                : tamamlananGorevler.map(function (g) { return gorevSatiriHtml(g, true); }).join("")}
        </div>
    `;

    kategoriKartiOlaylariniBagla(kart, kategori);

    return kart;
}

const ACILIYET_RENKLERI = { dusuk: "#9ca3af", orta: "#f59e0b", acil: "#dc2626" };
const ACILIYET_ETIKETLERI = { dusuk: "Düşük öncelik", orta: "Orta öncelik", acil: "Acil" };

function gorevSatiriHtml(gorev, tamamlandiMi) {
    const seviye = gorev.aciliyet || "orta";
    const renk = ACILIYET_RENKLERI[seviye];
    return `
        <div class="task" data-gorev-id="${gorev.id}" style="border-left: 4px solid ${renk};" title="${ACILIYET_ETIKETLERI[seviye]}">
            <input type="checkbox" ${tamamlandiMi ? "checked" : ""} data-aksiyon="gorev-check">
            <div class="task-metin">
                <h3>${escapeHtml(gorev.metin)}</h3>
                <p>${tekrarEtiketi(gorev)}</p>
            </div>
            <button class="gorev-sil" data-aksiyon="gorev-sil" title="Görevi sil">${IKON.sil}</button>
        </div>
    `;
}

function kategoriKartiOlaylariniBagla(kart, kategori) {

    kart.querySelector('[data-aksiyon="form-ac-kapa"]').addEventListener("click", function () {
        acikFormlar[kategori.id] = !acikFormlar[kategori.id];
        kategorilerAlaniniCiz();

        if (acikFormlar[kategori.id]) {
            const yeniKart = document.querySelector(`.kategori-card[data-id="${kategori.id}"]`);
            const input = yeniKart.querySelector("[data-gorev-input]");
            if (input) input.focus();
        }
    });

    kart.querySelector('[data-aksiyon="kategori-sil"]').addEventListener("click", function () {
        if (veri.kategoriler.length <= 1) {
            bilgiGoster("En az bir kategori kalmalı.");
            return;
        }
        onayGoster({
            baslik: "Kategoriyi Sil",
            mesaj: `"${kategori.ad}" kategorisini ve içindeki tüm görevleri silmek istediğine emin misin?`,
            onayMetni: "Evet, Sil",
            tehlikeli: true,
            onOnay: function () {
                veri.kategoriler = veri.kategoriler.filter(function (k) { return k.id !== kategori.id; });
                delete veri.gorevler[kategori.id];
                veriKaydet();
                kategorilerAlaniniCiz();
            }
        });
    });

const tekrarGrubu = kart.querySelector("[data-tekrar-grubu]");
const gunGrubu = kart.querySelector("[data-gun-grubu]");
let seciliTekrar = "tek";
const seciliGunler = new Set();

tekrarGrubu.addEventListener("click", function (event) {
    const buton = event.target.closest(".tekrar-btn");
    if (!buton) return;

    tekrarGrubu.querySelectorAll(".tekrar-btn").forEach(function (b) {
        b.classList.remove("aktif");
    });
    buton.classList.add("aktif");

    seciliTekrar = buton.dataset.tekrarDeger;

    if (seciliTekrar === "haftalik") {
        gunGrubu.classList.remove("gizli");
    } else {
        gunGrubu.classList.add("gizli");
    }
});

// Gün pilleri (Pzt, Sal, ...) - tıklanınca seçili/pasif olarak değişir.
// Native checkbox yerine buton kullanıyoruz çünkü gizlenmiş checkbox bazı
// tarayıcı/dokunmatik ekranlarda tıklamayı güvenilir şekilde algılamıyordu.
gunGrubu.addEventListener("click", function (event) {
    const pil = event.target.closest(".gun-pil");
    if (!pil) return;

    const deger = parseInt(pil.dataset.gunDegeri, 10);

    if (seciliGunler.has(deger)) {
        seciliGunler.delete(deger);
        pil.classList.remove("secili");
    } else {
        seciliGunler.add(deger);
        pil.classList.add("secili");
    }
});

const aciliyetGrubu = kart.querySelector("[data-aciliyet-grubu]");
let seciliAciliyet = "orta";

aciliyetGrubu.addEventListener("click", function (event) {
    const buton = event.target.closest(".aciliyet-btn");
    if (!buton) return;

    aciliyetGrubu.querySelectorAll(".aciliyet-btn").forEach(function (b) {
        b.classList.remove("aktif");
    });
    buton.classList.add("aktif");

    seciliAciliyet = buton.dataset.aciliyetDeger;
});

// Kart içi filtre kaldırıldı (Global filtreye bağlandı)

    function gorevKaydet() {
        const input = kart.querySelector("[data-gorev-input]");
        const metin = input.value.trim();
        if (metin === "") return;

        let tekrar = null;
        const secim = seciliTekrar;

        if (secim === "gunluk") {
            tekrar = { tip: "gunluk" };
        } else if (secim === "haftalik") {
            const secilenGunler = Array.from(seciliGunler).sort(function (a, b) { return a - b; });
            if (secilenGunler.length === 0) {
                bilgiGoster("Belirli günler için en az bir gün seç.");
                return;
            }
            tekrar = { tip: "haftalik", gunler: secilenGunler };
        }

veri.gorevler[kategori.id].push({
            id: benzersizId(),
            metin: metin,
            tekrar: tekrar,
            aciliyet: seciliAciliyet,
            tamamlandi: false,
            sonTamamlanma: null,
            olusturmaTarihi: bugunStr()
        });

        veriKaydet();
        acikFormlar[kategori.id] = false;
        kategorilerAlaniniCiz();
        takvimiCiz();
    }

    kart.querySelector('[data-aksiyon="gorev-kaydet"]').addEventListener("click", gorevKaydet);
    kart.querySelector("[data-gorev-input]").addEventListener("keydown", function (event) {
        if (event.key === "Enter") gorevKaydet();
    });

    kart.querySelector('[data-aksiyon="tamamlanan-ac-kapa"]').addEventListener("click", function () {
        acikTamamlananlar[kategori.id] = !acikTamamlananlar[kategori.id];
        kategorilerAlaniniCiz();
    });

    kart.querySelector('[data-aksiyon="tum-gorevleri-sil"]').addEventListener("click", function () {
        if ((veri.gorevler[kategori.id] || []).length === 0) return;
        onayGoster({
            baslik: "Tüm Görevleri Sil",
            mesaj: `"${kategori.ad}" kategorisindeki tüm görevleri silmek istediğine emin misin?`,
            onayMetni: "Evet, Sil",
            tehlikeli: true,
            onOnay: function () {
                veri.gorevler[kategori.id] = [];
                veriKaydet();
                kategorilerAlaniniCiz();
                takvimiCiz();
            }
        });
    });

    kart.addEventListener("click", function (event) {
        const gorevEl = event.target.closest("[data-gorev-id]");
        if (!gorevEl) return;

        const gorevId = gorevEl.dataset.gorevId;
        const gorevListesi = veri.gorevler[kategori.id] || [];
        const gorev = gorevListesi.find(function (g) { return g.id === gorevId; });
        if (!gorev) return;

        if (event.target.matches('[data-aksiyon="gorev-check"]')) {
            gorevTamamlanmaDegistir(gorev, bugunStr());
            veriKaydet();
            kategorilerAlaniniCiz();
        }

        if (event.target.matches('[data-aksiyon="gorev-sil"]')) {
            veri.gorevler[kategori.id] = gorevListesi.filter(function (g) { return g.id !== gorevId; });
            veriKaydet();
            kategorilerAlaniniCiz();
            takvimiCiz();
        }
    });
}

// Global Aciliyet Filtresi Olay Dinleyicisi
const globalAciliyetFiltresiEl = document.getElementById("globalAciliyetFiltresi");
if (globalAciliyetFiltresiEl) {
    globalAciliyetFiltresiEl.addEventListener("click", function (event) {
        const buton = event.target.closest(".aciliyet-filtre-btn");
        if (!buton) return;

        globalAciliyetFiltresiEl.querySelectorAll(".aciliyet-filtre-btn").forEach(function (b) {
            b.classList.remove("aktif");
        });
        buton.classList.add("aktif");

        genelAciliyetFiltresi = buton.dataset.filtreDeger;
        kategorilerAlaniniCiz();
    });
}

// ==========================================
// KATEGORİ EKLEME MODALI
// ==========================================

const emojiHavuzuListesi = [
    "📌", "💼", "📚", "🎯", "🏋️", "🧘", "💰", "🛒", "🏠", "🎨",
    "🎵", "📷", "✈️", "🍳", "🧹", "🐾", "💻", "📖", "✏️", "🗓️",
    "⏰", "💡", "🎓", "🩺", "🚗", "🌱", "🎮", "📈", "🧾", "☕",
    "🧩", "📝", "🔧", "🧪", "🏆", "❤️"
];

const kategoriModalOverlay = document.getElementById("kategoriModalOverlay");
const kategoriAdInput = document.getElementById("kategoriAdInput");
const kategoriSeciliEmojiEl = document.getElementById("kategoriSeciliEmoji");
const emojiHavuzuEl = document.getElementById("emojiHavuzu");

let modalSeciliEmoji = "📌";

function emojiHavuzunuCiz() {
    emojiHavuzuEl.innerHTML = emojiHavuzuListesi.map(function (emoji) {
        const seciliMi = emoji === modalSeciliEmoji;
        return `<button type="button" class="emoji-btn ${seciliMi ? "secili" : ""}" data-emoji="${emoji}">${emoji}</button>`;
    }).join("");
}

function kategoriModaliniAc() {
    modalSeciliEmoji = "📌";
    kategoriAdInput.value = "";
    kategoriSeciliEmojiEl.textContent = modalSeciliEmoji;
    emojiHavuzunuCiz();
    kategoriModalOverlay.classList.remove("gizli");
    kategoriAdInput.focus();
}

function kategoriModaliniKapat() {
    kategoriModalOverlay.classList.add("gizli");
}

document.getElementById("kategoriEkleButonu").addEventListener("click", kategoriModaliniAc);
document.getElementById("kategoriModalKapat").addEventListener("click", kategoriModaliniKapat);

kategoriModalOverlay.addEventListener("click", function (event) {
    // sadece arka plana (overlay'in kendisine) tıklanırsa kapat
    if (event.target === kategoriModalOverlay) kategoriModaliniKapat();
});

emojiHavuzuEl.addEventListener("click", function (event) {
    const buton = event.target.closest(".emoji-btn");
    if (!buton) return;

    modalSeciliEmoji = buton.dataset.emoji;
    kategoriSeciliEmojiEl.textContent = modalSeciliEmoji;
    emojiHavuzunuCiz();
});

function kategoriyiKaydet() {
    const ad = kategoriAdInput.value.trim();
    if (ad === "") {
        kategoriAdInput.focus();
        return;
    }

    const id = "kat_" + Date.now();
    veri.kategoriler.push({ id: id, ad: ad, ikon: modalSeciliEmoji });
    veri.gorevler[id] = [];

    veriKaydet();
    kategorilerAlaniniCiz();
    kategoriModaliniKapat();
}

document.getElementById("kategoriModalKaydet").addEventListener("click", kategoriyiKaydet);
kategoriAdInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") kategoriyiKaydet();
});


// ==========================================
// TAKVİM
// ==========================================

let takvimTarihi = new Date();
let seciliGunStr = null;

function planliGorevleriGetir(haftaGunIndeksi) {
    const sonuc = [];

    veri.kategoriler.forEach(function (kategori) {
        (veri.gorevler[kategori.id] || []).forEach(function (gorev) {
            if (gorev.tekrar && gorevBugunGosterilsinMi(gorev, haftaGunIndeksi)) {
                sonuc.push({ kategoriAdi: kategori.ad, ikon: kategori.ikon, metin: gorev.metin });
            }
        });
    });

    return sonuc;
}

function takvimiCiz() {
    const yil = takvimTarihi.getFullYear();
    const ay = takvimTarihi.getMonth();

    document.getElementById("currentMonth").textContent = `${monthNames[ay]} ${yil}`;

    const grid = document.getElementById("calendarGrid");
    grid.innerHTML = "";

    gunAdlari.forEach(function (gun) {
        const el = document.createElement("div");
        el.className = "gun-adi";
        el.textContent = gun;
        grid.appendChild(el);
    });

    const ilkGun = new Date(yil, ay, 1);
    const ayGunSayisi = new Date(yil, ay + 1, 0).getDate();
    const baslangicBosluk = gunIndeksi(ilkGun);

    for (let i = 0; i < baslangicBosluk; i++) {
        const bosGun = document.createElement("div");
        bosGun.className = "gun-hucre empty";
        grid.appendChild(bosGun);
    }

    const bugun = new Date();

    for (let gun = 1; gun <= ayGunSayisi; gun++) {
        const tarih = new Date(yil, ay, gun);
        const dStr = tarihStr(tarih);
        const haftaGunIdx = gunIndeksi(tarih);

        const hucre = document.createElement("div");
        hucre.className = "gun-hucre";
        hucre.dataset.tarih = dStr;

        if (gun === bugun.getDate() && ay === bugun.getMonth() && yil === bugun.getFullYear()) {
            hucre.classList.add("today");
        }
        if (dStr === seciliGunStr) {
            hucre.classList.add("secili");
        }

        const notSayisi = (veri.takvimNotlari[dStr] || []).length;
        const planliSayisi = planliGorevleriGetir(haftaGunIdx).length;

        hucre.innerHTML = `
            <span>${gun}</span>
            ${notSayisi > 0 ? '<span class="gun-not-noktasi"></span>' : ""}
            ${planliSayisi > 0 ? `<span class="gun-gorev-sayisi">${planliSayisi} görev</span>` : ""}
        `;

        hucre.addEventListener("click", function () {
            seciliGunStr = dStr;
            takvimiCiz();
            gunDetayiniAc(dStr, haftaGunIdx);
        });

        grid.appendChild(hucre);
    }
}

document.getElementById("previousMonth").addEventListener("click", function () {
    takvimTarihi.setMonth(takvimTarihi.getMonth() - 1);
    takvimiCiz();
});

document.getElementById("nextMonth").addEventListener("click", function () {
    takvimTarihi.setMonth(takvimTarihi.getMonth() + 1);
    takvimiCiz();
});


// ==========================================
// GÜN DETAY PANELİ (toplantı / not ekleme)
// ==========================================

function gunDetayiniAc(dStr, haftaGunIdx) {
    const panel = document.getElementById("gunDetayPaneli");
    const bos = document.getElementById("gunDetayBos");
    panel.classList.remove("gizli");
    bos.classList.add("gizli");

    const parcalar = dStr.split("-").map(Number);
    const yil = parcalar[0], ay = parcalar[1], gun = parcalar[2];
    document.getElementById("gunDetayBaslik").textContent =
        `${gun} ${monthNames[ay - 1]} ${yil}`;

    panel.dataset.tarih = dStr;

    toplantiListesiniCiz(dStr);

    const planliListe = document.getElementById("planliGorevListesi");
    const planliGorevler = planliGorevleriGetir(haftaGunIdx);

    planliListe.innerHTML = planliGorevler.length === 0
        ? '<div class="bos-liste-notu">O gün için planlı tekrarlı görev yok.</div>'
        : planliGorevler.map(function (g) {
            return `<div class="planli-gorev-item">${g.ikon} <strong>${escapeHtml(g.kategoriAdi)}</strong> — ${escapeHtml(g.metin)}</div>`;
        }).join("");
}

// Hangi toplantıların not alanı açık - sadece görsel state, kaydedilmez
const acikToplantiNotlari = {};
const toplantiNotKaydetZamanlayicilari = {};

function toplantiListesiniCiz(dStr) {
    const liste = document.getElementById("toplantiListesi");
    const notlar = (veri.takvimNotlari[dStr] || []).slice().sort(function (a, b) {
        return (a.saat || "").localeCompare(b.saat || "");
    });

    liste.innerHTML = notlar.length === 0
        ? '<div class="bos-liste-notu">Bu gün için toplantı/not eklenmemiş.</div>'
        : notlar.map(function (not) {
            const notAlaniAcikMi = !!acikToplantiNotlari[not.id];
            return `
                <div class="toplanti-item" data-not-id="${not.id}">
                    <div class="toplanti-item-ust">
                        ${not.saat ? `<span class="toplanti-saat">${escapeHtml(not.saat)}</span>` : ""}
                        <span class="toplanti-baslik-metin">${escapeHtml(not.metin)}</span>
                        <button class="toplanti-not-ac-kapa ${notAlaniAcikMi ? "aktif" : ""}" data-aksiyon="toplanti-not-ac-kapa" title="Not ekle/gizle">🗒️</button>
                        <button class="gorev-sil" data-aksiyon="not-sil" title="Sil">${IKON.sil}</button>
                    </div>
                    <textarea
                        class="toplanti-not-alani ${notAlaniAcikMi ? "" : "gizli"}"
                        data-aksiyon="toplanti-not-input"
                        placeholder="Bu toplantıyla ilgili not al..."
                    >${escapeHtml(not.notlar || "")}</textarea>
                </div>
            `;
        }).join("");
}

document.getElementById("gunDetayKapat").addEventListener("click", function () {
    document.getElementById("gunDetayPaneli").classList.add("gizli");
    document.getElementById("gunDetayBos").classList.remove("gizli");
    seciliGunStr = null;
    takvimiCiz();
});

document.getElementById("toplantiKaydet").addEventListener("click", function () {
    const panel = document.getElementById("gunDetayPaneli");
    const dStr = panel.dataset.tarih;
    if (!dStr) return;

    const saatInput = document.getElementById("toplantiSaat");
    const metinInput = document.getElementById("toplantiMetin");
    const metin = metinInput.value.trim();

    if (metin === "") {
        bilgiGoster("Lütfen bir başlık/not yaz.");
        return;
    }

    if (!veri.takvimNotlari[dStr]) veri.takvimNotlari[dStr] = [];

    veri.takvimNotlari[dStr].push({
        id: benzersizId(),
        saat: saatInput.value || "",
        metin: metin,
        notlar: ""
    });

    veriKaydet();

    saatInput.value = "";
    metinInput.value = "";

    toplantiListesiniCiz(dStr);
    takvimiCiz();
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
});

document.getElementById("toplantiListesi").addEventListener("click", function (event) {
    const item = event.target.closest("[data-not-id]");
    if (!item) return;

    const panel = document.getElementById("gunDetayPaneli");
    const dStr = panel.dataset.tarih;
    if (!dStr) return;

    if (event.target.matches('[data-aksiyon="toplanti-not-ac-kapa"]')) {
        const notId = item.dataset.notId;
        acikToplantiNotlari[notId] = !acikToplantiNotlari[notId];
        toplantiListesiniCiz(dStr);

        if (acikToplantiNotlari[notId]) {
            const yeniItem = document.querySelector(`.toplanti-item[data-not-id="${notId}"]`);
            const alan = yeniItem ? yeniItem.querySelector(".toplanti-not-alani") : null;
            if (alan) alan.focus();
        }
        return;
    }

    if (event.target.matches('[data-aksiyon="not-sil"]')) {
        veri.takvimNotlari[dStr] = (veri.takvimNotlari[dStr] || []).filter(function (n) {
            return n.id !== item.dataset.notId;
        });

        veriKaydet();
        toplantiListesiniCiz(dStr);
        takvimiCiz();
        if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
    }
});

// Toplantı notu yazılırken her tuş vuruşunda tüm listeyi yeniden çizmiyoruz
// (odak/imleç kaybolmasın diye), sadece veriyi güncelleyip geciktirerek kaydediyoruz.
document.getElementById("toplantiListesi").addEventListener("input", function (event) {
    if (!event.target.matches('[data-aksiyon="toplanti-not-input"]')) return;

    const item = event.target.closest("[data-not-id]");
    const panel = document.getElementById("gunDetayPaneli");
    const dStr = panel.dataset.tarih;
    if (!item || !dStr) return;

    const notId = item.dataset.notId;
    const not = (veri.takvimNotlari[dStr] || []).find(function (n) { return n.id === notId; });
    if (!not) return;

    not.notlar = event.target.value;

    clearTimeout(toplantiNotKaydetZamanlayicilari[notId]);
    toplantiNotKaydetZamanlayicilari[notId] = setTimeout(function () {
        veriKaydet();
    }, 400);
});


// ==========================================
// NOT DEFTERİ (sağ panel - gerçek kağıt gibi, otomatik kaydeder)
// ==========================================

const notKagidiEl = document.getElementById("notKagidi");

// Tarayıcılar Enter'a basılınca farklı bloklar (bazen <br>, bazen <div>)
// kullanabiliyor; bu da satırların cetvel çizgileriyle kayması anlamına
// geliyor. Hepsinin aynı (28px yükseklikli) <div> bloğunu kullanmasını
// zorluyoruz ki her satır çizgiyle tam örtüşsün.
try {
    document.execCommand("defaultParagraphSeparator", false, "div");
} catch (e) {
    // desteklenmiyorsa sessizce geç
}

// Kaydedilmiş içeriği yükle
notKagidiEl.innerHTML = veri.notKagidi || "";

let notKaydetZamanlayici = null;

function notKagidiniKaydet() {
    veri.notKagidi = notKagidiEl.innerHTML;
    veriKaydet();
}

notKagidiEl.addEventListener("input", function () {
    clearTimeout(notKaydetZamanlayici);
    notKaydetZamanlayici = setTimeout(notKagidiniKaydet, 400);
});

document.querySelectorAll(".not-arac-btn[data-not-komut]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        notKagidiEl.focus();
        document.execCommand(btn.dataset.notKomut, false, null);
        notKagidiniKaydet();
    });
});


// ==========================================
// POMODORO / KRONOMETRE SAYACI
// ==========================================

const POMODORO_CALISMA_SANIYE = 25 * 60;
const POMODORO_MOLA_SANIYE = 5 * 60;

const pomodoroState = {
    mod: "calisma", // "calisma" | "mola"
    saniyeKalan: POMODORO_CALISMA_SANIYE,
    calisiyorMu: false,
    intervalId: null
};

const kronometreState = {
    saniyeGecen: 0,
    calisiyorMu: false,
    intervalId: null
};

function ikiHaneyeTamamla(n) {
    return n < 10 ? "0" + n : "" + n;
}

function dakikaSaniyeFormati(toplamSaniye) {
    const dk = Math.floor(toplamSaniye / 60);
    const sn = toplamSaniye % 60;
    return `${ikiHaneyeTamamla(dk)}:${ikiHaneyeTamamla(sn)}`;
}

function saatDakikaSaniyeFormati(toplamSaniye) {
    const sa = Math.floor(toplamSaniye / 3600);
    const dk = Math.floor((toplamSaniye % 3600) / 60);
    const sn = toplamSaniye % 60;
    return `${ikiHaneyeTamamla(sa)}:${ikiHaneyeTamamla(dk)}:${ikiHaneyeTamamla(sn)}`;
}

// Dosya gerektirmeyen basit bir bildirim bipi (pomodoro/mola bitince)
function sayacBipSesiCal() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const kazanc = ctx.createGain();
        osc.connect(kazanc);
        kazanc.connect(ctx.destination);
        osc.frequency.value = 880;
        kazanc.gain.value = 0.15;
        osc.start();
        setTimeout(function () {
            osc.stop();
            ctx.close();
        }, 350);
    } catch (e) {
        // ses API'si desteklenmiyorsa sessizce geç
    }
}

// ---- Pomodoro ----

const pomodoroPanelEl = document.getElementById("pomodoroPaneli");
const pomodoroEkranEl = document.getElementById("pomodoroEkran");
const pomodoroModEtiketiEl = document.getElementById("pomodoroModEtiketi");
const pomodoroBaslatBtn = document.getElementById("pomodoroBaslat");
const pomodoroDurdurBtn = document.getElementById("pomodoroDurdur");
const pomodoroMolaBtn = document.getElementById("pomodoroMola");
const pomodoroSifirlaBtn = document.getElementById("pomodoroSifirla");

function pomodoroEkraniniGuncelle() {
    pomodoroEkranEl.textContent = dakikaSaniyeFormati(pomodoroState.saniyeKalan);
    pomodoroModEtiketiEl.textContent = pomodoroState.mod === "calisma" ? "Çalışma" : "Mola";
    pomodoroPanelEl.classList.toggle("mola-modu", pomodoroState.mod === "mola");
    pomodoroBaslatBtn.disabled = pomodoroState.calisiyorMu;
    pomodoroDurdurBtn.disabled = !pomodoroState.calisiyorMu;
}

function pomodoroTikla() {
    pomodoroState.saniyeKalan--;

    if (pomodoroState.saniyeKalan <= 0) {
        sayacBipSesiCal();

        if (pomodoroState.mod === "calisma") {
            pomodoroState.mod = "mola";
            pomodoroState.saniyeKalan = POMODORO_MOLA_SANIYE;
        } else {
            pomodoroState.mod = "calisma";
            pomodoroState.saniyeKalan = POMODORO_CALISMA_SANIYE;
        }
    }

    pomodoroEkraniniGuncelle();
}

function pomodoroBaslat() {
    if (pomodoroState.calisiyorMu) return;
    pomodoroState.calisiyorMu = true;
    pomodoroState.intervalId = setInterval(pomodoroTikla, 1000);
    pomodoroEkraniniGuncelle();
}

function pomodoroDurdur() {
    if (!pomodoroState.calisiyorMu) return;
    pomodoroState.calisiyorMu = false;
    clearInterval(pomodoroState.intervalId);
    pomodoroEkraniniGuncelle();
}

function pomodoroSifirla() {
    pomodoroDurdur();
    pomodoroState.mod = "calisma";
    pomodoroState.saniyeKalan = POMODORO_CALISMA_SANIYE;
    pomodoroEkraniniGuncelle();
}

function pomodoroMolayaGec() {
    pomodoroDurdur();
    pomodoroState.mod = "mola";
    pomodoroState.saniyeKalan = POMODORO_MOLA_SANIYE;
    pomodoroEkraniniGuncelle();
}

pomodoroBaslatBtn.addEventListener("click", pomodoroBaslat);
pomodoroDurdurBtn.addEventListener("click", pomodoroDurdur);
pomodoroMolaBtn.addEventListener("click", pomodoroMolayaGec);
pomodoroSifirlaBtn.addEventListener("click", pomodoroSifirla);

pomodoroEkraniniGuncelle();


// ---- Kronometre ----

const kronometreEkranEl = document.getElementById("kronometreEkran");
const kronometreBaslatBtn = document.getElementById("kronometreBaslat");
const kronometreDurdurBtn = document.getElementById("kronometreDurdur");
const kronometreSifirlaBtn = document.getElementById("kronometreSifirla");

function kronometreEkraniniGuncelle() {
    kronometreEkranEl.textContent = saatDakikaSaniyeFormati(kronometreState.saniyeGecen);
    kronometreBaslatBtn.disabled = kronometreState.calisiyorMu;
    kronometreDurdurBtn.disabled = !kronometreState.calisiyorMu;
}

function kronometreBaslat() {
    if (kronometreState.calisiyorMu) return;
    kronometreState.calisiyorMu = true;
    kronometreState.intervalId = setInterval(function () {
        kronometreState.saniyeGecen++;
        kronometreEkraniniGuncelle();
    }, 1000);
    kronometreEkraniniGuncelle();
}

function kronometreDurdur() {
    if (!kronometreState.calisiyorMu) return;
    kronometreState.calisiyorMu = false;
    clearInterval(kronometreState.intervalId);
    kronometreEkraniniGuncelle();
}

function kronometreSifirla() {
    kronometreDurdur();
    kronometreState.saniyeGecen = 0;
    kronometreEkraniniGuncelle();
}

kronometreBaslatBtn.addEventListener("click", kronometreBaslat);
kronometreDurdurBtn.addEventListener("click", kronometreDurdur);
kronometreSifirlaBtn.addEventListener("click", kronometreSifirla);

kronometreEkraniniGuncelle();


// ---- Sekme geçişi (Pomodoro / Kronometre) ----
// İki sayaç da bağımsız çalışır; sekme değiştirmek arka plandaki
// sayacı durdurmaz, sadece hangisinin gösterileceğini değiştirir.

document.querySelectorAll("[data-sayac-sekme]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const hedefSekme = btn.dataset.sayacSekme;

        document.querySelectorAll("[data-sayac-sekme]").forEach(function (b) {
            b.classList.toggle("aktif", b === btn);
        });

        pomodoroPanelEl.classList.toggle("gizli", hedefSekme !== "pomodoro");
        document.getElementById("kronometrePaneli").classList.toggle("gizli", hedefSekme !== "kronometre");
    });
});


// ==========================================
// TARİH BAŞLIĞI
// ==========================================

function tarihBasligiCiz() {
    const bugun = new Date();
    const gunlerUzun = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    document.getElementById("bugunTarih").textContent =
        `Bugün · ${bugun.getDate()} ${monthNames[bugun.getMonth()]} ${bugun.getFullYear()}, ${gunlerUzun[bugun.getDay()]}`;
}


// ==========================================
// TEMA DEĞİŞTİRME (koyu / açık + renk paleti, kalıcı)
// ==========================================

const RENK_TEMA_ANAHTARI = "renkTemasi";
const RENK_VARSAYILAN = "#10b981";

const temaButonu = document.getElementById("temaButonu");
const ayarlarTemaToggleBtn = document.getElementById("ayarlarTemaToggleBtn");
const renkTemaSecici = document.getElementById("renkTemaSecici");
const renkTemaOzelInput = document.getElementById("renkTemaOzelInput");
const renkTemaOzelNokta = document.getElementById("renkTemaOzelNokta");

function mevcutTemaModu() {
    return localStorage.getItem("tema") === "koyu" ? "koyu" : "acik";
}

function temaButonMetniniGuncelle(tema) {
    const metin = tema === "koyu" ? IKON.gunes + " Açık Tema" : IKON.ay + " Koyu Tema";
    if (temaButonu) temaButonu.innerHTML = metin;
    if (ayarlarTemaToggleBtn) ayarlarTemaToggleBtn.innerHTML = metin;
}

function temayiUygula(tema) {
    document.body.classList.toggle("koyu-tema", tema === "koyu");
    temaButonMetniniGuncelle(tema);
    renkTemasiniUygula(localStorage.getItem(RENK_TEMA_ANAHTARI) || RENK_VARSAYILAN);
}

function renkTemasiniUygula(hex) {
    const gecerli = /^#[0-9a-fA-F]{6}$/.test(hex) ? hex : RENK_VARSAYILAN;
    document.body.style.setProperty("--renk-vurgu", gecerli);
    document.body.style.setProperty("--renk-vurgu-hover", `color-mix(in srgb, ${gecerli} 82%, black)`);
    document.body.style.setProperty("--renk-vurgu-halka", `color-mix(in srgb, ${gecerli} 15%, transparent)`);
    if (document.body.classList.contains("koyu-tema")) {
        document.body.style.setProperty("--renk-vurgu-yuzey", `color-mix(in srgb, ${gecerli} 18%, transparent)`);
        document.body.style.setProperty("--renk-vurgu-yuzey-hover", `color-mix(in srgb, ${gecerli} 28%, transparent)`);
    } else {
        document.body.style.setProperty("--renk-vurgu-yuzey", `color-mix(in srgb, ${gecerli} 12%, white)`);
        document.body.style.setProperty("--renk-vurgu-yuzey-hover", `color-mix(in srgb, ${gecerli} 20%, white)`);
    }

    if (renkTemaOzelInput) renkTemaOzelInput.value = gecerli;
    if (renkTemaOzelNokta) renkTemaOzelNokta.style.background = gecerli;

    if (renkTemaSecici) {
        let esleseBulundu = false;
        renkTemaSecici.querySelectorAll("[data-renk-hex]").forEach(function (btn) {
            const eslesiyor = btn.dataset.renkHex.toLowerCase() === gecerli.toLowerCase();
            btn.classList.toggle("aktif", eslesiyor);
            if (eslesiyor) esleseBulundu = true;
        });
        const ozelEtiket = renkTemaSecici.querySelector(".renk-tema-ozel");
        if (ozelEtiket) ozelEtiket.classList.toggle("aktif", !esleseBulundu);
    }
}

function temaModunuDegistir() {
    const yeniTema = mevcutTemaModu() === "koyu" ? "acik" : "koyu";
    localStorage.setItem("tema", yeniTema);
    temayiUygula(yeniTema);
}

function renkTemasiniDegistir(hex) {
    localStorage.setItem(RENK_TEMA_ANAHTARI, hex);
    renkTemasiniUygula(hex);
}

temayiUygula(mevcutTemaModu());
renkTemasiniUygula(localStorage.getItem(RENK_TEMA_ANAHTARI) || RENK_VARSAYILAN);

if (temaButonu) {
    temaButonu.addEventListener("click", temaModunuDegistir);
}

if (ayarlarTemaToggleBtn) {
    ayarlarTemaToggleBtn.addEventListener("click", temaModunuDegistir);
}

if (renkTemaSecici) {
    renkTemaSecici.querySelectorAll("[data-renk-hex]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            renkTemasiniDegistir(btn.dataset.renkHex);
        });
    });
}

if (renkTemaOzelInput) {
    renkTemaOzelInput.addEventListener("input", function () {
        renkTemasiniDegistir(renkTemaOzelInput.value);
    });
}


// ==========================================================
// SOL YAN MENÜ + SAYFA GEÇİŞLERİ (Panel / Ders / İş)
// ==========================================================

const yanMenuEl = document.getElementById("yanMenu");
const yanMenuAcKapaBtn = document.getElementById("yanMenuAcKapaBtn");
const anaSayfaEl = document.getElementById("anaSayfa");
const dersSayfaEl = document.getElementById("dersSayfa");
const isSayfaEl = document.getElementById("isSayfa");
const ayarlarSayfaEl = document.getElementById("ayarlarSayfa");

const yanMenuTekrarAcBtn = document.getElementById("yanMenuTekrarAcBtn");

yanMenuAcKapaBtn.addEventListener("click", function () {
    yanMenuEl.classList.toggle("dar");
    if (yanMenuTekrarAcBtn) {
        yanMenuTekrarAcBtn.classList.toggle("gizli", !yanMenuEl.classList.contains("dar"));
    }
});

if (yanMenuTekrarAcBtn) {
    yanMenuTekrarAcBtn.addEventListener("click", function () {
        yanMenuEl.classList.remove("dar");
        yanMenuTekrarAcBtn.classList.add("gizli");
    });
}

const mobilMenuBtn = document.getElementById("mobilMenuBtn");
if (mobilMenuBtn) {
    mobilMenuBtn.addEventListener("click", function () {
        yanMenuEl.classList.remove("dar");
        yanMenuEl.classList.toggle("mobil-acik");
    });
}

document.addEventListener("click", function (e) {
    if (!yanMenuEl || !yanMenuEl.classList.contains("mobil-acik")) return;
    if (yanMenuEl.contains(e.target) || (mobilMenuBtn && mobilMenuBtn.contains(e.target))) return;
    yanMenuEl.classList.remove("mobil-acik");
});

function sayfayaGec(sayfa) {
    document.querySelectorAll(".yan-menu-oge").forEach(function (btn) {
        btn.classList.toggle("aktif", btn.dataset.sayfa === sayfa);
    });

    anaSayfaEl.classList.add("gizli");
    dersSayfaEl.classList.add("gizli");
    isSayfaEl.classList.add("gizli");
    ayarlarSayfaEl.classList.add("gizli");

    if (sayfa === "ders") {
        dersSayfaEl.classList.remove("gizli");
        dersModuluGuncelle();
        if (typeof aktifWidgetPaneliniGuncelle === "function") {
            const aktifSekme = document.querySelector(".ders-sekme-btn.aktif");
            aktifWidgetPaneliniGuncelle("ders_" + (aktifSekme ? aktifSekme.dataset.dersSekme : "genel"));
        }
    } else if (sayfa === "is") {
        isSayfaEl.classList.remove("gizli");
        isModuluGuncelle();
        if (typeof aktifWidgetPaneliniGuncelle === "function") {
            aktifWidgetPaneliniGuncelle("is");
        }
    } else if (sayfa === "ayarlar") {
        ayarlarSayfaEl.classList.remove("gizli");
        if (typeof aktifWidgetPaneliniGuncelle === "function") {
            aktifWidgetPaneliniGuncelle(null);
        }
    } else {
        anaSayfaEl.classList.remove("gizli");
        if (typeof aktifWidgetPaneliniGuncelle === "function") {
            aktifWidgetPaneliniGuncelle("ana");
        }
    }
}

document.querySelectorAll(".yan-menu-oge").forEach(function (btn) {
    btn.addEventListener("click", function () { sayfayaGec(btn.dataset.sayfa); });
});

document.getElementById("dersSayfaKapatBtn").addEventListener("click", function () {
    sayfayaGec("ana");
});
document.getElementById("isSayfaKapatBtn").addEventListener("click", function () {
    sayfayaGec("ana");
});
document.getElementById("ayarlarSayfaKapatBtn").addEventListener("click", function () {
    sayfayaGec("ana");
});

document.getElementById("ayarlarDisaAktarBtn").addEventListener("click", dersVerisiDisaAktar);
document.getElementById("ayarlarIceAktarBtn").addEventListener("click", function () {
    document.getElementById("ayarlarIceAktarInput").click();
});
document.getElementById("ayarlarIceAktarInput").addEventListener("change", function (e) {
    const dosya = e.target.files[0];
    if (dosya) dersVerisiIceAktar(dosya);
    e.target.value = "";
});
document.getElementById("ayarlarSifirlaBtn").addEventListener("click", dersVerisiSifirla);
const sinavTuruSecimiEl = document.getElementById("sinavTuruSecimi");
if (sinavTuruSecimiEl) {
    sinavTuruSecimiEl.addEventListener("change", function () {
        const yeniTur = sinavTuruSecimiEl.value;
        const yeniSinavAdi = (SINAV_MUFREDATLARI[yeniTur] || {}).ad || "Yeni Sınav";

        onayGoster({
            baslik: "Sınav Değiştir",
            mesaj: `Hedef sınavını "${yeniSinavAdi}" olarak değiştirmek istediğine emin misin? Bu işlem mevcut ders listeni yeni sınavın müfredatıyla güncelleyecek.`,
            onayMetni: "Evet, Değiştir",
            tehlikeli: false,
            onOnay: function () {
                dersVeri.sinavTuru = yeniTur;
                dersVeri.dersler = sinavMufredatiYukle(yeniTur);
                dersVeriKaydet();
                dersModuluGuncelle();
                if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
                bilgiGoster(`Müfredat ${yeniSinavAdi} olarak güncellendi!`, "Başarılı");
            },
            onVazgec: function () {
                sinavTuruSecimiEl.value = dersVeri.sinavTuru || "kpss_ortaogretim";
            }
        });
    });
}
document.getElementById("sinavTarihiDegistirBtn").addEventListener("click", function () {
    const form = document.getElementById("sinavTarihiMiniForm");
    document.getElementById("sinavTarihiInputMini").value = dersVeri.sinavTarihi || "";
    form.classList.toggle("gizli");
});

document.getElementById("sinavTarihiKaydetBtnMini").addEventListener("click", function () {
    const val = document.getElementById("sinavTarihiInputMini").value;
    dersVeri.sinavTarihi = val || null;
    dersVeriKaydet();
    kpssGeriSayimBasligiGuncelle();
    document.getElementById("sinavTarihiMiniForm").classList.add("gizli");
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
});

document.querySelectorAll(".ders-sekme-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const hedef = btn.dataset.dersSekme;
        document.querySelectorAll(".ders-sekme-btn").forEach(function (b) {
            b.classList.toggle("aktif", b === btn);
        });
        document.querySelectorAll(".ders-sekme-panel").forEach(function (p) { p.classList.add("gizli"); });
        document.getElementById("dersSekme" + hedef.charAt(0).toUpperCase() + hedef.slice(1)).classList.remove("gizli");
        if (typeof aktifWidgetPaneliniGuncelle === "function") {
            aktifWidgetPaneliniGuncelle("ders_" + hedef);
        }
    });
});


// ==========================================================
// DERS MODÜLÜ - VERİ YÖNETİMİ
// ==========================================================

const DERS_VERI_ANAHTARI = "dersPaneliVerisi";

const KONU_DURUMLARI = [
    { id: "baslanmadi", ad: "Başlanmadı", renk: "#9ca3af" },
    { id: "calisiyor", ad: "Çalışılıyor", renk: "#2563eb" },
    { id: "bitti", ad: "Bitti", renk: "#16a34a" },
    { id: "tekrar_gerekli", ad: "Tekrar Edilecek", renk: "#f59e0b" },
    { id: "tekrar_edildi", ad: "Tekrar Edildi", renk: "#7c3aed" }
];

// Konu çalışma kayıtları için tip taksonomisi. "soru" grubundaki tipler
// soru/doğru/yanlış alanlarını, "saat" grubundakiler süre alanını kullanır;
// aggregation fonksiyonları bu iki listeye bakarak toplam alır.
const KONU_KAYIT_TIPLERI = [
    { id: "test", ad: "Test / Soru Çözümü", grup: "soru", ikon: "🧪" },
    { id: "calisma", ad: "Video / Konu Anlatımı", grup: "saat", ikon: "🎬" },
    { id: "tekrar", ad: "Tekrar", grup: "soru", ikon: "🔄" },
    { id: "kitap", ad: "Kitap / PDF", grup: "saat", ikon: "📚" },
    { id: "not", ad: "Sadece Not", grup: "not", ikon: "📝" }
];

const SORU_TABANLI_KAYIT_TIPLERI = KONU_KAYIT_TIPLERI.filter(function (t) { return t.grup === "soru"; }).map(function (t) { return t.id; });
const SAAT_TABANLI_KAYIT_TIPLERI = KONU_KAYIT_TIPLERI.filter(function (t) { return t.grup === "saat"; }).map(function (t) { return t.id; });

function gunEkleTarihStr(gunSayisi) {
    const d = new Date();
    d.setDate(d.getDate() + gunSayisi);
    return tarihStr(d);
}

const YANLIS_SEBEPLERI = [
    "Bilgi eksikliği", "Dikkat hatası", "Soruyu yanlış okuma",
    "İşlem hatası", "Süre yetmedi", "Konuyu biliyorum ama uygulayamadım", "Diğer"
];

function konuDurumBul(durumId) {
    return KONU_DURUMLARI.find(function (d) { return d.id === durumId; }) || KONU_DURUMLARI[0];
}

const SINAV_MUFREDATLARI = {
    kpss_ortaogretim: {
        ad: "KPSS Ortaöğretim",
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
        dersler: [
            { ad: "Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragraf", "Sözel Mantık", "Dil Bilgisi", "Yazım ve Noktalama", "Anlatım Bozukluğu"] },
            { ad: "Matematik", konular: ["Temel Kavramlar", "Rasyonel Sayılar", "Denklemler", "Üslü-Köklü", "Problemler (Sayı, Kesir, Yaş, Yüzde, Hız)", "Grafik ve Tablo Okuma", "Sayısal Mantık", "Kümeler & Olasılık"] },
            { ad: "Geometri", konular: ["Açılar ve Üçgenler", "Dörtgenler ve Çokgenler", "Çember ve Daire", "Analitik Geometri"] },
            { ad: "Tarih", konular: ["İlk Türk Devletleri", "Türk-İslam Tarihi", "Osmanlı Siyasi Tarihi", "Osmanlı Kültür ve Medeniyeti", "Milli Mücadele Dönemi", "Atatürk İnkılapları", "Çağdaş Türk ve Dünya Tarihi"] },
            { ad: "Coğrafya", konular: ["Coğrafi Konum", "Türkiye Fiziki Coğrafyası", "Beşeri Coğrafya", "Ekonomik Coğrafya", "Bölgesel Kalkınma Projeleri"] },
            { ad: "Vatandaşlık", konular: ["Hukukun Temel Esasları", "Anayasa Tarihi", "Yasama-Yürütme-Yargı", "İdare Hukuku", "Güncel Bilgiler"] }
        ]
    },
    kpss_lisans: {
        ad: "KPSS Lisans",
        dersler: [
            { ad: "Türkçe", konular: ["Sözcükte & Cümlede Anlam", "Paragrafta Anlam & Yapı", "Sözel Mantık & Muhakeme", "Dil Bilgisi", "Yazım-Noktalama"] },
            { ad: "Matematik", konular: ["Temel Sayılar & Basamaklar", "Bölünebilme & EBOB-EKOK", "Basit Eşitsizlik & Mutlak Değer", "Tüm Problem Türleri", "Permütasyon-Kombinasyon-Olasılık", "Sayısal Mantık & Muhakeme"] },
            { ad: "Geometri", konular: ["Üçgenler", "Çokgenler & Dörtgenler", "Çember-Daire", "Analitik Geometri", "Katı Cisimler"] },
            { ad: "Tarih", konular: ["İslam Öncesi Türk Tarihi", "Türk-İslam Devletleri", "Osmanlı Tarihi & Kültür Medeniyet", "Milli Mücadele & Kongreler", "İnkılaplar & Atatürk Dönemi Dış Politika", "Çağdaş Türk ve Dünya Tarihi"] },
            { ad: "Coğrafya", konular: ["Türkiye'nin Konumu & Jeopolitiği", "Fiziki Özellikler & Yerşekilleri", "İklim ve Bitki Örtüsü", "Nüfus, Yerleşme & Göç", "Ekonomik Coğrafya (Tarım, Hayvancılık, Sanayi, Maden)"] },
            { ad: "Vatandaşlık & Güncel", konular: ["Temel Hukuk", "Anayasa Hukuku", "1982 Anayasası Esasları", "Yasama, Yürütme, Yargı", "İdare Hukuku", "Uluslararası Örgütler & Güncel Gelişmeler"] }
        ]
    },
    lgs: {
        ad: "LGS",
        dersler: [
            { ad: "Türkçe", konular: ["Fiilimsiler", "Sözcükte & Cümlede Anlam", "Paragrafta Anlam & Yapı", "Cümlenin Ögeleri", "Metin Türleri & Söz Sanatları", "Noktalama & Yazım", "Cümle Türleri", "Yazım Kuralları", "Görsel Okuma & Mantık Muhakeme"] },
            { ad: "Matematik", konular: ["Çarpanlar ve Katlar", "Üslü İfadeler", "Kareköklü İfadeler", "Veri Analizi", "Basit Olayların Olasılığı", "Cebirsel İfadeler ve Özdeşlikler", "Doğrusal Denklemler", "Eşitsizlikler", "Üçgenler", "Eşlik ve Benzerlik", "Dönüşüm Geometrisi", "Geometrik Cisimler"] },
            { ad: "Fen Bilimleri", konular: ["Mevsimler ve İklim", "DNA ve Genetik Kod", "Basınç", "Madde ve Endüstri", "Basit Makineler", "Enerji Dönüşümleri ve Çevre Bilimi", "Elektrik Yükleri ve Elektrik Enerjisi"] },
            { ad: "T.C. İnkılap Tarihi", konular: ["Bir Kahraman Doğuyor", "Milli Uyanış", "Milli Bir Destan: Ya İstiklal Ya Ölüm!", "Atatürkçülük ve Çağdaşlaşan Türkiye", "Demokratikleşme Çabaları", "Atatürk Dönemi Dış Politika", "Atatürk'ün Ölümü ve Sonrası"] },
            { ad: "İngilizce", konular: ["Friendship", "Teen Life", "In The Kitchen", "On The Phone", "The Internet", "Adventures", "Tourism", "Chores", "Science", "Natural Forces"] },
            { ad: "Din Kültürü", konular: ["Kader İnancı", "Zekat ve Sadaka", "Din ve Hayat", "Hz. Muhammed'in Örnekliği", "Kur'an-ı Kerim ve Özellikleri"] }
        ]
    },
    tyt: {
        ad: "YKS: TYT",
        dersler: [
            { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcükte Yapı", "İsim-Sıfat-Zamir-Zarf", "Fiiller & Ek Fiil", "Cümlenin Ögeleri", "Anlatım Bozuklukları"] },
            { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Bölme-Bölünebilme", "EBOB-EKOK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü-Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Tüm Problemler", "Kümeler & Mantık", "Fonksiyonlar", "Permütasyon-Kombinasyon-Olasılık", "İstatistik"] },
            { ad: "TYT Geometri", konular: ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Açıortay-Kenarortay", "Üçgende Alan & Benzerlik", "Çokgenler & Dörtgenler", "Çember ve Daire", "Katı Cisimler"] },
            { ad: "TYT Fizik", konular: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Sıvıların Kaldırma Kuvveti", "Basınç", "Isı ve Sıcaklık", "Hareket ve Kuvvet", "İş, Güç ve Enerji", "Elektrostatik & Elektrik Akımı", "Optik", "Dalgalar"] },
            { ad: "TYT Kimya", konular: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri", "Doğa ve Kimya", "Kimyanın Temel Kanunları", "Karışımlar", "Asitler, Bazlar ve Tuzlar", "Kimya Her Yerde"] },
            { ad: "TYT Biyoloji", konular: ["Yaşam Bilimi Biyoloji", "Hücre ve Organelleri", "Canlılar Dünyası", "Hücre Bölünmeleri", "Kalıtımın Genel Esasları", "Ekosistem Ekolojisi"] },
            { ad: "TYT Tarih", konular: ["Tarih ve Zaman", "İlk ve Orta Çağlarda Türk Dünyası", "İslam Medeniyetinin Doğuşu", "İlk Türk İslam Devletleri", "Osmanlı Devleti Kuruluş-Yükselme", "Milli Mücadele", "Atatürkçülük ve Türk İnkılabı"] },
            { ad: "TYT Coğrafya", konular: ["Doğa ve İnsan", "Dünya'nın Şekli ve Hareketleri", "Harita Bilgisi", "İklim Bilgisi", "İç ve Dış Kuvvetler", "Nüfus ve Yerleşme", "Doğal Afetler"] },
            { ad: "TYT Felsefe & Din", konular: ["Felsefenin Konusu", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Din Kültürü Temel Kavramlar", "İbadetler ve Ahlak"] }
        ]
    },
    tyt_ayt_sayisal: {
        ad: "YKS: TYT-AYT (Sayısal)",
        dersler: [
            // --- TYT DERSLERİ (HER BİRİ AYRI KART) ---
            { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcük Türleri", "Cümlenin Ögeleri", "Cümle Türleri", "Anlatım Bozuklukları"] },
            { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Bölme-Bölünebilme", "EBOB-EKOK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Sayı-Kesir Problemleri", "Yaş Problemleri", "Yüzde-Kâr-Zarar Problemleri", "Hız-Hareket Problemleri", "Karışım-İşçi Problemleri", "Grafik Problemleri", "Mantık & Kümeler", "Fonksiyonlar", "PKOB & İstatistik"] },
            { ad: "TYT Geometri", konular: ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Açıortay-Kenarortay", "Üçgende Alan & Benzerlik", "Çokgenler & Dörtgenler", "Çember ve Daire", "Katı Cisimler (Prizma, Silindir, Koni, Küre)"] },
            { ad: "TYT Tarih", konular: ["Tarih ve Zaman", "İlk Türk Devletleri", "İslam Medeniyetinin Doğuşu", "İlk Türk İslam Devletleri", "Osmanlı Devleti Kuruluş & Yükselme", "Milli Mücadele Hazırlık & Cepheler", "Atatürk İlkeleri ve İnkılap Tarihi"] },
            { ad: "TYT Coğrafya", konular: ["Doğa ve İnsan", "Dünya'nın Şekli ve Hareketleri", "Coğrafi Konum & Harita Bilgisi", "İklim Bilgisi (Sıcaklık, Basınç, Rüzgar, Nem)", "İç ve Dış Kuvvetler", "Nüfus, Yerleşme ve Göç", "Doğal Afetler & Çevre"] },
            { ad: "TYT Felsefe", konular: ["Felsefenin Alanı ve Konusu", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Din Felsefesi", "Siyaset Felsefesi", "Sanat Felsefesi", "Bilim Felsefesi"] },
            { ad: "TYT Din Kültürü", konular: ["Bilgi ve İnanç", "İslam ve İbadet", "Ahlak ve Değerler", "Allah-İnsan İlişkisi", "Hz. Muhammed (s.a.v.)", "İslam Düşüncesinde Yorumlar ve Mezhepler"] },
            { ad: "TYT Fizik", konular: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Sıvıların Kaldırma Kuvveti", "Basınç", "Isı, Sıcaklık ve Genleşme", "Hareket ve Kuvvet", "İş, Güç ve Enerji", "Elektrostatik & Elektrik Akımı", "Manyetizma", "Optik (Aynalar, Kırılma, Mercekler, Renk)", "Dalgalar (Yay, Su, Ses, Deprem)"] },
            { ad: "TYT Kimya", konular: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri", "Doğa ve Kimya", "Kimyanın Temel Kanunları & Hesaplamalar", "Karışımlar ve Ayırma Yöntemleri", "Asitler, Bazlar ve Tuzlar", "Kimya Her Yerde"] },
            { ad: "TYT Biyoloji", konular: ["Canlıların Ortak Özellikleri & Temel Bileşenleri", "Hücre ve Organelleri", "Hücre Zarından Madde Geçişleri", "Canlılar Dünyası ve Sınıflandırma", "Hücre Bölünmeleri (Mitoz - Mayoz)", "Kalıtımın Genel Esasları", "Ekosistem Ekolojisi & Güncel Çevre Sorunları"] },
            // --- AYT SAYISAL DERSLERİ ---
            { ad: "AYT Matematik", konular: ["Fonksiyonlar & Polinomlar", "2. Dereceden Denklemler & Eşitsizlikler", "Parabol", "Trigonometri", "Logaritma", "Diziler", "Limit ve Süreklilik", "Türev ve Uygulamaları", "İntegral ve Uygulamaları"] },
            { ad: "AYT Geometri", konular: ["Analitik Geometri (Nokta, Doğru, Dönüşümler)", "Çemberin Analitiği", "Uzay Geometri & Katı Cisimler"] },
            { ad: "AYT Fizik", konular: ["Vektörler & Bağıl Hareket", "Newton'un Hareket Yasaları", "Atışlar & İvmeli Hareket", "İş-Güç-Enerji & İtme-Momentum", "Tork ve Denge", "Elektriksel Kuvvet & Potansiyel", "Manyetizma ve İndüksiyon", "Alternatif Akım & Transformatörler", "Çembersel Hareket", "Basit Harmonik Hareket", "Dalga Mekaniği", "Atom Fiziği & Modern Fizik"] },
            { ad: "AYT Kimya", konular: ["Modern Atom Teorisi", "Gazlar", "Sıvı Çözeltiler & Çözünürlük", "Tepkimelerde Enerji", "Tepkime Hızı", "Kimyasal Denge & Sulu Çözeltilerde Denge", "Elektrokimya & Piller", "Karbon Kimyasına Giriş", "Organik Kimya"] },
            { ad: "AYT Biyoloji", konular: ["Denetleyici ve Düzenleyici Sistem (Sinir - Endokrin)", "Duyu Organları", "Destek-Hareket Sistemi", "Sindirim Sistemi", "Dolaşım & Bağışıklık Sistemi", "Solunum Sistemi", "Boşaltım Sistemi", "Üreme Sistemi", "Komünite & Popülasyon Ekolojisi", "Genden Proteine", "Fotosentez & Kemosentez", "Hücresel Solunum", "Bitki Biyolojisi"] }
        ]
    },
    tyt_ayt_sozel: {
        ad: "YKS: TYT-AYT (Sözel)",
        dersler: [
            // --- TYT DERSLERİ (HER BİRİ AYRI KART) ---
            { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcük Türleri", "Cümlenin Ögeleri", "Cümle Türleri", "Anlatım Bozuklukları"] },
            { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Bölme-Bölünebilme", "EBOB-EKOK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Sayı-Kesir Problemleri", "Yaş Problemleri", "Yüzde-Kâr-Zarar Problemleri", "Hız-Hareket Problemleri", "Karışım-İşçi Problemleri", "Mantık & Kümeler", "Fonksiyonlar", "PKOB & İstatistik"] },
            { ad: "TYT Geometri", konular: ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Üçgende Alan & Benzerlik", "Çokgenler & Dörtgenler", "Çember ve Daire", "Katı Cisimler"] },
            { ad: "TYT Tarih", konular: ["Tarih ve Zaman", "İlk Türk Devletleri", "İslam Medeniyetinin Doğuşu", "İlk Türk İslam Devletleri", "Osmanlı Devleti Kuruluş & Yükselme", "Milli Mücadele Hazırlık & Cepheler", "Atatürk İlkeleri ve İnkılap Tarihi"] },
            { ad: "TYT Coğrafya", konular: ["Doğa ve İnsan", "Dünya'nın Şekli ve Hareketleri", "Coğrafi Konum & Harita Bilgisi", "İklim Bilgisi (Sıcaklık, Basınç, Rüzgar, Nem)", "İç ve Dış Kuvvetler", "Nüfus, Yerleşme ve Göç", "Doğal Afetler & Çevre"] },
            { ad: "TYT Felsefe", konular: ["Felsefenin Alanı ve Konusu", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Din Felsefesi", "Siyaset Felsefesi", "Sanat Felsefesi", "Bilim Felsefesi"] },
            { ad: "TYT Din Kültürü", konular: ["Bilgi ve İnanç", "İslam ve İbadet", "Ahlak ve Değerler", "Allah-İnsan İlişkisi", "Hz. Muhammed (s.a.v.)", "İslam Düşüncesinde Yorumlar ve Mezhepler"] },
            { ad: "TYT Fizik", konular: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Kaldırma Kuvveti & Basınç", "Isı ve Sıcaklık", "Hareket ve Kuvvet", "İş, Güç ve Enerji", "Elektrik & Manyetizma", "Optik & Dalgalar"] },
            { ad: "TYT Kimya", konular: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri", "Karışımlar", "Asitler, Bazlar ve Tuzlar", "Kimya Her Yerde"] },
            { ad: "TYT Biyoloji", konular: ["Canlıların Temel Bileşenleri", "Hücre ve Organelleri", "Canlılar Dünyası ve Sınıflandırma", "Mitoz ve Mayoz Bölünme", "Kalıtım", "Ekosistem Ekolojisi"] },
            // --- AYT SÖZEL DERSLERİ ---
            { ad: "AYT Edebiyat", konular: ["Şiir Bilgisi & Söz Sanatları", "İslamiyet Öncesi & İslami Dönem İlk Eserler", "Halk Edebiyatı", "Divan Edebiyatı", "Tanzimat Edebiyatı", "Servet-i Fünun & Fecr-i Ati", "Milli Edebiyat", "Cumhuriyet Dönemi Şiir, Roman & Tiyatro", "Edebi Akımlar"] },
            { ad: "AYT Tarih-1 & Tarih-2", konular: ["İlk Çağ Uygarlıkları", "Türk Dünyası & İslam Tarihi", "Osmanlı Siyasi Tarihi", "Osmanlı Kültür ve Medeniyeti", "Milli Mücadele Dönemi", "Atatürkçülük ve Türk İnkılabı", "2. Dünya Savaşı ve Soğuk Savaş", "Yumuşama Dönemi ve Küreselleşen Dünya"] },
            { ad: "AYT Coğrafya-1 & Coğrafya-2", konular: ["Ekosistem ve Madde Döngüleri", "Nüfus Politikaları & Şehirler", "Türkiye'nin Ekonomik Coğrafyası (Tarım, Maden, Sanayi)", "Bölgesel Kalkınma Projeleri", "Küresel Ticaret & Örgütler", "Çevre ve Toplum"] },
            { ad: "AYT Felsefe Grubu & Din", konular: ["Mantık (Klasik & Sembolik)", "Psikoloji (Gelişim, Öğrenme, Bellek, Davranış)", "Sosyoloji (Toplumsal Yapı, Değişme, Kurumlar)", "Din Kültürü & Mezhepler"] }
        ]
    },
    tyt_ayt_ea: {
        ad: "YKS: TYT-AYT (Eşit Ağırlık)",
        dersler: [
            // --- TYT DERSLERİ (HER BİRİ AYRI KART) ---
            { ad: "TYT Türkçe", konular: ["Sözcükte Anlam", "Cümlede Anlam", "Paragrafta Anlam", "Ses Bilgisi", "Yazım Kuralları", "Noktalama İşaretleri", "Sözcük Türleri", "Cümlenin Ögeleri", "Cümle Türleri", "Anlatım Bozuklukları"] },
            { ad: "TYT Matematik", konular: ["Temel Kavramlar", "Sayı Basamakları", "Bölme-Bölünebilme", "EBOB-EKOK", "Rasyonel Sayılar", "Basit Eşitsizlikler", "Mutlak Değer", "Üslü Sayılar", "Köklü Sayılar", "Çarpanlara Ayırma", "Oran-Orantı", "Sayı-Kesir Problemleri", "Yaş Problemleri", "Yüzde-Kâr-Zarar Problemleri", "Hız-Hareket Problemleri", "Karışım-İşçi Problemleri", "Mantık & Kümeler", "Fonksiyonlar", "PKOB & İstatistik"] },
            { ad: "TYT Geometri", konular: ["Doğruda ve Üçgende Açılar", "Özel Üçgenler", "Üçgende Alan & Benzerlik", "Çokgenler & Dörtgenler", "Çember ve Daire", "Katı Cisimler"] },
            { ad: "TYT Tarih", konular: ["Tarih ve Zaman", "İlk Türk Devletleri", "İslam Medeniyetinin Doğuşu", "İlk Türk İslam Devletleri", "Osmanlı Devleti Kuruluş & Yükselme", "Milli Mücadele Hazırlık & Cepheler", "Atatürk İlkeleri ve İnkılap Tarihi"] },
            { ad: "TYT Coğrafya", konular: ["Doğa ve İnsan", "Dünya'nın Şekli ve Hareketleri", "Coğrafi Konum & Harita Bilgisi", "İklim Bilgisi (Sıcaklık, Basınç, Rüzgar, Nem)", "İç ve Dış Kuvvetler", "Nüfus, Yerleşme ve Göç", "Doğal Afetler & Çevre"] },
            { ad: "TYT Felsefe", konular: ["Felsefenin Alanı ve Konusu", "Bilgi Felsefesi", "Varlık Felsefesi", "Ahlak Felsefesi", "Din Felsefesi", "Siyaset Felsefesi", "Sanat Felsefesi", "Bilim Felsefesi"] },
            { ad: "TYT Din Kültürü", konular: ["Bilgi ve İnanç", "İslam ve İbadet", "Ahlak ve Değerler", "Allah-İnsan İlişkisi", "Hz. Muhammed (s.a.v.)", "İslam Düşüncesinde Yorumlar ve Mezhepler"] },
            { ad: "TYT Fizik", konular: ["Fizik Bilimine Giriş", "Madde ve Özellikleri", "Kaldırma Kuvveti & Basınç", "Isı ve Sıcaklık", "Hareket ve Kuvvet", "İş, Güç ve Enerji", "Elektrik & Manyetizma", "Optik & Dalgalar"] },
            { ad: "TYT Kimya", konular: ["Kimya Bilimi", "Atom ve Periyodik Sistem", "Kimyasal Türler Arası Etkileşimler", "Maddenin Halleri", "Karışımlar", "Asitler, Bazlar ve Tuzlar", "Kimya Her Yerde"] },
            { ad: "TYT Biyoloji", konular: ["Canlıların Temel Bileşenleri", "Hücre ve Organelleri", "Canlılar Dünyası ve Sınıflandırma", "Mitoz ve Mayoz Bölünme", "Kalıtım", "Ekosistem Ekolojisi"] },
            // --- AYT EŞİT AĞIRLIK DERSLERİ ---
            { ad: "AYT Matematik", konular: ["Fonksiyonlar & Polinomlar", "2. Dereceden Denklemler & Eşitsizlikler", "Parabol", "Trigonometri", "Logaritma", "Diziler", "Limit ve Süreklilik", "Türev ve Uygulamaları", "İntegral ve Uygulamaları"] },
            { ad: "AYT Geometri", konular: ["Analitik Geometri (Nokta, Doğru, Dönüşümler)", "Çemberin Analitiği", "Katı Cisimler"] },
            { ad: "AYT Edebiyat", konular: ["Şiir Bilgisi & Edebi Sanatlar", "Halk Edebiyatı", "Divan Edebiyatı", "Tanzimat Edebiyatı", "Servet-i Fünun & Milli Edebiyat", "Cumhuriyet Dönemi Şiir, Roman & Tiyatro", "Edebi Akımlar"] },
            { ad: "AYT Tarih-1", konular: ["İlk Çağ Medeniyetleri", "Türk Dünyası & İslam Tarihi", "Osmanlı Siyasi Tarihi", "Milli Mücadele & Atatürk İnkılapları"] },
            { ad: "AYT Coğrafya-1", konular: ["Biyoçeşitlilik & Ekosistem", "Nüfus Politikaları & Şehirler", "Türkiye'nin Ekonomik Coğrafyası", "Bölgesel Kalkınma Projeleri", "Küresel Ticaret & Turizm", "Çevre Sorunları"] }
        ]
    },
    universite: {
        ad: "Üniversite (Vize / Final / Büt)",
        dersler: [
            { ad: "Ders 1 (Örn: Hukuka Giriş)", konular: ["1. Hafta: Giriş ve Temel Kavramlar", "2. Hafta: Kuramlar ve Yaklaşımlar", "3. Hafta: Vize Konuları Özeti", "4. Hafta: Final / Büt Çalışması"] },
            { ad: "Ders 2 (Örn: İktisada Giriş)", konular: ["Mikro İktisat Konuları", "Makro İktisat Konuları", "Vize Çıkmış Sorular", "Final Projesi / Sunum"] }
        ]
    }
};

function sinavMufredatiYukle(sinavKodu) {
    const sablon = SINAV_MUFREDATLARI[sinavKodu] || SINAV_MUFREDATLARI.kpss_ortaogretim;
    return sablon.dersler.map(function (d) {
        return {
            id: benzersizId(),
            ad: d.ad,
            konular: d.konular.map(function (k) {
                return { id: benzersizId(), ad: k, durum: "baslanmadi", kayitlar: [], tekrarSayisi: 0, tekrarTarihi: null, tekrarGecmisi: [] };
            })
        };
    });
}

function varsayilanDersler() {
    return sinavMufredatiYukle("kpss_ortaogretim");
}

function varsayilanDersVerisi() {
    return {
        sinavTuru: "kpss_ortaogretim",
        sinavTarihi: null,
        dersler: varsayilanDersler(),
        denemeler: [],
        yanlislar: [],
        calismaGunleri: {},
        hedefler: [],
        calismaPlani: []
    };
}

function dersVeriYukle() {
    const ham = localStorage.getItem(DERS_VERI_ANAHTARI);
    if (ham) {
        try {
            const v = JSON.parse(ham);
            if (!v.sinavTuru) v.sinavTuru = "kpss_ortaogretim";
            if (!v.dersler) v.dersler = [];
            v.dersler.forEach(function (ders) {
                (ders.konular || []).forEach(function (konu) {
                    if (typeof konu.tekrarSayisi === "undefined") konu.tekrarSayisi = 0;
                    if (typeof konu.tekrarTarihi === "undefined") konu.tekrarTarihi = null;
                    if (!Array.isArray(konu.tekrarGecmisi)) konu.tekrarGecmisi = [];
                });
            });
            if (!v.denemeler) v.denemeler = [];
            if (!v.yanlislar) v.yanlislar = [];
            if (!v.calismaGunleri) v.calismaGunleri = {};
            if (!v.hedefler) v.hedefler = [];
            if (!v.calismaPlani) v.calismaPlani = [];
            if (typeof v.sinavTarihi === "undefined") v.sinavTarihi = null;
            return v;
        } catch (e) {
            // bozuksa varsayılana dön
        }
    }
    return varsayilanDersVerisi();
}

function dersVeriKaydet() {
    try {
        localStorage.setItem(DERS_VERI_ANAHTARI, JSON.stringify(dersVeri));
    } catch (e) {
        bilgiGoster("Veri kaydedilirken bir sorun oluştu. Fotoğraf/video ekleri tarayıcı depolama sınırını aşmış olabilir.", "Kaydetme Hatası");
    }
}


// ==========================================================
// AYARLAR - VERİ YEDEKLEME (dışa/içe aktarma, sıfırlama)
// ==========================================================

function dersVerisiDisaAktar() {
    const yedek = {
        surum: 1,
        tarih: new Date().toISOString(),
        dersPaneli: dersVeri
    };
    const blob = new Blob([JSON.stringify(yedek, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ders-takip-yedek-" + bugunStr() + ".json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function dersVerisiIceAktar(dosya) {
    const reader = new FileReader();
    reader.onload = function () {
        let yedek;
        try {
            yedek = JSON.parse(reader.result);
        } catch (e) {
            bilgiGoster("Dosya okunamadı. Geçerli bir yedek dosyası seçtiğinden emin ol.");
            return;
        }
        const gelenVeri = yedek.dersPaneli || yedek;
        if (!gelenVeri || !Array.isArray(gelenVeri.dersler)) {
            bilgiGoster("Bu dosya geçerli bir ders takip yedeği gibi görünmüyor.");
            return;
        }
        onayGoster({
            baslik: "Ders Verilerini İçe Aktar",
            mesaj: "Bu işlem mevcut tüm ders takip verilerinin (dersler, denemeler, yanlışlar, çalışma takvimi, hedefler) üzerine yazacak. Emin misin?",
            onayMetni: "İçe Aktar",
            tehlikeli: true,
            onOnay: function () {
                localStorage.setItem(DERS_VERI_ANAHTARI, JSON.stringify(gelenVeri));
                bilgiGoster("Ders verileri içe aktarıldı. Sayfa yenileniyor...", "Başarılı");
                setTimeout(function () { location.reload(); }, 1200);
            }
        });
    };
    reader.readAsText(dosya);
}

function dersVerisiSifirla() {
    onayGoster({
        baslik: "Verileri Sıfırla",
        mesaj: "Tüm ders takip verilerin (dersler, konular, denemeler, yanlışlar, çalışma geçmişi, hedefler) kalıcı olarak silinecek. Bu işlem geri alınamaz. Önce yedek almanı öneririz. Devam etmek istiyor musun?",
        onayMetni: "Sıfırla",
        tehlikeli: true,
        onOnay: function () {
            localStorage.removeItem(DERS_VERI_ANAHTARI);
            bilgiGoster("Ders verileri sıfırlandı. Sayfa yenileniyor...", "Tamamlandı");
            setTimeout(function () { location.reload(); }, 1200);
        }
    });
}

// "var" bilinçli seçildi: Ana panel başlangıç render'ı bu satırdan ÖNCE
// çalışıyor ve o an dersVeri'ye referans veren gunlukOzetiCiz() fonksiyonunu
// çağırabiliyor. "let/const" olsaydı o an "temporal dead zone" hatası verirdi;
// "var" hoisting sayesinde o anda değeri "undefined" olur ve fonksiyon bunu
// güvenle kontrol edip varsayılan değerler gösterebilir.
var dersVeri = dersVeriYukle();


// ==========================================================
// İŞ MODÜLÜ - VERİ YÖNETİMİ
// ==========================================================

const IS_VERI_ANAHTARI = "isPaneliVerisi";

const IS_GOREV_DURUMLARI = [
    { id: "planlama", ad: "Planlanıyor", renk: "#9ca3af" },
    { id: "devam", ad: "Devam Ediyor", renk: "#2563eb" },
    { id: "bitti", ad: "Bitti", renk: "#16a34a" }
];

function isGorevDurumBul(durumId) {
    return IS_GOREV_DURUMLARI.find(function (d) { return d.id === durumId; }) || IS_GOREV_DURUMLARI[0];
}

function varsayilanIsVerisi() {
    return {
        projeler: [],
        klasorler: [],
        fikirler: "",
        hizliNotlar: []
    };
}

function isVeriYukle() {
    const ham = localStorage.getItem(IS_VERI_ANAHTARI);
    if (ham) {
        try {
            const v = JSON.parse(ham);
            if (!Array.isArray(v.projeler)) v.projeler = [];
            if (!Array.isArray(v.klasorler)) v.klasorler = [];
            if (typeof v.fikirler !== "string") v.fikirler = "";
            if (!Array.isArray(v.hizliNotlar)) v.hizliNotlar = [];
            return v;
        } catch (e) {
            // bozuksa varsayılana dön
        }
    }
    return varsayilanIsVerisi();
}

function isVeriKaydet() {
    try {
        localStorage.setItem(IS_VERI_ANAHTARI, JSON.stringify(isVeri));
    } catch (e) {
        bilgiGoster("Veri kaydedilirken bir sorun oluştu.", "Kaydetme Hatası");
    }
}

var isVeri = isVeriYukle();

function netHesapla(dogru, yanlis) {
    const d = Number(dogru) || 0;
    const y = Number(yanlis) || 0;
    return Math.max(0, d - y / 4);
}

function netFormatla(net) {
    return net.toFixed(2).replace(".", ",");
}


// ==========================================================
// DERS MODÜLÜ - GENEL GÜNCELLEME
// ==========================================================

let aktifDersSekmesi = "genel";

function dersModuluGuncelle() {
    kpssGeriSayimBasligiGuncelle();
    genelBakisiCiz();
    konularSayfasiniCiz();
    denemelerSayfasiniCiz();
    yanlislarSayfasiniCiz();
    takipSayfasiniCiz();
}

function kpssGeriSayimBasligiGuncelle() {
    const el = document.getElementById("kpssGeriSayimBaslik");
    const secimEl = document.getElementById("sinavTuruSecimi");
    if (secimEl && dersVeri.sinavTuru) {
        secimEl.value = dersVeri.sinavTuru;
    }

    const sinavAdi = (SINAV_MUFREDATLARI[dersVeri.sinavTuru] || {}).ad || "Sınav";

    if (!dersVeri.sinavTarihi) {
        el.innerHTML = `${simgesi("⏳")} ${sinavAdi} tarihi belirlenmedi`;
        return;
    }
    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);
    const hedef = new Date(dersVeri.sinavTarihi + "T00:00:00");
    const farkGun = Math.ceil((hedef - bugun) / (1000 * 60 * 60 * 24));
    if (farkGun > 0) {
        el.innerHTML = `${simgesi("⏳")} ${sinavAdi} için <strong>${farkGun}</strong> gün kaldı`;
    } else if (farkGun === 0) {
        el.innerHTML = `${simgesi("🔥")} ${sinavAdi} bugün! Başarılar!`;
    } else {
        el.innerHTML = `${simgesi("⏳")} ${sinavAdi} tarihi geçti`;
    }
}


// ==========================================================
// GENEL BAKIŞ SEKMESİ
// ==========================================================

function tumKonular() {
    const liste = [];
    dersVeri.dersler.forEach(function (ders) {
        ders.konular.forEach(function (konu) { liste.push(konu); });
    });
    return liste;
}

function konuIlerlemeYuzdesi(konular) {
    if (konular.length === 0) return 0;
    const puanlar = { baslanmadi: 0, calisiyor: 0.5, tekrar_gerekli: 0.85, bitti: 1, tekrar_edildi: 1 };
    const toplam = konular.reduce(function (acc, k) { return acc + (puanlar[k.durum] !== undefined ? puanlar[k.durum] : 0); }, 0);
    return Math.round((toplam / konular.length) * 100);
}

function dersIstatistikleriHesapla(ders) {
    let cozulenSoru = 0, dogru = 0, yanlis = 0, calismaSaat = 0;

    ders.konular.forEach(function (konu) {
        konu.kayitlar.forEach(function (kayit) {
            if (SORU_TABANLI_KAYIT_TIPLERI.includes(kayit.tip)) {
                cozulenSoru += Number(kayit.soru) || 0;
                dogru += Number(kayit.dogru) || 0;
                yanlis += Number(kayit.yanlis) || 0;
            } else if (SAAT_TABANLI_KAYIT_TIPLERI.includes(kayit.tip)) {
                calismaSaat += Number(kayit.saat) || 0;
            }
        });
    });

    const basariOrani = cozulenSoru > 0 ? Math.round((dogru / cozulenSoru) * 100) : 0;

    return {
        ilerlemeYuzdesi: konuIlerlemeYuzdesi(ders.konular),
        cozulenSoru: cozulenSoru,
        dogru: dogru,
        yanlis: yanlis,
        basariOrani: basariOrani,
        calismaSaat: calismaSaat
    };
}

function calismaSerisiHesapla() {
    let seri = 0;
    let gun = new Date();
    // Bugün henüz çalışılmadıysa dünden başlayarak sayalım
    if (!dersVeri.calismaGunleri[tarihStr(gun)]) {
        gun.setDate(gun.getDate() - 1);
    }
    while (dersVeri.calismaGunleri[tarihStr(gun)]) {
        seri++;
        gun.setDate(gun.getDate() - 1);
    }
    return seri;
}

// Genel Bakış'taki "Net Gelişim Grafiği" için hangi görünümün (genel / branş)
// seçili olduğunu tutan basit görsel state - kaydedilmez.
let netGrafikFiltresi = { tip: "genel", brans: null };

function netGelisimVerisiHesapla() {
    let kayitlar;

    if (netGrafikFiltresi.tip === "brans" && netGrafikFiltresi.brans) {
        kayitlar = dersVeri.denemeler.filter(function (d) {
            return d.tip === "brans" && d.brans === netGrafikFiltresi.brans;
        });
    } else {
        kayitlar = dersVeri.denemeler.filter(function (d) { return d.tip === "genel"; });
    }

    return kayitlar
        .slice()
        .sort(function (a, b) { return a.tarih.localeCompare(b.tarih); })
        .slice(-15)
        .map(function (d) { return { tarih: d.tarih, net: d.toplamNet }; });
}

function netGelisimGrafigiHtml() {
    const noktaVerisi = netGelisimVerisiHesapla();

    if (noktaVerisi.length < 2) {
        return '<div class="bos-durum-notu">Grafiği görmek için bu filtrede en az 2 deneme kaydı gerekiyor.</div>';
    }

    const netler = noktaVerisi.map(function (n) { return n.net; });
    const maxNet = Math.max.apply(null, netler);
    const minNet = Math.min.apply(null, netler.concat([0]));
    const aralik = Math.max(maxNet - minNet, 1);

    const genislik = 100;
    const yukseklik = 100;

    const noktalar = noktaVerisi.map(function (n, i) {
        const x = (i / (noktaVerisi.length - 1)) * genislik;
        const y = yukseklik - ((n.net - minNet) / aralik) * yukseklik;
        return { x: x, y: y, net: n.net, tarih: n.tarih };
    });

    const polylineNoktalari = noktalar.map(function (n) { return n.x + "," + n.y; }).join(" ");

    const dairelerHtml = noktalar.map(function (n, i) {
        const sonMu = i === noktalar.length - 1;
        return `<circle cx="${n.x}" cy="${n.y}" r="${sonMu ? 2.4 : 1.6}" class="cizgi-grafik-nokta"><title>${n.tarih}: ${netFormatla(n.net)} net</title></circle>`;
    }).join("");

    return `
        <div class="net-gelisim-eksen-ustu">
            <span>En yüksek: ${netFormatla(maxNet)}</span>
            <span>En düşük: ${netFormatla(minNet)}</span>
        </div>
        <svg class="cizgi-grafik net-gelisim-svg" viewBox="0 0 ${genislik} ${yukseklik}" preserveAspectRatio="none">
            <polyline points="${polylineNoktalari}" class="cizgi-grafik-cizgi"></polyline>
            ${dairelerHtml}
        </svg>
        <div class="net-gelisim-eksen-alti">
            <span>${noktaVerisi[0].tarih}</span>
            <span>${noktaVerisi[noktaVerisi.length - 1].tarih}</span>
        </div>
    `;
}

function bugununCalismaPlaniHtml() {
    const bugun = bugunStr();
    const planlar = dersVeri.calismaPlani.filter(function (p) { return p.tarih === bugun; });

    const dersSecenekleri = dersVeri.dersler.map(function (d) {
        return `<option value="${escapeHtml(d.ad)}">${escapeHtml(d.ad)}</option>`;
    }).join("") || '<option value="Genel">Genel</option>';

    const planSatirlariHtml = planlar.length === 0
        ? '<div class="bos-durum-notu">Bugün için planlanmış çalışma yok.</div>'
        : planlar.map(function (p) {
            return `
            <div class="calisma-plani-satiri ${p.tamamlandi ? "tamamlandi" : ""}" data-plan-id="${p.id}">
                <input type="checkbox" data-aksiyon="plan-check" ${p.tamamlandi ? "checked" : ""}>
                <div class="calisma-plani-metin">
                    <strong>${escapeHtml(p.ders)}</strong> — ${escapeHtml(p.konu || "Genel çalışma")}
                    <div class="calisma-plani-hedefler">
                        ${p.sureHedefi ? `⏱️ ${ondalikSaatiKisaFormatla(p.sureHedefi)}` : ""}
                        ${p.soruHedefi ? `📝 ${p.soruHedefi} soru` : ""}
                    </div>
                </div>
                <button class="gorev-sil" data-aksiyon="plan-sil" title="Sil">${IKON.sil}</button>
            </div>`;
        }).join("");

    return `
        <div class="calisma-plani-formu">
            <div class="gorev-formu-satir">
                <select id="planDersSecim">${dersSecenekleri}</select>
                <input type="text" id="planKonuInput" placeholder="Konu (opsiyonel)...">
            </div>
            <div class="gorev-formu-satir">
                <input type="number" min="0" step="0.25" id="planSureInput" placeholder="Süre hedefi (saat)">
                <input type="number" min="0" id="planSoruInput" placeholder="Soru hedefi">
                <button id="planEkleBtn" class="gorev-kaydet-btn buton-artili" title="Plan Ekle" aria-label="Plan Ekle">＋</button>
            </div>
        </div>
        <div class="calisma-plani-listesi">${planSatirlariHtml}</div>
    `;
}

function konuBasariOraniHesapla(konu) {
    let soru = 0, dogru = 0;
    konu.kayitlar.forEach(function (k) {
        if (SORU_TABANLI_KAYIT_TIPLERI.includes(k.tip)) {
            soru += Number(k.soru) || 0;
            dogru += Number(k.dogru) || 0;
        }
    });
    return { soru: soru, dogru: dogru, oran: soru > 0 ? Math.round((dogru / soru) * 100) : null };
}

function konuSonKayitTarihi(konu) {
    if (konu.kayitlar.length === 0) return null;
    return konu.kayitlar.reduce(function (en, k) { return k.tarih > en ? k.tarih : en; }, konu.kayitlar[0].tarih);
}

function konununDersiniBul(konu) {
    return dersVeri.dersler.find(function (d) { return d.konular.some(function (k) { return k.id === konu.id; }); });
}

function gunFarkiHesapla(tarihStr) {
    const bugun = new Date(bugunStr() + "T00:00:00");
    const t = new Date(tarihStr + "T00:00:00");
    return Math.round((bugun - t) / 86400000);
}

function genelBakisiCiz() {
    const panel = document.getElementById("dersSekmeGenel");
    if (!panel) return;

    const konular = tumKonular();
    const genelYuzde = konuIlerlemeYuzdesi(konular);
    const bittiSayisi = konular.filter(function (k) { return k.durum === "bitti" || k.durum === "tekrar_edildi"; }).length;
    const seri = calismaSerisiHesapla();

    const sonDenemeler = dersVeri.denemeler.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
    const sonDeneme = sonDenemeler[sonDenemeler.length - 1];

    const dersIstatistikleri = dersVeri.dersler.map(function (ders) {
        return { ders: ders, ist: dersIstatistikleriHesapla(ders) };
    });

    const toplamCalismaSaati = dersIstatistikleri.reduce(function (acc, d) { return acc + d.ist.calismaSaat; }, 0);
    const toplamCozulenSoru = dersIstatistikleri.reduce(function (acc, d) { return acc + d.ist.cozulenSoru; }, 0);

    const netler = dersVeri.denemeler.map(function (d) { return d.toplamNet; });
    const ortalamaNet = netler.length > 0 ? netler.reduce(function (a, b) { return a + b; }, 0) / netler.length : 0;
    const enYuksekNet = netler.length > 0 ? Math.max.apply(null, netler) : 0;

    const zayifBasariKonulari = tumKonular()
        .map(function (k) { return { konu: k, basari: konuBasariOraniHesapla(k) }; })
        .filter(function (x) { return x.basari.soru >= 5; })
        .sort(function (a, b) { return a.basari.oran - b.basari.oran; })
        .slice(0, 5);

    const UZUN_SUREDIR_ESIK_GUN = 10;
    const uzunSuredirCalisilmayanlar = tumKonular()
        .filter(function (k) { return k.durum !== "baslanmadi" && k.kayitlar.length > 0; })
        .map(function (k) {
            const sonTarih = konuSonKayitTarihi(k);
            return { konu: k, sonTarih: sonTarih, gunFarki: gunFarkiHesapla(sonTarih) };
        })
        .filter(function (x) { return x.gunFarki >= UZUN_SUREDIR_ESIK_GUN; })
        .sort(function (a, b) { return b.gunFarki - a.gunFarki; })
        .slice(0, 5);

    const istatistikAlani = document.getElementById("dersWidgetIstatistikler");
    if (istatistikAlani) {
        istatistikAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="istatistik-kutu-grid">
                    ${istatistikKutuHtml("📈", "mavi", "Genel İlerleme", "%" + genelYuzde, bittiSayisi + " / " + konular.length + " konu tamamlandı")}
                    ${istatistikKutuHtml("📝", "mor", "Toplam Deneme", dersVeri.denemeler.length, sonDeneme ? "Son net: " + netFormatla(sonDeneme.toplamNet) : "Henüz deneme yok")}
                    ${istatistikKutuHtml("❌", "kirmizi", "Kayıtlı Yanlış", dersVeri.yanlislar.length, "Yanlışlarım arşivinde")}
                    ${istatistikKutuHtml("🔥", "turuncu", "Çalışma Serisi", seri, "gün üst üste")}
                    ${istatistikKutuHtml("⏱️", "mavi", "Toplam Çalışma Süresi", ondalikSaatiKisaFormatla(toplamCalismaSaati), "tüm zamanlar")}
                    ${istatistikKutuHtml("✅", "yesil", "Çözülen Soru", toplamCozulenSoru, "tüm derslerde")}
                    ${istatistikKutuHtml("📊", "sari", "Ortalama Net", netler.length > 0 ? netFormatla(ortalamaNet) : "—", dersVeri.denemeler.length + " denemenin ortalaması")}
                    ${istatistikKutuHtml("🏆", "yesil", "En Yüksek Net", netler.length > 0 ? netFormatla(enYuksekNet) : "—", "tüm denemeler arasında")}
                </div>
            </div>`;
    }

    const calismaPlaniAlani = document.getElementById("dersWidgetCalismaPlani");
    if (calismaPlaniAlani) {
        calismaPlaniAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="section-header"><h2>🎯 Bugünün Çalışma Planı</h2></div>
                ${bugununCalismaPlaniHtml()}
            </div>`;
    }

    const ilerlemeAlani = document.getElementById("dersWidgetIlerleme");
    if (ilerlemeAlani) {
        ilerlemeAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="section-header"><h2>📚 Derslere Göre İlerleme</h2></div>
                ${dersVeri.dersler.map(function (ders) {
                    const yuzde = konuIlerlemeYuzdesi(ders.konular);
                    return `
                    <div class="ders-ilerleme-satiri">
                        <span class="ders-ilerleme-ad">${escapeHtml(ders.ad)}</span>
                        <div class="ilerleme-bar"><div class="ilerleme-dolu" style="width:${yuzde}%"></div></div>
                        <span class="ilerleme-yuzde">${yuzde}%</span>
                    </div>`;
                }).join("") || '<div class="bos-durum-notu">Henüz ders eklenmedi.</div>'}
            </div>`;
    }

    const performansAlani = document.getElementById("dersWidgetPerformans");
    if (performansAlani) {
        performansAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="section-header"><h2>📊 Ders Performansı</h2></div>
                ${dersIstatistikleri.map(function (d) {
                    return `
                    <div class="ders-performans-karti">
                        <div class="ders-performans-baslik">${escapeHtml(d.ders.ad)}</div>
                        <div class="ders-performans-istatistikler">
                            <div class="ders-performans-ist">
                                <span class="ders-performans-deger">%${d.ist.ilerlemeYuzdesi}</span>
                                <span class="ders-performans-etiket">Konu İlerlemesi</span>
                            </div>
                            <div class="ders-performans-ist">
                                <span class="ders-performans-deger">${d.ist.cozulenSoru}</span>
                                <span class="ders-performans-etiket">Çözülen Soru</span>
                            </div>
                            <div class="ders-performans-ist">
                                <span class="ders-performans-deger">%${d.ist.basariOrani}</span>
                                <span class="ders-performans-etiket">Başarı Oranı</span>
                            </div>
                            <div class="ders-performans-ist">
                                <span class="ders-performans-deger">${ondalikSaatiKisaFormatla(d.ist.calismaSaat)}</span>
                                <span class="ders-performans-etiket">Çalışma Süresi</span>
                            </div>
                        </div>
                    </div>`;
                }).join("") || '<div class="bos-durum-notu">Henüz ders eklenmedi.</div>'}
            </div>`;
    }

    const netGrafikAlani = document.getElementById("dersWidgetNetGrafik");
    if (netGrafikAlani) {
        netGrafikAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="section-header">
                    <h2>📈 Net Gelişim Grafiği</h2>
                    <div class="net-grafik-filtre-grubu">
                        <button type="button" class="tekrar-btn ${netGrafikFiltresi.tip === "genel" ? "aktif" : ""}" data-net-filtre-tip="genel">Genel</button>
                        <button type="button" class="tekrar-btn ${netGrafikFiltresi.tip === "brans" ? "aktif" : ""}" data-net-filtre-tip="brans">Branş</button>
                    </div>
                </div>
                ${netGrafikFiltresi.tip === "brans" ? `
                    <select id="netGrafikBransSecim" class="net-grafik-brans-secim">
                        ${dersVeri.dersler.length === 0 ? '<option value="">Ders yok</option>' : dersVeri.dersler.map(function (d) {
                            return `<option value="${escapeHtml(d.ad)}" ${netGrafikFiltresi.brans === d.ad ? "selected" : ""}>${escapeHtml(d.ad)}</option>`;
                        }).join("")}
                    </select>
                ` : ""}
                <div class="net-gelisim-alani">${netGelisimGrafigiHtml()}</div>
            </div>`;
    }

    const zayifKonularAlani = document.getElementById("dersWidgetZayifKonular");
    if (zayifKonularAlani) {
        zayifKonularAlani.innerHTML = `
            <div class="ders-karti widget-ic-kart">
                <div class="section-header"><h2>⚠️ Zayıf Konular</h2></div>
                <div class="zayif-konular-grid">
                    <div class="zayif-konular-kolon">
                        <h4 class="zayif-konular-alt-baslik">📉 En Düşük Başarı Oranı</h4>
                        ${zayifBasariKonulari.length === 0
                            ? '<div class="bos-durum-notu">Henüz yeterli test verisi yok (en az 5 soru gerekli).</div>'
                            : zayifBasariKonulari.map(function (x) {
                                const ders = konununDersiniBul(x.konu);
                                return `
                                    <button type="button" class="zayif-konu-satiri" data-zayif-konu-id="${x.konu.id}">
                                        <span class="zayif-konu-adi">${escapeHtml(x.konu.ad)}</span>
                                        <span class="zayif-konu-ders-etiketi">${ders ? escapeHtml(ders.ad) : ""}</span>
                                        <span class="zayif-konu-deger dusuk">%${x.basari.oran}</span>
                                    </button>
                                `;
                            }).join("")}
                    </div>
                    <div class="zayif-konular-kolon">
                        <h4 class="zayif-konular-alt-baslik">⏳ Uzun Süredir Çalışılmayan</h4>
                        ${uzunSuredirCalisilmayanlar.length === 0
                            ? '<div class="bos-durum-notu">Tüm konular güncel 👍</div>'
                            : uzunSuredirCalisilmayanlar.map(function (x) {
                                const ders = konununDersiniBul(x.konu);
                                return `
                                    <button type="button" class="zayif-konu-satiri" data-zayif-konu-id="${x.konu.id}">
                                        <span class="zayif-konu-adi">${escapeHtml(x.konu.ad)}</span>
                                        <span class="zayif-konu-ders-etiketi">${ders ? escapeHtml(ders.ad) : ""}</span>
                                        <span class="zayif-konu-deger">${x.gunFarki} gün önce</span>
                                    </button>
                                `;
                            }).join("")}
                    </div>
                </div>
            </div>`;
    }

    const planEkleBtn = panel.querySelector("#planEkleBtn");
    if (planEkleBtn) {
        planEkleBtn.addEventListener("click", function () {
            const ders = panel.querySelector("#planDersSecim").value;
            const konu = panel.querySelector("#planKonuInput").value.trim();
            const sure = Number(panel.querySelector("#planSureInput").value) || 0;
            const soru = Number(panel.querySelector("#planSoruInput").value) || 0;

            if (!ders) {
                bilgiGoster("Önce en az bir ders eklemelisin.");
                return;
            }

            dersVeri.calismaPlani.push({
                id: benzersizId(),
                tarih: bugunStr(),
                ders: ders,
                konu: konu,
                sureHedefi: sure,
                soruHedefi: soru,
                tamamlandi: false
            });

            dersVeriKaydet();
            genelBakisiCiz();
        });
    }

    panel.querySelectorAll("[data-plan-id]").forEach(function (satir) {
        const planId = satir.dataset.planId;

        const checkbox = satir.querySelector('[data-aksiyon="plan-check"]');
        if (checkbox) {
            checkbox.addEventListener("change", function () {
                const plan = dersVeri.calismaPlani.find(function (p) { return p.id === planId; });
                if (!plan) return;
                plan.tamamlandi = !plan.tamamlandi;
                dersVeriKaydet();
                genelBakisiCiz();
            });
        }

        const silBtn = satir.querySelector('[data-aksiyon="plan-sil"]');
        if (silBtn) {
            silBtn.addEventListener("click", function () {
                dersVeri.calismaPlani = dersVeri.calismaPlani.filter(function (p) { return p.id !== planId; });
                dersVeriKaydet();
                genelBakisiCiz();
            });
        }
    });

    panel.querySelectorAll("[data-net-filtre-tip]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            netGrafikFiltresi.tip = btn.dataset.netFiltreTip;
            if (netGrafikFiltresi.tip === "brans" && !netGrafikFiltresi.brans && dersVeri.dersler.length > 0) {
                netGrafikFiltresi.brans = dersVeri.dersler[0].ad;
            }
            genelBakisiCiz();
        });
    });

    const bransSecim = panel.querySelector("#netGrafikBransSecim");
    if (bransSecim) {
        bransSecim.addEventListener("change", function () {
            netGrafikFiltresi.brans = bransSecim.value;
            genelBakisiCiz();
        });
    }

    panel.querySelectorAll("[data-zayif-konu-id]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const konuId = btn.dataset.zayifKonuId;
            const konu = tumKonular().find(function (k) { return k.id === konuId; });
            if (!konu) return;
            const ders = konununDersiniBul(konu);
            if (!ders) return;
            konuDetayModaliniAc(ders, konu);
        });
    });

    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("ders_genel");
    }
}


// ==========================================================
// KONULAR SEKMESİ
// ==========================================================

const acikDersKartlari = {};

function konularSayfasiniCiz() {
    const alan = document.getElementById("dersWidgetKonularPanel");
    const tekrarBekleyenKonuSayisi = tumKonular().filter(function (k) { return k.durum === "tekrar_gerekli"; }).length;

    alan.innerHTML = `
        <div class="ders-ust-satir">
            <div class="gorev-formu-satir" style="margin:0; width: 100%;">
                <input type="text" id="yeniDersAdi" placeholder="Yeni ders adı (örn: Fizik)..." style="flex: 1;">
                <button class="ders-buyuk-buton buton-artili" id="yeniDersEkleBtn" title="Yeni Ders Ekle" aria-label="Yeni Ders Ekle">＋</button>
            </div>
        </div>
        ${tekrarBekleyenKonuSayisi > 0 ? `<div class="tekrar-bekliyor-banner">🔄 ${tekrarBekleyenKonuSayisi} konunun tekrarı bekliyor</div>` : ""}
        <div id="dersKartlariAlani"></div>
    `;

    const kartlarAlani = document.getElementById("dersKartlariAlani");

    if (dersVeri.dersler.length === 0) {
        kartlarAlani.innerHTML = '<div class="bos-durum-notu">Henüz ders eklenmedi. Yukarıdan bir ders ekleyerek başla.</div>';
    } else {
        dersVeri.dersler.forEach(function (ders) {
            kartlarAlani.appendChild(dersKartiOlustur(ders));
        });
    }

    document.getElementById("yeniDersEkleBtn").addEventListener("click", function () {
        const input = document.getElementById("yeniDersAdi");
        const ad = input.value.trim();
        if (!ad) return;
        dersVeri.dersler.push({ id: benzersizId(), ad: ad, konular: [] });
        dersVeriKaydet();
        konularSayfasiniCiz();
        genelBakisiCiz();
    });

    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("ders_konular");
    }
}

function dersKartiOlustur(ders) {
    const kart = document.createElement("section");
    kart.className = "ders-karti" + (acikDersKartlari[ders.id] ? " acik" : "");

    const yuzde = konuIlerlemeYuzdesi(ders.konular);

    kart.innerHTML = `
        <div class="ders-karti-baslik" data-aksiyon="ders-ac-kapa">
            <div class="ders-karti-baslik-sol">
                <span class="ders-karti-ok">▶</span>
                <h3>${escapeHtml(ders.ad)}</h3>
            </div>
            <div class="ders-karti-baslik-sol ders-karti-baslik-sag-grup" style="gap:14px;">
                <div class="ilerleme-bar ders-karti-mini-ilerleme"><div class="ilerleme-dolu" style="width:${yuzde}%"></div></div>
                <span class="ilerleme-yuzde">${yuzde}%</span>
                <button class="kategori-sil-btn" data-aksiyon="ders-sil" title="Dersi sil">${IKON.sil}</button>
            </div>
        </div>
        <div class="konu-listesi">
            ${ders.konular.map(function (konu) { return konuSatiriHtml(konu); }).join("") ||
                '<div class="bos-liste-notu">Bu derste henüz konu yok.</div>'}
            <div class="konu-ekle-satiri">
                <input type="text" placeholder="Yeni konu adı..." data-yeni-konu-input style="flex: 1;">
                <button class="ders-ikincil-buton buton-artili" data-aksiyon="konu-ekle" title="Konu Ekle" aria-label="Konu Ekle">＋</button>
            </div>
        </div>
    `;

    kart.querySelector('[data-aksiyon="ders-ac-kapa"]').addEventListener("click", function () {
        acikDersKartlari[ders.id] = !acikDersKartlari[ders.id];
        kart.classList.toggle("acik", acikDersKartlari[ders.id]);
    });

    kart.querySelector('[data-aksiyon="ders-sil"]').addEventListener("click", function (e) {
        e.stopPropagation();
        onayGoster({
            baslik: "Dersi Sil",
            mesaj: `"${ders.ad}" dersini ve tüm konularını silmek istediğine emin misin?`,
            onayMetni: "Sil",
            tehlikeli: true,
            onOnay: function () {
                dersVeri.dersler = dersVeri.dersler.filter(function (d) { return d.id !== ders.id; });
                dersVeriKaydet();
                konularSayfasiniCiz();
                genelBakisiCiz();
            }
        });
    });

    kart.querySelectorAll("[data-durum-rozeti]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const konuId = btn.dataset.konuId;
            const konu = ders.konular.find(function (k) { return k.id === konuId; });
            if (!konu) return;
            konuDetayModaliniAc(ders, konu);
        });
    });

    kart.querySelectorAll("[data-konu-ad]").forEach(function (span) {
        span.addEventListener("click", function (e) {
            e.stopPropagation();
            const konuId = span.dataset.konuAd;
            const konu = ders.konular.find(function (k) { return k.id === konuId; });
            if (!konu) return;
            konuDetayModaliniAc(ders, konu);
        });
    });

    kart.querySelectorAll("[data-konu-sil]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const konuId = btn.dataset.konuSil;
            onayGoster({
                baslik: "Konuyu Sil",
                mesaj: "Bu konuyu silmek istediğine emin misin?",
                onayMetni: "Sil",
                tehlikeli: true,
                onOnay: function () {
                    ders.konular = ders.konular.filter(function (k) { return k.id !== konuId; });
                    dersVeriKaydet();
                    konularSayfasiniCiz();
                    genelBakisiCiz();
                }
            });
        });
    });

    const konuEkleBtn = kart.querySelector('[data-aksiyon="konu-ekle"]');
    konuEkleBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        const input = kart.querySelector("[data-yeni-konu-input]");
        const ad = input.value.trim();
        if (!ad) return;
        ders.konular.push({ id: benzersizId(), ad: ad, durum: "baslanmadi", kayitlar: [], tekrarSayisi: 0, tekrarTarihi: null, tekrarGecmisi: [] });
        acikDersKartlari[ders.id] = true;
        dersVeriKaydet();
        konularSayfasiniCiz();
        genelBakisiCiz();
    });

    return kart;
}

function konuSatiriHtml(konu) {
    const durum = konuDurumBul(konu.durum);
    return `
        <div class="konu-satiri">
            <span class="konu-satiri-ad" data-konu-ad="${konu.id}">${escapeHtml(konu.ad)}</span>
            <div class="konu-satiri-sag">
                <button class="konu-durum-rozeti" data-durum-rozeti data-konu-id="${konu.id}" style="background-color:${durum.renk}">${durum.ad}</button>
                <button class="konu-sil-btn" data-konu-sil="${konu.id}" title="Konuyu sil">${IKON.sil}</button>
            </div>
        </div>
    `;
}


// ==========================================================
// KONU DETAY MODALI
// ==========================================================

const konuModalOverlay = document.getElementById("konuModalOverlay");
let aktifModalDersId = null;
let aktifModalKonuId = null;
let aktifKayitTipi = "test";

function aktifDersKonuBul() {
    const ders = dersVeri.dersler.find(function (d) { return d.id === aktifModalDersId; });
    if (!ders) return { ders: null, konu: null };
    const konu = ders.konular.find(function (k) { return k.id === aktifModalKonuId; });
    return { ders: ders, konu: konu };
}

function konuDetayModaliniAc(ders, konu) {
    aktifModalDersId = ders.id;
    aktifModalKonuId = konu.id;
    aktifKayitTipi = "test";

    document.getElementById("konuModalBaslik").textContent = `${ders.ad} · ${konu.ad}`;
    document.getElementById("konuDurumSecimi").innerHTML = KONU_DURUMLARI.map(function (d) {
        return `<button type="button" data-durum-secim="${d.id}" style="background-color:${d.renk}" class="${d.id === konu.durum ? "aktif" : ""}">${d.ad}</button>`;
    }).join("");

    document.getElementById("konuDurumSecimi").querySelectorAll("[data-durum-secim]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const yeniDurum = btn.dataset.durumSecim;
            const oncekiDurum = konu.durum;

            if (!konu.tekrarGecmisi) konu.tekrarGecmisi = [];

            if (yeniDurum === "tekrar_gerekli" && oncekiDurum !== "tekrar_gerekli") {
                const acikKayit = konu.tekrarGecmisi.find(function (g) { return !g.tamamlanmaTarihi; });
                if (!acikKayit) {
                    konu.tekrarTarihi = konu.tekrarTarihi || gunEkleTarihStr(3);
                    konu.tekrarGecmisi.push({ id: benzersizId(), planlanmaTarihi: konu.tekrarTarihi, tamamlanmaTarihi: null });
                }
            }

            if (yeniDurum === "tekrar_edildi" && oncekiDurum !== "tekrar_edildi") {
                konu.tekrarSayisi = (konu.tekrarSayisi || 0) + 1;
                const acikKayit = konu.tekrarGecmisi.find(function (g) { return !g.tamamlanmaTarihi; });
                if (acikKayit) acikKayit.tamamlanmaTarihi = bugunStr();
                konu.tekrarTarihi = null;
            }

            konu.durum = yeniDurum;
            dersVeriKaydet();
            document.getElementById("konuDurumSecimi").querySelectorAll("button").forEach(function (b) {
                b.classList.toggle("aktif", b === btn);
            });
            konularSayfasiniCiz();
            genelBakisiCiz();
            konuOzetIstatistikleriniCiz(konu);
            konuTekrarBolumunuCiz(konu);
        });
    });

    document.getElementById("konuKayitTipSecimi").querySelectorAll("[data-kayit-tip]").forEach(function (btn) {
        btn.classList.toggle("aktif", btn.dataset.kayitTip === "test");
    });
    document.getElementById("konuKayitTestAlani").classList.remove("gizli");
    document.getElementById("konuKayitCalismaAlani").classList.add("gizli");
    document.getElementById("konuTestSoru").value = "";
    document.getElementById("konuTestDogru").value = "";
    document.getElementById("konuTestYanlis").value = "";
    document.getElementById("konuCalismaSaat").value = "";
    document.getElementById("konuKayitNot").value = "";

    konuOzetIstatistikleriniCiz(konu);
    konuTekrarBolumunuCiz(konu);
    konuKayitListesiniCiz(konu);
    konuModalOverlay.classList.remove("gizli");
}

document.getElementById("konuModalKapat").addEventListener("click", function () {
    konuModalOverlay.classList.add("gizli");
});
konuModalOverlay.addEventListener("click", function (e) {
    if (e.target === konuModalOverlay) konuModalOverlay.classList.add("gizli");
});

document.querySelectorAll("#konuKayitTipSecimi [data-kayit-tip]").forEach(function (btn) {
    btn.addEventListener("click", function () {
        aktifKayitTipi = btn.dataset.kayitTip;
        document.querySelectorAll("#konuKayitTipSecimi [data-kayit-tip]").forEach(function (b) {
            b.classList.toggle("aktif", b === btn);
        });
        document.getElementById("konuKayitTestAlani").classList.toggle("gizli", !SORU_TABANLI_KAYIT_TIPLERI.includes(aktifKayitTipi));
        document.getElementById("konuKayitCalismaAlani").classList.toggle("gizli", !SAAT_TABANLI_KAYIT_TIPLERI.includes(aktifKayitTipi));
    });
});

function konuOzetIstatistikleriniCiz(konu) {
    const alan = document.getElementById("konuOzetIstatistikleri");
    if (!alan) return;

    let toplamSaat = 0, toplamSoru = 0, dogru = 0, yanlis = 0;
    konu.kayitlar.forEach(function (k) {
        if (SORU_TABANLI_KAYIT_TIPLERI.includes(k.tip)) {
            toplamSoru += Number(k.soru) || 0;
            dogru += Number(k.dogru) || 0;
            yanlis += Number(k.yanlis) || 0;
        } else if (SAAT_TABANLI_KAYIT_TIPLERI.includes(k.tip)) {
            toplamSaat += Number(k.saat) || 0;
        }
    });

    const basariOrani = toplamSoru > 0 ? Math.round((dogru / toplamSoru) * 100) : null;
    const sonKayitTarihi = konuSonKayitTarihi(konu);

    alan.innerHTML = `
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger">${ondalikSaatiKisaFormatla(toplamSaat)}</div>
            <div class="konu-ozet-etiket">Toplam Süre</div>
        </div>
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger">${toplamSoru}</div>
            <div class="konu-ozet-etiket">Toplam Soru</div>
        </div>
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger">✅${dogru} / ❌${yanlis}</div>
            <div class="konu-ozet-etiket">Doğru / Yanlış</div>
        </div>
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger">${basariOrani === null ? "—" : "%" + basariOrani}</div>
            <div class="konu-ozet-etiket">Başarı Oranı</div>
        </div>
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger" style="font-size:13px;">${sonKayitTarihi || "—"}</div>
            <div class="konu-ozet-etiket">Son Çalışma</div>
        </div>
        <div class="konu-ozet-kutu">
            <div class="konu-ozet-deger">🔄 ${konu.tekrarSayisi || 0}</div>
            <div class="konu-ozet-etiket">Tekrar Sayısı</div>
        </div>
    `;
}

function konuTekrarBolumunuCiz(konu) {
    const alan = document.getElementById("konuTekrarBolumu");
    if (!alan) return;

    const gecmis = konu.tekrarGecmisi || [];
    const gecmisHtml = gecmis.length === 0
        ? ""
        : gecmis.slice().reverse().map(function (g) {
            return `
                <div class="tekrar-gecmis-satiri">
                    <span>${g.planlanmaTarihi}</span>
                    <span>→</span>
                    <span class="${g.tamamlanmaTarihi ? "tekrar-tamam" : "tekrar-bekliyor"}">${g.tamamlanmaTarihi ? "✅ " + g.tamamlanmaTarihi : "⏳ Bekliyor"}</span>
                </div>
            `;
        }).join("");

    alan.innerHTML = `
        ${konu.durum === "tekrar_gerekli" ? `
            <div class="tekrar-tarihi-satiri">
                <label for="konuTekrarTarihiInput">🔄 Tekrar Tarihi</label>
                <input type="date" id="konuTekrarTarihiInput" value="${konu.tekrarTarihi || ""}">
            </div>
        ` : ""}
        ${gecmis.length > 0 ? `
            <div class="tekrar-gecmis-baslik">Tekrar Geçmişi</div>
            <div class="tekrar-gecmis-listesi">${gecmisHtml}</div>
        ` : ""}
    `;

    const tarihInput = document.getElementById("konuTekrarTarihiInput");
    if (tarihInput) {
        tarihInput.addEventListener("change", function () {
            konu.tekrarTarihi = tarihInput.value || null;
            const acikKayit = (konu.tekrarGecmisi || []).find(function (g) { return !g.tamamlanmaTarihi; });
            if (acikKayit) acikKayit.planlanmaTarihi = konu.tekrarTarihi;
            dersVeriKaydet();
            konuTekrarBolumunuCiz(konu);
        });
    }
}

function konuKayitOzetiOlustur(kayit) {
    if (kayit.tip === "test") {
        return `🧪 ${kayit.soru} soru — ✅ ${kayit.dogru} doğru, ❌ ${kayit.yanlis} yanlış`;
    }
    if (kayit.tip === "tekrar") {
        return `🔄 ${kayit.soru} soru (tekrar) — ✅ ${kayit.dogru} doğru, ❌ ${kayit.yanlis} yanlış`;
    }
    if (kayit.tip === "calisma") {
        return `🎬 ${kayit.saat} saat çalışma`;
    }
    if (kayit.tip === "kitap") {
        return `📚 ${kayit.saat} saat kitap / PDF okuma`;
    }
    return "📝 Not";
}

function konuKayitListesiniCiz(konu) {
    const alan = document.getElementById("konuKayitListesi");
    const kayitlar = konu.kayitlar.slice().sort(function (a, b) { return b.tarih.localeCompare(a.tarih); });

    if (kayitlar.length === 0) {
        alan.innerHTML = '<div class="bos-liste-notu">Henüz kayıt eklenmedi.</div>';
        return;
    }

    alan.innerHTML = kayitlar.map(function (kayit) {
        return `
            <div class="konu-kayit-item">
                <div class="konu-kayit-item-metin">
                    <div>${konuKayitOzetiOlustur(kayit)}</div>
                    ${kayit.not ? `<div style="margin-top:4px;">${escapeHtml(kayit.not)}</div>` : ""}
                    <div class="konu-kayit-item-tarih">${kayit.tarih}</div>
                </div>
                <button class="konu-sil-btn" data-kayit-sil="${kayit.id}" title="Kaydı sil">${IKON.sil}</button>
            </div>
        `;
    }).join("");

    alan.querySelectorAll("[data-kayit-sil]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const { konu } = aktifDersKonuBul();
            if (!konu) return;
            konu.kayitlar = konu.kayitlar.filter(function (k) { return k.id !== btn.dataset.kayitSil; });
            dersVeriKaydet();
            konuKayitListesiniCiz(konu);
            konuOzetIstatistikleriniCiz(konu);
            genelBakisiCiz();
        });
    });
}

document.getElementById("konuKayitEkleBtn").addEventListener("click", function () {
    const { konu } = aktifDersKonuBul();
    if (!konu) return;

    const not = document.getElementById("konuKayitNot").value.trim();
    let kayit = { id: benzersizId(), tip: aktifKayitTipi, tarih: bugunStr(), not: not };

    if (SORU_TABANLI_KAYIT_TIPLERI.includes(aktifKayitTipi)) {
        const soru = Number(document.getElementById("konuTestSoru").value) || 0;
        const dogru = Number(document.getElementById("konuTestDogru").value) || 0;
        const yanlis = Number(document.getElementById("konuTestYanlis").value) || 0;
        if (soru <= 0 && !not) {
            bilgiGoster("Lütfen soru sayısı gir veya bir not yaz.");
            return;
        }
        kayit.soru = soru;
        kayit.dogru = dogru;
        kayit.yanlis = yanlis;
    } else if (SAAT_TABANLI_KAYIT_TIPLERI.includes(aktifKayitTipi)) {
        const saat = Number(document.getElementById("konuCalismaSaat").value) || 0;
        if (saat <= 0 && !not) {
            bilgiGoster("Lütfen süre gir veya bir not yaz.");
            return;
        }
        kayit.saat = saat;
    } else {
        if (!not) {
            bilgiGoster("Lütfen bir not yaz.");
            return;
        }
    }

    konu.kayitlar.push(kayit);
    dersVeri.calismaGunleri[bugunStr()] = true; // çalışma kaydı otomatik olarak bugünü işaretler

    // Veri bağlantısı: bir çalışma kaydı eklendiğinde konu henüz "Başlanmadı"
    // durumundaysa otomatik olarak "Çalışılıyor"a geçsin — konu ilerlemesi,
    // toplam soru/süre ve genel istatistikler hep aynı dersVeri'den okunduğu
    // için tek yapılması gereken bağlı görünümleri yeniden çizmek.
    if (konu.durum === "baslanmadi") {
        konu.durum = "calisiyor";
        if (!konu.tekrarGecmisi) konu.tekrarGecmisi = [];
    }

    dersVeriKaydet();

    document.getElementById("konuTestSoru").value = "";
    document.getElementById("konuTestDogru").value = "";
    document.getElementById("konuTestYanlis").value = "";
    document.getElementById("konuCalismaSaat").value = "";
    document.getElementById("konuKayitNot").value = "";

    konuKayitListesiniCiz(konu);
    konuOzetIstatistikleriniCiz(konu);
    if (!dersSayfaEl.classList.contains("gizli")) {
        takipSayfasiniCiz();
        genelBakisiCiz();
        konularSayfasiniCiz();
    }
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
});


// ==========================================================
// DENEMELER SEKMESİ
// ==========================================================

let denemeFormTipi = "genel";

function denemeIstatistikleriHesapla() {
    const denemeler = dersVeri.denemeler;
    if (denemeler.length === 0) return null;

    const netler = denemeler.map(function (d) { return d.toplamNet; });
    const siraliTarih = denemeler.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
    const sonBes = siraliTarih.slice(-5);

    return {
        adet: denemeler.length,
        ortalama: netler.reduce(function (a, b) { return a + b; }, 0) / netler.length,
        enYuksek: Math.max.apply(null, netler),
        enDusuk: Math.min.apply(null, netler),
        son: siraliTarih[siraliTarih.length - 1].toplamNet,
        sonBesOrtalama: sonBes.reduce(function (a, d) { return a + d.toplamNet; }, 0) / sonBes.length
    };
}

function denemelerSayfasiniCiz() {
    const dersAdlari = dersVeri.dersler.map(function (d) { return d.ad; });
    const ist = denemeIstatistikleriHesapla();

    const istatistikAlani = document.getElementById("dersWidgetDenemeIstatistikler");
    if (istatistikAlani) {
        istatistikAlani.innerHTML = ist ? `
        <div class="ders-karti widget-ic-kart">
            <div class="istatistik-kutu-grid">
                <div class="istatistik-kutu">
                    <div class="istatistik-kutu-baslik">Ortalama Net</div>
                    <div class="istatistik-kutu-deger">${netFormatla(ist.ortalama)}</div>
                    <div class="istatistik-kutu-alt">${ist.adet} deneme üzerinden</div>
                </div>
                <div class="istatistik-kutu">
                    <div class="istatistik-kutu-baslik">En Yüksek Net</div>
                    <div class="istatistik-kutu-deger">${netFormatla(ist.enYuksek)}</div>
                    <div class="istatistik-kutu-alt">Kişisel rekor</div>
                </div>
                <div class="istatistik-kutu">
                    <div class="istatistik-kutu-baslik">En Düşük Net</div>
                    <div class="istatistik-kutu-deger">${netFormatla(ist.enDusuk)}</div>
                    <div class="istatistik-kutu-alt">Gelişim alanı</div>
                </div>
                <div class="istatistik-kutu">
                    <div class="istatistik-kutu-baslik">Son Net</div>
                    <div class="istatistik-kutu-deger">${netFormatla(ist.son)}</div>
                    <div class="istatistik-kutu-alt">En son giriş</div>
                </div>
                <div class="istatistik-kutu">
                    <div class="istatistik-kutu-baslik">Son 5 Deneme Ort.</div>
                    <div class="istatistik-kutu-deger">${netFormatla(ist.sonBesOrtalama)}</div>
                    <div class="istatistik-kutu-alt">Yakın dönem trendi</div>
                </div>
            </div>
        </div>` : `<div class="ders-karti widget-ic-kart"><div class="bos-durum-notu">Henüz deneme yok.</div></div>`;
    }

    const ekleAlani = document.getElementById("dersWidgetDenemeEkle");
    if (ekleAlani) {
        ekleAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header"><h2>📝 Yeni Deneme Ekle</h2></div>
            <div class="deneme-formu">
                <div class="deneme-tip-secimi">
                    <button type="button" class="tekrar-btn ${denemeFormTipi === "genel" ? "aktif" : ""}" data-deneme-tip="genel">Genel Deneme</button>
                    <button type="button" class="tekrar-btn ${denemeFormTipi === "brans" ? "aktif" : ""}" data-deneme-tip="brans">Branş Denemesi</button>
                </div>
                <div class="gorev-formu-satir">
                    <input type="text" id="denemeAdi" placeholder="Deneme adı (örn: Hız Yayınları 3)...">
                    <input type="date" id="denemeTarihi" value="${bugunStr()}">
                </div>
                ${denemeFormTipi === "brans" ? `
                    <div class="gorev-formu-satir">
                        <select id="denemeBransSecim">
                            ${dersAdlari.length ? dersAdlari.map(function (ad) { return `<option value="${escapeHtml(ad)}">${escapeHtml(ad)}</option>`; }).join("") : '<option value="Genel">Genel</option>'}
                        </select>
                    </div>
                    <div class="deneme-brans-satiri">
                        <span>Sonuç</span>
                        <input type="number" min="0" id="bransDogru" placeholder="Doğru">
                        <input type="number" min="0" id="bransYanlis" placeholder="Yanlış">
                    </div>
                ` : `
                    <div class="deneme-brans-satirlari" id="genelDenemeBranslari">
                        ${(dersAdlari.length ? dersAdlari : ["Genel"]).map(function (ad, i) {
                            return `
                            <div class="deneme-brans-satiri">
                                <span>${escapeHtml(ad)}</span>
                                <input type="number" min="0" data-genel-dogru="${i}" data-brans-adi="${escapeHtml(ad)}" placeholder="Doğru">
                                <input type="number" min="0" data-genel-yanlis="${i}" placeholder="Yanlış">
                            </div>`;
                        }).join("")}
                    </div>
                `}
                <button class="ders-buyuk-buton" id="denemeKaydetBtn" style="align-self:flex-end; gap: 6px;">＋ Kaydet</button>
            </div>
        </div>`;
    }

    const gecmisAlani = document.getElementById("dersWidgetDenemeGecmisi");
    if (gecmisAlani) {
        gecmisAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header"><h2>📊 Deneme Geçmişi</h2></div>
            <div class="deneme-listesi" id="denemeListesiAlani"></div>
        </div>`;
    }

    document.querySelectorAll("[data-deneme-tip]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            denemeFormTipi = btn.dataset.denemeTip;
            denemelerSayfasiniCiz();
        });
    });

    document.getElementById("denemeKaydetBtn").addEventListener("click", denemeKaydet);

    denemeListesiniCiz();

    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("ders_denemeler");
    }
}

function denemeKaydet() {
    const ad = document.getElementById("denemeAdi").value.trim();
    const tarih = document.getElementById("denemeTarihi").value || bugunStr();

    if (denemeFormTipi === "brans") {
        const brans = document.getElementById("denemeBransSecim").value;
        const dogru = Number(document.getElementById("bransDogru").value) || 0;
        const yanlis = Number(document.getElementById("bransYanlis").value) || 0;
        if (dogru === 0 && yanlis === 0) {
            bilgiGoster("Lütfen doğru veya yanlış sayısı gir.");
            return;
        }
        dersVeri.denemeler.push({
            id: benzersizId(), tip: "brans", ad: ad || (brans + " Denemesi"), brans: brans, tarih: tarih,
            branslar: [{ ad: brans, dogru: dogru, yanlis: yanlis }],
            toplamDogru: dogru, toplamYanlis: yanlis, toplamNet: netHesapla(dogru, yanlis)
        });
    } else {
        const satirlar = Array.from(document.querySelectorAll("#genelDenemeBranslari [data-genel-dogru]"));
        const branslar = [];
        let toplamDogru = 0, toplamYanlis = 0;
        satirlar.forEach(function (input) {
            const i = input.dataset.genelDogru;
            const bransAdi = input.dataset.bransAdi;
            const dogru = Number(input.value) || 0;
            const yanlisInput = document.querySelector('[data-genel-yanlis="' + i + '"]');
            const yanlis = Number(yanlisInput.value) || 0;
            if (dogru > 0 || yanlis > 0) branslar.push({ ad: bransAdi, dogru: dogru, yanlis: yanlis });
            toplamDogru += dogru;
            toplamYanlis += yanlis;
        });
        if (toplamDogru === 0 && toplamYanlis === 0) {
            bilgiGoster("Lütfen en az bir branş için sonuç gir.");
            return;
        }
        dersVeri.denemeler.push({
            id: benzersizId(), tip: "genel", ad: ad || "Genel Deneme", brans: null, tarih: tarih,
            branslar: branslar, toplamDogru: toplamDogru, toplamYanlis: toplamYanlis,
            toplamNet: netHesapla(toplamDogru, toplamYanlis)
        });
    }

    dersVeri.calismaGunleri[tarih] = true;
    dersVeriKaydet();
    denemelerSayfasiniCiz();
    genelBakisiCiz();
    takipSayfasiniCiz();
}

function denemeMiniGrafikCiz(deneme, ayniTuranDenemeler) {
    const sirali = ayniTuranDenemeler.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
    const sonSekiz = sirali.slice(-8);
    const netler = sonSekiz.map(function (d) { return d.toplamNet; });
    const maxNet = Math.max.apply(null, netler.concat([1]));
    const minNet = Math.min.apply(null, netler.concat([0]));
    const aralik = Math.max(maxNet - minNet, 1);

    const cubuklarHtml = sonSekiz.map(function (d) {
        const yukseklik = Math.max(2, Math.round((d.toplamNet / maxNet) * 44));
        const sonMu = d.id === deneme.id;
        return `<div class="mini-grafik-cubuk ${sonMu ? "son" : ""}" style="height:${yukseklik}px" title="${d.tarih}: ${netFormatla(d.toplamNet)} net"></div>`;
    }).join("");

    // Çizgi grafiği için 100x44'lük bir alana koordinat hesabı
    const genislik = 100;
    const yukseklik = 44;
    const noktalar = sonSekiz.map(function (d, i) {
        const x = sonSekiz.length > 1 ? (i / (sonSekiz.length - 1)) * genislik : genislik / 2;
        const y = yukseklik - ((d.toplamNet - minNet) / aralik) * yukseklik;
        return { x: x, y: y, net: d.toplamNet, tarih: d.tarih };
    });

    const polylineNoktalari = noktalar.map(function (n) { return n.x + "," + n.y; }).join(" ");

    const dairelerHtml = noktalar.map(function (n, i) {
        const sonMu = i === noktalar.length - 1;
        return `<circle cx="${n.x}" cy="${n.y}" r="${sonMu ? 3 : 2}" class="cizgi-grafik-nokta"><title>${n.tarih}: ${netFormatla(n.net)} net</title></circle>`;
    }).join("");

    return `
        <div class="deneme-grafik-satiri">
            <div class="mini-grafik">${cubuklarHtml}</div>
            <svg class="cizgi-grafik" viewBox="0 0 ${genislik} ${yukseklik}" preserveAspectRatio="none">
                <polyline points="${polylineNoktalari}" class="cizgi-grafik-cizgi"></polyline>
                ${dairelerHtml}
            </svg>
        </div>
    `;
}

function denemeListesiniCiz() {
    const alan = document.getElementById("denemeListesiAlani");
    if (dersVeri.denemeler.length === 0) {
        alan.innerHTML = '<div class="bos-durum-notu">Henüz deneme eklenmedi.</div>';
        return;
    }

    const siraliTumu = dersVeri.denemeler.slice().sort(function (a, b) { return b.tarih.localeCompare(a.tarih); });

    alan.innerHTML = siraliTumu.map(function (deneme) {
        const ayniTur = dersVeri.denemeler.filter(function (d) {
            return deneme.tip === "genel" ? d.tip === "genel" : (d.tip === "brans" && d.brans === deneme.brans);
        });
        const sirali = ayniTur.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
        const kendiIndex = sirali.findIndex(function (d) { return d.id === deneme.id; });
        let farkHtml = "";
        if (kendiIndex > 0) {
            const fark = deneme.toplamNet - sirali[kendiIndex - 1].toplamNet;
            const sinifi = fark >= 0 ? "deneme-fark-yukari" : "deneme-fark-asagi";
            farkHtml = `<span class="${sinifi}">${fark >= 0 ? IKON.artis : IKON.azalis} ${netFormatla(Math.abs(fark))} net</span>`;
        }

        return `
            <div class="deneme-karti" data-deneme-ac="${deneme.id}">
                <div class="deneme-karti-ust">
                    <div>
                        <h4>${escapeHtml(deneme.ad)} ${deneme.tip === "brans" ? "· 📌 Branş" : "· 🗂️ Genel"}</h4>
                        <div class="deneme-karti-tarih">${deneme.tarih} ${farkHtml ? "· " + farkHtml : ""}</div>
                    </div>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <div class="deneme-net-rozeti">${netFormatla(deneme.toplamNet)} net</div>
                        <button class="konu-sil-btn" data-deneme-sil="${deneme.id}" title="Sil">${IKON.sil}</button>
                    </div>
                </div>
                <div class="deneme-brans-detay">
                    ${deneme.branslar.map(function (b) {
                        return `<div>${escapeHtml(b.ad)}: ${b.dogru}D / ${b.yanlis}Y (${netFormatla(netHesapla(b.dogru, b.yanlis))} net)</div>`;
                    }).join("")}
                </div>
                ${ayniTur.length > 1 ? denemeMiniGrafikCiz(deneme, ayniTur) : ""}
            </div>
        `;
    }).join("");

    alan.querySelectorAll("[data-deneme-sil]").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            onayGoster({
                baslik: "Denemeyi Sil", mesaj: "Bu denemeyi silmek istediğine emin misin?",
                onayMetni: "Sil", tehlikeli: true,
                onOnay: function () {
                    dersVeri.denemeler = dersVeri.denemeler.filter(function (d) { return d.id !== btn.dataset.denemeSil; });
                    dersVeriKaydet();
                    denemelerSayfasiniCiz();
                    genelBakisiCiz();
                }
            });
        });
    });

    alan.querySelectorAll("[data-deneme-ac]").forEach(function (kart) {
        kart.addEventListener("click", function () {
            const deneme = dersVeri.denemeler.find(function (d) { return d.id === kart.dataset.denemeAc; });
            if (deneme) denemeDetayModaliniAc(deneme);
        });
    });
}

const denemeModalOverlay = document.getElementById("denemeModalOverlay");

function denemeDetayModaliniAc(deneme) {
    const ayniTur = dersVeri.denemeler.filter(function (d) {
        return deneme.tip === "genel" ? d.tip === "genel" : (d.tip === "brans" && d.brans === deneme.brans);
    });
    const sirali = ayniTur.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
    const kendiIndex = sirali.findIndex(function (d) { return d.id === deneme.id; });
    const onceki = kendiIndex > 0 ? sirali[kendiIndex - 1] : null;
    const genelFark = onceki ? deneme.toplamNet - onceki.toplamNet : null;

    document.getElementById("denemeModalBaslik").textContent = `${deneme.ad} · ${deneme.tarih}`;

    document.getElementById("denemeModalGenelOzet").innerHTML = `
        <div class="konu-ozet-grid">
            <div class="konu-ozet-kutu">
                <div class="konu-ozet-deger">${netFormatla(deneme.toplamNet)}</div>
                <div class="konu-ozet-etiket">Toplam Net</div>
            </div>
            <div class="konu-ozet-kutu">
                <div class="konu-ozet-deger">${deneme.toplamDogru}</div>
                <div class="konu-ozet-etiket">Doğru</div>
            </div>
            <div class="konu-ozet-kutu">
                <div class="konu-ozet-deger">${deneme.toplamYanlis}</div>
                <div class="konu-ozet-etiket">Yanlış</div>
            </div>
            <div class="konu-ozet-kutu">
                <div class="konu-ozet-deger ${genelFark === null ? "" : (genelFark >= 0 ? "deneme-fark-yukari" : "deneme-fark-asagi")}">
                    ${genelFark === null ? "—" : (genelFark >= 0 ? IKON.artis : IKON.azalis) + netFormatla(Math.abs(genelFark))}
                </div>
                <div class="konu-ozet-etiket">${onceki ? "Önceki Denemeye Göre" : "İlk Deneme"}</div>
            </div>
        </div>
    `;

    document.getElementById("denemeModalBransListesi").innerHTML = deneme.branslar.map(function (b) {
        const net = netHesapla(b.dogru, b.yanlis);
        let farkHtml = '<span class="deneme-brans-fark-notu">İlk kayıt</span>';

        if (onceki) {
            const oncekiBrans = onceki.branslar.find(function (ob) { return ob.ad === b.ad; });
            if (oncekiBrans) {
                const oncekiNet = netHesapla(oncekiBrans.dogru, oncekiBrans.yanlis);
                const fark = net - oncekiNet;
                const sinifi = fark >= 0 ? "deneme-fark-yukari" : "deneme-fark-asagi";
                farkHtml = `<span class="${sinifi}">${fark >= 0 ? IKON.artis : IKON.azalis} ${netFormatla(Math.abs(fark))}</span>`;
            } else {
                farkHtml = '<span class="deneme-brans-fark-notu">Önceki denemede yok</span>';
            }
        }

        return `
            <div class="deneme-brans-detay-satiri">
                <span class="deneme-brans-detay-ad">${escapeHtml(b.ad)}</span>
                <span>${b.dogru}D / ${b.yanlis}Y</span>
                <span class="deneme-brans-detay-net">${netFormatla(net)} net</span>
                ${farkHtml}
            </div>
        `;
    }).join("");

    denemeModalOverlay.classList.remove("gizli");
}

document.getElementById("denemeModalKapat").addEventListener("click", function () {
    denemeModalOverlay.classList.add("gizli");
});
denemeModalOverlay.addEventListener("click", function (e) {
    if (e.target === denemeModalOverlay) denemeModalOverlay.classList.add("gizli");
});


// ==========================================================
// YANLIŞLARIM SEKMESİ
// ==========================================================

let yanlisSecilenSebep = null;
let yanlisSecilenMedya = null; // { data: dataURL, tip: "image"|"video" }
let yanlisFiltreDers = "hepsi";
let yanlisFiltreKonu = "";
let yanlisFiltreSebep = "hepsi";
let yanlisFiltreTekrar = "hepsi";
let yanlisFiltreBaslangic = "";
let yanlisFiltreBitis = "";

function yanlisSebepAnaliziHtml() {
    const tumYanlislar = dersVeri.yanlislar;
    if (tumYanlislar.length === 0) return "";

    const sayaclar = {};
    tumYanlislar.forEach(function (y) { sayaclar[y.sebep] = (sayaclar[y.sebep] || 0) + 1; });

    const siraliSebepler = Object.keys(sayaclar).sort(function (a, b) { return sayaclar[b] - sayaclar[a]; });

    const satirlarHtml = siraliSebepler.map(function (sebep) {
        const adet = sayaclar[sebep];
        const yuzde = Math.round((adet / tumYanlislar.length) * 100);
        return `
            <div class="yanlis-sebep-analiz-satiri">
                <span class="yanlis-sebep-analiz-ad">${escapeHtml(sebep)}</span>
                <div class="ilerleme-bar"><div class="ilerleme-dolu" style="width:${yuzde}%"></div></div>
                <span class="yanlis-sebep-analiz-sayi">%${yuzde} (${adet})</span>
            </div>
        `;
    }).join("");

    return `
        <div class="ders-karti">
            <div class="section-header"><h2>📊 Yanlış Sebebi Analizi</h2></div>
            ${satirlarHtml}
        </div>
    `;
}

function yanlislarSayfasiniCiz() {
    const dersAdlari = dersVeri.dersler.map(function (d) { return d.ad; });

    const ekleAlani = document.getElementById("dersWidgetYanlisEkle");
    if (ekleAlani) {
        ekleAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header"><h2>➕ Yanlış Soru Ekle</h2></div>
            <div class="yanlis-formu">
                <div class="gorev-formu-satir">
                    <select id="yanlisDersSecim">
                        <option value="">Ders seç...</option>
                        ${dersAdlari.map(function (ad) { return `<option value="${escapeHtml(ad)}">${escapeHtml(ad)}</option>`; }).join("")}
                    </select>
                    <input type="text" id="yanlisKonuMetin" placeholder="Konu (örn: Paragraf)">
                    <input type="date" id="yanlisTarih" value="${bugunStr()}">
                </div>
                <textarea id="yanlisNotMetin" class="konu-not-textarea" rows="2" placeholder="Soru ile ilgili not yaz (opsiyonel, fotoğraf/video da ekleyebilirsin)..."></textarea>
                <div class="gorev-formu-satir">
                    <input type="file" id="yanlisMedyaInput" accept="image/*,video/*">
                </div>
                <div>
                    <label class="modal-label">Yanlış sebebi</label>
                    <div class="yanlis-sebep-pilleri" id="yanlisSebepPilleri">
                        ${YANLIS_SEBEPLERI.map(function (s) {
                            return `<button type="button" class="yanlis-sebep-pil" data-sebep="${escapeHtml(s)}">${escapeHtml(s)}</button>`;
                        }).join("")}
                    </div>
                </div>
                <button class="ders-buyuk-buton" id="yanlisKaydetBtn" style="align-self:flex-end; gap: 6px;">＋ Kaydet</button>
            </div>
        </div>`;
    }

    const analizAlani = document.getElementById("dersWidgetYanlisAnaliz");
    if (analizAlani) {
        analizAlani.innerHTML = `<div class="widget-ic-kart">${yanlisSebepAnaliziHtml()}</div>`;
    }

    const arsivAlani = document.getElementById("dersWidgetYanlisArsiv");
    if (arsivAlani) {
        arsivAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header"><h2>❌ Yanlış Arşivim</h2></div>
            <div class="yanlis-filtre-satiri">
                <select id="yanlisFiltreSecim">
                    <option value="hepsi">Tüm Dersler</option>
                    ${dersAdlari.map(function (ad) {
                        return `<option value="${escapeHtml(ad)}" ${yanlisFiltreDers === ad ? "selected" : ""}>${escapeHtml(ad)}</option>`;
                    }).join("")}
                </select>
                <input type="text" id="yanlisFiltreKonuInput" placeholder="Konu ara..." value="${escapeHtml(yanlisFiltreKonu)}">
                <select id="yanlisFiltreSebepSecim">
                    <option value="hepsi">Tüm Sebepler</option>
                    ${YANLIS_SEBEPLERI.map(function (s) {
                        return `<option value="${escapeHtml(s)}" ${yanlisFiltreSebep === s ? "selected" : ""}>${escapeHtml(s)}</option>`;
                    }).join("")}
                </select>
                <select id="yanlisFiltreTekrarSecim">
                    <option value="hepsi" ${yanlisFiltreTekrar === "hepsi" ? "selected" : ""}>Tümü (Durum)</option>
                    <option value="edilmedi" ${yanlisFiltreTekrar === "edilmedi" ? "selected" : ""}>🔴 Tekrar edilmedi</option>
                    <option value="edildi" ${yanlisFiltreTekrar === "edildi" ? "selected" : ""}>🟢 Tekrar edildi</option>
                </select>
                <input type="date" id="yanlisFiltreBaslangicInput" value="${yanlisFiltreBaslangic}" title="Başlangıç tarihi">
                <input type="date" id="yanlisFiltreBitisInput" value="${yanlisFiltreBitis}" title="Bitiş tarihi">
                <button type="button" id="yanlisFiltreTemizleBtn" class="yanlis-filtre-temizle-btn">Filtreleri Temizle</button>
            </div>
            <div class="yanlis-grid" id="yanlisGridAlani"></div>
        </div>`;
    }

    document.getElementById("yanlisSebepPilleri").querySelectorAll("[data-sebep]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            yanlisSecilenSebep = btn.dataset.sebep;
            document.querySelectorAll("#yanlisSebepPilleri [data-sebep]").forEach(function (b) {
                b.classList.toggle("secili", b === btn);
            });
        });
    });

    document.getElementById("yanlisMedyaInput").addEventListener("change", function (e) {
        const dosya = e.target.files[0];
        if (!dosya) { yanlisSecilenMedya = null; return; }
        if (dosya.size > 4 * 1024 * 1024) {
            bilgiGoster("Dosya çok büyük (4MB üzeri). Daha küçük bir dosya seçmeyi dene, aksi halde tarayıcı depolaması dolabilir.");
            e.target.value = "";
            yanlisSecilenMedya = null;
            return;
        }
        const reader = new FileReader();
        reader.onload = function () {
            yanlisSecilenMedya = { data: reader.result, tip: dosya.type.startsWith("video") ? "video" : "image" };
        };
        reader.readAsDataURL(dosya);
    });

    document.getElementById("yanlisKaydetBtn").addEventListener("click", yanlisKaydet);

    document.getElementById("yanlisFiltreSecim").addEventListener("change", function () {
        yanlisFiltreDers = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreKonuInput").addEventListener("input", function () {
        yanlisFiltreKonu = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreSebepSecim").addEventListener("change", function () {
        yanlisFiltreSebep = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreTekrarSecim").addEventListener("change", function () {
        yanlisFiltreTekrar = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreBaslangicInput").addEventListener("change", function () {
        yanlisFiltreBaslangic = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreBitisInput").addEventListener("change", function () {
        yanlisFiltreBitis = this.value;
        yanlisGridiCiz();
    });

    document.getElementById("yanlisFiltreTemizleBtn").addEventListener("click", function () {
        yanlisFiltreDers = "hepsi";
        yanlisFiltreKonu = "";
        yanlisFiltreSebep = "hepsi";
        yanlisFiltreTekrar = "hepsi";
        yanlisFiltreBaslangic = "";
        yanlisFiltreBitis = "";
        yanlislarSayfasiniCiz();
    });

    yanlisGridiCiz();

    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("ders_yanlislar");
    }
}

function yanlisKaydet() {
    const ders = document.getElementById("yanlisDersSecim").value;
    const konu = document.getElementById("yanlisKonuMetin").value.trim();
    const tarih = document.getElementById("yanlisTarih").value || bugunStr();
    const not = document.getElementById("yanlisNotMetin").value.trim();

    if (!ders) {
        bilgiGoster("Lütfen bir ders seç.");
        return;
    }
    if (!yanlisSecilenSebep) {
        bilgiGoster("Lütfen bir yanlış sebebi seç.");
        return;
    }

    dersVeri.yanlislar.push({
        id: benzersizId(), tarih: tarih, ders: ders, konu: konu, sebep: yanlisSecilenSebep, not: not,
        medya: yanlisSecilenMedya ? yanlisSecilenMedya.data : null,
        medyaTip: yanlisSecilenMedya ? yanlisSecilenMedya.tip : null,
        tekrarEdildi: false
    });

    dersVeriKaydet();
    yanlisSecilenSebep = null;
    yanlisSecilenMedya = null;
    yanlislarSayfasiniCiz();
    genelBakisiCiz();
}

function yanlisGridiCiz() {
    const alan = document.getElementById("yanlisGridAlani");
    let liste = dersVeri.yanlislar.slice().sort(function (a, b) { return b.tarih.localeCompare(a.tarih); });

    if (yanlisFiltreDers !== "hepsi") {
        liste = liste.filter(function (y) { return y.ders === yanlisFiltreDers; });
    }
    if (yanlisFiltreKonu.trim() !== "") {
        const arananKonu = yanlisFiltreKonu.trim().toLocaleLowerCase("tr");
        liste = liste.filter(function (y) { return (y.konu || "").toLocaleLowerCase("tr").includes(arananKonu); });
    }
    if (yanlisFiltreSebep !== "hepsi") {
        liste = liste.filter(function (y) { return y.sebep === yanlisFiltreSebep; });
    }
    if (yanlisFiltreTekrar !== "hepsi") {
        const aranan = yanlisFiltreTekrar === "edildi";
        liste = liste.filter(function (y) { return !!y.tekrarEdildi === aranan; });
    }
    if (yanlisFiltreBaslangic) {
        liste = liste.filter(function (y) { return y.tarih >= yanlisFiltreBaslangic; });
    }
    if (yanlisFiltreBitis) {
        liste = liste.filter(function (y) { return y.tarih <= yanlisFiltreBitis; });
    }

    if (liste.length === 0) {
        alan.innerHTML = '<div class="bos-durum-notu">Bu filtrelere uyan yanlış soru yok.</div>';
        return;
    }

    alan.innerHTML = liste.map(function (y) {
        let medyaHtml = "";
        if (y.medya && y.medyaTip === "image") medyaHtml = `<img src="${y.medya}" alt="Yanlış soru görseli">`;
        else if (y.medya && y.medyaTip === "video") medyaHtml = `<video src="${y.medya}" controls></video>`;

        return `
            <div class="yanlis-karti" data-yanlis-id="${y.id}">
                ${medyaHtml}
                <div class="yanlis-etiket-satiri">
                    <span>${escapeHtml(y.ders)}${y.konu ? " · " + escapeHtml(y.konu) : ""}</span>
                    <span>${y.tarih}</span>
                </div>
                <span class="yanlis-sebep-rozet" style="align-self:flex-start;">${escapeHtml(y.sebep)}</span>
                ${y.not ? `<p>${escapeHtml(y.not)}</p>` : ""}
                <div class="yanlis-karti-alt">
                    <button class="yanlis-tekrar-durum ${y.tekrarEdildi ? "edildi" : "edilmedi"}" data-yanlis-tekrar="${y.id}">
                        ${y.tekrarEdildi ? "🟢 Tekrar edildi" : "🔴 Tekrar edilmedi"}
                    </button>
                    <button class="konu-sil-btn" data-yanlis-sil="${y.id}" title="Sil">${IKON.sil}</button>
                </div>
            </div>
        `;
    }).join("");

    alan.querySelectorAll("[data-yanlis-sil]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            onayGoster({
                baslik: "Yanlışı Sil", mesaj: "Bu kaydı silmek istediğine emin misin?",
                onayMetni: "Sil", tehlikeli: true,
                onOnay: function () {
                    dersVeri.yanlislar = dersVeri.yanlislar.filter(function (y) { return y.id !== btn.dataset.yanlisSil; });
                    dersVeriKaydet();
                    yanlislarSayfasiniCiz();
                    genelBakisiCiz();
                }
            });
        });
    });

    alan.querySelectorAll("[data-yanlis-tekrar]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const yanlis = dersVeri.yanlislar.find(function (y) { return y.id === btn.dataset.yanlisTekrar; });
            if (!yanlis) return;
            yanlis.tekrarEdildi = !yanlis.tekrarEdildi;
            dersVeriKaydet();
            yanlisGridiCiz();
        });
    });
}


// ==========================================================
// ÇALIŞMA TAKİBİ SEKMESİ
// ==========================================================

let calismaTakvimAyi = new Date();
calismaTakvimAyi.setDate(1);

function enUzunSeriHesapla() {
    const gunler = Object.keys(dersVeri.calismaGunleri).filter(function (t) { return dersVeri.calismaGunleri[t]; }).sort();
    if (gunler.length === 0) return 0;
    let enUzun = 1, guncelSeri = 1;
    for (let i = 1; i < gunler.length; i++) {
        const onceki = new Date(gunler[i - 1] + "T00:00:00");
        const simdiki = new Date(gunler[i] + "T00:00:00");
        const farkGun = Math.round((simdiki - onceki) / (1000 * 60 * 60 * 24));
        if (farkGun === 1) {
            guncelSeri++;
        } else {
            guncelSeri = 1;
        }
        enUzun = Math.max(enUzun, guncelSeri);
    }
    return enUzun;
}

function tumKonuKayitlariniTopla() {
    const sonuc = [];
    dersVeri.dersler.forEach(function (ders) {
        ders.konular.forEach(function (konu) {
            konu.kayitlar.forEach(function (kayit) {
                sonuc.push(Object.assign({ dersAdi: ders.ad }, kayit));
            });
        });
    });
    return sonuc;
}

function haftalikCalismaVerisiHesapla() {
    const bugun = new Date();
    const pazartesi = new Date(bugun);
    pazartesi.setDate(bugun.getDate() - gunIndeksi(bugun));
    pazartesi.setHours(0, 0, 0, 0);

    const gunlukSaatler = [0, 0, 0, 0, 0, 0, 0];
    const kayitlar = tumKonuKayitlariniTopla();

    kayitlar.forEach(function (kayit) {
        if (kayit.tip !== "calisma") return;
        const kayitTarihi = new Date(kayit.tarih + "T00:00:00");
        const farkGun = Math.round((kayitTarihi - pazartesi) / (1000 * 60 * 60 * 24));
        if (farkGun >= 0 && farkGun < 7) {
            gunlukSaatler[farkGun] += Number(kayit.saat) || 0;
        }
    });

    return gunAdlari.map(function (ad, i) {
        return { gun: ad, saat: gunlukSaatler[i] };
    });
}

function aylikOzetHesapla() {
    const bugun = new Date();
    const ayBasi = tarihStr(new Date(bugun.getFullYear(), bugun.getMonth(), 1));
    const aySonu = tarihStr(new Date(bugun.getFullYear(), bugun.getMonth() + 1, 0));

    const kayitlar = tumKonuKayitlariniTopla().filter(function (k) {
        return k.tarih >= ayBasi && k.tarih <= aySonu;
    });

    let toplamSaat = 0;
    let cozulenSoru = 0;
    const calisilanGunler = new Set();
    const dersSaatleri = {};

    kayitlar.forEach(function (kayit) {
        calisilanGunler.add(kayit.tarih);

        if (kayit.tip === "calisma") {
            const saat = Number(kayit.saat) || 0;
            toplamSaat += saat;
            dersSaatleri[kayit.dersAdi] = (dersSaatleri[kayit.dersAdi] || 0) + saat;
        }

        if (kayit.tip === "test") {
            cozulenSoru += Number(kayit.soru) || 0;
        }
    });

    const calisilanGun = calisilanGunler.size;
    const ortalamaSure = calisilanGun > 0 ? toplamSaat / calisilanGun : 0;

    let enCokCalisilanDers = "—";
    let enYuksekSaat = 0;
    Object.keys(dersSaatleri).forEach(function (ad) {
        if (dersSaatleri[ad] > enYuksekSaat) {
            enYuksekSaat = dersSaatleri[ad];
            enCokCalisilanDers = ad;
        }
    });

    return {
        toplamSaat: toplamSaat,
        calisilanGun: calisilanGun,
        ortalamaSure: ortalamaSure,
        cozulenSoru: cozulenSoru,
        enCokCalisilanDers: enCokCalisilanDers
    };
}

// Haftanın başlangıcını (Pazartesi, 00:00) döndürür.
function haftaBaslangiciHesapla(tarih) {
    const d = new Date(tarih);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - gunIndeksi(d));
    return d;
}

// Belirtilen tarih aralığında (iki uç dahil), süre bazlı kayıtları ders adına
// göre toplayıp büyükten küçüğe sıralı liste döndürür.
function dersBazliSureHesapla(baslangicTarih, bitisTarih) {
    const toplamlar = {};
    dersVeri.dersler.forEach(function (ders) {
        ders.konular.forEach(function (konu) {
            konu.kayitlar.forEach(function (kayit) {
                if (!SAAT_TABANLI_KAYIT_TIPLERI.includes(kayit.tip)) return;
                if (kayit.tarih < baslangicTarih || kayit.tarih > bitisTarih) return;
                toplamlar[ders.ad] = (toplamlar[ders.ad] || 0) + (Number(kayit.saat) || 0);
            });
        });
    });
    return Object.keys(toplamlar)
        .map(function (ad) { return { ad: ad, saat: toplamlar[ad] }; })
        .sort(function (a, b) { return b.saat - a.saat; });
}

// Verilen haftanın (Pazartesi başlangıçlı) her günü için toplam süre bazlı
// çalışma süresini hesaplar.
function haftalikCalismaVerisiHesapla(haftaBaslangicDate) {
    const bugun = bugunStr();
    const gunler = [];
    for (let i = 0; i < 7; i++) {
        const gunTarihi = new Date(haftaBaslangicDate);
        gunTarihi.setDate(gunTarihi.getDate() + i);
        const t = tarihStr(gunTarihi);
        let toplam = 0;
        dersVeri.dersler.forEach(function (ders) {
            ders.konular.forEach(function (konu) {
                konu.kayitlar.forEach(function (kayit) {
                    if (SAAT_TABANLI_KAYIT_TIPLERI.includes(kayit.tip) && kayit.tarih === t) {
                        toplam += Number(kayit.saat) || 0;
                    }
                });
            });
        });
        gunler.push({ tarih: t, gunAdi: gunAdlari[i], saat: toplam, bugunMu: t === bugun });
    }
    return gunler;
}

function haftaAraligiEtiketi(haftaBaslangicDate) {
    const bitis = new Date(haftaBaslangicDate);
    bitis.setDate(bitis.getDate() + 6);
    const ayniAy = haftaBaslangicDate.getMonth() === bitis.getMonth();
    const baslangicMetni = ayniAy
        ? `${haftaBaslangicDate.getDate()}`
        : `${haftaBaslangicDate.getDate()} ${monthNames[haftaBaslangicDate.getMonth()].slice(0, 3)}`;
    const bitisMetni = `${bitis.getDate()} ${monthNames[bitis.getMonth()].slice(0, 3)} ${bitis.getFullYear()}`;
    return `${baslangicMetni} - ${bitisMetni}`;
}

// "Bugün" / "Bu Hafta" sekmesi durumu ve haftalık grafikte gösterilen hafta.
let sureDersGorunumu = "bugun";
let aktifHedefTipi = "serbest";
let haftalikGrafikHaftaBaslangici = haftaBaslangiciHesapla(new Date());

function sureDersListesiniCiz() {
    document.querySelectorAll("[data-sure-gorunum]").forEach(function (btn) {
        btn.classList.toggle("aktif", btn.dataset.sureGorunum === sureDersGorunumu);
    });

    const bugun = bugunStr();
    let baslangic = bugun, bitis = bugun;
    if (sureDersGorunumu === "hafta") {
        const haftaBas = haftaBaslangiciHesapla(new Date());
        const haftaBit = new Date(haftaBas);
        haftaBit.setDate(haftaBit.getDate() + 6);
        baslangic = tarihStr(haftaBas);
        bitis = tarihStr(haftaBit);
    }

    const veri = dersBazliSureHesapla(baslangic, bitis);
    const alan = document.getElementById("sureDersListesiAlani");
    if (!alan) return;

    if (veri.length === 0) {
        alan.innerHTML = `<div class="bos-durum-notu">${sureDersGorunumu === "hafta" ? "Bu hafta" : "Bugün"} henüz süre bazlı bir çalışma kaydedilmedi.</div>`;
        return;
    }

    const enYuksek = Math.max.apply(null, veri.map(function (v) { return v.saat; }));

    alan.innerHTML = veri.map(function (v) {
        const yuzde = enYuksek > 0 ? Math.round((v.saat / enYuksek) * 100) : 0;
        return `
            <div class="sure-ders-satiri">
                <span class="sure-ders-ad">${escapeHtml(v.ad)}</span>
                <div class="ilerleme-bar"><div class="ilerleme-dolu" style="width:${yuzde}%"></div></div>
                <span class="sure-ders-deger">${ondalikSaatiKisaFormatla(v.saat)}</span>
            </div>
        `;
    }).join("");
}

function haftalikGrafigiCiz() {
    document.getElementById("haftalikGrafikBaslik").textContent = haftaAraligiEtiketi(haftalikGrafikHaftaBaslangici);

    const gunler = haftalikCalismaVerisiHesapla(haftalikGrafikHaftaBaslangici);
    const enYuksek = Math.max.apply(null, gunler.map(function (g) { return g.saat; }).concat([0.01]));
    const trackYukseklik = 120;

    const alan = document.getElementById("haftalikGrafikAlani");
    alan.innerHTML = gunler.map(function (g) {
        const barYukseklik = g.saat > 0 ? Math.max(6, Math.round((g.saat / enYuksek) * trackYukseklik)) : 0;
        return `
            <div class="haftalik-grafik-sutun">
                <div class="haftalik-bar-deger">${g.saat > 0 ? ondalikSaatiKisaFormatla(g.saat) : ""}</div>
                <div class="haftalik-bar-track" style="height:${trackYukseklik}px;">
                    <div class="haftalik-bar-dolu${g.bugunMu ? " bugun" : ""}" style="height:${barYukseklik}px;" title="${g.gunAdi}: ${ondalikSaatiKisaFormatla(g.saat)}"></div>
                </div>
                <div class="haftalik-bar-etiket${g.bugunMu ? " bugun" : ""}">${g.gunAdi}</div>
            </div>
        `;
    }).join("");

    const toplamHaftaSuresi = gunler.reduce(function (t, g) { return t + g.saat; }, 0);
    document.getElementById("haftalikGrafikToplam").textContent = `Haftalık toplam: ${ondalikSaatiKisaFormatla(toplamHaftaSuresi)}`;
}

function takipSayfasiniCiz() {
    const seri = calismaSerisiHesapla();
    const enUzunSeri = enUzunSeriHesapla();
    const toplamCalisilanGun = Object.keys(dersVeri.calismaGunleri).filter(function (t) { return dersVeri.calismaGunleri[t]; }).length;

    const istatistikAlani = document.getElementById("dersWidgetTakipIstatistik");
    if (istatistikAlani) {
        istatistikAlani.innerHTML = `
        <div class="takip-ust-grid widget-ic-kart">
            <div class="istatistik-kutu seri-kutu">
                <div class="istatistik-kutu-baslik">Güncel Seri</div>
                <div class="istatistik-kutu-deger">🔥 ${seri} gün</div>
                <div class="istatistik-kutu-alt">En uzun seri: ${enUzunSeri} gün</div>
            </div>
            <div class="istatistik-kutu">
                <div class="istatistik-kutu-baslik">Toplam Çalışılan Gün</div>
                <div class="istatistik-kutu-deger">${toplamCalisilanGun}</div>
                <div class="istatistik-kutu-alt">tüm zamanlar</div>
            </div>
        </div>`;
    }

    const sureDersAlani = document.getElementById("dersWidgetTakipSureDers");
    if (sureDersAlani) {
        sureDersAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header">
                <h2>⏱️ Ders Bazlı Çalışma Süresi</h2>
            </div>
            <div class="sayac-sekmeler sure-ders-sekmeleri">
                <button type="button" class="sayac-sekme-btn aktif" data-sure-gorunum="bugun">Bugün</button>
                <button type="button" class="sayac-sekme-btn" data-sure-gorunum="hafta">Bu Hafta</button>
            </div>
            <div class="sure-ders-listesi" id="sureDersListesiAlani"></div>
        </div>`;
    }

    const haftalikGrafikAlaniKutu = document.getElementById("dersWidgetTakipHaftalikGrafik");
    if (haftalikGrafikAlaniKutu) {
        haftalikGrafikAlaniKutu.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header haftalik-grafik-baslik-satiri">
                <h2>📊 Haftalık Çalışma Grafiği</h2>
                <button type="button" id="haftalikGrafikBuHafta" class="ders-ikincil-buton">Bu Hafta</button>
            </div>
            <div class="calendar-header">
                <button id="haftalikGrafikOncekiHafta">${IKON.onceki}</button>
                <h3 id="haftalikGrafikBaslik"></h3>
                <button id="haftalikGrafikSonrakiHafta">${IKON.sonraki}</button>
            </div>
            <div class="haftalik-grafik" id="haftalikGrafikAlani"></div>
            <p class="haftalik-grafik-toplam" id="haftalikGrafikToplam"></p>
        </div>`;
    }

    const takvimAlani = document.getElementById("dersWidgetTakipTakvim");
    if (takvimAlani) {
        takvimAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header">
                <h2>🔥 Çalışma Takvimi</h2>
            </div>
            <div class="calendar-header">
                <button id="takipOncekiAy">${IKON.onceki}</button>
                <h3 id="takipAyBasligi"></h3>
                <button id="takipSonrakiAy">${IKON.sonraki}</button>
            </div>
            <p class="bos-liste-notu" style="padding:0 0 10px 0;">Bir güne tıklayarak o günü "çalışıldı" olarak işaretle / kaldır.</p>
            <div class="heatmap-grid" id="takipHeatmapAlani"></div>
        </div>`;
    }

    const aylikOzetKutu = document.getElementById("dersWidgetTakipAylikOzet");
    if (aylikOzetKutu) {
        aylikOzetKutu.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header">
                <h2 id="aylikOzetBaslik">📅 Aylık Özet</h2>
            </div>
            <div class="istatistik-kutu-grid" id="aylikOzetAlani"></div>
        </div>`;
    }

    const hedeflerAlani = document.getElementById("dersWidgetTakipHedefler");
    if (hedeflerAlani) {
        hedeflerAlani.innerHTML = `
        <div class="ders-karti widget-ic-kart">
            <div class="section-header">
                <h2>🎯 Hedefler</h2>
            </div>
            <div class="konu-kayit-tip-secimi" id="hedefTipSecimi">
                <button type="button" class="tekrar-btn aktif" data-hedef-tipi="serbest">📝 Serbest Hedef</button>
                <button type="button" class="tekrar-btn" data-hedef-tipi="konu-yuzdesi">📚 Ders Yüzdesi</button>
                <button type="button" class="tekrar-btn" data-hedef-tipi="haftalik-saat">⏱️ Haftalık Saat</button>
                <button type="button" class="tekrar-btn" data-hedef-tipi="net-hedefi">🎯 Net Hedefi</button>
            </div>

            <div class="gorev-formu-satir" id="hedefSerbestAlani">
                <input type="text" id="yeniHedefMetin" placeholder="Hedef (örn: 1 ay içinde Problemler konusunu bitir)">
            </div>

            <div class="gorev-formu-satir gizli" id="hedefDersYuzdesiAlani">
                <select id="yeniHedefDersSecim"></select>
                <input type="number" id="yeniHedefDersYuzde" min="1" max="100" placeholder="Hedef yüzde (örn: 80)">
            </div>

            <div class="gorev-formu-satir gizli" id="hedefHaftalikSaatAlani">
                <input type="number" id="yeniHedefHaftalikSaat" min="0.5" step="0.5" placeholder="Haftalık hedef saat (örn: 15)">
            </div>

            <div class="gorev-formu-satir gizli" id="hedefNetAlani">
                <input type="number" id="yeniHedefNetDeger" min="1" step="0.25" placeholder="Hedef net (örn: 90)">
            </div>

            <div class="gorev-formu-satir">
                <input type="date" id="yeniHedefTarih" style="flex: 1;">
                <button class="ders-buyuk-buton buton-artili" id="yeniHedefEkleBtn" title="Hedef Ekle" aria-label="Hedef Ekle">＋</button>
            </div>
            <div class="hedef-listesi" id="hedefListesiAlani"></div>
        </div>`;
    }

    document.getElementById("takipOncekiAy").addEventListener("click", function () {
        calismaTakvimAyi.setMonth(calismaTakvimAyi.getMonth() - 1);
        takvimHeatmapiCiz();
        aylikOzetiCiz();
    });
    document.getElementById("takipSonrakiAy").addEventListener("click", function () {
        calismaTakvimAyi.setMonth(calismaTakvimAyi.getMonth() + 1);
        takvimHeatmapiCiz();
        aylikOzetiCiz();
    });

    document.querySelectorAll("[data-sure-gorunum]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            sureDersGorunumu = btn.dataset.sureGorunum;
            sureDersListesiniCiz();
        });
    });

    document.getElementById("haftalikGrafikOncekiHafta").addEventListener("click", function () {
        haftalikGrafikHaftaBaslangici.setDate(haftalikGrafikHaftaBaslangici.getDate() - 7);
        haftalikGrafigiCiz();
    });
    document.getElementById("haftalikGrafikSonrakiHafta").addEventListener("click", function () {
        haftalikGrafikHaftaBaslangici.setDate(haftalikGrafikHaftaBaslangici.getDate() + 7);
        haftalikGrafigiCiz();
    });
    document.getElementById("haftalikGrafikBuHafta").addEventListener("click", function () {
        haftalikGrafikHaftaBaslangici = haftaBaslangiciHesapla(new Date());
        haftalikGrafigiCiz();
    });

    document.getElementById("yeniHedefDersSecim").innerHTML = dersVeri.dersler.map(function (d) {
        return `<option value="${d.id}">${escapeHtml(d.ad)}</option>`;
    }).join("");

    document.querySelectorAll("#hedefTipSecimi [data-hedef-tipi]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            aktifHedefTipi = btn.dataset.hedefTipi;
            document.querySelectorAll("#hedefTipSecimi [data-hedef-tipi]").forEach(function (b) {
                b.classList.toggle("aktif", b === btn);
            });
            document.getElementById("hedefSerbestAlani").classList.toggle("gizli", aktifHedefTipi !== "serbest");
            document.getElementById("hedefDersYuzdesiAlani").classList.toggle("gizli", aktifHedefTipi !== "konu-yuzdesi");
            document.getElementById("hedefHaftalikSaatAlani").classList.toggle("gizli", aktifHedefTipi !== "haftalik-saat");
            document.getElementById("hedefNetAlani").classList.toggle("gizli", aktifHedefTipi !== "net-hedefi");
        });
    });

    document.getElementById("yeniHedefEkleBtn").addEventListener("click", function () {
        const tarih = document.getElementById("yeniHedefTarih").value || null;
        let yeniHedef = null;

        if (aktifHedefTipi === "serbest") {
            const metin = document.getElementById("yeniHedefMetin").value.trim();
            if (!metin) return;
            yeniHedef = { hedefTipi: "serbest", metin: metin };
        } else if (aktifHedefTipi === "konu-yuzdesi") {
            const dersId = document.getElementById("yeniHedefDersSecim").value;
            const ders = dersVeri.dersler.find(function (d) { return d.id === dersId; });
            const yuzde = Number(document.getElementById("yeniHedefDersYuzde").value) || 0;
            if (!ders || yuzde <= 0) return;
            yeniHedef = { hedefTipi: "konu-yuzdesi", dersId: dersId, hedefDeger: yuzde, metin: `${ders.ad} %${yuzde}` };
        } else if (aktifHedefTipi === "haftalik-saat") {
            const saat = Number(document.getElementById("yeniHedefHaftalikSaat").value) || 0;
            if (saat <= 0) return;
            yeniHedef = { hedefTipi: "haftalik-saat", hedefDeger: saat, metin: `Haftalık çalışma ${ondalikSaatiKisaFormatla(saat)}` };
        } else if (aktifHedefTipi === "net-hedefi") {
            const net = Number(document.getElementById("yeniHedefNetDeger").value) || 0;
            if (net <= 0) return;
            yeniHedef = { hedefTipi: "net-hedefi", hedefDeger: net, metin: `Net hedefi ${netFormatla(net)}` };
        }

        if (!yeniHedef) return;
        yeniHedef.id = benzersizId();
        yeniHedef.tarih = tarih;
        yeniHedef.tamamlandi = false;
        dersVeri.hedefler.push(yeniHedef);
        dersVeriKaydet();
        aktifHedefTipi = "serbest";
        takipSayfasiniCiz();
    });

    takvimHeatmapiCiz();
    sureDersListesiniCiz();
    haftalikGrafigiCiz();
    aylikOzetiCiz();
    hedefListesiniCiz();

    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("ders_takip");
    }
}
function haftalikGrafikCiz() {
    const alan = document.getElementById("haftalikGrafikAlani");
    const veri = haftalikCalismaVerisiHesapla();
    const maxSaat = Math.max.apply(null, veri.map(function (g) { return g.saat; }).concat([1]));

    alan.innerHTML = veri.map(function (g) {
        const yuzde = Math.round((g.saat / maxSaat) * 100);
        return `
            <div class="haftalik-satir">
                <span class="haftalik-gun-adi">${g.gun}</span>
                <div class="haftalik-bar-alani">
                    <div class="haftalik-bar" style="width:${yuzde}%"></div>
                </div>
                <span class="haftalik-saat-deger">${g.saat > 0 ? g.saat.toFixed(1).replace(".0", "") + "s" : "-"}</span>
            </div>
        `;
    }).join("");
}

function aylikOzetCiz() {
    const alan = document.getElementById("aylikOzetAlani");
    const ozet = aylikOzetHesapla();

    alan.innerHTML = `
        <div class="aylik-ozet-kutu">
            <div class="aylik-ozet-baslik">Toplam Saat</div>
            <div class="aylik-ozet-deger">${ozet.toplamSaat.toFixed(1).replace(".0", "")} sa</div>
        </div>
        <div class="aylik-ozet-kutu">
            <div class="aylik-ozet-baslik">Çalışılan Gün</div>
            <div class="aylik-ozet-deger">${ozet.calisilanGun}</div>
        </div>
        <div class="aylik-ozet-kutu">
            <div class="aylik-ozet-baslik">Ort. Günlük Süre</div>
            <div class="aylik-ozet-deger">${ozet.ortalamaSure.toFixed(1).replace(".0", "")} sa</div>
        </div>
        <div class="aylik-ozet-kutu">
            <div class="aylik-ozet-baslik">Çözülen Soru</div>
            <div class="aylik-ozet-deger">${ozet.cozulenSoru}</div>
        </div>
        <div class="aylik-ozet-kutu">
            <div class="aylik-ozet-baslik">En Çok Çalışılan Ders</div>
            <div class="aylik-ozet-deger aylik-ozet-deger-kucuk">${escapeHtml(ozet.enCokCalisilanDers)}</div>
        </div>
    `;
}
function takvimHeatmapiCiz() {
    document.getElementById("takipAyBasligi").textContent = `${monthNames[calismaTakvimAyi.getMonth()]} ${calismaTakvimAyi.getFullYear()}`;

    const alan = document.getElementById("takipHeatmapAlani");
    alan.innerHTML = "";

    gunAdlari.forEach(function (ad) {
        const el = document.createElement("div");
        el.className = "gun-adi";
        el.textContent = ad;
        alan.appendChild(el);
    });

    const ilkGun = new Date(calismaTakvimAyi.getFullYear(), calismaTakvimAyi.getMonth(), 1);
    const bosHucreSayisi = gunIndeksi(ilkGun);
    const ayinGunSayisi = new Date(calismaTakvimAyi.getFullYear(), calismaTakvimAyi.getMonth() + 1, 0).getDate();
    const bugun = bugunStr();

    for (let i = 0; i < bosHucreSayisi; i++) {
        const bos = document.createElement("div");
        bos.className = "heatmap-gun bos-hucre";
        alan.appendChild(bos);
    }

    for (let gun = 1; gun <= ayinGunSayisi; gun++) {
        const tarih = tarihStr(new Date(calismaTakvimAyi.getFullYear(), calismaTakvimAyi.getMonth(), gun));
        const hucre = document.createElement("div");
        hucre.className = "heatmap-gun" + (dersVeri.calismaGunleri[tarih] ? " dolu" : "") + (tarih === bugun ? " today" : "");
        hucre.title = tarih;
        hucre.textContent = "";
        hucre.addEventListener("click", function () {
            dersVeri.calismaGunleri[tarih] = !dersVeri.calismaGunleri[tarih];
            if (!dersVeri.calismaGunleri[tarih]) delete dersVeri.calismaGunleri[tarih];
            dersVeriKaydet();
            takipSayfasiniCiz();
            genelBakisiCiz();
        });
        alan.appendChild(hucre);
    }
}

function aylikOzetVerisiHesapla(yil, ayIndeksi) {
    const ayBaslangic = `${yil}-${pad(ayIndeksi + 1)}-01`;
    const ayinGunSayisi = new Date(yil, ayIndeksi + 1, 0).getDate();
    const ayBitis = `${yil}-${pad(ayIndeksi + 1)}-${pad(ayinGunSayisi)}`;

    let toplamSaat = 0;
    let toplamSoru = 0;
    const calisilanGunler = new Set();
    const dersSureleri = {};

    dersVeri.dersler.forEach(function (ders) {
        ders.konular.forEach(function (konu) {
            konu.kayitlar.forEach(function (kayit) {
                if (kayit.tarih < ayBaslangic || kayit.tarih > ayBitis) return;
                calisilanGunler.add(kayit.tarih);
                if (SAAT_TABANLI_KAYIT_TIPLERI.includes(kayit.tip)) {
                    const s = Number(kayit.saat) || 0;
                    toplamSaat += s;
                    dersSureleri[ders.ad] = (dersSureleri[ders.ad] || 0) + s;
                } else if (SORU_TABANLI_KAYIT_TIPLERI.includes(kayit.tip)) {
                    toplamSoru += Number(kayit.soru) || 0;
                }
            });
        });
    });

    const calisilanGunSayisi = calisilanGunler.size;
    const ortalamaGunlukSaat = calisilanGunSayisi > 0 ? toplamSaat / calisilanGunSayisi : 0;

    let enCokDers = "—", enYuksekSure = 0;
    Object.keys(dersSureleri).forEach(function (ad) {
        if (dersSureleri[ad] > enYuksekSure) { enYuksekSure = dersSureleri[ad]; enCokDers = ad; }
    });

    return {
        toplamSaat: toplamSaat,
        calisilanGunSayisi: calisilanGunSayisi,
        ortalamaGunlukSaat: ortalamaGunlukSaat,
        toplamSoru: toplamSoru,
        enCokDers: enCokDers
    };
}

function aylikOzetiCiz() {
    const yil = calismaTakvimAyi.getFullYear();
    const ay = calismaTakvimAyi.getMonth();
    const ozet = aylikOzetVerisiHesapla(yil, ay);

    document.getElementById("aylikOzetBaslik").textContent = `${monthNames[ay]} ${yil} Özeti`;

    document.getElementById("aylikOzetAlani").innerHTML = `
        ${istatistikKutuHtml("⏱️", "mavi", "Toplam Süre", ondalikSaatiKisaFormatla(ozet.toplamSaat))}
        ${istatistikKutuHtml("📅", "yesil", "Çalışılan Gün", ozet.calisilanGunSayisi)}
        ${istatistikKutuHtml("📊", "mor", "Ort. Günlük Süre", ondalikSaatiKisaFormatla(ozet.ortalamaGunlukSaat))}
        ${istatistikKutuHtml("✅", "sari", "Çözülen Soru", ozet.toplamSoru)}
        ${istatistikKutuHtml("🏆", "turuncu", "En Çok Çalışılan Ders", `<span style="font-size:18px">${escapeHtml(ozet.enCokDers)}</span>`)}
    `;
}
function hedefGuncelDegerHesapla(hedef) {
    if (hedef.hedefTipi === "konu-yuzdesi") {
        const ders = dersVeri.dersler.find(function (d) { return d.id === hedef.dersId; });
        return ders ? konuIlerlemeYuzdesi(ders.konular) : 0;
    }
    if (hedef.hedefTipi === "haftalik-saat") {
        const gunler = haftalikCalismaVerisiHesapla(haftaBaslangiciHesapla(new Date()));
        return gunler.reduce(function (t, g) { return t + g.saat; }, 0);
    }
    if (hedef.hedefTipi === "net-hedefi") {
        if (dersVeri.denemeler.length === 0) return 0;
        const siraliTarih = dersVeri.denemeler.slice().sort(function (a, b) { return a.tarih.localeCompare(b.tarih); });
        return siraliTarih[siraliTarih.length - 1].toplamNet;
    }
    return null;
}

function hedefIlerlemeHtml(hedef) {
    if (!hedef.hedefTipi || hedef.hedefTipi === "serbest") return "";

    const guncel = hedefGuncelDegerHesapla(hedef);
    const hedefDeger = hedef.hedefDeger;
    const yuzde = hedefDeger > 0 ? Math.min(100, Math.round((guncel / hedefDeger) * 100)) : 0;

    let guncelMetin, hedefMetin;
    if (hedef.hedefTipi === "konu-yuzdesi") {
        guncelMetin = `${Math.round(guncel)}%`;
        hedefMetin = `${hedefDeger}%`;
    } else if (hedef.hedefTipi === "haftalik-saat") {
        guncelMetin = ondalikSaatiKisaFormatla(guncel);
        hedefMetin = ondalikSaatiKisaFormatla(hedefDeger);
    } else if (hedef.hedefTipi === "net-hedefi") {
        guncelMetin = netFormatla(guncel);
        hedefMetin = netFormatla(hedefDeger);
    }

    return `
        <div class="hedef-ilerleme">
            <div class="ilerleme-bar"><div class="ilerleme-dolu" style="width:${yuzde}%"></div></div>
            <span class="hedef-ilerleme-deger">${guncelMetin} / ${hedefMetin}</span>
        </div>
    `;
}
function hedefListesiniCiz() {
    const alan = document.getElementById("hedefListesiAlani");
    if (dersVeri.hedefler.length === 0) {
        alan.innerHTML = '<div class="bos-durum-notu">Henüz hedef eklenmedi.</div>';
        return;
    }

    const sirali = dersVeri.hedefler.slice().sort(function (a, b) {
        if (a.tamamlandi !== b.tamamlandi) return a.tamamlandi ? 1 : -1;
        return (a.tarih || "9999").localeCompare(b.tarih || "9999");
    });

    alan.innerHTML = sirali.map(function (h) {
        return `
            <div class="hedef-item ${h.tamamlandi ? "tamamlandi" : ""}">
                <input type="checkbox" data-hedef-tamamla="${h.id}" ${h.tamamlandi ? "checked" : ""}>
                <div class="hedef-item-govde">
                    <span class="hedef-metin">${escapeHtml(h.metin)}</span>
                    ${hedefIlerlemeHtml(h)}
                </div>
                ${h.tarih ? `<span class="hedef-tarih">📅 ${h.tarih}</span>` : ""}
                <button class="konu-sil-btn" data-hedef-sil="${h.id}" title="Sil">${IKON.sil}</button>
            </div>
        `;
    }).join("");

    alan.querySelectorAll("[data-hedef-tamamla]").forEach(function (cb) {
        cb.addEventListener("change", function () {
            const h = dersVeri.hedefler.find(function (x) { return x.id === cb.dataset.hedefTamamla; });
            if (h) { h.tamamlandi = cb.checked; dersVeriKaydet(); hedefListesiniCiz(); }
        });
    });
    alan.querySelectorAll("[data-hedef-sil]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            dersVeri.hedefler = dersVeri.hedefler.filter(function (h) { return h.id !== btn.dataset.hedefSil; });
            dersVeriKaydet();
            hedefListesiniCiz();
        });
    });
}


// ==========================================================
// GÜNLÜK ÖZET (ana dashboard üstü)
// ==========================================================

function ondalikSaatiKisaFormatla(saat) {
    const toplamDk = Math.round((Number(saat) || 0) * 60);
    const s = Math.floor(toplamDk / 60);
    const dk = toplamDk % 60;
    if (s === 0 && dk === 0) return "0dk";
    if (s === 0) return dk + "dk";
    if (dk === 0) return s + "s";
    return s + "s " + dk + "dk";
}

function bugunkuCalismaSuresiSaat() {
    if (!dersVeri) return 0;
    const bugun = bugunStr();
    let toplam = 0;
    dersVeri.dersler.forEach(function (ders) {
        ders.konular.forEach(function (konu) {
            konu.kayitlar.forEach(function (kayit) {
                if (SAAT_TABANLI_KAYIT_TIPLERI.includes(kayit.tip) && kayit.tarih === bugun) {
                    toplam += Number(kayit.saat) || 0;
                }
            });
        });
    });
    return toplam;
}

function gunlukOzetiCiz() {
    const alan = document.getElementById("gunlukOzetAlani");
    if (!alan) return;

    const bugun = bugunStr();
    const bugunGunIndeksi = gunIndeksi(new Date());

    // 1) Görevler
    let toplamGorev = 0, tamamlananGorev = 0;
    veri.kategoriler.forEach(function (kategori) {
        (veri.gorevler[kategori.id] || []).forEach(function (g) {
            if (!gorevBugunGosterilsinMi(g, bugunGunIndeksi)) return;
            toplamGorev++;
            if (gorevTamamlandiMi(g, bugun)) tamamlananGorev++;
        });
    });

    // 2) Çalışma süresi (bugün, dersler modülünden)
    const calismaSuresi = bugunkuCalismaSuresiSaat();

    // 3) Toplantı / not sayısı (bugün)
    const toplantiSayisi = (veri.takvimNotlari[bugun] || []).length;

    // 4) Sınav geri sayımı
    let sinavKisaAd = "Sınav";
    if (dersVeri && dersVeri.sinavTuru) {
        const adHaritasi = {
            kpss_ortaogretim: "KPSS'ye",
            kpss_onlisans: "KPSS'ye",
            kpss_lisans: "KPSS'ye",
            lgs: "LGS'ye",
            tyt: "TYT'ye",
            tyt_ayt_sayisal: "YKS'ye",
            tyt_ayt_sozel: "YKS'ye",
            tyt_ayt_ea: "YKS'ye",
            universite: "Sınavlara"
        };
        sinavKisaAd = adHaritasi[dersVeri.sinavTuru] || "Sınava";
    }

    let kpssMetin = "Tarih seçilmedi";
    let kpssUyari = false;
    if (dersVeri && dersVeri.sinavTarihi) {
        const b = new Date();
        b.setHours(0, 0, 0, 0);
        const hedef = new Date(dersVeri.sinavTarihi + "T00:00:00");
        const farkGun = Math.ceil((hedef - b) / (1000 * 60 * 60 * 24));
        if (farkGun > 0) { kpssMetin = farkGun + " gün kaldı"; kpssUyari = farkGun <= 7; }
        else if (farkGun === 0) { kpssMetin = "Sınav bugün!"; kpssUyari = true; }
        else { kpssMetin = "Sınav geçti"; }
    }

    alan.innerHTML = `
        <div class="gunluk-ozet-kutu">
            <div class="gunluk-ozet-ikon">${simgesi("✅")}</div>
            <div class="gunluk-ozet-metin">
                <div class="gunluk-ozet-deger">${tamamlananGorev}/${toplamGorev}</div>
                <div class="gunluk-ozet-etiket">görev tamamlandı</div>
            </div>
        </div>
        <div class="gunluk-ozet-kutu">
            <div class="gunluk-ozet-ikon">${simgesi("⏱️")}</div>
            <div class="gunluk-ozet-metin">
                <div class="gunluk-ozet-deger">${ondalikSaatiKisaFormatla(calismaSuresi)}</div>
                <div class="gunluk-ozet-etiket">bugün çalışma</div>
            </div>
        </div>
        <div class="gunluk-ozet-kutu">
            <div class="gunluk-ozet-ikon">${simgesi("🤝")}</div>
            <div class="gunluk-ozet-metin">
                <div class="gunluk-ozet-deger">${toplantiSayisi}</div>
                <div class="gunluk-ozet-etiket">toplantı / not (bugün)</div>
            </div>
        </div>
        <div class="gunluk-ozet-kutu ${kpssUyari ? "uyari" : ""}">
            <div class="gunluk-ozet-ikon">${simgesi("🎯")}</div>
            <div class="gunluk-ozet-metin">
                <div class="gunluk-ozet-deger">${kpssMetin}</div>
                <div class="gunluk-ozet-etiket">${sinavKisaAd}</div>
            </div>
        </div>
    `;
}

gunlukOzetiCiz();

// ==========================================================
// İŞ MODÜLÜ - GÖRÜNÜMLER
// ==========================================================

function isModuluGuncelle() {
    isDurumKartlariniCiz();
    isZamanCizelgesiniCiz();
    isTakvimiCiz();
    isKlasorleriCiz();
    isNotAlanlariniCiz();
    if (typeof widgetPaneliCiz === "function") {
        widgetPaneliCiz("is");
    }
}

function isTumGorevler() {
    const sonuc = [];
    isVeri.klasorler.forEach(function (klasor) {
        klasor.gorevler.forEach(function (g) { sonuc.push(g); });
    });
    return sonuc;
}

function haftaninPazartesiTarihi(d) {
    const tarih = new Date(d);
    const gun = gunIndeksi(tarih); // 0 = Pazartesi
    tarih.setDate(tarih.getDate() - gun);
    tarih.setHours(0, 0, 0, 0);
    return tarih;
}


// ---- 1) Durum kartları ----

function isDurumKartlariniCiz() {
    const alan = document.getElementById("isDurumKartlariAlani");
    if (!alan) return;

    const gorevler = isTumGorevler();
    const toplam = gorevler.length;
    const tamamlanan = gorevler.filter(function (g) { return g.durum === "bitti"; }).length;
    const bekleyen = toplam - tamamlanan;
    const basari = toplam > 0 ? Math.round((tamamlanan / toplam) * 100) : 0;

    const haftaBasi = haftaninPazartesiTarihi(new Date());
    const buHaftaTamamlanan = gorevler.filter(function (g) {
        if (g.durum !== "bitti" || !g.tamamlanmaTarihi) return false;
        return new Date(g.tamamlanmaTarihi + "T00:00:00") >= haftaBasi;
    }).length;

    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);

    const aktifProjeSayisi = isVeri.projeler.filter(function (p) {
        const b = new Date(p.baslangic + "T00:00:00");
        const bt = new Date(p.bitis + "T00:00:00");
        return bugun >= b && bugun <= bt;
    }).length;

    const yaklasanTeslimSayisi = isVeri.projeler.filter(function (p) {
        const bt = new Date(p.bitis + "T00:00:00");
        const kalanGun = Math.round((bt - bugun) / (1000 * 60 * 60 * 24));
        return kalanGun >= 0 && kalanGun <= 7;
    }).length;

    const bugunkuToplantiSayisi = (veri.takvimNotlari[bugunStr()] || []).length;

    alan.innerHTML = `
        ${istatistikKutuHtml("📋", "mavi", "Toplam İş", toplam, "tüm klasörlerde")}
        ${istatistikKutuHtml("✅", "yesil", "Tamamlanan", tamamlanan, "bu hafta: " + buHaftaTamamlanan)}
        ${istatistikKutuHtml("⏳", "sari", "Bekleyen", bekleyen, "planlanıyor + devam ediyor")}
        ${istatistikKutuHtml("📈", "mor", "Başarı", "%" + basari, "tamamlanma oranı")}
        ${istatistikKutuHtml("🚀", "mavi", "Aktif Banner / Proje", aktifProjeSayisi, "şu an sürüyor")}
        ${istatistikKutuHtml("⏰", "kirmizi", "Teslimi Yaklaşan", yaklasanTeslimSayisi, "7 gün içinde biten", yaklasanTeslimSayisi > 0 ? "uyari-kutu" : "")}
        ${istatistikKutuHtml("🤝", "turuncu", "Bugünkü Toplantı", bugunkuToplantiSayisi, "takvimden")}
    `;
}


// ---- 2) Zaman çizelgesi (banner / proje timeline) ----

function isZamanCizelgesiniCiz() {
    const alan = document.getElementById("isZamanCizelgesiAlani");
    if (!alan) return;

    const projeler = isVeri.projeler.slice().sort(function (a, b) {
        return a.baslangic.localeCompare(b.baslangic);
    });

    const bugun = new Date();
    bugun.setHours(0, 0, 0, 0);

    let aralikBaslangic, aralikBitis;

    if (projeler.length === 0) {
        aralikBaslangic = new Date(bugun);
        aralikBitis = new Date(bugun);
        aralikBitis.setDate(aralikBitis.getDate() + 30);
    } else {
        const tumBaslangiclar = projeler.map(function (p) { return new Date(p.baslangic + "T00:00:00").getTime(); }).concat(bugun.getTime());
        const tumBitisler = projeler.map(function (p) { return new Date(p.bitis + "T00:00:00").getTime(); }).concat(bugun.getTime() + 7 * 86400000);
        aralikBaslangic = new Date(Math.min.apply(null, tumBaslangiclar));
        aralikBitis = new Date(Math.max.apply(null, tumBitisler));
    }

    aralikBaslangic.setDate(aralikBaslangic.getDate() - 2);
    aralikBitis.setDate(aralikBitis.getDate() + 2);

    const toplamGunFarki = Math.max(1, Math.round((aralikBitis - aralikBaslangic) / 86400000));

    function konumYuzdesi(tarihStr) {
        const t = new Date(tarihStr + "T00:00:00");
        const fark = (t - aralikBaslangic) / 86400000;
        return Math.min(100, Math.max(0, (fark / toplamGunFarki) * 100));
    }

    const bugunYuzde = konumYuzdesi(bugunStr());

    alan.innerHTML = `
        <div class="zaman-cizelgesi-ust">
            <span>${aralikBaslangic.toLocaleDateString("tr-TR")}</span>
            <span>${aralikBitis.toLocaleDateString("tr-TR")}</span>
        </div>
        <div class="zaman-cizelgesi-govde">
            <div class="zaman-bugun-cizgisi" style="left:${bugunYuzde}%" title="Bugün"></div>
            ${projeler.length === 0
                ? '<div class="bos-durum-notu">Henüz banner / proje eklenmedi.</div>'
                : projeler.map(function (p) { return isZamanSatiriHtml(p, konumYuzdesi); }).join("")}
        </div>
        <div class="zaman-ekle-formu">
            <input type="text" id="yeniProjeAdi" placeholder="Banner / proje adı" style="flex:1;">
            <input type="date" id="yeniProjeBaslangic" title="Başlangıç tarihi">
            <input type="date" id="yeniProjeBitis" title="Bitiş tarihi">
            <button class="ders-buyuk-buton buton-artili" id="yeniProjeEkleBtn" title="Zaman Çizelgesine Ekle" aria-label="Ekle">＋</button>
        </div>
    `;

    document.getElementById("yeniProjeEkleBtn").addEventListener("click", isProjeEkle);

    alan.querySelectorAll("[data-proje-sil]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = btn.dataset.projeSil;
            onayGoster({
                baslik: "Projeyi Sil",
                mesaj: "Bu banner / projeyi zaman çizelgesinden silmek istediğine emin misin?",
                onayMetni: "Sil",
                tehlikeli: true,
                onOnay: function () {
                    isVeri.projeler = isVeri.projeler.filter(function (p) { return p.id !== id; });
                    isVeriKaydet();
                    isZamanCizelgesiniCiz();
                    isDurumKartlariniCiz();
                }
            });
        });
    });
}

function isProjeEkle() {
    const ad = document.getElementById("yeniProjeAdi").value.trim();
    const baslangic = document.getElementById("yeniProjeBaslangic").value;
    const bitis = document.getElementById("yeniProjeBitis").value;

    if (!ad || !baslangic || !bitis) {
        bilgiGoster("Lütfen ad, başlangıç ve bitiş tarihini gir.");
        return;
    }
    if (bitis < baslangic) {
        bilgiGoster("Bitiş tarihi başlangıçtan önce olamaz.");
        return;
    }

    isVeri.projeler.push({ id: benzersizId(), ad: ad, baslangic: baslangic, bitis: bitis });
    isVeriKaydet();
    isZamanCizelgesiniCiz();
    isDurumKartlariniCiz();
}

function isZamanSatiriHtml(proje, konumYuzdesi) {
    const solYuzde = konumYuzdesi(proje.baslangic);
    const sagYuzde = konumYuzdesi(proje.bitis);
    const genislik = Math.max(2, sagYuzde - solYuzde);

    const bt = new Date(proje.bitis + "T00:00:00");
    const bugunTarih = new Date(bugunStr() + "T00:00:00");
    const kalanGun = Math.round((bt - bugunTarih) / 86400000);

    let durumSinifi = "normal";
    let etiket = kalanGun + " gün kaldı";
    if (kalanGun < 0) { durumSinifi = "doldu"; etiket = "Süresi doldu"; }
    else if (kalanGun === 0) { durumSinifi = "bugun-teslim"; etiket = "Son gün!"; }
    else if (kalanGun <= 3) { durumSinifi = "acil"; }
    else if (kalanGun <= 7) { durumSinifi = "yaklasan"; }

    return `
        <div class="zaman-satiri">
            <div class="zaman-satiri-etiket" title="${escapeHtml(proje.ad)}">${escapeHtml(proje.ad)}</div>
            <div class="zaman-satiri-track">
                <div class="zaman-bar zaman-bar-${durumSinifi}" style="left:${solYuzde}%; width:${genislik}%;" title="${escapeHtml(proje.ad)}: ${proje.baslangic} → ${proje.bitis}">
                    <span class="zaman-bar-etiket">${etiket}</span>
                </div>
            </div>
            <button class="konu-sil-btn" data-proje-sil="${proje.id}" title="Sil">${IKON.sil}</button>
        </div>
    `;
}


// ---- 3) Klasörler (Ana Panel Görev Kartları Tasarımıyla Eşitlendi) ----

const acikIsFormlar = {};
const acikIsTamamlananlar = {};

function isKlasorleriCiz() {
    const alan = document.getElementById("isKlasorleriAlani");
    if (!alan) return;

    alan.innerHTML = "";

    if (isVeri.klasorler.length === 0) {
        alan.innerHTML = '<div class="bos-durum-notu" style="grid-column: 1 / -1;">Henüz iş klasörü eklenmedi. Yukarıdan "+ Klasör Ekle" butonuna basarak başla.</div>';
        return;
    }

    isVeri.klasorler.forEach(function (klasor) {
        alan.appendChild(isKlasorKartiOlustur(klasor));
    });
}

function isKlasorKartiOlustur(klasor) {
    const kart = document.createElement("section");
    kart.className = "dashboard-card kategori-card";
    kart.dataset.id = klasor.id;

    const gorevler = klasor.gorevler || [];
    const aktifGorevler = gorevler.filter(function (g) { return g.durum !== "bitti"; });
    const tamamlananGorevler = gorevler.filter(function (g) { return g.durum === "bitti"; });

    const toplam = gorevler.length;
    const yuzde = toplam > 0 ? Math.round((tamamlananGorevler.length / toplam) * 100) : 0;

    const formAcikMi = !!acikIsFormlar[klasor.id];
    const tamamlananlarAcikMi = !!acikIsTamamlananlar[klasor.id];

    kart.innerHTML = `
        <div class="section-header">
            <h2>${simgesi(klasor.ikon || "📁")} ${escapeHtml(klasor.ad)}</h2>
            <div class="kategori-baslik-butonlar">
                <button class="gorev-ekle-btn" data-aksiyon="is-form-ac-kapa">+ Görev</button>
                <button class="kategori-sil-btn" data-aksiyon="is-klasor-sil" title="Klasörü sil">${IKON.sil}</button>
            </div>
        </div>

        <div class="ilerleme-satiri">
            <div class="ilerleme-bar">
                <div class="ilerleme-dolu" style="width:${yuzde}%"></div>
            </div>
            <span class="ilerleme-yuzde">${yuzde}%</span>
        </div>

        <div class="gorev-formu ${formAcikMi ? "" : "gizli"}" data-is-form>
            <div class="gorev-formu-satir">
                <input type="text" placeholder="${escapeHtml(klasor.ad)} işini yaz..." data-is-gorev-input>
            </div>
            <div class="gorev-formu-satir tekrar-secim">
                <label>Aciliyet:</label>
                <div class="tekrar-butonlari" data-is-aciliyet-grubu>
                    <button type="button" class="tekrar-btn aciliyet-btn" data-aciliyet-deger="dusuk">🟢 Düşük</button>
                    <button type="button" class="tekrar-btn aciliyet-btn aktif" data-aciliyet-deger="orta">🟡 Orta</button>
                    <button type="button" class="tekrar-btn aciliyet-btn" data-aciliyet-deger="acil">🔴 Acil</button>
                </div>
            </div>
            <div class="gorev-formu-satir">
                <button class="gorev-kaydet-btn" data-aksiyon="is-gorev-kaydet">Kaydet</button>
            </div>
        </div>

        <div class="task-list" data-is-aktif-liste>
            ${aktifGorevler.length === 0
                ? '<div class="bos-liste-notu">Aktif iş/görev yok.</div>'
                : aktifGorevler.map(function (g) { return isGorevSatiriHtml(g, false); }).join("")}
        </div>

        <div class="gorev-alt-bar">
            <button class="tamamlananlariGoster" data-aksiyon="is-tamamlanan-ac-kapa">
                ${tamamlananlarAcikMi ? "Tamamlananları gizle" : "Tamamlananları göster"} (${tamamlananGorevler.length})
            </button>
            <button class="tumGorevleriSil" data-aksiyon="is-tumunu-sil">Tümünü sil</button>
        </div>

        <div class="tamamlanan-gorevler ${tamamlananlarAcikMi ? "" : "gizli"}" data-is-tamamlanan-liste>
            ${tamamlananGorevler.length === 0
                ? '<div class="bos-liste-notu">Tamamlanan görev yok.</div>'
                : tamamlananGorevler.map(function (g) { return isGorevSatiriHtml(g, true); }).join("")}
        </div>
    `;

    isKlasorKartiOlaylariniBagla(kart, klasor);
    return kart;
}

function isGorevSatiriHtml(gorev, tamamlandiMi) {
    const seviye = gorev.aciliyet || "orta";
    const renk = ACILIYET_RENKLERI[seviye] || "#f59e0b";
    return `
        <div class="task" data-is-gorev-id="${gorev.id}" style="border-left: 4px solid ${renk};" title="${ACILIYET_ETIKETLERI[seviye] || ''}">
            <input type="checkbox" ${tamamlandiMi ? "checked" : ""} data-aksiyon="is-gorev-check">
            <div class="task-metin">
                <h3>${escapeHtml(gorev.metin)}</h3>
                <p>Oluşturulma: ${gorev.olusturmaTarihi || bugunStr()}</p>
            </div>
            <button class="gorev-sil" data-aksiyon="is-gorev-sil" title="Görevi sil">${IKON.sil}</button>
        </div>
    `;
}

function isKlasorKartiOlaylariniBagla(kart, klasor) {

    kart.querySelector('[data-aksiyon="is-form-ac-kapa"]').addEventListener("click", function () {
        acikIsFormlar[klasor.id] = !acikIsFormlar[klasor.id];
        isKlasorleriCiz();

        if (acikIsFormlar[klasor.id]) {
            const yeniKart = document.querySelector(`.kategori-card[data-id="${klasor.id}"]`);
            const input = yeniKart ? yeniKart.querySelector("[data-is-gorev-input]") : null;
            if (input) input.focus();
        }
    });

    kart.querySelector('[data-aksiyon="is-klasor-sil"]').addEventListener("click", function () {
        onayGoster({
            baslik: "Klasörü Sil",
            mesaj: `"${klasor.ad}" klasörünü ve içindeki tüm görevleri silmek istediğine emin misin?`,
            onayMetni: "Evet, Sil",
            tehlikeli: true,
            onOnay: function () {
                isVeri.klasorler = isVeri.klasorler.filter(function (k) { return k.id !== klasor.id; });
                isVeriKaydet();
                isKlasorleriCiz();
                isDurumKartlariniCiz();
            }
        });
    });

    const aciliyetGrubu = kart.querySelector("[data-is-aciliyet-grubu]");
    let seciliAciliyet = "orta";

    if (aciliyetGrubu) {
        aciliyetGrubu.addEventListener("click", function (event) {
            const buton = event.target.closest(".aciliyet-btn");
            if (!buton) return;

            aciliyetGrubu.querySelectorAll(".aciliyet-btn").forEach(function (b) {
                b.classList.remove("aktif");
            });
            buton.classList.add("aktif");

            seciliAciliyet = buton.dataset.aciliyetDeger;
        });
    }

    function isGorevKaydet() {
        const input = kart.querySelector("[data-is-gorev-input]");
        const metin = input ? input.value.trim() : "";
        if (!metin) return;

        if (!Array.isArray(klasor.gorevler)) klasor.gorevler = [];

        klasor.gorevler.push({
            id: benzersizId(),
            metin: metin,
            aciliyet: seciliAciliyet,
            durum: "planlama",
            olusturmaTarihi: bugunStr(),
            tamamlanmaTarihi: null
        });

        isVeriKaydet();
        acikIsFormlar[klasor.id] = false;
        isKlasorleriCiz();
        isDurumKartlariniCiz();
    }

    const kaydetBtn = kart.querySelector('[data-aksiyon="is-gorev-kaydet"]');
    if (kaydetBtn) kaydetBtn.addEventListener("click", isGorevKaydet);

    const inputEl = kart.querySelector("[data-is-gorev-input]");
    if (inputEl) {
        inputEl.addEventListener("keydown", function (event) {
            if (event.key === "Enter") isGorevKaydet();
        });
    }

    kart.querySelector('[data-aksiyon="is-tamamlanan-ac-kapa"]').addEventListener("click", function () {
        acikIsTamamlananlar[klasor.id] = !acikIsTamamlananlar[klasor.id];
        isKlasorleriCiz();
    });

    kart.querySelector('[data-aksiyon="is-tumunu-sil"]').addEventListener("click", function () {
        if ((klasor.gorevler || []).length === 0) return;
        onayGoster({
            baslik: "Tüm Görevleri Sil",
            mesaj: `"${klasor.ad}" klasöründeki tüm görevleri silmek istediğine emin misin?`,
            onayMetni: "Evet, Sil",
            tehlikeli: true,
            onOnay: function () {
                klasor.gorevler = [];
                isVeriKaydet();
                isKlasorleriCiz();
                isDurumKartlariniCiz();
            }
        });
    });

    kart.addEventListener("click", function (event) {
        const gorevEl = event.target.closest("[data-is-gorev-id]");
        if (!gorevEl) return;

        const gorevId = gorevEl.dataset.isGorevId;
        const gorevListesi = klasor.gorevler || [];
        const gorev = gorevListesi.find(function (g) { return g.id === gorevId; });
        if (!gorev) return;

        if (event.target.matches('[data-aksiyon="is-gorev-check"]')) {
            const tamamlandi = gorev.durum === "bitti";
            gorev.durum = tamamlandi ? "devam" : "bitti";
            gorev.tamamlanmaTarihi = gorev.durum === "bitti" ? bugunStr() : null;
            isVeriKaydet();
            isKlasorleriCiz();
            isDurumKartlariniCiz();
        }

        if (event.target.matches('[data-aksiyon="is-gorev-sil"]')) {
            klasor.gorevler = gorevListesi.filter(function (g) { return g.id !== gorevId; });
            isVeriKaydet();
            isKlasorleriCiz();
            isDurumKartlariniCiz();
        }
    });
}

// + Klasör Ekle Butonu Olayı (Şık Prompt ile)
const yeniIsKlasorEkleBtn = document.getElementById("yeniIsKlasorEkleBtn");
if (yeniIsKlasorEkleBtn) {
    yeniIsKlasorEkleBtn.addEventListener("click", function () {
        const ad = prompt("Yeni klasör adını giriniz:");
        if (!ad || !ad.trim()) return;

        isVeri.klasorler.push({
            id: benzersizId(),
            ad: ad.trim(),
            ikon: "📁",
            gorevler: []
        });

        isVeriKaydet();
        isKlasorleriCiz();
        isDurumKartlariniCiz();
    });
}


// ---- 4) Fikirler + Hızlı Not ----

let fikirlerKaydetZamanlayici = null;

document.getElementById("isFikirlerAlani").addEventListener("input", function (e) {
    isVeri.fikirler = e.target.value;
    clearTimeout(fikirlerKaydetZamanlayici);
    fikirlerKaydetZamanlayici = setTimeout(function () { isVeriKaydet(); }, 500);
});

document.getElementById("yeniHizliNotEkleBtn").addEventListener("click", hizliNotEkle);
document.getElementById("yeniHizliNotMetin").addEventListener("keydown", function (e) {
    if (e.key === "Enter") hizliNotEkle();
});

function hizliNotEkle() {
    const input = document.getElementById("yeniHizliNotMetin");
    const metin = input.value.trim();
    if (!metin) return;
    isVeri.hizliNotlar.push({ id: benzersizId(), metin: metin, tarih: bugunStr() });
    isVeriKaydet();
    input.value = "";
    hizliNotListesiniCiz();
}

function isNotAlanlariniCiz() {
    const fikirlerEl = document.getElementById("isFikirlerAlani");
    if (fikirlerEl && document.activeElement !== fikirlerEl) {
        fikirlerEl.value = isVeri.fikirler;
    }
    hizliNotListesiniCiz();
}

// ==========================================
// İŞ TAKVİMİ & SENKRONİZASYON
// ==========================================

let isTakvimTarihi = new Date();
let isSeciliGunStr = null;

function isTakvimiCiz() {
    const yil = isTakvimTarihi.getFullYear();
    const ay = isTakvimTarihi.getMonth();

    const ayBaslikEl = document.getElementById("isCurrentMonth");
    if (ayBaslikEl) ayBaslikEl.textContent = `${monthNames[ay]} ${yil}`;

    const grid = document.getElementById("isCalendarGrid");
    if (!grid) return;
    grid.innerHTML = "";

    gunAdlari.forEach(function (gun) {
        const el = document.createElement("div");
        el.className = "gun-adi";
        el.textContent = gun;
        grid.appendChild(el);
    });

    const ilkGun = new Date(yil, ay, 1);
    const ayGunSayisi = new Date(yil, ay + 1, 0).getDate();
    const baslangicBosluk = gunIndeksi(ilkGun);

    for (let i = 0; i < baslangicBosluk; i++) {
        const bosGun = document.createElement("div");
        bosGun.className = "gun-hucre empty";
        grid.appendChild(bosGun);
    }

    const bugun = new Date();

    for (let gun = 1; gun <= ayGunSayisi; gun++) {
        const tarih = new Date(yil, ay, gun);
        const dStr = tarihStr(tarih);

        const hucre = document.createElement("div");
        hucre.className = "gun-hucre";
        hucre.dataset.tarih = dStr;

        if (gun === bugun.getDate() && ay === bugun.getMonth() && yil === bugun.getFullYear()) {
            hucre.classList.add("today");
        }
        if (dStr === isSeciliGunStr) {
            hucre.classList.add("secili");
        }

        const notSayisi = (veri.takvimNotlari[dStr] || []).length;

        hucre.innerHTML = `
            <span>${gun}</span>
            ${notSayisi > 0 ? '<span class="gun-not-noktasi"></span>' : ""}
        `;

        hucre.addEventListener("click", function () {
            isSeciliGunStr = dStr;
            isTakvimiCiz();
            isGunDetayiniAc(dStr);
        });

        grid.appendChild(hucre);
    }
}

const isPrevMonthBtn = document.getElementById("isPreviousMonth");
if (isPrevMonthBtn) {
    isPrevMonthBtn.addEventListener("click", function () {
        isTakvimTarihi.setMonth(isTakvimTarihi.getMonth() - 1);
        isTakvimiCiz();
    });
}

const isNextMonthBtn = document.getElementById("isNextMonth");
if (isNextMonthBtn) {
    isNextMonthBtn.addEventListener("click", function () {
        isTakvimTarihi.setMonth(isTakvimTarihi.getMonth() + 1);
        isTakvimiCiz();
    });
}

function isGunDetayiniAc(dStr) {
    const panel = document.getElementById("isGunDetayPaneli");
    const bos = document.getElementById("isGunDetayBos");
    if (!panel || !bos) return;

    panel.classList.remove("gizli");
    bos.classList.add("gizli");

    const parcalar = dStr.split("-").map(Number);
    const yil = parcalar[0], ay = parcalar[1], gun = parcalar[2];
    document.getElementById("isGunDetayBaslik").textContent = `${gun} ${monthNames[ay - 1]} ${yil}`;

    panel.dataset.tarih = dStr;
    isToplantiListesiniCiz(dStr);
}

function isToplantiListesiniCiz(dStr) {
    const liste = document.getElementById("isToplantiListesi");
    if (!liste) return;

    const notlar = (veri.takvimNotlari[dStr] || []).slice().sort(function (a, b) {
        return (a.saat || "").localeCompare(b.saat || "");
    });

    liste.innerHTML = notlar.length === 0
        ? '<div class="bos-liste-notu">Bu gün için toplantı/not eklenmemiş.</div>'
        : notlar.map(function (not) {
            return `
                <div class="toplanti-item" data-not-id="${not.id}">
                    <div class="toplanti-item-ust">
                        ${not.saat ? `<span class="toplanti-saat">${escapeHtml(not.saat)}</span>` : ""}
                        <span class="toplanti-baslik-metin">${escapeHtml(not.metin)}</span>
                        <button class="gorev-sil" data-aksiyon="is-not-sil" title="Sil">${IKON.sil}</button>
                    </div>
                </div>
            `;
        }).join("");
}

const isGunDetayKapatBtn = document.getElementById("isGunDetayKapat");
if (isGunDetayKapatBtn) {
    isGunDetayKapatBtn.addEventListener("click", function () {
        document.getElementById("isGunDetayPaneli").classList.add("gizli");
        document.getElementById("isGunDetayBos").classList.remove("gizli");
        isSeciliGunStr = null;
        isTakvimiCiz();
    });
}

const isToplantiKaydetBtn = document.getElementById("isToplantiKaydet");
if (isToplantiKaydetBtn) {
    isToplantiKaydetBtn.addEventListener("click", function () {
        const panel = document.getElementById("isGunDetayPaneli");
        const dStr = panel ? panel.dataset.tarih : null;
        if (!dStr) return;

        const saatInput = document.getElementById("isToplantiSaat");
        const metinInput = document.getElementById("isToplantiMetin");
        const metin = metinInput.value.trim();

        if (metin === "") {
            bilgiGoster("Lütfen bir başlık/not yaz.");
            return;
        }

        if (!veri.takvimNotlari[dStr]) veri.takvimNotlari[dStr] = [];

        veri.takvimNotlari[dStr].push({
            id: benzersizId(),
            saat: saatInput.value || "",
            metin: metin,
            notlar: ""
        });

        veriKaydet();

        saatInput.value = "";
        metinInput.value = "";

        // İki takvimi ve panelleri ortak güncelle
        isToplantiListesiniCiz(dStr);
        isTakvimiCiz();
        takvimiCiz();
        if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
        if (typeof isDurumKartlariniCiz === "function") isDurumKartlariniCiz();
    });
}

const isToplantiListesiEl = document.getElementById("isToplantiListesi");
if (isToplantiListesiEl) {
    isToplantiListesiEl.addEventListener("click", function (event) {
        const item = event.target.closest("[data-not-id]");
        if (!item) return;

        const panel = document.getElementById("isGunDetayPaneli");
        const dStr = panel ? panel.dataset.tarih : null;
        if (!dStr) return;

        if (event.target.closest('[data-aksiyon="is-not-sil"]')) {
            veri.takvimNotlari[dStr] = (veri.takvimNotlari[dStr] || []).filter(function (n) {
                return n.id !== item.dataset.notId;
            });

            veriKaydet();
            isToplantiListesiniCiz(dStr);
            isTakvimiCiz();
            takvimiCiz();
            if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
            if (typeof isDurumKartlariniCiz === "function") isDurumKartlariniCiz();
        }
    });
}

function hizliNotListesiniCiz() {
    const alan = document.getElementById("hizliNotListesiAlani");
    if (!alan) return;

    if (isVeri.hizliNotlar.length === 0) {
        alan.innerHTML = '<div class="bos-durum-notu">Henüz hızlı not yok.</div>';
        return;
    }

    const sirali = isVeri.hizliNotlar.slice().reverse();

    alan.innerHTML = sirali.map(function (n) {
        return `
            <div class="hedef-item" data-hizli-not-id="${n.id}">
                <span class="hedef-metin">${escapeHtml(n.metin)}</span>
                <span class="hedef-tarih">📅 ${n.tarih}</span>
                <button class="konu-sil-btn" data-hizli-not-sil="${n.id}" title="Sil">${IKON.sil}</button>
            </div>
        `;
    }).join("");

    alan.querySelectorAll("[data-hizli-not-sil]").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const id = btn.dataset.hizliNotSil;
            isVeri.hizliNotlar = isVeri.hizliNotlar.filter(function (n) { return n.id !== id; });
            isVeriKaydet();
            hizliNotListesiniCiz();
        });
    });
}


// ==========================================================
// GLOBAL ARAMA
// ==========================================================

const globalAramaInput = document.getElementById("globalAramaInput");
const globalAramaSonuclari = document.getElementById("globalAramaSonuclari");
const globalAramaTemizle = document.getElementById("globalAramaTemizle");
const globalAramaKutusu = document.getElementById("globalAramaKutusu");

let globalAramaZamanlayici = null;
let globalAramaSonucListesi = [];
let globalAramaAktifIndeks = -1;

function turkceKucuk(metin) {
    return (metin || "").toLocaleLowerCase("tr-TR");
}

function aramaMetnindeGeciyor(metin, sorgu) {
    return turkceKucuk(metin).includes(turkceKucuk(sorgu));
}

function htmlMetniniAl(html) {
    const div = document.createElement("div");
    div.innerHTML = html || "";
    return div.textContent || "";
}

function aramaSkoru(metin, sorgu) {
    const m = turkceKucuk(metin);
    const s = turkceKucuk(sorgu);
    if (!m || !s) return 0;
    if (m === s) return 100;
    if (m.startsWith(s)) return 80;
    if (m.includes(s)) return 50;
    return 0;
}

function aramaSonucuEkle(liste, sonuc) {
    sonuc.skor = aramaSkoru(sonuc.baslik, sonuc.sorgu) + (sonuc.alt ? aramaSkoru(sonuc.alt, sonuc.sorgu) * 0.3 : 0);
    if (sonuc.skor > 0) liste.push(sonuc);
}

function dersSekmesineGec(sekme) {
    document.querySelectorAll(".ders-sekme-btn").forEach(function (b) {
        b.classList.toggle("aktif", b.dataset.dersSekme === sekme);
    });
    document.querySelectorAll(".ders-sekme-panel").forEach(function (p) { p.classList.add("gizli"); });
    const panelId = "dersSekme" + sekme.charAt(0).toUpperCase() + sekme.slice(1);
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.remove("gizli");
    aktifDersSekmesi = sekme;
}

function takvimGununeGit(dStr) {
    const parcalar = dStr.split("-").map(Number);
    takvimTarihi = new Date(parcalar[0], parcalar[1] - 1, 1);
    seciliGunStr = dStr;
    takvimiCiz();
    const tarih = new Date(parcalar[0], parcalar[1] - 1, parcalar[2]);
    gunDetayiniAc(dStr, gunIndeksi(tarih));
}

function ogeyiVurgulaVeKaydir(selector) {
    setTimeout(function () {
        const el = document.querySelector(selector);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("arama-vurgu");
        setTimeout(function () { el.classList.remove("arama-vurgu"); }, 2600);
    }, 150);
}

function globalAramaYap(sorgu) {
    const temiz = sorgu.trim();
    if (temiz.length < 2) return [];

    const sonuclar = [];

    veri.kategoriler.forEach(function (kategori) {
        (veri.gorevler[kategori.id] || []).forEach(function (gorev) {
            if (!aramaMetnindeGeciyor(gorev.metin, temiz)) return;
            aramaSonucuEkle(sonuclar, {
                sorgu: temiz,
                grup: "Panel",
                ikon: kategori.ikon || "✓",
                baslik: gorev.metin,
                alt: `${kategori.ad} · Görev`,
                git: function () {
                    sayfayaGec("ana");
                    ogeyiVurgulaVeKaydir(`[data-gorev-id="${gorev.id}"]`);
                }
            });
        });
    });

    Object.keys(veri.takvimNotlari || {}).forEach(function (tarih) {
        (veri.takvimNotlari[tarih] || []).forEach(function (not) {
            const aranacak = [not.metin, not.not].filter(Boolean).join(" ");
            if (!aramaMetnindeGeciyor(aranacak, temiz)) return;
            aramaSonucuEkle(sonuclar, {
                sorgu: temiz,
                grup: "Takvim",
                ikon: "📅",
                baslik: not.metin || "Takvim notu",
                alt: `${tarih}${not.saat ? " · " + not.saat : ""}`,
                git: function () {
                    sayfayaGec("ana");
                    takvimGununeGit(tarih);
                }
            });
        });
    });

    const notDefteriMetni = htmlMetniniAl(veri.notKagidi);
    if (aramaMetnindeGeciyor(notDefteriMetni, temiz)) {
        aramaSonucuEkle(sonuclar, {
            sorgu: temiz,
            grup: "Panel",
            ikon: "📝",
            baslik: "Not defterinde eşleşme",
            alt: "Not defteri",
            git: function () {
                sayfayaGec("ana");
                const notEl = document.getElementById("notKagidi");
                if (notEl) {
                    notEl.scrollIntoView({ behavior: "smooth", block: "center" });
                    notEl.focus();
                    notEl.classList.add("arama-vurgu");
                    setTimeout(function () { notEl.classList.remove("arama-vurgu"); }, 2600);
                }
            }
        });
    }

    (dersVeri.dersler || []).forEach(function (ders) {
        (ders.konular || []).forEach(function (konu) {
            if (!aramaMetnindeGeciyor(konu.ad, temiz)) return;
            aramaSonucuEkle(sonuclar, {
                sorgu: temiz,
                grup: "Ders",
                ikon: "📖",
                baslik: konu.ad,
                alt: `${ders.ad} · Konu`,
                git: function () {
                    sayfayaGec("ders");
                    dersSekmesineGec("konular");
                    const d = dersVeri.dersler.find(function (x) { return x.id === ders.id; });
                    const k = d && d.konular.find(function (x) { return x.id === konu.id; });
                    if (d && k) konuDetayModaliniAc(d, k);
                }
            });
        });
    });

    (dersVeri.denemeler || []).forEach(function (deneme) {
        if (!aramaMetnindeGeciyor(deneme.ad, temiz)) return;
        aramaSonucuEkle(sonuclar, {
            sorgu: temiz,
            grup: "Ders",
            ikon: "📝",
            baslik: deneme.ad,
            alt: `Deneme · ${deneme.tarih || ""}`,
            git: function () {
                sayfayaGec("ders");
                dersSekmesineGec("denemeler");
                const guncel = dersVeri.denemeler.find(function (d) { return d.id === deneme.id; });
                if (guncel) denemeDetayModaliniAc(guncel);
            }
        });
    });

    (dersVeri.yanlislar || []).forEach(function (yanlis) {
        const aranacak = [yanlis.konu, yanlis.not, yanlis.ders, yanlis.sebep].filter(Boolean).join(" ");
        if (!aramaMetnindeGeciyor(aranacak, temiz)) return;
        aramaSonucuEkle(sonuclar, {
            sorgu: temiz,
            grup: "Ders",
            ikon: "❌",
            baslik: yanlis.konu || yanlis.not || "Yanlış sorusu",
            alt: `${yanlis.ders || "Ders"} · Yanlışlarım`,
            git: function () {
                sayfayaGec("ders");
                dersSekmesineGec("yanlislar");
                ogeyiVurgulaVeKaydir(`[data-yanlis-id="${yanlis.id}"]`);
            }
        });
    });

    (isVeri.klasorler || []).forEach(function (klasor) {
        if (aramaMetnindeGeciyor(klasor.ad, temiz)) {
            aramaSonucuEkle(sonuclar, {
                sorgu: temiz,
                grup: "İş",
                ikon: klasor.ikon || "📁",
                baslik: klasor.ad,
                alt: "Klasör",
                git: function () {
                    sayfayaGec("is");
                    acikIsKlasorleri[klasor.id] = true;
                    isKlasorleriCiz();
                    ogeyiVurgulaVeKaydir(`[data-is-klasor-id="${klasor.id}"]`);
                }
            });
        }

        (klasor.gorevler || []).forEach(function (gorev) {
            if (!aramaMetnindeGeciyor(gorev.metin, temiz)) return;
            aramaSonucuEkle(sonuclar, {
                sorgu: temiz,
                grup: "İş",
                ikon: "💼",
                baslik: gorev.metin,
                alt: `${klasor.ad} · İş görevi`,
                git: function () {
                    sayfayaGec("is");
                    acikIsKlasorleri[klasor.id] = true;
                    isKlasorleriCiz();
                    ogeyiVurgulaVeKaydir(`[data-is-gorev-id="${gorev.id}"]`);
                }
            });
        });
    });

    (isVeri.hizliNotlar || []).forEach(function (not) {
        if (!aramaMetnindeGeciyor(not.metin, temiz)) return;
        aramaSonucuEkle(sonuclar, {
            sorgu: temiz,
            grup: "İş",
            ikon: "⚡",
            baslik: not.metin,
            alt: "Hızlı not",
            git: function () {
                sayfayaGec("is");
                ogeyiVurgulaVeKaydir(`[data-hizli-not-id="${not.id}"]`);
            }
        });
    });

    if (aramaMetnindeGeciyor(isVeri.fikirler, temiz)) {
        aramaSonucuEkle(sonuclar, {
            sorgu: temiz,
            grup: "İş",
            ikon: "💡",
            baslik: "Fikirler alanında eşleşme",
            alt: "İş · Fikirler",
            git: function () {
                sayfayaGec("is");
                const el = document.getElementById("isFikirlerAlani");
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                    el.focus();
                    el.classList.add("arama-vurgu");
                    setTimeout(function () { el.classList.remove("arama-vurgu"); }, 2600);
                }
            }
        });
    }

    sonuclar.sort(function (a, b) { return b.skor - a.skor; });
    return sonuclar.slice(0, 20);
}

function globalAramaPaneliniKapat() {
    globalAramaSonuclari.classList.add("gizli");
    globalAramaAktifIndeks = -1;
}

function globalAramaSonucunuSec(indeks) {
    const sonuc = globalAramaSonucListesi[indeks];
    if (!sonuc) return;
    globalAramaInput.value = "";
    globalAramaTemizle.classList.add("gizli");
    globalAramaPaneliniKapat();
    sonuc.git();
}

function globalAramaSonuclariniCiz(sonuclar) {
    globalAramaSonucListesi = sonuclar;
    globalAramaAktifIndeks = -1;

    if (sonuclar.length === 0) {
        globalAramaSonuclari.innerHTML = '<div class="global-arama-bos">Sonuç bulunamadı.</div>';
        globalAramaSonuclari.classList.remove("gizli");
        return;
    }

    const gruplar = {};
    sonuclar.forEach(function (s, i) {
        if (!gruplar[s.grup]) gruplar[s.grup] = [];
        gruplar[s.grup].push({ sonuc: s, indeks: i });
    });

    let html = "";
    Object.keys(gruplar).forEach(function (grupAdi) {
        html += `<div class="global-arama-grup-baslik">${escapeHtml(grupAdi)}</div>`;
        gruplar[grupAdi].forEach(function (item) {
            const s = item.sonuc;
            html += `
                <button type="button" class="global-arama-sonuc" data-arama-indeks="${item.indeks}" role="option">
                    <span class="global-arama-sonuc-ikon">${s.ikon}</span>
                    <span class="global-arama-sonuc-metin">
                        <div class="global-arama-sonuc-baslik">${escapeHtml(s.baslik)}</div>
                        <div class="global-arama-sonuc-alt">${escapeHtml(s.alt || "")}</div>
                    </span>
                </button>
            `;
        });
    });

    globalAramaSonuclari.innerHTML = html;
    globalAramaSonuclari.classList.remove("gizli");

    globalAramaSonuclari.querySelectorAll("[data-arama-indeks]").forEach(function (btn) {
        btn.addEventListener("mousedown", function (e) {
            e.preventDefault();
            globalAramaSonucunuSec(Number(btn.dataset.aramaIndeks));
        });
    });
}

function globalAramaGuncelle() {
    const sorgu = globalAramaInput.value.trim();
    globalAramaTemizle.classList.toggle("gizli", sorgu.length === 0);

    if (sorgu.length < 2) {
        globalAramaPaneliniKapat();
        return;
    }

    globalAramaSonuclariniCiz(globalAramaYap(sorgu));
}

globalAramaInput.addEventListener("input", function () {
    clearTimeout(globalAramaZamanlayici);
    globalAramaZamanlayici = setTimeout(globalAramaGuncelle, 180);
});

globalAramaInput.addEventListener("focus", function () {
    if (globalAramaInput.value.trim().length >= 2) globalAramaGuncelle();
});

globalAramaInput.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        globalAramaPaneliniKapat();
        globalAramaInput.blur();
        return;
    }

    if (globalAramaSonuclari.classList.contains("gizli") || globalAramaSonucListesi.length === 0) {
        if (e.key === "Enter") globalAramaGuncelle();
        return;
    }

    if (e.key === "ArrowDown") {
        e.preventDefault();
        globalAramaAktifIndeks = Math.min(globalAramaAktifIndeks + 1, globalAramaSonucListesi.length - 1);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        globalAramaAktifIndeks = Math.max(globalAramaAktifIndeks - 1, 0);
    } else if (e.key === "Enter" && globalAramaAktifIndeks >= 0) {
        e.preventDefault();
        globalAramaSonucunuSec(globalAramaAktifIndeks);
        return;
    } else {
        return;
    }

    globalAramaSonuclari.querySelectorAll("[data-arama-indeks]").forEach(function (btn) {
        btn.classList.toggle("aktif", Number(btn.dataset.aramaIndeks) === globalAramaAktifIndeks);
    });

    const aktifBtn = globalAramaSonuclari.querySelector(`[data-arama-indeks="${globalAramaAktifIndeks}"]`);
    if (aktifBtn) aktifBtn.scrollIntoView({ block: "nearest" });
});

globalAramaTemizle.addEventListener("click", function () {
    globalAramaInput.value = "";
    globalAramaTemizle.classList.add("gizli");
    globalAramaPaneliniKapat();
    globalAramaInput.focus();
});

document.addEventListener("click", function (e) {
    if (!globalAramaKutusu.contains(e.target)) {
        globalAramaPaneliniKapat();
    }
});

function guvenliBaslat() {
    tarihBasligiCiz();
    kategorilerAlaniniCiz();
    takvimiCiz();
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
    if (typeof widgetPanelleriniBaslat === "function") widgetPanelleriniBaslat();
}

// ==========================================
// İKON DEĞİŞTİRME & GÜVENLİ BAŞLATMA
// ==========================================

function ikonStiliniDegistir(yeniStil) {
    localStorage.setItem(IKON_STILI_ANAHTARI, yeniStil);

    const secici = document.getElementById("ikonStilSecici");
    if (secici) {
        secici.querySelectorAll("[data-ikon-stili]").forEach(function(b) {
            b.classList.toggle("aktif", b.dataset.ikonStili === yeniStil);
        });
    }

    tumSayfadakiEmojileriDonustur();

    if (typeof kategorilerAlaniniCiz === "function") kategorilerAlaniniCiz();
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
    if (typeof isModuluGuncelle === "function") isModuluGuncelle();
    if (typeof dersModuluGuncelle === "function") dersModuluGuncelle();
}

const ikonStilSeciciEl = document.getElementById("ikonStilSecici");
if (ikonStilSeciciEl) {
    const kayitliStil = aktifIkonStili();
    ikonStilSeciciEl.querySelectorAll("[data-ikon-stili]").forEach(function(b) {
        b.classList.toggle("aktif", b.dataset.ikonStili === kayitliStil);
    });

    ikonStilSeciciEl.addEventListener("click", function(e) {
        const btn = e.target.closest("[data-ikon-stili]");
        if (!btn) return;
        ikonStiliniDegistir(btn.dataset.ikonStili);
    });
}

function guvenliBaslat() {
    tarihBasligiCiz();
    kategorilerAlaniniCiz();
    takvimiCiz();
    if (typeof gunlukOzetiCiz === "function") gunlukOzetiCiz();
    if (typeof widgetPanelleriniBaslat === "function") widgetPanelleriniBaslat();
    tumSayfadakiEmojileriDonustur();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", guvenliBaslat);
} else {
    guvenliBaslat();
}