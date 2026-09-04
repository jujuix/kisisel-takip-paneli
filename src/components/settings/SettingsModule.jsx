import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EMOJI_HAVUZU, PAGE_TEMPLATES } from '../../constants';
import { getTranslations } from '../../i18n';

export const SettingsModule = () => {
  const { 
    theme, toggleTheme, 
    accentColor, setAccentColor, 
    iconStyle, setIconStyle, 
    uiScale, setUiScale,
    simgesi,
    language, setLanguage,
    pages = [], addPageFromTemplate, deletePage, updatePage,
    dersData, setDersData, 
    showConfirm 
  } = useApp();
  const t = getTranslations(language).pages;
  const [isCustomColorOpen, setIsCustomColorOpen] = useState(false);
  const [customColor, setCustomColor] = useState(accentColor);
  const [selectedTemplate, setSelectedTemplate] = useState('spor');
  const [newPageName, setNewPageName] = useState('');
  const [newPageIcon, setNewPageIcon] = useState('📌');
  const [editingPageId, setEditingPageId] = useState(null);
  const [editingPageName, setEditingPageName] = useState('');
  const [editingPageIcon, setEditingPageIcon] = useState('📌');

  const renkSecenekleri = [
    { hex: "#10b981", ad: "Yeşil" },
    { hex: "#8b5cf6", ad: "Mor" },
    { hex: "#3b82f6", ad: "Mavi" },
    { hex: "#ef4444", ad: "Kırmızı" },
    { hex: "#ec4899", ad: "Pembe" }
  ];

  const ozelRenkSecenekleri = [
    '#f97316', '#eab308', '#84cc16', '#14b8a6', '#06b6d4', '#0ea5e9',
    '#6366f1', '#a855f7', '#d946ef', '#f43f5e', '#78716c', '#334155'
  ];

  const handleCustomColorChange = (value) => {
    setCustomColor(value);
    if (/^#[0-9a-f]{6}$/i.test(value)) setAccentColor(value);
  };

  const handleAddPage = () => {
    addPageFromTemplate(selectedTemplate, newPageName, newPageIcon);
    setNewPageName('');
    setNewPageIcon('📌');
  };

  const startEditingPage = page => {
    setEditingPageId(page.id);
    setEditingPageName(page.ad);
    setEditingPageIcon(page.ikon || '📌');
  };

  const savePage = () => {
    if (!editingPageName.trim()) return;
    updatePage(editingPageId, { ad: editingPageName, ikon: editingPageIcon });
    setEditingPageId(null);
  };

  // Ders Verilerini JSON Olarak İndir
  const handleExportData = () => {
    const backup = {
      surum: 1,
      tarih: new Date().toISOString(),
      dersPaneli: dersData
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ders-takip-yedek-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // JSON Yedekten Geri Yükle
  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const incoming = parsed.dersPaneli || parsed;
        if (incoming && Array.isArray(incoming.dersler)) {
          showConfirm({
            title: "Verileri İçe Aktar",
            message: "Mevcut ders verilerinin üzerine yazılacak. Onaylıyor musunuz?",
            confirmText: "İçe Aktar",
            isDanger: true,
            onConfirm: () => {
              setDersData(incoming);
            }
          });
        }
      } catch {
        alert("Geçersiz yedek dosyası!");
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Sıfırlama
  const handleResetData = () => {
    showConfirm({
      title: "Verileri Sıfırla",
      message: "Tüm ders kayıtları, yanlışlar ve hedefler silinecek. Emin misiniz?",
      confirmText: "Sıfırla",
      isDanger: true,
      onConfirm: () => {
        localStorage.removeItem('dersPaneliVerisi');
        window.location.reload();
      }
    });
  };

  return (
    <div className="container">
      <header className="ust-baslik">
        <h1>⚙️ Ayarlar</h1>
      </header>

      <div className="ders-karti ayar-sayfa-yonetimi" style={{ marginBottom: '18px' }}>
        <div className="section-header">
          <div className="ayar-baslik-grubu">
            <h2>{simgesi('🧩')} {t.title}</h2>
            <p>{t.description}</p>
          </div>
        </div>
        <div className="ayar-dil-secici">
          <span>Language / Dil</span>
          <select value={language} onChange={event => setLanguage(event.target.value)} aria-label="Language / Dil">
            <option value="tr">Türkçe</option>
            <option value="en">English</option>
          </select>
        </div>
        <div className="ayar-sayfa-ekle">
          <select value={selectedTemplate} onChange={e => setSelectedTemplate(e.target.value)}>
            {PAGE_TEMPLATES.map(template => <option key={template.id} value={template.id}>{template.ikon} {template.ad}</option>)}
          </select>
          <input type="text" value={newPageName} maxLength={30} onChange={e => setNewPageName(e.target.value)} placeholder={t.optionalName} />
          <div className="ayar-ikon-secici" aria-label="Yeni sayfa ikonu">
            {EMOJI_HAVUZU.slice(0, 18).map(icon => <button key={icon} type="button" className={newPageIcon === icon ? 'aktif' : ''} onClick={() => setNewPageIcon(icon)} aria-label={`${icon} ikonunu seç`}>{simgesi(icon)}</button>)}
          </div>
          <button type="button" className="ders-buyuk-buton" onClick={handleAddPage}>+ {t.add}</button>
        </div>
        <div className="ayar-sayfa-listesi">
          {pages.map(page => (
            <div className="ayar-sayfa-satiri" key={page.id}>
              {editingPageId === page.id ? (
                <div className="ayar-sayfa-duzenle">
                  <input value={editingPageName} maxLength={30} onChange={e => setEditingPageName(e.target.value)} aria-label="Sayfa adı" />
                  <div className="ayar-ikon-secici ayar-ikon-secici-duzenle" aria-label="Sayfa ikonu">
                    {EMOJI_HAVUZU.slice(0, 18).map(icon => <button key={icon} type="button" className={editingPageIcon === icon ? 'aktif' : ''} onClick={() => setEditingPageIcon(icon)} aria-label={`${icon} ikonunu seç`}>{simgesi(icon)}</button>)}
                  </div>
                </div>
              ) : <span className="ayar-sayfa-adi">{simgesi(page.ikon)} {page.ad}</span>}
              <div className="ayar-sayfa-eylemleri">
                {editingPageId === page.id ? <><button type="button" className="ayar-sayfa-kaydet" onClick={savePage}>{t.save}</button><button type="button" className="ayar-sayfa-iptal" onClick={() => setEditingPageId(null)}>{t.cancel}</button></> : <button type="button" className="ayar-sayfa-duzenle-btn" onClick={() => startEditingPage(page)}>{t.edit}</button>}
                <button type="button" className="ayar-sayfa-sil" onClick={() => showConfirm({ title: t.removeTitle, message: `${page.ad}${t.removeMessage}`, confirmText: t.remove, isDanger: true, onConfirm: () => deletePage(page.id) })}>{t.remove}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1. GÖRÜNÜM AYARLARI */}
      <div className="ders-karti" style={{ marginBottom: '18px' }}>
        <div className="section-header">
          <div className="ayar-baslik-grubu">
            <h2>🎨 Görünüm</h2>
            <p>Açık/koyu tema, vurgu rengi ve simge stilini özelleştir.</p>
          </div>
        </div>

        {/* Renk Teması */}
        <div className="tema-ayar-grup">
          <span className="tema-ayar-etiket">Renk Teması</span>
          <div className="renk-tema-secici">
            {renkSecenekleri.map(renk => (
              <button
                key={renk.hex}
                type="button"
                className={`renk-tema-secenek ${accentColor.toLowerCase() === renk.hex.toLowerCase() ? 'aktif' : ''}`}
                onClick={() => setAccentColor(renk.hex)}
              >
                <span className="renk-tema-nokta" style={{ background: renk.hex }}></span> {renk.ad}
              </button>
            ))}
            <div className="renk-tema-ozel-kapsayici">
              <button
                type="button"
                className={`renk-tema-secenek renk-tema-ozel ${isCustomColorOpen ? 'aktif' : ''}`}
                onClick={() => {
                  setCustomColor(accentColor);
                  setIsCustomColorOpen(prev => !prev);
                }}
                aria-expanded={isCustomColorOpen}
              >
                <span className="renk-tema-nokta renk-tema-nokta-ozel" style={{ background: accentColor }}></span>
                Özel renk
                <span className="renk-tema-ozel-ok">{isCustomColorOpen ? '⌃' : '⌄'}</span>
              </button>
              {isCustomColorOpen && (
                <div className="renk-tema-popover">
                  <div className="renk-tema-popover-baslik">
                    <span>Özel vurgu rengi</span>
                    <span className="renk-tema-onizleme" style={{ background: customColor }} />
                  </div>
                  <div className="renk-tema-palet" aria-label="Hazır özel renkler">
                    {ozelRenkSecenekleri.map(hex => (
                      <button
                        key={hex}
                        type="button"
                        className={`renk-tema-palet-rengi ${accentColor.toLowerCase() === hex ? 'aktif' : ''}`}
                        style={{ background: hex }}
                        onClick={() => handleCustomColorChange(hex)}
                        aria-label={`${hex} rengini seç`}
                      />
                    ))}
                  </div>
                  <label className="renk-tema-hex-alani">
                    <span>Hex kodu</span>
                    <input
                      type="text"
                      value={customColor}
                      maxLength={7}
                      onChange={e => handleCustomColorChange(e.target.value)}
                      placeholder="#10B981"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Aydınlık / Koyu Tema */}
        <div className="tema-ayar-grup">
          <span className="tema-ayar-etiket">Aydınlık / Koyu</span>
          <button type="button" className="tema-butonu" onClick={toggleTheme} style={{ width: 'fit-content' }}>
            {theme === 'koyu' ? '☀️ Açık Tema' : '🌙 Koyu Tema'}
          </button>
        </div>

        {/* Arayüz ölçeği */}
        <div className="tema-ayar-grup">
          <span className="tema-ayar-etiket">Arayüz Boyutu</span>
          <div className="renk-tema-secici">
            {[{ value: 0.7, label: 'Küçük (%70)' }, { value: 0.8, label: 'Varsayılan (%80)' }, { value: 0.9, label: 'Büyük (%90)' }].map(option => (
              <button
                key={option.value}
                type="button"
                className={`renk-tema-secenek ${uiScale === option.value ? 'aktif' : ''}`}
                onClick={() => setUiScale(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* SİMGE / İKON GÖRÜNÜMÜ SEÇENEĞİ */}
        <div className="tema-ayar-grup">
          <span className="tema-ayar-etiket">Simge / İkon Görünümü</span>
          <div className="renk-tema-secici">
            <button
              type="button"
              className={`renk-tema-secenek ${iconStyle === 'emoji' ? 'aktif' : ''}`}
              onClick={() => setIconStyle('emoji')}
            >
              ✨ Renkli Emoji
            </button>
            <button
              type="button"
              className={`renk-tema-secenek ${iconStyle === 'svg' ? 'aktif' : ''}`}
              onClick={() => setIconStyle('svg')}
            >
              🖋️ Minimal Vektörel İkon
            </button>
          </div>
        </div>
      </div>

      {/* 2. DERS VERİLERİNİ YEDEKLE */}
      <div className="ders-karti" style={{ marginBottom: '18px' }}>
        <div className="section-header">
          <div className="ayar-baslik-grubu">
            <h2>💾 Ders Verilerini Yedekle</h2>
            <p>Verilerini JSON dosyasıyla taşı veya geri yükle.</p>
          </div>
        </div>
        <div className="gorev-formu-satir" style={{ gap: '10px' }}>
          <button className="ders-buyuk-buton" onClick={handleExportData}>⬇️ JSON Olarak Dışa Aktar</button>
          <label className="ders-ikincil-buton" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            ⬆️ JSON İçe Aktar
            <input type="file" accept="application/json" style={{ display: 'none' }} onChange={handleImportData} />
          </label>
        </div>
      </div>

      {/* 3. VERİLERİ SIFIRLA */}
      <div className="ders-karti">
        <div className="section-header">
          <div className="ayar-baslik-grubu">
            <h2>🗑️ Verileri Sıfırla</h2>
            <p>Ders takip verilerini kalıcı olarak temizle.</p>
          </div>
        </div>
        <button 
          className="onay-modal-vazgec-btn" 
          onClick={handleResetData} 
          style={{ borderColor: '#dc2626', color: '#dc2626', width: 'fit-content' }}
        >
          Ders Verilerini Sıfırla
        </button>
      </div>
    </div>
  );
};