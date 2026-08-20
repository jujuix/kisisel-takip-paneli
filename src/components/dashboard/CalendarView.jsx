import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MONTH_NAMES, GUN_ADLARI } from '../../constants';

export const CalendarView = ({ size = 2 }) => {
  const { panelData, setPanelData } = useApp();
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
  const [selectedDate, setSelectedDate] = useState('2026-08-20');
  
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingText, setMeetingText] = useState('');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const getDayIndex = (date) => (date.getDay() === 0 ? 6 : date.getDay() - 1);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = getDayIndex(new Date(year, month, 1));
  const todayStr = '2026-08-20';

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (!selectedDate || !meetingText.trim()) return;

    const currentNotes = panelData?.takvimNotlari?.[selectedDate] || [];
    const newNote = {
      id: 'm_' + Date.now(),
      saat: meetingTime,
      metin: meetingText.trim()
    };

    setPanelData((prev) => ({
      ...prev,
      takvimNotlari: {
        ...(prev?.takvimNotlari || {}),
        [selectedDate]: [...currentNotes, newNote]
      }
    }));

    setMeetingText('');
    setMeetingTime('');
  };

  const handleDeleteMeeting = (noteId) => {
    if (!selectedDate) return;
    const currentNotes = panelData?.takvimNotlari?.[selectedDate] || [];
    setPanelData((prev) => ({
      ...prev,
      takvimNotlari: {
        ...(prev?.takvimNotlari || {}),
        [selectedDate]: currentNotes.filter((n) => n.id !== noteId)
      }
    }));
  };

  const selectedNotes = selectedDate ? panelData?.takvimNotlari?.[selectedDate] || [] : [];
  const isWide = size >= 2;

  return (
    <div className="dashboard-card calendar-card" style={{ border: 'none', padding: 0, boxShadow: 'none', background: 'transparent' }}>
      <div className={`calendar-icerik-responsive ${isWide ? 'yan-yana' : 'tek-kolon'}`}>
        
        {/* SOL: Takvim Grid */}
        <div className="calendar-sol-alan">
          <div className="calendar-header" style={{ marginBottom: '12px' }}>
            <button type="button" onClick={handlePrevMonth}>◀</button>
            <h3 style={{ fontSize: '15px' }}>{MONTH_NAMES[month]} {year}</h3>
            <button type="button" onClick={handleNextMonth}>▶</button>
          </div>

          <div className="calendar-grid">
            {GUN_ADLARI.map((day) => (
              <div key={day} className="gun-adi">{day}</div>
            ))}

            {Array.from({ length: firstDayIndex }).map((_, i) => (
              <div key={`empty-${i}`} className="gun-hucre empty" />
            ))}

            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dateStr = `${year}-${pad(month + 1)}-${pad(dayNum)}`;
              const isToday = dateStr === todayStr;
              const isSelected = dateStr === selectedDate;
              const noteCount = (panelData?.takvimNotlari?.[dateStr] || []).length;

              return (
                <div
                  key={dayNum}
                  className={`gun-hucre ${isToday ? 'today' : ''} ${isSelected ? 'secili' : ''}`}
                  onClick={() => setSelectedDate(dateStr)}
                >
                  <span>{dayNum}</span>
                  {noteCount > 0 && <span className="gun-not-noktasi" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* SAĞ: Toplantı & Not Yönetimi */}
        <div className="calendar-sag-alan">
          {selectedDate ? (
            <div className="gun-detay-paneli" style={{ margin: 0, border: 'none', paddingTop: 0 }}>
              <div className="gun-detay-baslik" style={{ marginBottom: '8px' }}>
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>📅 {selectedDate}</h4>
              </div>

              <form onSubmit={handleAddMeeting} className="toplanti-formu" style={{ margin: '0 0 10px 0' }}>
                <input
                  type="time"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  style={{ width: '85px', padding: '8px' }}
                />
                <input
                  type="text"
                  placeholder="Not / Toplantı..."
                  value={meetingText}
                  onChange={(e) => setMeetingText(e.target.value)}
                  style={{ flex: 1, padding: '8px' }}
                />
                <button type="submit" className="ders-buyuk-buton" style={{ padding: '0 12px', height: '36px' }}>＋</button>
              </form>

              <div className="toplanti-listesi">
                {selectedNotes.length === 0 ? (
                  <p className="bos-liste-notu" style={{ margin: 0, padding: '8px' }}>Bu gün için not/toplantı yok.</p>
                ) : (
                  selectedNotes.map((note) => (
                    <div key={note.id} className="toplanti-item" style={{ padding: '8px 10px' }}>
                      <div className="toplanti-item-ust">
                        {note.saat && <span className="toplanti-saat" style={{ fontSize: '13px' }}>{note.saat}</span>}
                        <span className="toplanti-baslik-metin" style={{ fontSize: '13px' }}>{note.metin}</span>
                        <button
                          type="button"
                          className="gorev-sil"
                          onClick={() => handleDeleteMeeting(note.id)}
                          title="Sil"
                          style={{ padding: '2px 4px' }}
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="gun-detay-bos" style={{ padding: '12px', textAlign: 'center' }}>
              <p style={{ margin: 0 }}>📌 Not eklemek için takvimden bir gün seç.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};