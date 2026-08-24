import React from 'react';
import { useApp } from '../context/AppContext'; 

export const WidgetWrapper = ({ widgetData, panelId, children }) => {
  const { simgesi, isEditMode, updateWidgetWidth, toggleWidgetVisibility } = useApp();
  const { id, baslik, ikon, genislik } = widgetData;

  const handleDragStart = (e) => {
    e.dataTransfer.setData("draggedWidgetId", id);
    e.dataTransfer.effectAllowed = "move";
    setTimeout(() => { e.target.closest('.widget-kutu').style.opacity = '0.5'; }, 0);
  };

  const handleDragEnd = (e) => {
    e.target.closest('.widget-kutu').style.opacity = '1';
  };

  return (
    <div 
      className="widget-kutu"
      style={{ 
        width: '100%',
        flex: 1, 
        minHeight: '100%',
        boxSizing: 'border-box',
        background: 'var(--renk-yuzey)', 
        borderRadius: '12px', 
        border: isEditMode ? '1px dashed var(--renk-vurgu)' : '1px solid var(--renk-kenarlik)',
        display: 'flex', flexDirection: 'column',
        transition: 'all 0.2s ease',
        overflow: isEditMode ? 'hidden' : 'visible'
      }}
    >
      {isEditMode && (
        <div style={{ padding: '8px 12px', background: 'var(--renk-arkaplan)', borderBottom: '1px solid var(--renk-kenarlik)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div 
              draggable
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{ cursor: 'grab', color: 'var(--renk-vurgu)', padding: '4px', fontWeight: 'bold' }}
              title="Sürükle"
            >
              ⠿
            </div>
            <span style={{ fontSize: '13px', fontWeight: '600' }}>{simgesi(ikon)} {baslik}</span>
          </div>

          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {[1, 2, 3, 4].map(size => (
              <button 
                key={size}
                type="button"
                onClick={() => updateWidgetWidth(panelId, id, size)}
                style={{ padding: '2px 6px', fontSize: '11px', borderRadius: '4px', border: '1px solid var(--renk-kenarlik)', background: genislik === size ? 'var(--renk-vurgu)' : 'transparent', color: genislik === size ? '#fff' : 'var(--renk-metin)', cursor: 'pointer' }}
              >
                {size === 4 ? 'Tam' : `${size}s`}
              </button>
            ))}
            <button 
              type="button"
              onClick={() => toggleWidgetVisibility(panelId, id)}
              style={{ padding: '2px 6px', fontSize: '12px', marginLeft: '8px', cursor: 'pointer', background: 'transparent', border: 'none', color: '#ff6961' }}
            >
              ✖
            </button>
          </div>
        </div>
      )}

      <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
         {children}
      </div>
    </div>
  );
};