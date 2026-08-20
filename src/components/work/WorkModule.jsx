import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TaskCategoryCard } from '../dashboard/TaskCategoryCard';

export const WorkModule = () => {
  const { isData, setIsData, categories, addCategory, simgesi } = useApp();
  
  const [projName, setProjName] = useState('');
  const [projStart, setProjStart] = useState('');
  const [projEnd, setProjEnd] = useState('');
  const [newFolderName, setNewFolderName] = useState('');
  const [fastNote, setFastNote] = useState('');

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const workCategories = categories.filter(c => c.baglanti === "is");

  const handleAddProject = () => {
    if (!projName.trim() || !projStart || !projEnd) {
      alert("Lütfen proje adı, başlangıç ve bitiş tarihlerini giriniz.");
      return;
    }
    const p = { id: "p_" + Date.now(), ad: projName.trim(), baslangic: projStart, bitis: projEnd };
    setIsData(prev => ({ ...prev, projeler: [...(prev.projeler || []), p] }));
    setProjName(''); setProjStart(''); setProjEnd('');
  };

  const handleCreateWorkFolder = () => {
    if (!newFolderName.trim()) return;
    addCategory({
      name: newFolderName.trim(),
      icon: "📁",
      baglanti: "is",
      anaSayfadaGoster: true
    });
    setNewFolderName('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
      {/* 1. ZAMAN ÇİZELGESİ */}
      <div className="ders-karti">
        <div className="section-header"><h2>{simgesi("🗓️")} Zaman Çizelgesi</h2></div>
        <div className="zaman-cizelgesi-govde">
          {(isData.projeler || []).length === 0 ? (
            <div className="bos-durum-notu">Henüz proje veya banner eklenmedi.</div>
          ) : (
            isData.projeler.map(p => {
              const bDate = new Date(p.bitis + "T00:00:00");
              const remaining = Math.round((bDate - today) / 86400000);
              let statusClass = "normal";
              if (remaining < 0) statusClass = "doldu";
              else if (remaining <= 3) statusClass = "acil";
              else if (remaining <= 7) statusClass = "yaklasan";

              return (
                <div key={p.id} className="zaman-satiri">
                  <div className="zaman-satiri-etiket">{p.ad}</div>
                  <div className="zaman-satiri-track">
                    <div className={`zaman-bar zaman-bar-${statusClass}`} style={{ width: '80%' }}>
                      <span className="zaman-bar-etiket">{remaining < 0 ? 'Süresi Doldu' : `${remaining} gün kaldı`}</span>
                    </div>
                  </div>
                  <button 
                    className="konu-sil-btn" 
                    onClick={() => setIsData(prev => ({ ...prev, projeler: prev.projeler.filter(item => item.id !== p.id) }))}
                  >
                    🗑️
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="zaman-ekle-formu">
          <input type="text" placeholder="Proje Adı..." value={projName} onChange={e => setProjName(e.target.value)} />
          <input type="date" value={projStart} onChange={e => setProjStart(e.target.value)} />
          <input type="date" value={projEnd} onChange={e => setProjEnd(e.target.value)} />
          <button className="ders-buyuk-buton" onClick={handleAddProject}>＋ Ekle</button>
        </div>
      </div>

      {/* 2. İŞ KLASÖRLERİ & GÖREVLER */}
      <div className="ders-karti">
        <div className="section-header">
          <h2>{simgesi("📁")} İş Klasörleri ve Görevler</h2>
        </div>
        <div className="gorev-formu-satir" style={{ marginBottom: '14px' }}>
          <input 
            type="text" 
            placeholder="Yeni İş Klasörü / Projesi..." 
            value={newFolderName} 
            onChange={e => setNewFolderName(e.target.value)} 
          />
          <button className="ders-buyuk-buton" onClick={handleCreateWorkFolder}>+ Klasör Ekle</button>
        </div>

        <div className="kategoriler-alani">
          {workCategories.length === 0 ? (
            <p className="bos-liste-notu">Henüz iş kategorisi bulunmuyor.</p>
          ) : (
            workCategories.map(cat => (
              <TaskCategoryCard key={cat.id} category={cat} sourcePage="is" />
            ))
          )}
        </div>
      </div>

      {/* 3. FİKİRLER VE HIZLI NOT */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
        <div className="ders-karti">
          <div className="section-header"><h2>{simgesi("💡")} Fikirler</h2></div>
          <textarea 
            id="isFikirlerAlani" 
            rows="6" 
            placeholder="Aklına gelen fikirleri buraya yaz..."
            value={isData.fikirler || ''}
            onChange={e => setIsData({ ...isData, fikirler: e.target.value })}
          />
        </div>

        <div className="ders-karti">
          <div className="section-header"><h2>{simgesi("⚡")} Hızlı Not</h2></div>
          <div className="gorev-formu-satir">
            <input type="text" placeholder="Hızlı not ekle..." value={fastNote} onChange={e => setFastNote(e.target.value)} />
            <button className="ders-buyuk-buton" onClick={() => {
              if (!fastNote.trim()) return;
              setIsData(prev => ({ ...prev, hizliNotlar: [{ id: "fn_" + Date.now(), metin: fastNote, tarih: today.toISOString().split('T')[0] }, ...(prev.hizliNotlar || [])] }));
              setFastNote('');
            }}>Ekle</button>
          </div>
          <div className="hedef-listesi" style={{ marginTop: '10px' }}>
            {(isData.hizliNotlar || []).map(n => (
              <div key={n.id} className="hedef-item"><span className="hedef-metin">{n.metin}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};