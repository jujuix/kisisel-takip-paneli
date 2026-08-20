import React from 'react';
import { useApp } from '../../context/AppContext';

export const Topbar = ({ 
  isEditMode, 
  setIsEditMode, 
  onOpenAddWidgetModal, 
  onResetWidgets,
  showEditControls = true 
}) => {
  const { theme, toggleTheme, userName, userAvatar, simgesi } = useApp();

  const getAvatarDisplay = () => {
    if (userAvatar?.tip === 'gorsel') return <img src={userAvatar.deger} alt="Avatar" />;
    if (userAvatar?.tip === 'emoji') return simgesi(userAvatar.deger);
    return (userName?.trim()?.substring(0, 1) || "K").toUpperCase();
  };

  return (
    <header className="global-ust-bar">
      <div className="global-arama">
        <svg className="ikon global-arama-ikon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
        </svg>
        <input type="search" placeholder="Görev, konu, not ara..." autoComplete="off" />
      </div>

      <div className="global-ust-sag">
        {/* Koyu Modun Yanına Taşınan Widget Düzenleme Kontrolleri */}
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