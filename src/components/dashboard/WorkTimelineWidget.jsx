import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { CustomSelect } from '../ui/CustomSelect'; 

export const WorkTimelineWidget = () => {
  const { simgesi } = useApp();

  const [currentDate, setCurrentDate] = useState(new Date());

  // v6 Sürümü: Satırlar (Rows) artık PROJE isimleri, Kapsüller (Pills) ise AŞAMALAR.
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('isZaman_v6');
    if (saved) return JSON.parse(saved);
    
    const y = new Date().getFullYear();
    const m = new Date().getMonth();
    
    return [
      { 
        id: 'p1', 
        isim: "Okula Dönüş Kampanyası", 
        phases: [
          { id: 'ph1', isim: "Araştırma", startTimestamp: new Date(y, m, 2).getTime(), endTimestamp: new Date(y, m, 5).getTime(), isHighlight: false },
          { id: 'ph2', isim: "Tasarım", startTimestamp: new Date(y, m, 6).getTime(), endTimestamp: new Date(y, m, 12).getTime(), isHighlight: true }
        ]
      },
      { 
        id: 'p2', 
        isim: "Yeni Web Sitesi", 
        phases: [
          { id: 'ph3', isim: "Geliştirme", startTimestamp: new Date(y, m, 10).getTime(), endTimestamp: new Date(y, m, 25).getTime(), isHighlight: false }
        ]
      }
    ];
  });

  const [isEditing, setIsEditing] = useState(false);

  // Aşama Seçenekleri (Dropdown için)
  const phaseOptions = [
    { value: 'Araştırma', label: 'Araştırma' },
    { value: 'Tasarım', label: 'Tasarım' },
    { value: 'Geliştirme', label: 'Geliştirme' },
    { value: 'Yayınlama', label: 'Yayınlama' }
  ];

  // Form State'leri
  const [newProjectName, setNewProjectName] = useState('');
  const [newPhaseName, setNewPhaseName] = useState('Araştırma');
  const [newStart, setNewStart] = useState(1);
  const [newSpan, setNewSpan] = useState(7);
  const [isHighlight, setIsHighlight] = useState(false);

  useEffect(() => {
    localStorage.setItem('isZaman_v6', JSON.stringify(projects));
  }, [projects]);

  const viewYear = currentDate.getFullYear();
  const viewMonth = currentDate.getMonth();
  const monthName = currentDate.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });
  const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

  const viewMonthStart = new Date(viewYear, viewMonth, 1).getTime();
  const viewMonthEnd = new Date(viewYear, viewMonth + 1, 0, 23, 59, 59).getTime();

  const prevMonth = () => setCurrentDate(new Date(viewYear, viewMonth - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(viewYear, viewMonth + 1, 1));

  const addTask = (e) => {
    e.preventDefault();
    const projName = newProjectName.trim();
    if (!projName) return;

    const startDay = Number(newStart);
    const span = Number(newSpan);
    const startDate = new Date(viewYear, viewMonth, startDay);
    const endDate = new Date(viewYear, viewMonth, startDay + span - 1);

    const newPhase = { 
      id: 'ph_' + Date.now(), 
      isim: newPhaseName, 
      startTimestamp: startDate.getTime(), 
      endTimestamp: endDate.getTime(), 
      isHighlight
    };

    setProjects(prev => {
      // Proje daha önce eklenmiş mi kontrol et (büyük/küçük harf duyarsız)
      const existingProj = prev.find(p => p.isim.toLowerCase() === projName.toLowerCase());
      
      if (existingProj) {
        // Varsa, aşamayı onun içine ekle
        return prev.map(p => p.id === existingProj.id ? { ...p, phases: [...p.phases, newPhase] } : p);
      } else {
        // Yoksa yepyeni bir proje satırı oluştur
        return [...prev, { id: 'p_' + Date.now(), isim: projName, phases: [newPhase] }];
      }
    });
    
    // Proje ismini sıfırlamıyoruz ki aynı projeye arka arkaya aşama eklemek kolay olsun
  };

  const removePhase = (projId, phaseId) => {
    setProjects(prev => {
      return prev.map(p => {
        if (p.id === projId) {
          return { ...p, phases: p.phases.filter(ph => ph.id !== phaseId) };
        }
        return p;
      }).filter(p => p.phases.length > 0); // Eğer projenin hiç aşaması kalmadıysa proje satırını sil
    });
  };

  return (
    <div style={{ padding: '0 12px 12px 12px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      <div className="section-header" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <h2 style={{ fontSize: '14px', margin: 0 }}>{simgesi("🗓️")} Proje Çizelgesi</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--renk-yuzey)', padding: '4px 8px', borderRadius: '8px' }}>
            <button onClick={prevMonth} style={{ background: 'none', border: 'none', color: 'var(--renk-metin)', cursor: 'pointer', fontWeight: 'bold' }}>&lt;</button>
            <span style={{ fontSize: '12px', fontWeight: '600', width: '90px', textAlign: 'center' }}>{monthName}</span>
            <button onClick={nextMonth} style={{ background: 'none', border: 'none', color: 'var(--renk-metin)', cursor: 'pointer', fontWeight: 'bold' }}>&gt;</button>
          </div>
        </div>

        <button 
          onClick={() => setIsEditing(!isEditing)}
          style={{ 
            background: isEditing ? 'var(--renk-yuzey)' : 'var(--renk-vurgu)', 
            color: isEditing ? 'var(--renk-metin)' : '#fff',
            border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '600',
            padding: '6px 16px', borderRadius: '20px', transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          {isEditing ? 'Kapat' : '+ Yeni Ekle'}
        </button>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '22px' }}>
        
        {/* Sol Sütunu Proje isimleri sığsın diye 130px yaptık */}
        <div style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '12px', alignItems: 'center' }}>
          <div style={{ fontSize: '11px', color: 'var(--renk-metin-ikincil)', fontWeight: '600' }}>Projeler</div>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${daysInCurrentMonth}, 1fr)`, gap: '2px' }}>
            {daysArray.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: '9px', color: 'var(--renk-metin-ikincil)', opacity: (d === 1 || d % 5 === 0) ? 1 : 0.4 }}>
                {(d === 1 || d % 5 === 0) ? d : '·'}
              </div>
            ))}
          </div>
        </div>

        {projects.map((proj) => (
          <div key={proj.id} style={{ display: 'grid', gridTemplateColumns: '130px 1fr', gap: '12px', alignItems: 'center', position: 'relative' }}>
            {/* Proje Adı */}
            <div style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--renk-metin)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} title={proj.isim}>
              {proj.isim}
            </div>
            
            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: `repeat(${daysInCurrentMonth}, 1fr)`, gap: '2px', height: '28px' }}>
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'var(--renk-kenarlik)', transform: 'translateY(-50%)', zIndex: 0 }} />
              
              {proj.phases.filter(ph => ph.startTimestamp <= viewMonthEnd && ph.endTimestamp >= viewMonthStart).map((phase) => {
                const tStart = new Date(phase.startTimestamp);
                const tEnd = new Date(phase.endTimestamp);

                let renderStartDay = 1;
                if (phase.startTimestamp >= viewMonthStart) renderStartDay = tStart.getDate();

                let renderEndDay = daysInCurrentMonth;
                if (phase.endTimestamp <= viewMonthEnd) renderEndDay = tEnd.getDate();

                const renderSpan = renderEndDay - renderStartDay + 1;
                const isStartedBefore = phase.startTimestamp < viewMonthStart;
                const isEndingAfter = phase.endTimestamp > viewMonthEnd;
                const borderRadius = `${isStartedBefore ? '0' : '20px'} ${isEndingAfter ? '0' : '20px'} ${isEndingAfter ? '0' : '20px'} ${isStartedBefore ? '0' : '20px'}`;

                return (
                  <div 
                    key={phase.id} 
                    style={{
                      gridColumn: `${renderStartDay} / span ${renderSpan}`,
                      background: phase.isHighlight ? 'var(--renk-vurgu)' : 'var(--renk-yuzey)',
                      border: phase.isHighlight ? 'none' : '1px solid var(--renk-kenarlik)',
                      borderRadius: borderRadius, zIndex: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
                      fontSize: '9.5px', fontWeight: '500', 
                      color: phase.isHighlight ? '#fff' : 'var(--renk-metin)',
                      padding: '0 6px', whiteSpace: 'nowrap', overflow: 'hidden'
                    }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{phase.isim}</span>
                    {isEditing && (
                      <button onClick={() => removePhase(proj.id, phase.id)} style={{ background: 'rgba(0,0,0,0.3)', border: 'none', color: '#fff', borderRadius: '50%', width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, fontSize: '8px' }}>✕</button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <form onSubmit={addTask} style={{ marginTop: '24px', padding: '16px', background: 'var(--renk-yuzey)', borderRadius: '12px', border: '1px solid var(--renk-kenarlik)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--renk-metin-ikincil)' }}>YENİ AŞAMA EKLE ({monthName})</div>
          
          <div style={{ display: 'flex', gap: '12px', position: 'relative', zIndex: 10 }}>
            {/* CustomSelect artık aşamaları listeliyor */}
            <div style={{ width: '160px' }}>
              <CustomSelect 
                value={newPhaseName} 
                onChange={(val) => setNewPhaseName(val)} 
                options={phaseOptions}
                placeholder="Aşama Seç..."
              />
            </div>
            
            {/* Input artık Proje adını alıyor */}
            <input type="text" placeholder="Proje Adı (Örn: Okula Dönüş Kampanyası)..." value={newProjectName} onChange={e => setNewProjectName(e.target.value)} style={{ flex: 1, padding: '8px 12px', fontSize: '12px', borderRadius: '6px', border: '1px solid var(--renk-kenarlik)', background: 'var(--renk-arkaplan)', color: 'var(--renk-metin)', outline: 'none' }} />
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              Başlama Günü: <input type="number" min="1" max={daysInCurrentMonth} value={newStart} onChange={e => setNewStart(e.target.value)} style={{ width: '50px', padding: '6px', borderRadius: '6px', border: '1px solid var(--renk-kenarlik)', background: 'var(--renk-arkaplan)', color: 'var(--renk-metin)', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              Süre (Gün): <input type="number" min="1" max="365" value={newSpan} onChange={e => setNewSpan(e.target.value)} style={{ width: '50px', padding: '6px', borderRadius: '6px', border: '1px solid var(--renk-kenarlik)', background: 'var(--renk-arkaplan)', color: 'var(--renk-metin)', outline: 'none' }} />
            </div>
            
            <div 
              onClick={() => setIsHighlight(!isHighlight)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer', marginLeft: '8px' }}
            >
              <div style={{ 
                width: '18px', height: '18px', borderRadius: '4px', 
                border: `1.5px solid ${isHighlight ? 'var(--renk-vurgu)' : 'var(--renk-kenarlik)'}`,
                background: isHighlight ? 'var(--renk-vurgu)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s'
              }}>
                {isHighlight && <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>✓</span>}
              </div>
              Renkli
            </div>
            
            <button type="submit" style={{ marginLeft: 'auto', background: 'var(--renk-vurgu)', color: '#fff', border: 'none', padding: '8px 20px', borderRadius: '20px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold', transition: 'all 0.2s' }}>Ekle</button>
          </div>
        </form>
      )}
    </div>
  );
};