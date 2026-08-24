import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export const TaskCategoryCard = ({ category, sourcePage = "ana" }) => {
  const { 
    tasks = [], addTask, toggleTask, deleteTask, 
    toggleTaskHomeVisibility, deleteCategory, showConfirm, simgesi 
  } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [text, setText] = useState('');
  const [urgency, setUrgency] = useState('orta');
  const [showOnHome, setShowOnHome] = useState(true);

  if (!category) return null;

  const categoryTasks = (tasks || []).filter(t => {
    if (t.kategoriId !== category.id) return false;
    if (sourcePage === "ana") return t.anaSayfadaGoster !== false;
    return true;
  });

  const activeTasks = categoryTasks.filter(t => !t.tamamlandi);
  const completedTasks = categoryTasks.filter(t => t.tamamlandi);
  const percent = categoryTasks.length ? Math.round((completedTasks.length / categoryTasks.length) * 100) : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask({
      kategoriId: category.id,
      metin: text.trim(),
      aciliyet: urgency,
      baglanti: category.baglanti || "bagimsiz",
      anaSayfadaGoster: sourcePage === "ana" ? true : showOnHome
    });

    setText('');
    setIsOpen(false);
  };

  const handleDeleteCategory = () => {
    showConfirm({
      title: 'Kategoriyi Sil',
      message: `"${category.ad}" kategorisini ve içindeki tüm görevleri silmek istediğinize emin misiniz?`,
      confirmText: 'Evet, Sil',
      isDanger: true,
      onConfirm: () => deleteCategory(category.id)
    });
  };

  const urgencyColors = { 
    dusuk: "var(--renk-metin-ikincil)", // Düşük öncelik için temanın soluk rengi
    orta: "var(--renk-vurgu)",          // Orta öncelik için temanın kendi vurgu rengi (Pembe)
    acil: "#ff6961"                     // Acil için göz yormayan, karanlık temaya çok yakışan pastel kırmızı
  };

  return (
    <section className="dashboard-card kategori-card">
      <div className="section-header">
        <h2>
          {simgesi(category.ikon || "📁")} {category.ad}
          {category.baglanti && category.baglanti !== 'bagimsiz' && (
            <span style={{ fontSize: '11px', marginLeft: '6px', opacity: 0.6, fontWeight: 'normal' }}>
              ({category.baglanti === 'is' ? 'İş Bağlantılı' : 'Ders Bağlantılı'})
            </span>
          )}
        </h2>
        <div className="kategori-baslik-butonlar">
          <button className="gorev-ekle-btn" onClick={() => setIsOpen(!isOpen)}>+ Görev</button>
          <button className="kategori-sil-btn" onClick={handleDeleteCategory} title="Kategoriyi Sil">
            {simgesi("🗑️")}
          </button>
        </div>
      </div>

      <div className="ilerleme-satiri">
        <div className="ilerleme-bar"><div className="ilerleme-dolu" style={{ width: `${percent}%` }}></div></div>
        <span className="ilerleme-yuzde">%{percent}</span>
      </div>

      {isOpen && (
        <form className="gorev-formu" onSubmit={handleAdd}>
          <div className="gorev-formu-satir">
            <input 
              type="text" 
              placeholder={`${category.ad} görevini yaz...`} 
              value={text} 
              onChange={e => setText(e.target.value)} 
              autoFocus 
            />
          </div>
          <div className="gorev-formu-satir tekrar-secim">
            <label>Aciliyet:</label>
            <div className="tekrar-butonlari">
              {['dusuk', 'orta', 'acil'].map(level => (
                <button
                  type="button"
                  key={level}
                  className={`tekrar-btn aciliyet-btn ${urgency === level ? 'aktif' : ''}`}
                  onClick={() => setUrgency(level)}
                >
                  {level === 'dusuk' ? '🟢 Düşük' : level === 'orta' ? '🟡 Orta' : '🔴 Acil'}
                </button>
              ))}
            </div>
          </div>

          {sourcePage !== "ana" && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
              <input 
                type="checkbox" 
                id={`homeToggle_${category.id}`} 
                checked={showOnHome} 
                onChange={e => setShowOnHome(e.target.checked)} 
              />
              <label htmlFor={`homeToggle_${category.id}`}>{simgesi("🏠")} Ana sayfadaki görevlerimde göster</label>
            </div>
          )}

          <div className="gorev-formu-satir">
            <button type="submit" className="gorev-kaydet-btn">Kaydet</button>
          </div>
        </form>
      )}

      <div className="task-list">
        {activeTasks.length === 0 ? (
          <div className="bos-liste-notu">Aktif görev yok.</div>
        ) : (
          <AnimatePresence>
            {activeTasks.map(g => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 25, scale: 0.95 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                key={g.id} 
                className="task" 
                style={{ borderLeft: `4px solid ${urgencyColors[g.aciliyet || 'orta']}` }}
              >
                <input 
                  type="checkbox" 
                  checked={g.tamamlandi} 
                  onChange={() => toggleTask(g.id)} 
                />
                <div className="task-metin">
                  <h3>{g.metin}</h3>
                </div>
                <button 
                  type="button" 
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', opacity: g.anaSayfadaGoster ? 1 : 0.3 }}
                  title={g.anaSayfadaGoster ? "Ana sayfada gösteriliyor" : "Ana sayfada gizli"}
                  onClick={() => toggleTaskHomeVisibility(g.id)}
                >
                  {simgesi("🏠")}
                </button>
                <button className="gorev-sil" onClick={() => deleteTask(g.id)}>{simgesi("🗑️")}</button>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      <div className="gorev-alt-bar">
        <button className="tamamlananlariGoster" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? "Tamamlananları gizle" : "Tamamlananları göster"} ({completedTasks.length})
        </button>
      </div>

      {showCompleted && (
        <div className="tamamlanan-gorevler">
          {completedTasks.map(g => (
            <div key={g.id} className="task" style={{ opacity: 0.6 }}>
              <input type="checkbox" checked={g.tamamlandi} onChange={() => toggleTask(g.id)} />
              <div className="task-metin">
                <h3 style={{ textDecoration: 'line-through' }}>{g.metin}</h3>
              </div>
              <button className="gorev-sil" onClick={() => deleteTask(g.id)}>{simgesi("🗑️")}</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};