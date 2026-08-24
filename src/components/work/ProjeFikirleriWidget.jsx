import React, { useState } from 'react';

export const ProjeFikirleriWidget = () => {
  const [ideas, setIdeas] = useState([
    { id: 1, text: "Claude Code ile otomatik kod asistanı entegrasyonu", tag: "AI/Dev" },
    { id: 2, text: "Discord için özel hatırlatıcı bot yazmak (Python)", tag: "Script" }
  ]);

  return (
    <div className="widget-kutu" style={{ backgroundColor: 'var(--renk-yuzey)', padding: '16px', borderRadius: '12px', border: '1px solid var(--renk-kenarlik)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--renk-metin)' }}>💡 Proje Fikirleri</h3>
        <button style={{ background: 'none', border: 'none', color: 'var(--renk-metin-ikincil)', cursor: 'pointer', fontSize: '12px' }}>Tümünü Gör ❯</button>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {ideas.map(idea => (
          <div key={idea.id} style={{ padding: '12px', border: '1px solid var(--renk-kenarlik)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', color: 'var(--renk-metin)' }}>{idea.text}</span>
            <span style={{ fontSize: '11px', padding: '4px 8px', backgroundColor: 'var(--renk-vurgu-yuzey)', color: 'var(--renk-vurgu)', borderRadius: '12px', fontWeight: '600', whiteSpace: 'nowrap' }}>
              {idea.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};