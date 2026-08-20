import React, { useState, useRef, useEffect } from 'react';

export const CustomTimePicker = ({ value, onChange, placeholder = "--:--" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  let currentHour = "00";
  let currentMinute = "00";
  if (value && value.includes(':')) {
    const parts = value.split(':');
    currentHour = parts[0];
    currentMinute = parts[1];
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleHourSelect = (h) => {
    onChange(`${h}:${currentMinute}`);
  };

  const handleMinuteSelect = (m) => {
    onChange(`${currentHour}:${m}`);
    setIsOpen(false); 
  };

  return (
    <div ref={ref} style={{ position: 'relative', minWidth: '105px' }}>
      
      {/* Scrollbar gizlemek için küçük bir stil enjeksiyonu */}
      <style>{`.gizli-scroll::-webkit-scrollbar { display: none; }`}</style>

      {/* Tıklanabilir Görünen Kutu */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 12px',
          border: `1px solid ${isOpen ? 'var(--renk-vurgu)' : 'var(--renk-kenarlik)'}`,
          borderRadius: '8px',
          backgroundColor: 'var(--renk-yuzey)',
          color: value ? 'var(--renk-metin)' : 'var(--renk-metin-ikincil)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: isOpen ? '0 0 0 3px var(--renk-vurgu-halka)' : 'none',
          transition: 'all 0.2s ease',
          fontSize: '14px',
          height: '100%'
        }}
      >
        <span style={{ fontWeight: value ? '600' : '400' }}>{value || placeholder}</span>
        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, opacity: 0.6 }}>
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>

      {/* Açılan Saat/Dakika Menüsü */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0,
          backgroundColor: 'var(--renk-yuzey)',
          border: '1px solid var(--renk-kenarlik)',
          borderRadius: '16px', // Daha yuvarlak köşeler
          boxShadow: '0 12px 32px rgba(0,0,0,0.2)', // Daha derin gölge
          zIndex: 9999,
          display: 'flex',
          width: '160px',
          padding: '4px' // Kutunun içine nefes alma boşluğu ekledik
        }}>
          
          {/* Saat Sütunu */}
          <div className="gizli-scroll" style={{ flex: 1, maxHeight: '220px', overflowY: 'auto', scrollbarWidth: 'none' }}>
            <div style={{ position: 'sticky', top: 0, background: 'var(--renk-yuzey)', padding: '8px 0', fontSize: '11px', textAlign: 'center', fontWeight: '700', color: 'var(--renk-metin-ikincil)', zIndex: 2 }}>Saat</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 4px 8px 4px' }}>
              {hours.map(h => (
                <div 
                  key={`h-${h}`} 
                  onClick={() => handleHourSelect(h)}
                  style={{ 
                    padding: '6px 0', textAlign: 'center', cursor: 'pointer',
                    backgroundColor: h === currentHour ? 'var(--renk-vurgu)' : 'transparent',
                    color: h === currentHour ? '#fff' : 'var(--renk-metin)',
                    borderRadius: '8px', // Öğeleri yuvarlak haplara dönüştürdük
                    fontWeight: h === currentHour ? '600' : '500',
                    transition: 'all 0.15s ease',
                    fontSize: '13px'
                  }}
                  onMouseEnter={e => { if(h !== currentHour) e.currentTarget.style.backgroundColor = 'var(--renk-vurgu-yuzey)'}}
                  onMouseLeave={e => { if(h !== currentHour) e.currentTarget.style.backgroundColor = 'transparent'}}
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Zarif Orta Çizgi */}
          <div style={{ width: '1px', backgroundColor: 'var(--renk-kenarlik)', margin: '12px 0', opacity: 0.5 }} />
          
          {/* Dakika Sütunu */}
          <div className="gizli-scroll" style={{ flex: 1, maxHeight: '220px', overflowY: 'auto', scrollbarWidth: 'none' }}>
            <div style={{ position: 'sticky', top: 0, background: 'var(--renk-yuzey)', padding: '8px 0', fontSize: '11px', textAlign: 'center', fontWeight: '700', color: 'var(--renk-metin-ikincil)', zIndex: 2 }}>Dakika</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 4px 8px 4px' }}>
              {minutes.map(m => (
                <div 
                  key={`m-${m}`} 
                  onClick={() => handleMinuteSelect(m)}
                  style={{ 
                    padding: '6px 0', textAlign: 'center', cursor: 'pointer',
                    backgroundColor: m === currentMinute ? 'var(--renk-vurgu)' : 'transparent',
                    color: m === currentMinute ? '#fff' : 'var(--renk-metin)',
                    borderRadius: '8px', // Öğeleri yuvarlak haplara dönüştürdük
                    fontWeight: m === currentMinute ? '600' : '500',
                    transition: 'all 0.15s ease',
                    fontSize: '13px'
                  }}
                  onMouseEnter={e => { if(m !== currentMinute) e.currentTarget.style.backgroundColor = 'var(--renk-vurgu-yuzey)'}}
                  onMouseLeave={e => { if(m !== currentMinute) e.currentTarget.style.backgroundColor = 'transparent'}}
                >
                  {m}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  );
};