import React, { useState, useRef, useEffect } from 'react';

export const CustomDatePicker = ({ value, onChange, placeholder = "Tarih Seçiniz..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  
  // Eğer seçili bir tarih varsa takvim o ayda açılsın, yoksa bugünün ayında açılsın
  const [viewDate, setViewDate] = useState(value ? new Date(value) : new Date());

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const daysOfWeek = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pa"];

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  // Ayın ilk gününün hangi güne denk geldiğini bul (Pazartesiyi 0 yapmak için)
  const firstDay = new Date(year, month, 1).getDay();
  const startingDayIndex = firstDay === 0 ? 6 : firstDay - 1;
  // O aydaki toplam gün sayısı
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const handlePrevMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = (e) => {
    e.stopPropagation();
    setViewDate(new Date(year, month + 1, 1));
  };

  const handleDayClick = (day) => {
    const formattedMonth = String(month + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    onChange(`${year}-${formattedMonth}-${formattedDay}`);
    setIsOpen(false);
  };

  // 1'den önceki boşlukları oluştur
  const blanks = Array.from({ length: startingDayIndex }, (_, i) => <div key={`blank-${i}`} />);
  // Günleri oluştur
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Tarihi Türkiye formatında (GG.AA.YYYY) göstermek için
  const displayValue = value ? value.split('-').reverse().join('.') : '';

  return (
    <div ref={ref} style={{ position: 'relative', minWidth: '130px', flex: 1 }}>
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
          height: '100%',
          boxSizing: 'border-box'
        }}
      >
        <span style={{ fontWeight: value ? '600' : '400' }}>{displayValue || placeholder}</span>
        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, opacity: 0.6 }}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      </div>

      {/* Açılan Takvim Menüsü */}
      {isOpen && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', left: 0,
          backgroundColor: 'var(--renk-yuzey)',
          border: '1px solid var(--renk-kenarlik)',
          borderRadius: '12px',
          boxShadow: '0 12px 32px rgba(0,0,0,0.2)',
          zIndex: 9999,
          padding: '12px',
          width: '240px'
        }}>
          {/* Takvim Üst Başlık (Ay ve Yıl) */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <button type="button" onClick={handlePrevMonth} style={{ background: 'none', border: 'none', color: 'var(--renk-metin)', cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>❮</button>
            <div style={{ fontWeight: 'bold', fontSize: '14px', color: 'var(--renk-metin)' }}>
              {monthNames[month]} {year}
            </div>
            <button type="button" onClick={handleNextMonth} style={{ background: 'none', border: 'none', color: 'var(--renk-metin)', cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>❯</button>
          </div>

          {/* Gün İsimleri */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '8px' }}>
            {daysOfWeek.map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: 'var(--renk-metin-ikincil)' }}>{d}</div>
            ))}
          </div>

          {/* Günler Izgarası */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {blanks}
            {days.map(day => {
              const currentDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const isSelected = value === currentDateStr;
              
              const isToday = new Date().toISOString().split('T')[0] === currentDateStr;

              return (
                <div 
                  key={day} 
                  onClick={() => handleDayClick(day)}
                  style={{
                    padding: '6px 0',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: isSelected ? 'var(--renk-vurgu)' : 'transparent',
                    color: isSelected ? '#fff' : (isToday ? 'var(--renk-vurgu)' : 'var(--renk-metin)'),
                    borderRadius: '6px',
                    fontSize: '13px',
                    fontWeight: isSelected || isToday ? 'bold' : '500',
                    border: isToday && !isSelected ? '1px solid var(--renk-vurgu)' : '1px solid transparent',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'var(--renk-vurgu-yuzey)' }}
                  onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent' }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};