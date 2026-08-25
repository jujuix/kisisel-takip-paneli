import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const HabitMonthlyWidget = () => {
  const { simgesi, monthlyHabits: habits, setMonthlyHabits: setHabits } = useApp();

  const [newHabit, setNewHabit] = useState('');

  const last35Days = Array.from({ length: 35 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (34 - i)); return d.toISOString().split('T')[0];
  });

  const toggleDate = (habitId, date) => {
    setHabits(prev => prev.map(h => h.id === habitId ? { ...h, history: { ...h.history, [date]: !h.history[date] } } : h));
  };

  const addHabit = (e) => {
    e.preventDefault();
    if(newHabit.trim()) {
      setHabits([...habits, { id: 'm_'+Date.now(), name: newHabit.trim(), history: {} }]);
      setNewHabit('');
    }
  };

  // Ay etiketini otomatik hesapla (örn: "Ağu" veya "Tem - Ağu")
  const getMonthLabel = () => {
    const d1 = new Date(last35Days[0]);
    const d2 = new Date(last35Days[34]);
    const m1 = d1.toLocaleDateString('tr-TR', { month: 'short' });
    const m2 = d2.toLocaleDateString('tr-TR', { month: 'short' });
    return m1 === m2 ? m1 : `${m1} - ${m2}`;
  };

  const monthLabelText = getMonthLabel();

  return (
    <div style={{ padding: '0 12px 12px 12px' }}>
      <div className="section-header" style={{ marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px' }}>{simgesi("🎯")} Aylık Odak (Tekli Kartlar)</h2>
      </div>

      {/* YAN YANA DİZİLİM (GRID) SİSTEMİ EKLENDİ */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px' }}>
        {habits.map(habit => {
          const completedCount = last35Days.filter(d => habit.history[d]).length;
          return (
            <div key={habit.id} style={{ background: 'var(--renk-arkaplan)', borderRadius: '12px', padding: '12px', border: '1px solid var(--renk-kenarlik)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <div style={{ fontSize: '13px', fontWeight: '600' }}>{habit.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* AY BELİRTECİ EKLENDİ */}
                  <span style={{ fontSize: '10.5px', color: 'var(--renk-metin-ikincil)', fontWeight: 'bold', background: 'var(--renk-yuzey)', padding: '2px 6px', borderRadius: '4px' }}>
                    {monthLabelText} • {completedCount}/35
                  </span>
                  <button onClick={() => setHabits(habits.filter(h => h.id !== habit.id))} style={{ background: 'none', border: 'none', color: 'var(--renk-metin-ikincil)', cursor: 'pointer', fontSize: '12px', padding: 0 }}>✕</button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
                {last35Days.map(date => {
                  const isCompleted = habit.history[date];
                  return (
                    <div
                      key={date}
                      onClick={() => toggleDate(habit.id, date)}
                      title={date}
                      style={{
                        aspectRatio: '1/1',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        backgroundColor: 'var(--renk-vurgu)',
                        opacity: isCompleted ? 1 : 0.15, 
                        transition: 'all 0.15s ease'
                      }}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* YENİ ESTETİK EKLEME ALANI */}
      <form onSubmit={addHabit} style={{ marginTop: '16px' }}>
        <input 
          type="text" 
          placeholder="＋ Yeni hedef kartı ekle... (Enter'a bas)" 
          value={newHabit} 
          onChange={e => setNewHabit(e.target.value)} 
          style={{ 
            width: '100%', boxSizing: 'border-box', padding: '8px 12px', fontSize: '12px', 
            background: 'transparent', border: '1px dashed var(--renk-kenarlik)', borderRadius: '8px', 
            color: 'var(--renk-metin)', outline: 'none', transition: 'all 0.2s ease' 
          }}
          onFocus={e => { e.target.style.border = '1px solid var(--renk-vurgu)'; e.target.style.background = 'var(--renk-yuzey)'; }}
          onBlur={e => { e.target.style.border = '1px dashed var(--renk-kenarlik)'; e.target.style.background = 'transparent'; }}
        />
      </form>
    </div>
  );
};