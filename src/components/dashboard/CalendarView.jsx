import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MONTH_NAMES, GUN_ADLARI } from '../../constants';
import { CustomTimePicker } from '../ui/CustomTimePicker'; 

export const CalendarView = ({ size = 2 }) => {
  const { panelData, setPanelData, simgesi } = useApp();

  const realToday = new Date();
  const pad = (n) => (n < 10 ? '0' + n : '' + n);
  const dynamicTodayStr = `${realToday.getFullYear()}-${pad(realToday.getMonth() + 1)}-${pad(realToday.getDate())}`;

  const [currentDate, setCurrentDate] = useState(new Date(realToday.getFullYear(), realToday.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState(dynamicTodayStr);
  
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingText, setMeetingText] = useState('');
  const [meetingNote, setMeetingNote] = useState(''); 

  const [editingNoteId, setEditingNoteId] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getDayIndex = (date) => (date.getDay() === 0 ? 6 : date.getDay() - 1);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = getDayIndex(new Date(year, month, 1));
  const todayStr = dynamicTodayStr; 

  const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (!selectedDate || !meetingText.trim()) return;

    const currentNotes = panelData?.takvimNotlari?.[selectedDate] || [];

    if (editingNoteId) {
      const updatedNotes = currentNotes.map(n => 
        n.id === editingNoteId 
          ? { ...n, saat: meetingTime, metin: meetingText.trim(), detay: meetingNote.trim() }
          : n
      );
      setPanelData((prev) => ({
        ...prev,
        takvimNotlari: {
          ...(prev?.takvimNotlari || {}),
          [selectedDate]: updatedNotes
        }
      }));
      setEditingNoteId(null); 
    } else {
      const newNote = {
        id: 'm_' + Date.now(),
        saat: meetingTime,
        metin: meetingText.trim(),
        detay: meetingNote.trim() 
      };
      setPanelData((prev) => ({
        ...prev,
        takvimNotlari: {
          ...(prev?.takvimNotlari || {}),
          [selectedDate]: [...currentNotes, newNote]
        }
      }));
    }

    setMeetingText('');
    setMeetingTime('');
    setMeetingNote(''); 
  };

  const handleEditClick = (note) => {
    setEditingNoteId(note.id);
    setMeetingTime(note.saat || '');
    setMeetingText(note.metin || '');
    setMeetingNote(note.detay || '');
  };

  const handleCancelEdit = () => {
    setEditingNoteId(null);
    setMeetingTime('');
    setMeetingText('');
    setMeetingNote('');
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
                  onClick={() => {
                    setSelectedDate(dateStr);
                    handleCancelEdit(); 
                  }}
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
                <h4 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {simgesi("📅")} {selectedDate} {editingNoteId && <span style={{ color: 'var(--renk-vurgu)', fontSize: '12px' }}>(Düzenleniyor...)</span>}
                </h4>
              </div>

              <form onSubmit={handleAddMeeting} className="toplanti-formu" style={{ margin: '0 0 10px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <CustomTimePicker 
                    value={meetingTime}
                    onChange={(val) => setMeetingTime(val)}
                    placeholder="--:--"
                  />
                  <input
                    type="text"
                    placeholder="Toplantı Başlığı..."
                    value={meetingText}
                    onChange={(e) => setMeetingText(e.target.value)}
                    style={{ flex: 1, padding: '8px' }}
                  />
                  {editingNoteId && (
                    <button type="button" onClick={handleCancelEdit} style={{ padding: '0 10px', height: '36px', background: 'transparent', border: '1px solid var(--renk-kenarlik)', borderRadius: '8px', cursor: 'pointer', color: 'var(--renk-metin)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title="İptal">
                      {simgesi("❌")}
                    </button>
                  )}
                  {/* DÜZELTME: Yeşil arka plan iptal edildi, tema vurgu rengi eklendi */}
                  <button type="submit" className="ders-buyuk-buton" style={{ padding: '0 12px', height: '36px', backgroundColor: 'var(--renk-vurgu)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} title={editingNoteId ? 'Güncelle' : 'Ekle'}>
                    {editingNoteId ? simgesi("💾") : simgesi("➕")}
                  </button>
                </div>
                
                <textarea 
                  placeholder="Toplantı notları, linkler veya detaylar..."
                  value={meetingNote}
                  onChange={(e) => setMeetingNote(e.target.value)}
                  rows="2"
                  style={{ width: '100%', padding: '8px', borderRadius: '8px', border: '1px solid var(--renk-kenarlik)', background: 'transparent', color: 'var(--renk-metin)', resize: 'vertical', fontSize: '13px' }}
                />
              </form>

              <div className="toplanti-listesi">
                {selectedNotes.length === 0 ? (
                  <p className="bos-liste-notu" style={{ margin: 0, padding: '8px' }}>Bu gün için not/toplantı yok.</p>
                ) : (
                  selectedNotes.map((note) => (
                    <div key={note.id} className="toplanti-item" style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', border: editingNoteId === note.id ? '1px solid var(--renk-vurgu)' : '1px solid transparent' }}>
                      <div className="toplanti-item-ust" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                        <div>
                          {note.saat && <span className="toplanti-saat" style={{ fontSize: '13px', marginRight: '8px', color: 'var(--renk-vurgu)', fontWeight: 'bold' }}>{note.saat}</span>}
                          <span className="toplanti-baslik-metin" style={{ fontSize: '14px', fontWeight: '600' }}>{note.metin}</span>
                        </div>
                        
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button
                            type="button"
                            className="gorev-sil"
                            onClick={() => handleEditClick(note)}
                            title="Düzenle"
                            style={{ padding: '2px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            {simgesi("✏️")}
                          </button>
                          <button
                            type="button"
                            className="gorev-sil"
                            onClick={() => handleDeleteMeeting(note.id)}
                            title="Sil"
                            style={{ padding: '2px 6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                          >
                            {simgesi("🗑️")}
                          </button>
                        </div>
                      </div>
                      
                      {note.detay && (
                        <div style={{ marginTop: '6px', paddingTop: '6px', borderTop: '1px dashed var(--renk-kenarlik)', color: 'var(--renk-metin-ikincil)', fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                          {note.detay}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="gun-detay-bos" style={{ padding: '12px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>{simgesi("📌")} Not eklemek için takvimden bir gün seç.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};