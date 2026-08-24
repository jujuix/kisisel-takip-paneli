import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export const WorkKanbanWidget = () => {
  const { simgesi, tasks = [], addTask, deleteTask, updateTask, isEditMode } = useApp();

  const kanbanTasks = tasks.filter(t => t.baglanti === 'is');

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    addTask({
      metin: newTaskTitle.trim(),
      kategoriId: 'kat_is', // 🚀 1. DÜZELTME: 'is-genel' yerine sistemin tanıdığı 'kat_is' yapıldı. Artık klasörde görünecek!
      baglanti: 'is',
      aciliyet: 'orta',
      tamamlandi: false,
      status: 'bekliyor', 
      anaSayfadaGoster: true
    });
    setNewTaskTitle('');
  };

  const onDragStart = (e, task) => {
    e.stopPropagation(); 
    /* Tüm tarayıcıların sürüklemeyi tanıması için mecburi veri yüklemesi */
    e.dataTransfer.setData("text/plain", task.id);
    e.dataTransfer.effectAllowed = "move";
    
    setDraggedItem(task);
    setTimeout(() => { e.target.style.opacity = '0.5'; }, 0);
  };

  const onDragEnd = (e) => {
    e.stopPropagation(); // Sürükleme bittiğinde de dışarıya haber gitmesini engelliyoruz.
    e.target.style.opacity = '1';
    setDraggedItem(null);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, colId) => {
    e.preventDefault();
    e.stopPropagation(); // Bırakma anında da ana sistemi susturuyoruz.
    
    const currentStatus = draggedItem.status || 'bekliyor';
    
    if (draggedItem && currentStatus !== colId) {
      if (updateTask) {
        updateTask(draggedItem.id, { 
          status: colId,
          tamamlandi: colId === 'bitti' 
        });
      } else {
        console.warn("Sürükle bırak işlemi için AppContext'te updateTask fonksiyonu gerekli.");
      }
    }
  };

  const columns = [
    { id: 'bekliyor', title: 'Bekliyor', color: 'var(--renk-metin-ikincil)' }, 
    { id: 'devam', title: 'Devam Ediyor', color: 'var(--renk-vurgu)' },       
    { id: 'bitti', title: 'Tamamlandı', color: 'var(--renk-metin)' }          
  ];

  return (
    <div style={{ position: 'relative', width: '100%', boxSizing: 'border-box', padding: '0 12px 12px 12px', display: 'flex', flexDirection: 'column', height: '100%' }}>

      <div className="section-header" style={{ marginBottom: '16px' }}>
        <h2 style={{ fontSize: '14px', margin: 0 }}>{simgesi("📋")} Kanban Panosu</h2>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', gap: '16px', flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: '8px' }}>
        {columns.map(col => (
          <div 
            key={col.id} 
            style={{ flex: '1 1 240px', background: 'var(--renk-yuzey)', borderRadius: '12px', padding: '12px', display: 'flex', flexDirection: 'column', border: '1px solid var(--renk-kenarlik)' }}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, col.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid var(--renk-kenarlik)' }}>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: col.color }}>{col.title}</div>
              <div style={{ fontSize: '11px', background: 'var(--renk-arkaplan)', padding: '2px 8px', borderRadius: '12px', color: 'var(--renk-metin-ikincil)' }}>
                {kanbanTasks.filter(t => (t.status || 'bekliyor') === col.id).length}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto', paddingRight: '4px' }}>
              {kanbanTasks.filter(t => (t.status || 'bekliyor') === col.id).map(task => {
                
                let isOverdue = false;
                if (task.date && task.status !== 'bitti') {
                   const today = new Date(); today.setHours(0,0,0,0);
                   const taskDate = new Date(task.date);
                   isOverdue = taskDate < today;
                }

                return (
                  <div 
                    key={task.id}
                    /* KRİTİK NOKTA: Sürüklenebilirliği aktif eden özellik */
                    draggable={true} 
                    onDragStart={(e) => onDragStart(e, task)}
                    onDragEnd={onDragEnd}
                    style={{ background: 'var(--renk-arkaplan)', border: `1px solid ${isOverdue ? '#ff6961' : 'var(--renk-kenarlik)'}`, borderRadius: '8px', padding: '10px', cursor: 'grab', display: 'flex', flexDirection: 'column', gap: '8px', transition: 'all 0.2s', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ fontSize: '12px', color: 'var(--renk-metin)', fontWeight: '500', lineHeight: '1.4' }}>{task.metin}</div>
                      <button onClick={() => deleteTask(task.id)} style={{ background: 'none', border: 'none', color: 'var(--renk-metin-ikincil)', cursor: 'pointer', fontSize: '10px', padding: 0 }}>✕</button>
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                      {task.tags && task.tags.length > 0 ? (
                        <div style={{ fontSize: '9px', background: 'rgba(255,255,255,0.1)', color: 'var(--renk-metin-ikincil)', padding: '2px 6px', borderRadius: '4px' }}>{task.tags[0]}</div>
                      ) : <div />}
                      
                      {task.date && (
                        <div style={{ fontSize: '9px', fontWeight: 'bold', color: isOverdue ? '#ff6961' : 'var(--renk-metin-ikincil)', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          {isOverdue && '⚠️ '} {task.date.substring(5).replace('-', '/')}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {col.id === 'bekliyor' && (
              <form onSubmit={handleAddTask} style={{ marginTop: '12px' }}>
                <input 
                  type="text" placeholder="+ Yeni iş ekle..." 
                  value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} 
                  style={{ width: '100%', boxSizing: 'border-box', padding: '8px', fontSize: '11px', background: 'transparent', border: '1px dashed var(--renk-kenarlik)', borderRadius: '6px', color: 'var(--renk-metin)', outline: 'none' }}
                />
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};