import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const HabitWeeklyWidget = () => {
  const { simgesi, weeklyHabits: habits, setWeeklyHabits: setHabits } = useApp();
  const [newHabit, setNewHabit] = useState('');

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i)); return d.toISOString().split('T')[0];
  });

  const toggleHabit = (id, date) => {
    setHabits(prev => prev.map(h => h.id === id ? { ...h, history: { ...h.history, [date]: !h.history[date] } } : h));
  };

  return (
    <div style={{ padding: '0 12px 12px 12px' }}>
      <div className="section-header" style={{ marginBottom: '12px' }}>
        <h2 style={{ fontSize: '14px' }}>{simgesi("🌱")} Haftalık Takip</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {habits.map(habit => (
          <div key={habit.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <div style={{ flex: 1, fontSize: '12.5px', fontWeight: '500', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {habit.name}
            </div>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {last7Days.map(date => {
                const isCompleted = habit.history[date];
                return (
                  <div
                    key={date}
                    onClick={() => toggleHabit(habit.id, date)}
                    style={{
                      width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      backgroundColor: 'var(--renk-vurgu)',
                      opacity: isCompleted ? 1 : 0.15, 
                      color: '#fff', fontSize: '10px', transition: 'all 0.2s ease'
                    }}
                  >
                    {isCompleted && '✓'}
                  </div>
                );
              })}
              <button onClick={() => setHabits(habits.filter(h => h.id !== habit.id))} style={{ background: 'none', border: 'none', color: 'var(--renk-metin-ikincil)', cursor: 'pointer', fontSize: '12px', padding: '0 4px' }}>✕</button>
            </div>
          </div>
        ))}
      </div>

      {/* YENİ ESTETİK EKLEME ALANI */}
      <form onSubmit={(e) => { e.preventDefault(); if(newHabit.trim()) { setHabits([...habits, { id: 'h_'+Date.now(), name: newHabit, history: {} }]); setNewHabit(''); } }} style={{ marginTop: '16px' }}>
        <input 
          type="text" 
          placeholder="＋ Yeni ekle... (Enter'a bas)" 
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