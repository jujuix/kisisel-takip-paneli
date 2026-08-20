import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const DynamicTabBar = ({ sayfaTuru }) => {
  const { tabs, activeTabByPage, setActiveTabByPage, addTab, deleteTab, simgesi, setActiveDersTab, showConfirm } = useApp();
  const [showModal, setShowModal] = useState(false);
  const [newTabName, setNewTabName] = useState('');

  const currentTabs = tabs?.[sayfaTuru] || [];
  const activeTabId = activeTabByPage?.[sayfaTuru];

  const handleSelect = (tabId) => {
    setActiveTabByPage(prev => ({ ...prev, [sayfaTuru]: tabId }));
    if (sayfaTuru === 'ders') {
      setActiveDersTab(tabId);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTabName.trim()) return;
    addTab(sayfaTuru, newTabName.trim());
    setNewTabName('');
    setShowModal(false);
  };

  const handleDeleteTab = (tab) => {
    showConfirm({
      title: 'Sekmeyi Sil',
      message: `"${tab.ad}" sekmesini ve bu sekmeye özel widget düzenini silmek istediğine emin misin?`,
      confirmText: 'Evet, Sil',
      isDanger: true,
      onConfirm: () => deleteTab(sayfaTuru, tab.id)
    });
  };

  return (
    <nav className="ders-sekmeler dinamik-sekme-bar" data-sayfa-turu={sayfaTuru}>
      <div className="dinamik-sekmeler-alani">
        {currentTabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            className={`ders-sekme-btn ${activeTabId === tab.id ? 'aktif' : ''}`}
            onClick={() => handleSelect(tab.id)}
          >
            {simgesi(tab.ikon || "📌")} {tab.ad}
            {tab.ozelMi && (
              <span
                className="sekme-sil-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTab(tab);
                }}
              >
                ✕
              </span>
            )}
          </button>
        ))}
      </div>
      <button type="button" className="ders-ikincil-buton yeni-sekme-ekle-btn" onClick={() => setShowModal(true)}>
        + Yeni Sekme
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-kutu" style={{ maxWidth: '400px' }} onClick={e => e.stopPropagation()}>
            <div className="modal-baslik">
              <h3>Yeni Sekme Ekle</h3>
              <button className="gun-detay-kapat" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <form onSubmit={handleAdd}>
              <label className="modal-label">Sekme Adı</label>
              <input
                type="text"
                placeholder="Örn: Projelerim, Ekstra Notlar..."
                value={newTabName}
                onChange={e => setNewTabName(e.target.value)}
                autoFocus
              />
              <div className="modal-alt-bar" style={{ marginTop: '14px' }}>
                <button type="button" className="onay-modal-vazgec-btn" onClick={() => setShowModal(false)}>Vazgeç</button>
                <button type="submit" className="gorev-kaydet-btn">Oluştur</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};