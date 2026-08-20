// ==========================================================
// WIDGET DÜZENLEME SİSTEMİ
// Paneller: ana, is, ders_genel
// ==========================================================

const WIDGET_DUZEN_ANAHTARI = "widgetDuzenleri_v5";

const PANEL_WIDGET_TANIMLARI = {
    ana: {
        "gunluk-ozet": { baslik: "Günlük Özet", varsayilanGenislik: 4, ikon: "📊" },
        "gorevler": { baslik: "Görevler", varsayilanGenislik: 2, ikon: "✅" },
        "takvim": { baslik: "Takvim", varsayilanGenislik: 2, ikon: "📅" },
        "not-defteri": { baslik: "Not Defteri", varsayilanGenislik: 2, ikon: "📝" },
        "pomodoro": { baslik: "Pomodoro", varsayilanGenislik: 2, ikon: "🍅" }
    },
    is: {
        "is-ozet": { baslik: "Durum Özeti", varsayilanGenislik: 4, ikon: "📊" },
        "is-zaman": { baslik: "Zaman Çizelgesi", varsayilanGenislik: 4, ikon: "🗓️" },
        "is-takvim": { baslik: "İş Takvimi & Toplantılar", varsayilanGenislik: 2, ikon: "📅" },
        "is-klasorler": { baslik: "Klasörler", varsayilanGenislik: 2, ikon: "📁" },
        "is-fikirler": { baslik: "Fikirler", varsayilanGenislik: 2, ikon: "💡" },
        "is-hizli-not": { baslik: "Hızlı Not", varsayilanGenislik: 2, ikon: "⚡" }
    },
    ders_genel: {
        "ders-istatistikler": { baslik: "Özet İstatistikler", varsayilanGenislik: 4, ikon: "📊" },
        "ders-calisma-plani": { baslik: "Bugünün Çalışma Planı", varsayilanGenislik: 2, ikon: "🎯" },
        "ders-ilerleme": { baslik: "Derslere Göre İlerleme", varsayilanGenislik: 2, ikon: "📚" },
        "ders-performans": { baslik: "Ders Performansı", varsayilanGenislik: 4, ikon: "📈" },
        "ders-net-grafik": { baslik: "Net Gelişim Grafiği", varsayilanGenislik: 2, ikon: "📉" },
        "ders-zayif-konular": { baslik: "Zayıf Konular", varsayilanGenislik: 2, ikon: "⚠️" }
    },
    ders_konular: {
        "konular-panel": { baslik: "Konular", varsayilanGenislik: 4, ikon: "📖" }
    },
    ders_denemeler: {
        "deneme-istatistikler": { baslik: "Deneme İstatistikleri", varsayilanGenislik: 4, ikon: "📊" },
        "deneme-ekle": { baslik: "Yeni Deneme Ekle", varsayilanGenislik: 2, ikon: "📝" },
        "deneme-gecmisi": { baslik: "Deneme Geçmişi", varsayilanGenislik: 2, ikon: "📈" }
    },
    ders_yanlislar: {
        "yanlis-ekle": { baslik: "Yanlış Soru Ekle", varsayilanGenislik: 2, ikon: "➕" },
        "yanlis-analiz": { baslik: "Yanlış Analizi", varsayilanGenislik: 2, ikon: "📊" },
        "yanlis-arsiv": { baslik: "Yanlış Arşivim", varsayilanGenislik: 4, ikon: "❌" }
    },
    ders_takip: {
        "takip-istatistik": { baslik: "İstatistik Özeti", varsayilanGenislik: 4, ikon: "📊" },
        "takip-sure-ders": { baslik: "Ders Bazlı Çalışma Süresi", varsayilanGenislik: 2, ikon: "⏱️" },
        "takip-haftalik-grafik": { baslik: "Haftalık Çalışma Grafiği", varsayilanGenislik: 2, ikon: "📊" },
        "takip-takvim": { baslik: "Çalışma Takvimi", varsayilanGenislik: 2, ikon: "🔥" },
        "takip-aylik-ozet": { baslik: "Aylık Özet", varsayilanGenislik: 2, ikon: "📅" },
        "takip-hedefler": { baslik: "Hedefler", varsayilanGenislik: 4, ikon: "🎯" }
    }
};

const widgetDuzenleModu = {};
let widgetSuruklenenId = null;
let widgetSuruklenenPanel = null;
let widgetEklePanelId = null;

function widgetSutunSayisiHesapla() {
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1200) return 2;
    if (w <= 1650) return 3;
    return 4;
}

function widgetMasonryDuzenle(panelId) {
    const grid = widgetGridiniAl(panelId);
    if (!grid) return;

    // Eğer sekme o anda gizliyse (clientWidth 0 ise) hesaplama yapma
    const gridGenislik = grid.clientWidth;
    if (gridGenislik <= 50) return;

    const maxSutun = widgetSutunSayisiHesapla();
    const bosluk = 18;
    const sutunGenislik = (gridGenislik - bosluk * (maxSutun - 1)) / maxSutun;
    const sutunYukseklikleri = new Array(maxSutun).fill(0);
    const kutular = Array.from(grid.querySelectorAll(".widget-kutu"));

    let maxYukseklik = 0;

    kutular.forEach(function (kutu) {
        const ham = parseInt(getComputedStyle(kutu).getPropertyValue("--widget-genislik"), 10) || 2;
        // 1s = 1 Sütun, 2s = 2 Sütun, 3s = 3 Sütun, 4s/Tam = 4 Sütun (ekran izin verdiği ölçüde)
        let span = Math.max(1, Math.min(maxSutun, ham));

        let enUygunSutun = 0;
        let enDusukYukseklik = Infinity;

        for (let baslangic = 0; baslangic <= maxSutun - span; baslangic++) {
            let bloktakiMax = 0;
            for (let i = baslangic; i < baslangic + span; i++) {
                bloktakiMax = Math.max(bloktakiMax, sutunYukseklikleri[i]);
            }
            if (bloktakiMax < enDusukYukseklik) {
                enDusukYukseklik = bloktakiMax;
                enUygunSutun = baslangic;
            }
        }

        const sol = enUygunSutun * (sutunGenislik + bosluk);
        const genislikPx = span * sutunGenislik + (span - 1) * bosluk;

        kutu.style.left = sol + "px";
        kutu.style.top = enDusukYukseklik + "px";
        kutu.style.width = Math.floor(genislikPx) + "px";
        kutu.classList.toggle("widget-dar", genislikPx < 320);

        const yeniYukseklik = enDusukYukseklik + kutu.offsetHeight + bosluk;
        for (let i = enUygunSutun; i < enUygunSutun + span; i++) {
            sutunYukseklikleri[i] = yeniYukseklik;
        }

        maxYukseklik = Math.max(maxYukseklik, yeniYukseklik);
    });

    grid.style.height = Math.max(0, maxYukseklik - bosluk) + "px";
}

let widgetResizeZamanlayici = null;
function widgetTumPanelleriYenidenDuzenle() {
    clearTimeout(widgetResizeZamanlayici);
    widgetResizeZamanlayici = setTimeout(function () {
        Object.keys(PANEL_WIDGET_TANIMLARI).forEach(function (panelId) {
            widgetMasonryDuzenle(panelId);
        });
    }, 120);
}

window.addEventListener("resize", widgetTumPanelleriYenidenDuzenle);

function widgetTanimlari(panelId) {
    return PANEL_WIDGET_TANIMLARI[panelId] || {};
}

function varsayilanWidgetDuzeni(panelId) {
    const tanimlar = widgetTanimlari(panelId);
    return Object.keys(tanimlar).map(function (id, i) {
        return {
            id: id,
            genislik: tanimlar[id].varsayilanGenislik,
            sira: i,
            gorunur: true
        };
    });
}

function widgetDuzenleriniYukle() {
    try {
        const ham = localStorage.getItem(WIDGET_DUZEN_ANAHTARI);
        if (ham) return JSON.parse(ham);
    } catch (e) {
        // bozuksa varsayılan
    }
    return {};
}

function widgetDuzenleriniKaydet(tumDuzenler) {
    localStorage.setItem(WIDGET_DUZEN_ANAHTARI, JSON.stringify(tumDuzenler));
}

function panelWidgetDuzeniniAl(panelId) {
    const tum = widgetDuzenleriniYukle();
    const tanimlar = widgetTanimlari(panelId);
    let duzen = Array.isArray(tum[panelId]) ? tum[panelId] : varsayilanWidgetDuzeni(panelId);

    const mevcutIdler = Object.keys(tanimlar);
    duzen = duzen.filter(function (o) { return mevcutIdler.indexOf(o.id) !== -1; });

    mevcutIdler.forEach(function (id) {
        if (!duzen.some(function (o) { return o.id === id; })) {
            duzen.push({
                id: id,
                genislik: tanimlar[id].varsayilanGenislik,
                sira: duzen.length,
                gorunur: false
            });
        }
    });

    duzen.forEach(function (o) {
        if (!o.genislik) o.genislik = tanimlar[o.id].varsayilanGenislik;
        if (typeof o.gorunur !== "boolean") o.gorunur = true;
        if (typeof o.sira !== "number") o.sira = 0;
        o.genislik = Math.max(1, Math.min(8, o.genislik));
    });

    return duzen.sort(function (a, b) { return a.sira - b.sira; });
}

function panelWidgetDuzeniniKaydet(panelId, duzen) {
    const tum = widgetDuzenleriniYukle();
    tum[panelId] = duzen;
    widgetDuzenleriniKaydet(tum);
}

function widgetIcerikKaynaginiAl(panelId) {
    return document.querySelector('[data-widget-kaynak="' + panelId + '"]');
}

function widgetGridiniAl(panelId) {
    return document.querySelector('.widget-grid[data-widget-panel="' + panelId + '"]');
}

function widgetHtmlKacis(metin) {
    const div = document.createElement("div");
    div.textContent = metin || "";
    return div.innerHTML;
}

function widgetBoyutDugmeleriHtml(aktifGenislik) {
    return [1, 2, 3, 4].map(function (g) {
        const etiket = g === 4 ? "Tam" : g + "s";
        return '<button type="button" class="widget-boyut-btn' + (aktifGenislik === g ? " aktif" : "") + '" data-widget-boyut="' + g + '" title="Genişlik: ' + g + '/4">' + etiket + '</button>';
    }).join("");
}

function widgetKutusuOlustur(panelId, oge, icerikParcasi) {
    const tanim = widgetTanimlari(panelId)[oge.id];
    const kutu = document.createElement("div");
    kutu.className = "widget-kutu";
    kutu.dataset.widgetId = oge.id;
    kutu.dataset.widgetPanel = panelId;
    kutu.style.setProperty("--widget-genislik", String(oge.genislik));

    kutu.innerHTML =
        '<div class="widget-arac-cubugu">' +
            '<button type="button" class="widget-surukle" draggable="true" title="Sürükleyerek taşı" aria-label="Taşı">⠿</button>' +
            '<span class="widget-arac-baslik">' + (tanim.ikon || "") + " " + widgetHtmlKacis(tanim.baslik) + '</span>' +
            '<div class="widget-boyut-grubu">' + widgetBoyutDugmeleriHtml(oge.genislik) + '</div>' +
            '<button type="button" class="widget-gizle-btn" title="Widget\'ı kaldır">✕</button>' +
        '</div>' +
        '<div class="widget-icerik"></div>';

    const icerikAlani = kutu.querySelector(".widget-icerik");
    while (icerikParcasi.firstChild) {
        icerikAlani.appendChild(icerikParcasi.firstChild);
    }

    return kutu;
}

function ozelSekmeIcerigiUret(panelId, widgetId) {
    const tanim = widgetTanimlari(panelId)[widgetId] || {};
    const baslik = tanim.baslik || "Widget";
    const ikon = tanim.ikon || "📌";

    if (widgetId === "not-defteri") {
        const notKey = "ozel_not_" + panelId;
        const kayitliNot = localStorage.getItem(notKey) || "";
        const div = document.createElement("div");
        div.className = "dashboard-card not-defteri-card";
        div.innerHTML = `
            <div class="section-header">
                <h2>${simgesi(ikon)} ${escapeHtml(baslik)}</h2>
            </div>
            <div class="not-kagidi ozel-sekme-not" contenteditable="true" data-placeholder="Bu sekmeye özel notlarını buraya yaz...">${kayitliNot}</div>
        `;
        const notEl = div.querySelector(".not-kagidi");
        notEl.addEventListener("input", function() {
            localStorage.setItem(notKey, notEl.innerHTML);
        });
        return div;
    }

    if (widgetId === "gorevler") {
        const gorevKey = "ozel_gorevler_" + panelId;
        let gorevler = [];
        try { gorevler = JSON.parse(localStorage.getItem(gorevKey)) || []; } catch(e) {}

        const div = document.createElement("div");
        div.className = "dashboard-card";
        
        function gorevListesiniCiz() {
            div.innerHTML = `
                <div class="section-header">
                    <h2>${simgesi(ikon)} ${escapeHtml(baslik)}</h2>
                </div>
                <div class="gorev-formu-satir" style="margin-bottom: 12px;">
                    <input type="text" class="ozel-gorev-input" placeholder="Yeni görev ekle..." style="flex:1;">
                    <button type="button" class="ders-buyuk-buton buton-artili ozel-gorev-ekle-btn">＋</button>
                </div>
                <div class="task-list">
                    ${gorevler.length === 0 ? '<div class="bos-liste-notu">Henüz görev eklenmedi.</div>' : 
                      gorevler.map((g, i) => `
                        <div class="task" style="border-left: 4px solid var(--renk-vurgu);">
                            <input type="checkbox" ${g.bitti ? 'checked' : ''} data-ozel-gorev-idx="${i}">
                            <div class="task-metin"><h3 style="${g.bitti ? 'text-decoration:line-through;opacity:0.6;' : ''}">${escapeHtml(g.metin)}</h3></div>
                            <button class="gorev-sil" data-ozel-gorev-sil="${i}">${IKON.sil}</button>
                        </div>
                      `).join('')}
                </div>
            `;

            const input = div.querySelector(".ozel-gorev-input");
            const ekleBtn = div.querySelector(".ozel-gorev-ekle-btn");
            
            function ekle() {
                const val = input.value.trim();
                if (!val) return;
                gorevler.push({ metin: val, bitti: false });
                localStorage.setItem(gorevKey, JSON.stringify(gorevler));
                gorevListesiniCiz();
            }

            if (ekleBtn) ekleBtn.addEventListener("click", ekle);
            if (input) input.addEventListener("keydown", (e) => { if(e.key === "Enter") ekle(); });

            div.querySelectorAll("[data-ozel-gorev-idx]").forEach(cb => {
                cb.addEventListener("change", () => {
                    const idx = Number(cb.dataset.ozelGorevIdx);
                    gorevler[idx].bitti = cb.checked;
                    localStorage.setItem(gorevKey, JSON.stringify(gorevler));
                    gorevListesiniCiz();
                });
            });

            div.querySelectorAll("[data-ozel-gorev-sil]").forEach(btn => {
                btn.addEventListener("click", () => {
                    const idx = Number(btn.dataset.ozelGorevSil);
                    gorevler.splice(idx, 1);
                    localStorage.setItem(gorevKey, JSON.stringify(gorevler));
                    gorevListesiniCiz();
                });
            });
        }

        gorevListesiniCiz();
        return div;
    }

    const div = document.createElement("div");
    div.className = "dashboard-card";
    div.innerHTML = `
        <div class="section-header">
            <h2>${simgesi(ikon)} ${escapeHtml(baslik)}</h2>
        </div>
        <div class="bos-durum-notu">Bu sekme için ${escapeHtml(baslik)} alanı hazır.</div>
    `;
    return div;
}

function widgetPaneliCiz(panelId) {
    const grid = widgetGridiniAl(panelId);
    if (!grid) return;

    const kaynak = widgetIcerikKaynaginiAl(panelId);
    const ozelSekmeMi = panelId.includes("_ozel_");

    if (!ozelSekmeMi) {
        widgetIceriginiKaynagaGeriAl(panelId);
    }

    const duzen = panelWidgetDuzeniniAl(panelId);
    const gorunurOgeler = duzen.filter(function (o) { return o.gorunur; });

    grid.innerHTML = "";

    gorunurOgeler.forEach(function (oge) {
        let klon = document.createElement("div");

        if (ozelSekmeMi) {
            klon.appendChild(ozelSekmeIcerigiUret(panelId, oge.id));
        } else if (kaynak) {
            const parca = kaynak.querySelector('[data-widget-id="' + oge.id + '"]');
            if (!parca) return;
            while (parca.firstChild) {
                klon.appendChild(parca.firstChild);
            }
        }

        const kutu = widgetKutusuOlustur(panelId, oge, klon);
        grid.appendChild(kutu);
    });

    widgetKutuOlaylariniBagla(panelId);
    widgetDuzenleModuGuncelle(panelId);
    widgetMasonryDuzenle(panelId);
}


function widgetSiralariniGuncelle(panelId) {
    const grid = widgetGridiniAl(panelId);
    if (!grid) return;

    const duzen = panelWidgetDuzeniniAl(panelId);
    const kutular = Array.from(grid.querySelectorAll(".widget-kutu"));

    kutular.forEach(function (kutu, i) {
        const kayit = duzen.find(function (o) { return o.id === kutu.dataset.widgetId; });
        if (kayit) kayit.sira = i;
    });

    duzen.sort(function (a, b) { return a.sira - b.sira; });
    panelWidgetDuzeniniKaydet(panelId, duzen);
}

function widgetKutuOlaylariniBagla(panelId) {
    const grid = widgetGridiniAl(panelId);
    if (!grid) return;

    grid.querySelectorAll(".widget-kutu").forEach(function (kutu) {
        const widgetId = kutu.dataset.widgetId;

        const surukle = kutu.querySelector(".widget-surukle");
        if (surukle) {
            surukle.addEventListener("dragstart", function (e) {
                if (!widgetDuzenleModu[panelId]) {
                    e.preventDefault();
                    return;
                }
                widgetSuruklenenId = widgetId;
                widgetSuruklenenPanel = panelId;
                kutu.classList.add("surukleniyor");
                e.dataTransfer.effectAllowed = "move";
                e.dataTransfer.setData("text/plain", widgetId);
            });

            surukle.addEventListener("dragend", function () {
                kutu.classList.remove("surukleniyor");
                grid.querySelectorAll(".widget-kutu").forEach(function (k) {
                    k.classList.remove("surukle-hedef");
                });
                widgetSuruklenenId = null;
                widgetSuruklenenPanel = null;
            });
        }

        kutu.addEventListener("dragover", function (e) {
            if (!widgetDuzenleModu[panelId] || widgetSuruklenenPanel !== panelId) return;
            e.preventDefault();
            e.dataTransfer.dropEffect = "move";
            if (widgetSuruklenenId && widgetSuruklenenId !== widgetId) {
                kutu.classList.add("surukle-hedef");
            }
        });

        kutu.addEventListener("dragleave", function () {
            kutu.classList.remove("surukle-hedef");
        });

        kutu.addEventListener("drop", function (e) {
            e.preventDefault();
            kutu.classList.remove("surukle-hedef");
            if (!widgetDuzenleModu[panelId] || !widgetSuruklenenId || widgetSuruklenenPanel !== panelId) return;
            if (widgetSuruklenenId === widgetId) return;

            const suruklenen = grid.querySelector('[data-widget-id="' + widgetSuruklenenId + '"]');
            if (!suruklenen) return;

            const hedefRect = kutu.getBoundingClientRect();
            const orta = hedefRect.top + hedefRect.height / 2;
            const fareY = e.clientY;

            if (fareY < orta) {
                grid.insertBefore(suruklenen, kutu);
            } else {
                grid.insertBefore(suruklenen, kutu.nextSibling);
            }

            widgetSiralariniGuncelle(panelId);
            widgetMasonryDuzenle(panelId);
        });

        kutu.querySelectorAll("[data-widget-boyut]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                const yeniGenislik = Number(btn.dataset.widgetBoyut);
                const duzen = panelWidgetDuzeniniAl(panelId);
                const kayit = duzen.find(function (o) { return o.id === widgetId; });
                if (!kayit) return;

                kayit.genislik = yeniGenislik;
                panelWidgetDuzeniniKaydet(panelId, duzen);
                kutu.style.setProperty("--widget-genislik", String(yeniGenislik));
                kutu.querySelectorAll(".widget-boyut-btn").forEach(function (b) {
                    b.classList.toggle("aktif", Number(b.dataset.widgetBoyut) === yeniGenislik);
                });
                widgetMasonryDuzenle(panelId);
            });
        });

        const gizleBtn = kutu.querySelector(".widget-gizle-btn");
        if (gizleBtn) {
            gizleBtn.addEventListener("click", function () {
                widgetGizle(panelId, widgetId);
            });
        }
    });
}

function widgetDuzenleModuGuncelle(panelId) {
    const grid = widgetGridiniAl(panelId);
    const aktif = !!widgetDuzenleModu[panelId];

    if (grid) grid.classList.toggle("duzenle-modu", aktif);

    document.querySelectorAll('[data-widget-duzenle-arac="' + panelId + '"]').forEach(function (el) {
        el.classList.toggle("gizli", !aktif);
    });

    document.querySelectorAll('[data-widget-panel="' + panelId + '"].widget-duzenle-btn').forEach(function (btn) {
        btn.classList.toggle("aktif", aktif);
        btn.textContent = aktif ? "✓ Düzenlemeyi Bitir" : "⊞ Widget Düzenle";
    });

    widgetMasonryDuzenle(panelId);
}

function widgetDuzenleModunuAcKapa(panelId) {
    widgetDuzenleModu[panelId] = !widgetDuzenleModu[panelId];
    widgetDuzenleModuGuncelle(panelId);
}

function widgetGizle(panelId, widgetId) {
    const kaynak = widgetIcerikKaynaginiAl(panelId);
    const grid = widgetGridiniAl(panelId);
    const kutu = grid && grid.querySelector('[data-widget-id="' + widgetId + '"]');
    const hedefParca = kaynak && kaynak.querySelector('[data-widget-id="' + widgetId + '"]');

    if (!kutu || !hedefParca) return;

    const icerikAlani = kutu.querySelector(".widget-icerik");
    while (icerikAlani.firstChild) {
        hedefParca.appendChild(icerikAlani.firstChild);
    }

    kutu.remove();

    const duzen = panelWidgetDuzeniniAl(panelId);
    const kayit = duzen.find(function (o) { return o.id === widgetId; });
    if (kayit) {
        kayit.gorunur = false;
        panelWidgetDuzeniniKaydet(panelId, duzen);
    }

    widgetSiralariniGuncelle(panelId);
    widgetMasonryDuzenle(panelId);
}

function widgetGoster(panelId, widgetId) {
    const duzen = panelWidgetDuzeniniAl(panelId);
    const kayit = duzen.find(function (o) { return o.id === widgetId; });
    if (!kayit || kayit.gorunur) return;

    kayit.gorunur = true;
    kayit.sira = duzen.filter(function (o) { return o.gorunur; }).length;
    panelWidgetDuzeniniKaydet(panelId, duzen);
    widgetPaneliCiz(panelId);
}

function widgetIceriginiKaynagaGeriAl(panelId) {
    const kaynak = widgetIcerikKaynaginiAl(panelId);
    const grid = widgetGridiniAl(panelId);
    if (!kaynak || !grid) return;

    grid.querySelectorAll(".widget-kutu").forEach(function (kutu) {
        const widgetId = kutu.dataset.widgetId;
        const hedefParca = kaynak.querySelector('[data-widget-id="' + widgetId + '"]');
        const icerikAlani = kutu.querySelector(".widget-icerik");
        if (!hedefParca || !icerikAlani) return;

        while (icerikAlani.firstChild) {
            hedefParca.appendChild(icerikAlani.firstChild);
        }
    });
}

function widgetPaneliSifirla(panelId) {
    widgetIceriginiKaynagaGeriAl(panelId);

    const tum = widgetDuzenleriniYukle();
    delete tum[panelId];
    widgetDuzenleriniKaydet(tum);

    widgetPaneliCiz(panelId);
}

function widgetEkleModaliniAc(panelId) {
    widgetEklePanelId = panelId;
    const liste = document.getElementById("widgetEkleListesi");
    const overlay = document.getElementById("widgetEkleOverlay");
    if (!liste || !overlay) return;

    const duzen = panelWidgetDuzeniniAl(panelId);
    const gizliler = duzen.filter(function (o) { return !o.gorunur; });
    const tanimlar = widgetTanimlari(panelId);

    if (gizliler.length === 0) {
        liste.innerHTML = '<p class="bos-liste-notu">Eklenebilecek gizli widget kalmadı.</p>';
    } else {
        liste.innerHTML = gizliler.map(function (o) {
            const t = tanimlar[o.id];
            return (
                '<button type="button" class="widget-ekle-oge" data-widget-ekle-id="' + o.id + '">' +
                    '<span class="widget-ekle-ikon">' + (t.ikon || "▢") + '</span>' +
                    '<span>' + widgetHtmlKacis(t.baslik) + '</span>' +
                '</button>'
            );
        }).join("");

        liste.querySelectorAll("[data-widget-ekle-id]").forEach(function (btn) {
            btn.addEventListener("click", function () {
                widgetGoster(panelId, btn.dataset.widgetEkleId);
                widgetEkleModaliniKapat();
            });
        });
    }

    overlay.classList.remove("gizli");
}

function widgetEkleModaliniKapat() {
    const overlay = document.getElementById("widgetEkleOverlay");
    if (overlay) overlay.classList.add("gizli");
    widgetEklePanelId = null;
}

let aktifPanelId = "ana";

function aktifWidgetPaneliniGuncelle(panelId) {
    const araclarKutusu = document.getElementById("globalWidgetAraclari");
    if (!araclarKutusu) return;

    if (!panelId || !PANEL_WIDGET_TANIMLARI[panelId]) {
        araclarKutusu.classList.add("gizli");
        return;
    }

    araclarKutusu.classList.remove("gizli");
    aktifPanelId = panelId;

    const duzenleBtn = document.getElementById("globalWidgetDuzenleBtn");
    const ekleBtn = document.getElementById("globalWidgetEkleBtn");
    const sifirlaBtn = document.getElementById("globalWidgetSifirlaBtn");
    const duzenleGrup = document.getElementById("globalWidgetDuzenleGrup");

    if (duzenleBtn) {
        duzenleBtn.dataset.widgetPanel = panelId;
        const aktif = !!widgetDuzenleModu[panelId];
        duzenleBtn.classList.toggle("aktif", aktif);
        duzenleBtn.textContent = aktif ? "✓ Düzenlemeyi Bitir" : "⊞ Widget Düzenle";
    }
    if (ekleBtn) ekleBtn.dataset.widgetPanel = panelId;
    if (sifirlaBtn) sifirlaBtn.dataset.widgetPanel = panelId;
    if (duzenleGrup) {
        duzenleGrup.dataset.widgetDuzenleArac = panelId;
        duzenleGrup.classList.toggle("gizli", !widgetDuzenleModu[panelId]);
    }

    widgetMasonryDuzenle(panelId);
}

function widgetPanelleriniBaslat() {
    Object.keys(PANEL_WIDGET_TANIMLARI).forEach(function (panelId) {
        widgetPaneliCiz(panelId);
    });

    const globalDuzenleBtn = document.getElementById("globalWidgetDuzenleBtn");
    if (globalDuzenleBtn) {
        globalDuzenleBtn.addEventListener("click", function () {
            const panel = globalDuzenleBtn.dataset.widgetPanel || aktifPanelId;
            widgetDuzenleModunuAcKapa(panel);
            aktifWidgetPaneliniGuncelle(panel);
        });
    }

    const globalEkleBtn = document.getElementById("globalWidgetEkleBtn");
    if (globalEkleBtn) {
        globalEkleBtn.addEventListener("click", function () {
            const panel = globalEkleBtn.dataset.widgetPanel || aktifPanelId;
            widgetEkleModaliniAc(panel);
        });
    }

    const globalSifirlaBtn = document.getElementById("globalWidgetSifirlaBtn");
    if (globalSifirlaBtn) {
        globalSifirlaBtn.addEventListener("click", function () {
            const panelId = globalSifirlaBtn.dataset.widgetPanel || aktifPanelId;
            if (typeof onayGoster === "function") {
                onayGoster({
                    baslik: "Widget Düzenini Sıfırla",
                    mesaj: "Bu paneldeki widget yerleşimini varsayılan haline döndürmek istiyor musun?",
                    onayMetni: "Sıfırla",
                    onOnay: function () { 
                        widgetPaneliSifirla(panelId); 
                        aktifWidgetPaneliniGuncelle(panelId);
                    }
                });
            } else {
                widgetPaneliSifirla(panelId);
                aktifWidgetPaneliniGuncelle(panelId);
            }
        });
    }

    const widgetEkleKapat = document.getElementById("widgetEkleKapat");
    if (widgetEkleKapat) {
        widgetEkleKapat.addEventListener("click", widgetEkleModaliniKapat);
    }

    const widgetEkleOverlay = document.getElementById("widgetEkleOverlay");
    if (widgetEkleOverlay) {
        widgetEkleOverlay.addEventListener("click", function (e) {
            if (e.target === widgetEkleOverlay) widgetEkleModaliniKapat();
        });
    }

    aktifWidgetPaneliniGuncelle("ana");
}

const PANEL_ADI_ANAHTARI = "panelAdi_v1";

function karsilamaMesajiOlustur(isim) {
    const saat = new Date().getHours();
    let secenekler = [];

    if (saat >= 5 && saat < 12) {
        // Sabah (05:00 - 11:59)
        secenekler = [
            `Günaydın ${isim}! ☀️`,
            `Harika bir sabah ${isim}, bugün neler yapıyoruz? ☕`,
            `Günaydın ${isim}! Enerjin tavan olsun! 🚀`,
            `Güne zinde bir başlangıç yapalım ${isim}! ✨`,
            `Sabah kahven hazır mı ${isim}? ☕`
        ];
    } else if (saat >= 12 && saat < 18) {
        // Öğle / Öğleden sonra (12:00 - 17:59)
        secenekler = [
            `Merhaba ${isim}! 👋`,
            `Naber ${isim}? Nasıl gidiyor? 🎯`,
            `Bugün kaç litre su içtin ${isim}? 💧`,
            `Hadi planlamaya başlayalım ${isim}! 📋`,
            `Verimli bir gün olsun ${isim}! 💪`,
            `Hedeflere adım adım ${isim}! 🔥`
        ];
    } else if (saat >= 18 && saat < 23) {
        // Akşam (18:00 - 22:59)
        secenekler = [
            `İyi akşamlar ${isim}! 🌇`,
            `Günün nasıl geçti ${isim}? 🌟`,
            `Bugünü tamamlamaya hazır mısın ${isim}? ✅`,
            `Akşam molası zamanı ${isim}! ☕`,
            `Günün özetine göz atalım mı ${isim}? 📊`
        ];
    } else {
        // Gece (23:00 - 04:59)
        secenekler = [
            `İyi geceler ${isim}! Gece kuşu musun? 🦉`,
            `Gece mesaisi mi ${isim}? Kendini çok yorma! 🌙`,
            `Hala ayakta mısın ${isim}? Dinlenmeyi unutma! 💤`,
            `Sessiz saatler, yüksek odak ${isim}! ✨`
        ];
    }

    // Genel eğlenceli sürpriz karşılama cümleleri
    const genelSurprizler = [
        `Hoş geldin ${isim}! 🚀`,
        `Bugün harikalar yaratacaksın ${isim}! ⚡`,
        `Gözler hedeflerde olsun ${isim}! 🎯`
    ];

    secenekler = secenekler.concat(genelSurprizler);
    const rastgeleIndeks = Math.floor(Math.random() * secenekler.length);
    return secenekler[rastgeleIndeks];
}

const AVATAR_ANAHTARI = "panelAvatar_v1";

function avatarYukle() {
    try {
        const kayit = localStorage.getItem(AVATAR_ANAHTARI);
        return kayit ? JSON.parse(kayit) : null;
    } catch(e) {
        return null;
    }
}

function avatarKaydet(avatarObj) {
    if (!avatarObj) {
        localStorage.removeItem(AVATAR_ANAHTARI);
    } else {
        localStorage.setItem(AVATAR_ANAHTARI, JSON.stringify(avatarObj));
    }
}

function panelGorunumunuGuncelle(isim) {
    const baslikEl = document.getElementById("anaPanelKarsilamaBaslik");
    if (baslikEl) {
        baslikEl.textContent = karsilamaMesajiOlustur(isim);
    }

    const kullaniciAdEl = document.querySelector(".kullanici-ad");
    if (kullaniciAdEl) {
        kullaniciAdEl.textContent = isim;
    }

    const avatarVeri = avatarYukle();
    const basHarf = (isim.trim().charAt(0) || "K").toUpperCase();
    const logoMetin = isim.length >= 2 ? isim.trim().slice(0, 2).toUpperCase() : basHarf;

    const kullaniciAvatarEl = document.querySelector(".kullanici-avatar");
    const logoEl = document.getElementById("yanMenuLogoBtn");

    if (avatarVeri && avatarVeri.tip === "gorsel") {
        const imgHtml = `<img src="${avatarVeri.deger}" alt="Avatar">`;
        if (kullaniciAvatarEl) kullaniciAvatarEl.innerHTML = imgHtml;
        if (logoEl) logoEl.innerHTML = imgHtml;
    } else if (avatarVeri && avatarVeri.tip === "emoji") {
        if (kullaniciAvatarEl) kullaniciAvatarEl.textContent = avatarVeri.deger;
        if (logoEl) logoEl.textContent = avatarVeri.deger;
    } else {
        if (kullaniciAvatarEl) kullaniciAvatarEl.textContent = basHarf;
        if (logoEl) logoEl.textContent = logoMetin;
    }
}

function panelAdiniYukle() {
    const el = document.getElementById("yanMenuMarkaMetin");
    if (!el) return;
    const kayitli = localStorage.getItem(PANEL_ADI_ANAHTARI);
    
    if (!kayitli || kayitli.trim() === "") {
        // İlk defa giren kullanıcı için modalı aç
        const modal = document.getElementById("ilkGirisModalOverlay");
        if (modal) {
            modal.classList.remove("gizli");
            const input = document.getElementById("ilkGirisIsimInput");
            if (input) setTimeout(function() { input.focus(); }, 150);
        }
        el.textContent = "Kişisel Panel";
        document.title = "Kişisel Panel";
        panelGorunumunuGuncelle("Kullanıcı");
    } else {
        el.textContent = kayitli;
        document.title = kayitli;
        panelGorunumunuGuncelle(kayitli);
    }
}

function panelAdiniKaydet() {
    const el = document.getElementById("yanMenuMarkaMetin");
    if (!el) return;
    const deger = el.textContent.trim() || "Kişisel Panel";
    el.textContent = deger;
    localStorage.setItem(PANEL_ADI_ANAHTARI, deger);
    document.title = deger;
    panelGorunumunuGuncelle(deger);
}

function ilkGirisIsminiKaydet() {
    const input = document.getElementById("ilkGirisIsimInput");
    if (!input) return;
    const girilen = input.value.trim();
    if (!girilen) {
        input.focus();
        input.style.borderColor = "var(--renk-tehlike)";
        return;
    }

    localStorage.setItem(PANEL_ADI_ANAHTARI, girilen);
    const el = document.getElementById("yanMenuMarkaMetin");
    if (el) el.textContent = girilen;
    document.title = girilen;
    panelGorunumunuGuncelle(girilen);

    const modal = document.getElementById("ilkGirisModalOverlay");
    if (modal) modal.classList.add("gizli");
}

const ilkGirisKaydetBtn = document.getElementById("ilkGirisKaydetBtn");
const ilkGirisIsimInput = document.getElementById("ilkGirisIsimInput");

if (ilkGirisKaydetBtn) {
    ilkGirisKaydetBtn.addEventListener("click", ilkGirisIsminiKaydet);
}

if (ilkGirisIsimInput) {
    ilkGirisIsimInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            ilkGirisIsminiKaydet();
        }
    });
}

panelAdiniYukle();

const yanMenuMarkaMetinEl = document.getElementById("yanMenuMarkaMetin");
const yanMenuMarkaDuzenleBtn = document.getElementById("yanMenuMarkaDuzenleBtn");

if (yanMenuMarkaMetinEl && yanMenuMarkaDuzenleBtn) {
    yanMenuMarkaDuzenleBtn.addEventListener("click", function () {
        yanMenuMarkaMetinEl.contentEditable = "true";
        yanMenuMarkaMetinEl.focus();
        document.execCommand("selectAll", false, null);
    });

    yanMenuMarkaMetinEl.addEventListener("blur", function () {
        panelAdiniKaydet();
        yanMenuMarkaMetinEl.contentEditable = "false";
    });

    yanMenuMarkaMetinEl.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            yanMenuMarkaMetinEl.blur();
        }
    });
}

// ==========================================
// AVATAR / LOGO MODAL VE OLAYLARI
// ==========================================

const AVATAR_EMOJI_LISTESI = [
    "🚀", "⚡", "🔥", "🎯", "👑", "💎", "⭐", "🦄", "🦁", "🦊",
    "🐼", "🐨", "🦉", "🌸", "🍀", "☕", "💻", "📚", "🎨", "🎧",
    "✨", "🏆", "🌟", "🪐", "🍕", "🥑", "💡", "🔮", "🧿", "🤍"
];

const avatarModalOverlay = document.getElementById("avatarSecimModalOverlay");
const avatarModalKapatBtn = document.getElementById("avatarModalKapatBtn");
const avatarEmojiHavuzu = document.getElementById("avatarEmojiHavuzu");
const avatarGorselInput = document.getElementById("avatarGorselInput");
const avatarGorselSecBtn = document.getElementById("avatarGorselSecBtn");
const avatarHarfeDonBtn = document.getElementById("avatarHarfeDonBtn");
const yanMenuLogoBtn = document.getElementById("yanMenuLogoBtn");

function avatarModaliniAc() {
    if (!avatarModalOverlay) return;
    if (avatarEmojiHavuzu) {
        avatarEmojiHavuzu.innerHTML = AVATAR_EMOJI_LISTESI.map(function (emoji) {
            return `<button type="button" class="emoji-btn" data-avatar-emoji="${emoji}">${emoji}</button>`;
        }).join("");
    }
    avatarModalOverlay.classList.remove("gizli");
}

function avatarModaliniKapat() {
    if (avatarModalOverlay) avatarModalOverlay.classList.add("gizli");
}

if (yanMenuLogoBtn) {
    yanMenuLogoBtn.addEventListener("click", avatarModaliniAc);
}

if (avatarModalKapatBtn) {
    avatarModalKapatBtn.addEventListener("click", avatarModaliniKapat);
}

if (avatarModalOverlay) {
    avatarModalOverlay.addEventListener("click", function (e) {
        if (e.target === avatarModalOverlay) avatarModaliniKapat();
    });
}

if (avatarGorselSecBtn && avatarGorselInput) {
    avatarGorselSecBtn.addEventListener("click", function () {
        avatarGorselInput.click();
    });

    avatarGorselInput.addEventListener("change", function (e) {
        const dosya = e.target.files[0];
        if (!dosya) return;

        if (dosya.size > 2 * 1024 * 1024) {
            if (typeof bilgiGoster === "function") {
                bilgiGoster("Lütfen 2MB'den daha küçük bir görsel seçiniz.");
            }
            e.target.value = "";
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            avatarKaydet({ tip: "gorsel", deger: reader.result });
            const aktifIsim = localStorage.getItem(PANEL_ADI_ANAHTARI) || "Kişisel Panel";
            panelGorunumunuGuncelle(aktifIsim);
            avatarModaliniKapat();
        };
        reader.readAsDataURL(dosya);
        e.target.value = "";
    });
}

if (avatarEmojiHavuzu) {
    avatarEmojiHavuzu.addEventListener("click", function (e) {
        const btn = e.target.closest("[data-avatar-emoji]");
        if (!btn) return;

        const secilenEmoji = btn.dataset.avatarEmoji;
        avatarKaydet({ tip: "emoji", deger: secilenEmoji });
        const aktifIsim = localStorage.getItem(PANEL_ADI_ANAHTARI) || "Kişisel Panel";
        panelGorunumunuGuncelle(aktifIsim);
        avatarModaliniKapat();
    });
}

if (avatarHarfeDonBtn) {
    avatarHarfeDonBtn.addEventListener("click", function () {
        avatarKaydet(null);
        const aktifIsim = localStorage.getItem(PANEL_ADI_ANAHTARI) || "Kişisel Panel";
        panelGorunumunuGuncelle(aktifIsim);
        avatarModaliniKapat();
    });
}

// ==========================================
// DİNAMİK SEKME VE WIDGET YÖNETİMİ
// ==========================================

const SEKME_VERI_ANAHTARI = "dinamikSekmeler_v2";

function varsayilanSekmeler() {
    return {
        ana: [
            { id: "ana", ad: "Genel Panel", ikon: "🏠", ozelMi: false }
        ],
        is: [
            { id: "is", ad: "Genel Bakış", ikon: "💼", ozelMi: false }
        ],
        ders: [
            { id: "ders_genel", ad: "Genel Bakış", ikon: "📊", ozelMi: false },
            { id: "ders_konular", ad: "Konular", ikon: "📖", ozelMi: false },
            { id: "ders_denemeler", ad: "Denemeler", ikon: "📝", ozelMi: false },
            { id: "ders_yanlislar", ad: "Yanlışlarım", ikon: "❌", ozelMi: false },
            { id: "ders_takip", ad: "Çalışma Takibi", ikon: "🔥", ozelMi: false }
        ]
    };
}

function sekmeleriYukle() {
    try {
        const ham = localStorage.getItem(SEKME_VERI_ANAHTARI);
        return ham ? JSON.parse(ham) : varsayilanSekmeler();
    } catch(e) {
        return varsayilanSekmeler();
    }
}

function sekmeleriKaydet(sekmeler) {
    localStorage.setItem(SEKME_VERI_ANAHTARI, JSON.stringify(sekmeler));
}

let tumSekmeler = sekmeleriYukle();
let aktifSekmeler = { ana: "ana", is: "is", ders: "ders_genel" };

function dinamikSekmeleriCiz(sayfaTuru) {
    const alan = document.getElementById(sayfaTuru + "SekmelerAlani");
    if (!alan) return;

    const liste = tumSekmeler[sayfaTuru] || [];
    alan.innerHTML = liste.map(function(s) {
        const aktifMi = aktifSekmeler[sayfaTuru] === s.id;
        return `
            <button type="button" class="ders-sekme-btn ${aktifMi ? 'aktif' : ''}" data-sekme-id="${s.id}" data-sayfa-turu="${sayfaTuru}">
                ${simgesi(s.ikon || "📌")} ${escapeHtml(s.ad)}
                ${s.ozelMi ? `<span class="sekme-sil-btn" data-sekme-sil="${s.id}" title="Sekmeyi Sil">✕</span>` : ''}
            </button>
        `;
    }).join("");

    dinamikSekmeAlaniniGoster(sayfaTuru, aktifSekmeler[sayfaTuru]);
}

function dinamikSekmeAlaniniGoster(sayfaTuru, sekmeId) {
    // 1. Ders Sayfası Sabit Sekme Panelleri Kontrolü
    if (sayfaTuru === "ders") {
        document.querySelectorAll("#dersSayfa .ders-sekme-panel").forEach(function(p) {
            p.classList.add("gizli");
        });
        const panelHaritasi = {
            "ders_genel": "dersSekmeGenel",
            "ders_konular": "dersSekmeKonular",
            "ders_denemeler": "dersSekmeDenemeler",
            "ders_yanlislar": "dersSekmeYanlislar",
            "ders_takip": "dersSekmeTakip"
        };
        const panelElId = panelHaritasi[sekmeId];
        if (panelElId) {
            const sabitPanel = document.getElementById(panelElId);
            if (sabitPanel) sabitPanel.classList.remove("gizli");
        }
    }

    // 2. Özel Oluşturulan Sekmeler İçin Kaynak ve Grid Yönetimi
    const anaKapsayici = document.getElementById(sayfaTuru + "Sayfa");
    let ozelGrid = document.querySelector(`.widget-grid[data-widget-panel="${sekmeId}"]`);

    if (!ozelGrid && anaKapsayici) {
        ozelGrid = document.createElement("div");
        ozelGrid.className = "widget-grid";
        ozelGrid.dataset.widgetPanel = sekmeId;
        anaKapsayici.appendChild(ozelGrid);
    }

    // Yeni sekme ise widget havuzunu tanımla
    if (!PANEL_WIDGET_TANIMLARI[sekmeId]) {
        PANEL_WIDGET_TANIMLARI[sekmeId] = Object.assign({}, PANEL_WIDGET_TANIMLARI.ana);
    }

    // Yeni sekmenin HTML içerik kaynağı yoksa ana kaynaktan kopyala
    let ozelKaynak = document.querySelector(`[data-widget-kaynak="${sekmeId}"]`);
    if (!ozelKaynak && anaKapsayici) {
        const anaKaynak = document.querySelector('[data-widget-kaynak="ana"]');
        if (anaKaynak) {
            ozelKaynak = anaKaynak.cloneNode(true);
            ozelKaynak.dataset.widgetKaynak = sekmeId;
            anaKapsayici.appendChild(ozelKaynak);
        }
    }

    // Sayfadaki sadece aktif sekmenin gridini göster
    if (anaKapsayici) {
        anaKapsayici.querySelectorAll(".widget-grid").forEach(function(g) {
            if (g.dataset.widgetPanel === sekmeId) {
                g.classList.remove("gizli");
            } else if (sayfaTuru !== "ders") {
                g.classList.add("gizli");
            }
        });
    }

    aktifWidgetPaneliniGuncelle(sekmeId);
    widgetPaneliCiz(sekmeId);
}

// Sekme Tıklama, Silme ve Ekleme Olayları
document.addEventListener("click", function(e) {
    const sekmeBtn = e.target.closest(".dinamik-sekmeler-alani .ders-sekme-btn");
    if (sekmeBtn && !e.target.matches(".sekme-sil-btn")) {
        const sayfaTuru = sekmeBtn.dataset.sayfaTuru;
        const sekmeId = sekmeBtn.dataset.sekmeId;
        aktifSekmeler[sayfaTuru] = sekmeId;
        dinamikSekmeleriCiz(sayfaTuru);
        return;
    }

    const silBtn = e.target.closest("[data-sekme-sil]");
    if (silBtn) {
        e.stopPropagation();
        const sekmeId = silBtn.dataset.sekmeSil;
        const sayfaTuru = silBtn.closest(".dinamik-sekme-bar").dataset.sayfaTuru;

        onayGoster({
            baslik: "Sekmeyi Sil",
            mesaj: "Bu sekmeyi ve düzenini silmek istediğinize emin misiniz?",
            onayMetni: "Evet, Sil",
            tehlikeli: true,
            onOnay: function() {
                tumSekmeler[sayfaTuru] = tumSekmeler[sayfaTuru].filter(function(s) { return s.id !== sekmeId; });
                sekmeleriKaydet(tumSekmeler);
                aktifSekmeler[sayfaTuru] = tumSekmeler[sayfaTuru][0].id;
                dinamikSekmeleriCiz(sayfaTuru);
            }
        });
    }

const yeniEkleBtn = e.target.closest(".yeni-sekme-ekle-btn");
    if (yeniEkleBtn) {
        yeniSekmeModaliniAc(yeniEkleBtn.dataset.sayfaTuru);
    }
});

// Sayfa Başlatıcı
document.addEventListener("DOMContentLoaded", function() {
    dinamikSekmeleriCiz("ana");
    dinamikSekmeleriCiz("is");
    dinamikSekmeleriCiz("ders");
});

// ==========================================
// YENİ SEKME MODAL KONTROLLERİ
// ==========================================

let hedefSekmeSayfaTuru = null;

function yeniSekmeModaliniAc(sayfaTuru) {
    hedefSekmeSayfaTuru = sayfaTuru;
    const modal = document.getElementById("yeniSekmeModalOverlay");
    const input = document.getElementById("yeniSekmeAdInput");
    if (!modal || !input) return;

    input.value = "";
    modal.classList.remove("gizli");
    setTimeout(function() { input.focus(); }, 100);
}

function yeniSekmeModaliniKapat() {
    const modal = document.getElementById("yeniSekmeModalOverlay");
    if (modal) modal.classList.add("gizli");
    hedefSekmeSayfaTuru = null;
}

function yeniSekmeyiKaydet() {
    const input = document.getElementById("yeniSekmeAdInput");
    if (!input || !hedefSekmeSayfaTuru) return;

    const ad = input.value.trim();
    if (!ad) {
        input.focus();
        return;
    }

    const yeniId = hedefSekmeSayfaTuru + "_ozel_" + Date.now();
    tumSekmeler[hedefSekmeSayfaTuru].push({
        id: yeniId,
        ad: ad,
        ikon: "📌",
        ozelMi: true
    });

    sekmeleriKaydet(tumSekmeler);
    aktifSekmeler[hedefSekmeSayfaTuru] = yeniId;
    dinamikSekmeleriCiz(hedefSekmeSayfaTuru);
    yeniSekmeModaliniKapat();
}

const yeniSekmeKaydetBtn = document.getElementById("yeniSekmeModalKaydetBtn");
const yeniSekmeKapatBtn = document.getElementById("yeniSekmeModalKapatBtn");
const yeniSekmeVazgecBtn = document.getElementById("yeniSekmeModalVazgecBtn");
const yeniSekmeAdInput = document.getElementById("yeniSekmeAdInput");
const yeniSekmeModalOverlay = document.getElementById("yeniSekmeModalOverlay");

if (yeniSekmeKaydetBtn) yeniSekmeKaydetBtn.addEventListener("click", yeniSekmeyiKaydet);
if (yeniSekmeKapatBtn) yeniSekmeKapatBtn.addEventListener("click", yeniSekmeModaliniKapat);
if (yeniSekmeVazgecBtn) yeniSekmeVazgecBtn.addEventListener("click", yeniSekmeModaliniKapat);

if (yeniSekmeAdInput) {
    yeniSekmeAdInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            yeniSekmeyiKaydet();
        } else if (e.key === "Escape") {
            yeniSekmeModaliniKapat();
        }
    });
}

if (yeniSekmeModalOverlay) {
    yeniSekmeModalOverlay.addEventListener("click", function(e) {
        if (e.target === yeniSekmeModalOverlay) yeniSekmeModaliniKapat();
    });
}