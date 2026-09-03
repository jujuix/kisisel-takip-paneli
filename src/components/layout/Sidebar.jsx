import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useAuth } from '../../context/AuthContext';

export const Sidebar = ({ onOpenAvatarModal }) => {
  const { activePage, setActivePage, userName, setUserName, userAvatar, showPrompt, simgesi, tabs = {}, activeTabByPage = {}, setActiveTabByPage, pages = [] } = useApp();
  const { signOut } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [expandedPage, setExpandedPage] = useState('ana');

  const pageConfig = [
    ...pages.map(page => ({ key: page.id, label: page.ad, icon: page.ikon })),
    { key: 'ayarlar', label: 'Ayarlar', icon: '⚙️' }
  ];

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
      maxLength: 30,
      onConfirm: (val) => {
        const cleaned = (val || '').trim();
        if (cleaned) setUserName(cleaned.slice(0, 30));
      }
    });
  };

  const handlePageSelect = (page) => {
    setActivePage(page);
    setExpandedPage(prev => prev === page ? null : page);
    setIsMobileOpen(false);
  };

  const handleTabSelect = (page, tabId) => {
    setActivePage(page);
    setActiveTabByPage(prev => ({ ...prev, [page]: tabId }));
    setExpandedPage(page);
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
          {pageConfig.map(({ key, label, icon }) => {
            const pageTabs = tabs?.[key] || [];
            const isExpanded = expandedPage === key;
            const isSelected = activePage === key;

            return (
              <div key={key} className="yan-menu-grup">
                <button className={`yan-menu-oge ${isSelected ? 'aktif' : ''}`} onClick={() => handlePageSelect(key)}>
                  <span className="yan-menu-ikon">{simgesi(icon)}</span>
                  <span className="yan-menu-etiket">{label}</span>
                  {pageTabs.length > 0 && (
                    <span className={`yan-menu-acilir-ok ${isExpanded ? 'acik' : ''}`}>▾</span>
                  )}
                </button>

                {isExpanded && pageTabs.length > 0 && (
                  <div className="yan-menu-alt-sekmeler">
                    {pageTabs.map((tab) => {
                      const isTabActive = activeTabByPage?.[key] === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          className={`yan-menu-alt-sekme ${isTabActive ? 'aktif' : ''}`}
                          onClick={() => handleTabSelect(key, tab.id)}
                        >
                          <span className="yan-menu-alt-sekme-ikon">{simgesi(tab.ikon || '📌')}</span>
                          <span>{tab.ad}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
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