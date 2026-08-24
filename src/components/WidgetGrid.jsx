import React, { useState } from 'react';
import { useApp } from '../context/AppContext'; 
import { WIDGET_COMPONENTS } from './WidgetRegistry';
import { WidgetWrapper } from './WidgetWrapper';
import { ALL_WIDGETS } from '../constants';

export const WidgetGrid = ({ panelId }) => {
  const { widgetLayouts, reorderWidgets, simgesi } = useApp();
  const [dragOverId, setDragOverId] = useState(null);

  const currentLayout = (widgetLayouts[panelId] || []).filter(w => w.gorunur);

  const handleDragOver = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();
    if (dragOverId !== targetId) setDragOverId(targetId);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOverId(null);
    
    const draggedId = e.dataTransfer.getData("draggedWidgetId");
    if (!draggedId || draggedId === targetId) return;

    const rawLayout = widgetLayouts[panelId] || [];
    const startIndex = rawLayout.findIndex(w => w.id === draggedId);
    const endIndex = rawLayout.findIndex(w => w.id === targetId);

    if (startIndex !== -1 && endIndex !== -1) {
      reorderWidgets(panelId, startIndex, endIndex);
    }
  };

  if (currentLayout.length === 0) {
     return (
       <div style={{ padding: '20px', textAlign: 'center', opacity: 0.5 }}>
         {simgesi("📌")} Bu panelde henüz widget yok. Düzenle menüsünden ekleyebilirsin.
       </div>
     );
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'stretch', width: '100%', boxSizing: 'border-box' }}>
      {currentLayout.map((widgetMeta) => {
        const fullWidgetData = ALL_WIDGETS.find(w => w.id === widgetMeta.id) || widgetMeta;
        const combinedData = { ...fullWidgetData, ...widgetMeta };
        
        const Component = WIDGET_COMPONENTS[widgetMeta.id];

        const flexWidth = combinedData.genislik === 4 ? '100%' :
                          combinedData.genislik === 3 ? 'calc(75% - 12px)' :
                          combinedData.genislik === 2 ? 'calc(50% - 8px)' :
                          'calc(25% - 12px)';

        return (
          <div 
            key={widgetMeta.id}
            onDragOver={(e) => handleDragOver(e, widgetMeta.id)}
            onDrop={(e) => handleDrop(e, widgetMeta.id)}
            onDragLeave={() => setDragOverId(null)}
            style={{ 
               flex: `1 1 ${flexWidth}`,
               minWidth: combinedData.genislik >= 3 ? '100%' : 'min(100%, 320px)',
               maxWidth: combinedData.genislik === 4 ? '100%' : '100%',
               minHeight: '220px', 
               borderRadius: '12px',
               border: dragOverId === widgetMeta.id ? '2px dashed var(--renk-vurgu)' : '2px solid transparent',
               transition: 'border 0.2s, background-color 0.2s',
               display: 'flex',
               flexDirection: 'column',
               boxSizing: 'border-box'
            }}
          >
            <WidgetWrapper widgetData={combinedData} panelId={panelId}>
              {Component ? <Component /> : (
                <div style={{ padding: '30px', textAlign: 'center', color: 'var(--renk-metin-ikincil)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <span style={{ fontSize: '24px', marginBottom: '8px' }}>{simgesi("🚧")}</span>
                  <p style={{ margin: 0 }}><strong>{combinedData.baslik}</strong></p>
                  <p style={{ fontSize: '11px', opacity: 0.7 }}>Bu widget henüz sisteme bağlanmadı.</p>
                </div>
              )}
            </WidgetWrapper>
          </div>
        );
      })}
    </div>
  );
};