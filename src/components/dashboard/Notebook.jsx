import React from 'react';
import { useApp } from '../../context/AppContext';

export const Notebook = () => {
  const { panelData, setPanelData, simgesi } = useApp();

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
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
        className="not-kagidi"
        contentEditable
        suppressContentEditableWarning
        data-placeholder="Buraya yazmaya başla..."
        onInput={handleInput}
        dangerouslySetInnerHTML={{ __html: panelData?.notKagidi || '' }}
      />
    </aside>
  );
};