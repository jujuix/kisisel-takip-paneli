import React from 'react';
import { useApp } from '../../context/AppContext';

export const SettingsModule = () => {
  const { 
    theme, toggleTheme, 
    accentColor, setAccentColor, 
    iconStyle, setIconStyle, 
    dersData, setDersData, 
    showConfirm 
  } = useApp();

  const renkSecenekleri = [
    { hex: "#10b981", ad: "Yeşil" },
    { hex: "#8b5cf6", ad: "Mor" },
    { hex: "#3b82f6", ad: "Mavi" },
    { hex: "#ef4444", ad: "Kırmızı" },
    { hex: "#ec4899", ad: "Pembe" }
  ];

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
      } catch (err) {
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

      {/* 1. GÖRÜNÜM AYARLARI */}
      <div className="ders-karti" style={{ marginBottom: '18px' }}>
        <div className="section-header">
          <h2>🎨 Görünüm</h2>
        </div>
        <p className="bos-liste-notu" style={{ padding: '0 0 12px 0', textAlign: 'left', border: 'none', background: 'transparent' }}>
          Açık/koyu tema, vurgu rengi ve simge stilini dilediğin gibi özelleştirebilirsin.
        </p>

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
            <label className="renk-tema-secenek renk-tema-ozel" title="Özel renk seç">
              <span className="renk-tema-nokta renk-tema-nokta-ozel" style={{ background: accentColor }}></span> Özel
              <input type="color" value={accentColor} onChange={e => setAccentColor(e.target.value)} />
            </label>
          </div>
        </div>

        {/* Aydınlık / Koyu Tema */}
        <div className="tema-ayar-grup">
          <span className="tema-ayar-etiket">Aydınlık / Koyu</span>
          <button type="button" className="tema-butonu" onClick={toggleTheme} style={{ width: 'fit-content' }}>
            {theme === 'koyu' ? '☀️ Açık Tema' : '🌙 Koyu Tema'}
          </button>
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
          <h2>💾 Ders Verilerini Yedekle</h2>
        </div>
        <p className="bos-liste-notu" style={{ padding: '0 0 10px 0', textAlign: 'left', border: 'none', background: 'transparent' }}>
          Ders takip verilerini tek bir JSON dosyası olarak indirebilir ya da yedeği geri yükleyebilirsin[cite: 3].
        </p>
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
          <h2>🗑️ Verileri Sıfırla</h2>
        </div>
        <p className="bos-liste-notu" style={{ padding: '0 0 10px 0', textAlign: 'left', border: 'none', background: 'transparent' }}>
          Tüm ders takip verilerini kalıcı olarak siler ve varsayılan derslerle sıfırdan başlar[cite: 3].
        </p>
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