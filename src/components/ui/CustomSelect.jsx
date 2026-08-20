import React, { useState, useRef, useEffect } from 'react';

export const CustomSelect = ({ value, onChange, options, placeholder = "Seçiniz..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // Dışarı tıklanınca menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Seçili öğeyi bul
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div ref={ref} style={{ position: 'relative', minWidth: '160px', flex: 1 }}>
      {/* Görünen Kutu */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '8px 12px',
          border: `1px solid ${isOpen ? 'var(--renk-vurgu)' : 'var(--renk-kenarlik)'}`,
          borderRadius: '8px',
          backgroundColor: 'var(--renk-yuzey)',
          color: selectedOption ? 'var(--renk-metin)' : 'var(--renk-metin-ikincil)',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: isOpen ? '0 0 0 3px var(--renk-vurgu-halka)' : 'none',
          transition: 'all 0.2s ease',
          fontSize: '14px'
        }}
      >
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span style={{ 
          fontSize: '10px', 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
          transition: 'transform 0.2s ease',
          color: 'var(--renk-metin-ikincil)'
        }}>
          ▼
        </span>
      </div>
      
      {/* Açılan Menü (Dropdown) */}
      {isOpen && (
        <div 
          className="arama-sonuc-kapsayici" /* Kaydırma çubuğu CSS'imizi burada da kullanıyoruz */
          style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '100%',
          backgroundColor: 'var(--renk-yuzey)',
          border: '1px solid var(--renk-kenarlik)',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
          zIndex: 9999,
          maxHeight: '220px',
          overflowY: 'auto',
          padding: '6px'
        }}>
          {options.map((opt, idx) => {
            const isSelected = opt.value === value;
            return (
              <div
                key={idx}
                onClick={() => { onChange(opt.value); setIsOpen(false); }}
                onMouseEnter={(e) => {
                  if(!isSelected) e.currentTarget.style.backgroundColor = 'var(--renk-vurgu-yuzey)';
                }}
                onMouseLeave={(e) => {
                  if(!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                }}
                style={{
                  padding: '10px 12px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  color: isSelected ? 'var(--renk-vurgu)' : 'var(--renk-metin)',
                  backgroundColor: isSelected ? 'var(--renk-vurgu-yuzey)' : 'transparent',
                  fontWeight: isSelected ? '600' : '500',
                  transition: 'background-color 0.2s ease, color 0.2s ease',
                  fontSize: '13.5px',
                  marginBottom: '2px'
                }}
              >
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};