import React, { useState } from 'react';

export const BugunOdakWidget = () => {
  const [focusTasks, setFocusTasks] = useState([
    { id: 1, text: "Vektörel Bilişim canlı ders tekrarı", done: false },
    { id: 2, text: "Python ile yeni AI Agent scriptini test et", done: false },
    { id: 3, text: "freeCodeCamp haftalık bültenini oku", done: false }
  ]);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id) => {
    setFocusTasks(tasks => tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setFocusTasks([...focusTasks, { id: Date.now(), text: newTask, done: false }]);
    setNewTask('');
  };

  return (
    <div className="widget-kutu" style={{ backgroundColor: 'var(--renk-yuzey)', padding: '16px', borderRadius: '12px', border: '1px solid var(--renk-kenarlik)' }}>
      <h3 style={{ margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--renk-metin)' }}>
        📌 Bugün Odak
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
        {focusTasks.map(task => (
          <div key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', backgroundColor: task.done ? 'var(--renk-vurgu-yuzey)' : 'transparent', borderRadius: '8px', transition: 'all 0.2s' }}>
            <input 
              type="checkbox" 
              checked={task.done} 
              onChange={() => toggleTask(task.id)} 
              style={{ accentColor: 'var(--renk-vurgu)', width: '18px', height: '18px', cursor: 'pointer' }}
            />
            <span style={{ color: task.done ? 'var(--renk-metin-ikincil)' : 'var(--renk-metin)', textDecoration: task.done ? 'line-through' : 'none', fontSize: '14px' }}>
              {task.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input 
          type="text" 
          placeholder="Yeni odak görevi..." 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTask()}
          style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--renk-kenarlik)', backgroundColor: 'transparent', color: 'var(--renk-metin)', outline: 'none' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px', backgroundColor: 'var(--renk-vurgu)', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          ＋
        </button>
      </div>
    </div>
  );
};