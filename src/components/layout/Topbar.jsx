import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

// --- Arama Sonuçları İçin Özel Alt Bileşen (Hover Efekti İçin) ---
const SearchResultItem = ({ icon, title, subtitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: '10px 14px', 
        background: isHovered ? 'var(--renk-vurgu-yuzey)' : 'var(--renk-arkaplan)',
        border: '1px solid',
        borderColor: isHovered ? 'var(--renk-vurgu-halka)' : 'transparent',
        borderRadius: '12px', 
        marginBottom: '8px', 
        display: 'flex', 
        gap: '12px', 
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.2s ease'
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '36px', height: '36px', borderRadius: '10px',
        background: isHovered ? 'var(--renk-yuzey)' : 'var(--renk-yuzey)',
        boxShadow: isHovered ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
        fontSize: '16px',
        transition: 'all 0.2s ease'
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ 
          fontWeight: '600', 
          fontSize: '13px',
          color: isHovered ? 'var(--renk-vurgu)' : 'var(--renk-metin)',
          transition: 'color 0.2s ease'
        }}>
          {title}
        </span>
        {subtitle && (
          <span style={{ fontSize: '11.5px', color: 'var(--renk-metin-ikincil)' }}>
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export const Topbar = ({ 
  isEditMode, 
  setIsEditMode, 
  onOpenAddWidgetModal, 
  onResetWidgets,
  showEditControls = true 
}) => {
  const { theme, toggleTheme, userName, userAvatar, simgesi, tasks = [], dersData = {}, isData = {} } = useApp();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getAvatarDisplay = () => {
    if (userAvatar?.tip === 'gorsel') return <img src={userAvatar.deger} alt="Avatar" />;
    if (userAvatar?.tip === 'emoji') return simgesi(userAvatar.deger);
    return (userName?.trim()?.substring(0, 1) || "K").toUpperCase();
  };

  const getSearchResults = () => {
    if (!searchTerm.trim()) return { gorevler: [], konular: [], notlar: [] };
    const lowerTerm = searchTerm.toLowerCase();

    const foundTasks = tasks.filter(t => t.metin.toLowerCase().includes(lowerTerm));

    const foundTopics = [];
    (dersData.dersler || []).forEach(ders => {
      (ders.konular || []).forEach(konu => {
        if (konu.ad.toLowerCase().includes(lowerTerm)) {
          foundTopics.push({ dersAd: ders.ad, konuAd: konu.ad });
        }
      });
    });

    const foundNotes = [];
    (isData.hizliNotlar || []).forEach(not => {
      if (not.metin.toLowerCase().includes(lowerTerm)) {
        foundNotes.push({ tip: 'Hızlı Not', metin: not.metin });
      }
    });
    if ((isData.fikirler || "").toLowerCase().includes(lowerTerm)) {
      foundNotes.push({ tip: 'Fikirler', metin: isData.fikirler });
    }

    return { gorevler: foundTasks, konular: foundTopics, notlar: foundNotes };
  };

  const results = getSearchResults();
  const hasResults = results.gorevler.length > 0 || results.konular.length > 0 || results.notlar.length > 0;

  return (
    <header className="global-ust-bar">
      {/* ARAMA BÖLÜMÜ */}
      <div className="global-arama" ref={searchRef} style={{ position: 'relative' }}>
        <svg className="ikon global-arama-ikon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
        </svg>
        <input 
          type="search" 
          placeholder="Görev, konu, not ara..." 
          autoComplete="off" 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
        />

        {/* ARAMA SONUÇLARI AÇILIR MENÜSÜ */}
        {showResults && searchTerm.trim() && (
          <div 
            className="arama-sonuc-kapsayici" 
            style={{
            position: 'absolute', top: 'calc(100% + 12px)', left: 0, width: '100%', minWidth: '340px',
            background: 'var(--renk-yuzey)', border: '1px solid var(--renk-kenarlik)',
            borderRadius: '16px', padding: '16px',
            boxShadow: '0 12px 32px rgba(0,0,0,0.15)', zIndex: 9999,
            maxHeight: '450px', overflowY: 'auto',
            display: 'flex', flexDirection: 'column', gap: '16px',
            backdropFilter: 'blur(10px)'
          }}>
            {!hasResults ? (
              <div style={{ padding: '20px 8px', color: 'var(--renk-metin-ikincil)', fontSize: '14px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔍</div>
                "{searchTerm}" ile eşleşen sonuç bulunamadı.
              </div>
            ) : (
              <>
                {results.gorevler.length > 0 && (
                  <div>
                    <h4 style={{ margin: '0 0 10px 6px', fontSize: '11px', color: 'var(--renk-metin-ikincil)', letterSpacing: '0.8px', fontWeight: '700' }}>GÖREVLER</h4>
                    {results.gorevler.map((g, i) => (
                      <SearchResultItem key={`g-${i}`} icon="✅" title={g.metin} />
                    ))}
                  </div>
                )}
                
                {results.konular.length > 0 && (
                  <div>
                    <h4 style={{ margin: '0 0 10px 6px', fontSize: '11px', color: 'var(--renk-metin-ikincil)', letterSpacing: '0.8px', fontWeight: '700' }}>DERS KONULARI</h4>
                    {results.konular.map((k, i) => (
                      <SearchResultItem key={`k-${i}`} icon="📖" title={k.konuAd} subtitle={k.dersAd} />
                    ))}
                  </div>
                )}

                {results.notlar.length > 0 && (
                  <div>
                    <h4 style={{ margin: '0 0 10px 6px', fontSize: '11px', color: 'var(--renk-metin-ikincil)', letterSpacing: '0.8px', fontWeight: '700' }}>NOTLAR & FİKİRLER</h4>
                    {results.notlar.map((n, i) => (
                      <SearchResultItem 
                        key={`n-${i}`} 
                        icon="⚡" 
                        title={n.metin.length > 50 ? n.metin.substring(0, 50) + "..." : n.metin} 
                        subtitle={n.tip} 
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="global-ust-sag">
        {showEditControls && (
          <div className="widget-panel-arac" style={{ margin: 0 }}>
            <button
              type="button"
              className={`widget-duzenle-btn ${isEditMode ? 'aktif' : ''}`}
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {isEditMode ? 'Bitti' : 'Widget Düzenle'}
            </button>
            {isEditMode && (
              <div className="widget-duzenle-araclari">
                <button type="button" className="widget-ekle-btn" onClick={onOpenAddWidgetModal}>+ Ekle</button>
                <button type="button" className="widget-sifirla-btn" onClick={onResetWidgets}>Sıfırla</button>
              </div>
            )}
          </div>
        )}

        <button id="temaButonu" className="tema-butonu" type="button" onClick={toggleTheme}>
          {theme === 'koyu' ? <>{simgesi("☀️")} Açık Tema</> : <>{simgesi("🌙")} Koyu Tema</>}
        </button>
        <div className="kullanici-rozet">
          <span className="kullanici-avatar">{getAvatarDisplay()}</span>
          <span className="kullanici-ad">{userName}</span>
        </div>
      </div>
    </header>
  );
};