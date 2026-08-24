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
    let endIndex = rawLayout.findIndex(w => w.id === targetId);

    const rect = e.currentTarget.getBoundingClientRect();
    const dropAfter = (e.clientY - rect.top) > (rect.height / 2);
    if (dropAfter) endIndex = endIndex + 1;

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
    <>
      {/* KESİN ÇÖZÜM: CSS Media Query ile Mobilde %100 Genişlik Zorlaması */}
      <style>{`
        .dinamik-widget-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
          align-items: stretch;
        }
        .dinamik-widget-item {
          display: flex;
          flex-direction: column;
          min-height: 220px;
          border-radius: 12px;
          box-sizing: border-box;
        }
        
        /* Masaüstü ve Tablet Hesaplamaları */
        @media (min-width: 768px) {
          .genislik-1 { width: calc(25% - 12px); }
          .genislik-2 { width: calc(50% - 8px); }
          .genislik-3 { width: calc(75% - 4px); }
          .genislik-4 { width: 100%; }
        }
        
        /* Mobil Ekranlar - EZİLMEYİ ENGELLEYEN ANA KURAL */
        @media (max-width: 767px) {
          .dinamik-widget-item {
            width: 100% !important;
            flex: none !important;
          }
        }
      `}</style>

      <div className="dinamik-widget-grid">
        {currentLayout.map((widgetMeta) => {
          const fullWidgetData = ALL_WIDGETS.find(w => w.id === widgetMeta.id) || widgetMeta;
          const combinedData = { ...fullWidgetData, ...widgetMeta };
          
          const Component = WIDGET_COMPONENTS[widgetMeta.id];
          
          // CSS class'ını dinamik olarak belirliyoruz (Hata buradaki fazladan işaretlerden kaynaklıydı)
          const genislikDegeri = Math.min(Math.max(parseInt(combinedData.genislik) || 2, 1), 4);
          const genislikClass = `genislik-${genislikDegeri}`;

          return (
            <div 
              key={widgetMeta.id}
              className={`dinamik-widget-item ${genislikClass}`}
              onDragOver={(e) => handleDragOver(e, widgetMeta.id)}
              onDrop={(e) => handleDrop(e, widgetMeta.id)}
              onDragLeave={() => setDragOverId(null)}
              style={{ 
                 border: dragOverId === widgetMeta.id ? '2px dashed var(--renk-vurgu)' : '2px solid transparent',
                 transition: 'border 0.2s, background-color 0.2s'
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
    </>
  );
};