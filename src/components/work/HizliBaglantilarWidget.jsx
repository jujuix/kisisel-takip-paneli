import React from 'react';

export const HizliBaglantilarWidget = () => {
  const links = [
    { name: "ChatGPT", icon: "🤖", url: "https://chat.openai.com" },
    { name: "freeCodeCamp", icon: "🏕️", url: "https://www.freecodecamp.org" },
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "Tasarım", icon: "🎨", url: "#" }
  ];

  return (
    <div className="widget-kutu" style={{ backgroundColor: 'var(--renk-yuzey)', padding: '16px', borderRadius: '12px', border: '1px solid var(--renk-kenarlik)' }}>
      <h3 style={{ margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--renk-metin)' }}>🔗 Hızlı Bağlantılar</h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        {links.map((link, idx) => (
          <a key={idx} href={link.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '12px 4px', backgroundColor: 'var(--renk-vurgu-yuzey)', borderRadius: '8px', transition: 'transform 0.2s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
            <span style={{ fontSize: '24px' }}>{link.icon}</span>
            <span style={{ fontSize: '11px', color: 'var(--renk-vurgu)', fontWeight: '600' }}>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};