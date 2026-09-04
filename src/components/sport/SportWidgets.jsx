import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MonthCalendar, getStreak } from '../ui/MonthCalendar';

const today = () => new Date().toISOString().split('T')[0];
const SPORT_MOVES = {
  Pilates: ['Hundred', 'Roll Up', 'Teaser', 'Single Leg Stretch', 'Bridge'],
  Yoga: ['Surya Namaskar', 'Downward Dog', 'Warrior II', 'Child Pose', 'Tree Pose'],
  Fitness: ['Squat', 'Lunge', 'Push Up', 'Plank', 'Deadlift'],
  Koşu: ['Isınma yürüyüşü', 'Tempo koşu', 'Interval', 'Yokuş koşusu', 'Soğuma'],
  Yüzme: ['Serbest', 'Kurbağalama', 'Sırtüstü', 'Kelebek', 'Teknik çalışma'],
  Dans: ['Isınma', 'Koreografi', 'Cardio dans', 'Esneme', 'Soğuma']
};

export const SportProgramWidget = () => {
  const { sportData, setSportData, simgesi } = useApp();
  const sports = Object.keys(SPORT_MOVES);
  return (
    <div>
      <div className="section-header"><h2>{simgesi('🏋️')} Spor Programı</h2></div>
      <p className="widget-yardimci-metin">Bu sayfanın ana spor türünü seç.</p>
      <div className="spor-secim-grid">
        {sports.map(item => <button type="button" key={item} className={`spor-secim-btn ${sportData.sporTuru === item ? 'aktif' : ''}`} onClick={() => setSportData(prev => ({ ...prev, sporTuru: item }))}>{item}</button>)}
      </div>
    </div>
  );
};

export const SportDailyWidget = () => {
  const { sportData, setSportData, simgesi } = useApp();
  const [date, setDate] = useState(today());
  const [minutes, setMinutes] = useState('');
  const records = sportData.kayitlar || [];
  const markedDates = Object.fromEntries(records.map(item => [item.tarih, true]));
  const selectedRecords = records.filter(item => item.tarih === date);
  const streak = getStreak(Object.keys(markedDates));
  const save = () => {
    if (!minutes) return;
    setSportData(prev => ({ ...prev, kayitlar: [...(prev.kayitlar || []), { id: `spor_${Date.now()}`, tarih: date, dakika: Number(minutes), tamamlandi: true }] }));
    setMinutes('');
  };
  return (
    <div>
      <div className="section-header"><h2>{simgesi('📅')} Spor Günlüğü</h2><strong className="seri-rozeti">{simgesi('🔥')} {streak} gün seri</strong></div>
      <p className="widget-yardimci-metin">{streak ? 'Serini korumak için bugün küçük bir adım at.' : 'İlk antrenmanını kaydet ve serini başlat.'}</p>
      <MonthCalendar markedDates={markedDates} selectedDate={date} onSelect={setDate} />
      <div className="gorev-formu-satir">
        <input type="number" min="1" placeholder="Dakika" value={minutes} onChange={e => setMinutes(e.target.value)} />
        <button type="button" className="ders-buyuk-buton" onClick={save}>Kaydet</button>
      </div>
      {selectedRecords.map(item => <div className="spor-kayit-satiri" key={item.id}>✅ {item.spor || sportData.sporTuru} · {item.dakika} dakika</div>)}
    </div>
  );
};

export const SportExercisesWidget = () => {
  const { sportData, setSportData } = useApp();
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const suggested = SPORT_MOVES[sportData.sporTuru] || [];
  const selected = (sportData.hareketler || []).filter(item => item.spor === sportData.sporTuru);
  const toggleSuggested = name => setSportData(prev => ({ ...prev, hareketler: (prev.hareketler || []).some(item => item.spor === prev.sporTuru && item.ad === name) ? prev.hareketler.filter(item => !(item.spor === prev.sporTuru && item.ad === name)) : [...(prev.hareketler || []), { id: `hareket_${Date.now()}`, ad: name, spor: prev.sporTuru, set: '1' }] }));
  const add = () => { if (!exercise.trim()) return; setSportData(prev => ({ ...prev, hareketler: [...(prev.hareketler || []), { id: `hareket_${Date.now()}`, ad: exercise.trim(), spor: prev.sporTuru, set: sets || '1' }] })); setExercise(''); setSets(''); };
  return (
    <div>
      <div className="section-header"><h2>💪 {sportData.sporTuru} Hareket Planı</h2></div>
      <div className="spor-secim-grid">{suggested.map(item => <button type="button" key={item} className={`spor-secim-btn ${selected.some(entry => entry.ad === item) ? 'aktif' : ''}`} onClick={() => toggleSuggested(item)}>{item}</button>)}</div>
      <div className="gorev-formu-satir">
        <input placeholder="Hareket adı" value={exercise} onChange={e => setExercise(e.target.value)} />
        <input type="number" min="1" placeholder="Set" value={sets} onChange={e => setSets(e.target.value)} />
        <button type="button" className="ders-buyuk-buton" onClick={add}>+ Ekle</button>
      </div>
      <div className="spor-hareket-listesi">{selected.map(item => <div className="spor-kayit-satiri" key={item.id}><span>{item.ad}</span><strong>{item.set} set</strong></div>)}</div>
    </div>
  );
};
