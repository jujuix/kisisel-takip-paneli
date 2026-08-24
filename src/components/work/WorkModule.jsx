import React from 'react';
import { WidgetGrid } from '../WidgetGrid'; // Yeni akıllı ızgaramızı çağırıyoruz

export const WorkModule = () => {
  return (
    <div style={{ paddingBottom: '24px' }}>
      {/* 
        İşte bütün sihir bu tek satırda!
        Sistem 'is' (İş Paneli) için kaydedilmiş düzeni bulup,
        içindeki tüm widget'ları (Kanban, Zaman Çizelgesi, Fikirler vb.) 
        otomatik olarak ekrana basacak.
      */}
      <WidgetGrid panelId="is" />
    </div>
  );
};