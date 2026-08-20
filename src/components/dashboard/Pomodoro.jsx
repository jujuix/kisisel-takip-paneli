import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export const Pomodoro = () => {
  const { simgesi } = useApp();
  const [activeTab, setActiveTab] = useState('pomodoro');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState('calisma'); // calisma | mola

  useEffect(() => {
    let timer = null;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isRunning) {
      if (mode === 'calisma') {
        setMode('mola');
        setTimeLeft(5 * 60);
      } else {
        setMode('calisma');
        setTimeLeft(25 * 60);
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, mode]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="dashboard-card pomodoro-karti" style={{ border: 'none', padding: 0, boxShadow: 'none', background: 'transparent' }}>
      <div className="section-header" style={{ marginBottom: '10px' }}>
        <h2>{simgesi("🍅")} Pomodoro & Sayaç</h2>
      </div>

      <div className="sayac-sekmeler">
        <button
          type="button"
          className={`sayac-sekme-btn ${activeTab === 'pomodoro' ? 'aktif' : ''}`}
          onClick={() => { setActiveTab('pomodoro'); setIsRunning(false); setTimeLeft(25 * 60); setMode('calisma'); }}
        >
          {simgesi("🍅")} Pomodoro
        </button>
        <button
          type="button"
          className={`sayac-sekme-btn ${activeTab === 'kronometre' ? 'aktif' : ''}`}
          onClick={() => { setActiveTab('kronometre'); setIsRunning(false); setTimeLeft(0); }}
        >
          {simgesi("⏱️")} Kronometre
        </button>
      </div>

      <div className={`sayac-panel ${mode === 'mola' ? 'mola-modu' : ''}`}>
        <div className="sayac-mod-etiketi">{mode === 'calisma' ? 'Çalışma' : 'Mola'}</div>
        <div className="sayac-ekran">{formatTime(timeLeft)}</div>
        <div className="sayac-butonlar">
          <button type="button" className="sayac-btn sayac-btn-baslat" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Durdur' : 'Başlat'}
          </button>
          <button type="button" className="sayac-btn" onClick={() => { setIsRunning(false); setTimeLeft(mode === 'calisma' ? 25 * 60 : 5 * 60); }}>
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};