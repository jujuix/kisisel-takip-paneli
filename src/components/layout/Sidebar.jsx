import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ onOpenAvatarModal }) => {
  const { activePage, setActivePage, userName, setUserName, userAvatar, showPrompt, simgesi } = useApp();
  const { signOut } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getAvatarDisplay = () => {
    if (userAvatar?.tip === 'gorsel') return <img src={userAvatar.deger} alt="Avatar" />;
    if (userAvatar?.tip === 'emoji') return simgesi(userAvatar.deger);
    return (userName?.trim()?.substring(0, 2) || "KP").toUpperCase();
  };

  const handleEditName = () => {
    showPrompt({
      title: 'Panel Adını Düzenle',
      message: 'Paneline vermek istediğin adı veya sana nasıl hitap etmemizi istediğini yaz:',
      defaultValue: userName,
      confirmText: 'Kaydet',
      onConfirm: (val) => {
        if (val && val.trim()) setUserName(val.trim());
      }
    });
  };

  const handlePageSelect = (page) => {
    setActivePage(page);
    setIsMobileOpen(false);
  };

  return (
    <>
      {!isMobileOpen && (
        <button
          type="button"
          className="mobil-menu-btn"
          onClick={() => setIsMobileOpen(true)}
          aria-label="Menüyü aç"
          title="Menüyü aç"
        >
          <svg className="ikon" viewBox="0 0 24 24" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      )}
      {isMobileOpen && <button type="button" className="mobil-menu-overlay" onClick={() => setIsMobileOpen(false)} aria-label="Menüyü kapat" />}
      {isCollapsed && (
        <button 
          type="button" 
          className="yan-menu-tekrar-ac-btn" 
          onClick={() => setIsCollapsed(false)}
          title="Menüyü aç"
        >
          {simgesi("📋")}
        </button>
      )}
      <nav className={`yan-menu ${isCollapsed ? 'dar' : ''} ${isMobileOpen ? 'mobil-acik' : ''}`}>
        <div className="yan-menu-ust">
          <div className="yan-menu-marka">
            <button 
              type="button" 
              className="yan-menu-logo" 
              onClick={onOpenAvatarModal}
              title="Avatarı Değiştir"
            >
              {getAvatarDisplay()}
            </button>
            <span className="yan-menu-marka-metin">{userName}</span>
            <button 
              type="button" 
              className="yan-menu-marka-duzenle-btn" 
              onClick={handleEditName} 
              title="Adı düzenle"
            >
              ✎
            </button>
          </div>
          <button className="yan-menu-ac-kapa" onClick={() => setIsCollapsed(!isCollapsed)} title="Menüyü aç/kapat">
            <svg className="ikon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

        <div className="yan-menu-ogeler">
          <button className={`yan-menu-oge ${activePage === 'ana' ? 'aktif' : ''}`} onClick={() => handlePageSelect('ana')}>
            <span className="yan-menu-ikon">{simgesi("🏠")}</span>
            <span className="yan-menu-etiket">Panel</span>
          </button>
          <button className={`yan-menu-oge ${activePage === 'ders' ? 'aktif' : ''}`} onClick={() => handlePageSelect('ders')}>
            <span className="yan-menu-ikon">{simgesi("📚")}</span>
            <span className="yan-menu-etiket">Ders</span>
          </button>
          <button className={`yan-menu-oge ${activePage === 'is' ? 'aktif' : ''}`} onClick={() => handlePageSelect('is')}>
            <span className="yan-menu-ikon">{simgesi("💼")}</span>
            <span className="yan-menu-etiket">İş</span>
          </button>
          <button className={`yan-menu-oge ${activePage === 'ayarlar' ? 'aktif' : ''}`} onClick={() => handlePageSelect('ayarlar')}>
            <span className="yan-menu-ikon">{simgesi("⚙️")}</span>
            <span className="yan-menu-etiket">Ayarlar</span>
          </button>
        </div>

        <div className="yan-menu-alt">
          <div className="yan-menu-promo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '24px', flexShrink: 0 }}>{simgesi("🌱")}</div>
            <div>
              <p className="yan-menu-promo-baslik" style={{ margin: '0 0 2px' }}>Günün Odağı</p>
              <p className="yan-menu-promo-metin" style={{ margin: 0, fontSize: '11px' }}>Küçük adımlar, büyük zaferler getirir.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={signOut}
            style={{ marginTop: '12px', width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--renk-kenarlik)', background: 'transparent', color: '#ff6961', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
          >
            Çıkış Yap
          </button>
        </div>
      </nav>
    </>
  );
};