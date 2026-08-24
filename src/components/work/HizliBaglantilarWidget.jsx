import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

const DEFAULT_LINKS = [
  { id: 'hl_chatgpt', name: 'ChatGPT', icon: '🤖', url: 'https://chat.openai.com' },
  { id: 'hl_freecodecamp', name: 'freeCodeCamp', icon: '🏕️', url: 'https://www.freecodecamp.org' },
  { id: 'hl_github', name: 'GitHub', icon: '🐙', url: 'https://github.com' },
  { id: 'hl_tasarim', name: 'Tasarım', icon: '🎨', url: '#' }
];

export const HizliBaglantilarWidget = () => {
  const { simgesi, iconStyle, isData, setIsData } = useApp();
  const links = isData.hizliBaglantilar?.length ? isData.hizliBaglantilar : DEFAULT_LINKS;
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: '', icon: '🔗', url: '' });

  const updateLinks = (nextLinks) => {
    setIsData(prev => ({ ...prev, hizliBaglantilar: nextLinks }));
  };

  const openForm = (link = null) => {
    setEditingId(link?.id || null);
    setForm(link ? { name: link.name, icon: link.icon, url: link.url } : { name: '', icon: '🔗', url: '' });
    setIsFormOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = form.name.trim();
    if (!name) return;

    const nextLink = { id: editingId || `hl_${Date.now()}`, name, icon: form.icon || '🔗', url: form.url.trim() || '#' };
    updateLinks(editingId ? links.map(link => link.id === editingId ? nextLink : link) : [...links, nextLink]);
    setIsFormOpen(false);
    setEditingId(null);
  };

  return (
    <div className="hizli-baglantilar-widget">
      <div className="hizli-baglantilar-baslik">
        <h3>{simgesi('🔗')} Hızlı Bağlantılar</h3>
        <button type="button" className="hizli-baglanti-ekle-btn" onClick={() => openForm()}>{simgesi('➕')} Ekle</button>
      </div>

      {isFormOpen && (
        <form className="hizli-baglanti-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Bağlantı adı" value={form.name} onChange={event => setForm(prev => ({ ...prev, name: event.target.value }))} autoFocus />
          <input type="text" placeholder="Emoji veya ikon (örn. 🔗)" value={form.icon} onChange={event => setForm(prev => ({ ...prev, icon: event.target.value }))} />
          <input type="url" placeholder="https://ornek.com" value={form.url} onChange={event => setForm(prev => ({ ...prev, url: event.target.value }))} />
          <div className="hizli-baglanti-form-actions">
            <button type="button" className="ders-ikincil-buton" onClick={() => setIsFormOpen(false)}>Vazgeç</button>
            <button type="submit" className="ders-buyuk-buton">{editingId ? 'Güncelle' : 'Kaydet'}</button>
          </div>
        </form>
      )}

      <div className="hizli-baglantilar-listesi">
        {links.map(link => (
          <div className="hizli-baglanti-item" key={link.id}>
            <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
              <span className={`hizli-baglanti-ikon ${iconStyle === 'svg' ? 'minimal' : ''}`}>{simgesi(link.icon)}</span>
              <span>{link.name}</span>
            </a>
            <div className="hizli-baglanti-islemler">
              <button type="button" onClick={() => openForm(link)} title="Bağlantıyı düzenle" aria-label={`${link.name} bağlantısını düzenle`}>{simgesi('✏️')}</button>
              <button type="button" onClick={() => updateLinks(links.filter(item => item.id !== link.id))} title="Bağlantıyı sil" aria-label={`${link.name} bağlantısını sil`}>{simgesi('🗑️')}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};