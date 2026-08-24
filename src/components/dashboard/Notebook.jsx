import React, { useRef, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const Notebook = () => {
  const { panelData, setPanelData, simgesi } = useApp();
  
  // 1. ADIM: Kutuya doğrudan erişebilmek için bir referans oluşturuyoruz
  const editorRef = useRef(null);

  // 2. ADIM: İçeriği sadece ilk açılışta veya dışarıdan bir veri geldiğinde dolduruyoruz
  // Bu sayede sen yazarken kutu kendini yenileyip imleci başa fırlatmayacak!
  useEffect(() => {
    if (editorRef.current && panelData?.notKagidi !== editorRef.current.innerHTML) {
      editorRef.current.innerHTML = panelData?.notKagidi || '';
    }
  }, [panelData?.notKagidi]);

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
    // Command çalıştıktan sonra div'in güncel halini kaydet
    if (editorRef.current) {
      setPanelData((prev) => ({ ...prev, notKagidi: editorRef.current.innerHTML }));
    }
  };

  const handleInput = (e) => {
    const val = e.currentTarget.innerHTML;
    setPanelData((prev) => ({ ...prev, notKagidi: val }));
  };

  return (
    <aside className="dashboard-card not-defteri-card" style={{ border: 'none', padding: 0, boxShadow: 'none', background: 'transparent' }}>
      <div className="section-header" style={{ marginBottom: '10px' }}>
        <h2>{simgesi("📝")} Not Defteri</h2>
        <div className="not-arac-cubugu">
          <button type="button" className="not-arac-btn" onClick={() => handleCommand('bold')} title="Kalın"><b>K</b></button>
          <button type="button" className="not-arac-btn" onClick={() => handleCommand('insertUnorderedList')} title="Madde işareti">≡</button>
          <button type="button" className="not-arac-btn" onClick={() => handleCommand('strikeThrough')} title="Üstünü çiz"><s>Ü</s></button>
        </div>
      </div>
      <div
        ref={editorRef} // Referansı buraya bağladık
        className="not-kagidi"
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Buraya yazmaya başla..."
        onInput={handleInput}
        /* dangerouslySetInnerHTML KALDIRILDI - Artık useEffect yönetiyor */
      />
    </aside>
  );
};