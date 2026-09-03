import React from 'react';

export const dateKey = date => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getStreak = dates => {
  const values = new Set(dates);
  let cursor = new Date();
  let streak = 0;
  while (values.has(dateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
};

export const MonthCalendar = ({ markedDates = {}, onSelect, selectedDate, colorForDate }) => {
  const [month, setMonth] = React.useState(() => new Date());
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const dayCount = new Date(year, monthIndex + 1, 0).getDate();
  const monthName = month.toLocaleDateString('tr-TR', { month: 'long', year: 'numeric' });
  const days = Array.from({ length: dayCount }, (_, index) => index + 1);

  return <div className="aylik-takvim">
    <div className="aylik-takvim-baslik">
      <button type="button" onClick={() => setMonth(new Date(year, monthIndex - 1, 1))} aria-label="Önceki ay">‹</button>
      <strong>{monthName}</strong>
      <button type="button" onClick={() => setMonth(new Date(year, monthIndex + 1, 1))} aria-label="Sonraki ay">›</button>
    </div>
    <div className="aylik-takvim-hafta">{['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => <span key={day}>{day}</span>)}</div>
    <div className="aylik-takvim-gunler">
      {Array.from({ length: offset }, (_, index) => <span key={`bos-${index}`} />)}
      {days.map(day => {
        const key = dateKey(new Date(year, monthIndex, day));
        const marked = Boolean(markedDates[key]);
        return <button type="button" key={key} className={`${marked ? 'isaretli' : ''} ${selectedDate === key ? 'secili' : ''}`} style={colorForDate ? { '--takvim-renk': colorForDate(key) || 'transparent' } : undefined} onClick={() => onSelect?.(key)}>{day}</button>;
      })}
    </div>
  </div>;
};
