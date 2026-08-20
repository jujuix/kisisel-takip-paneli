import React from 'react';
import { useApp } from '../../context/AppContext';

export const DailySummary = () => {
  const { tasks = [], dersData, panelData, simgesi } = useApp();
  const todayStr = new Date().toISOString().split('T')[0];

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.tamamlandi).length;

  let totalHours = 0;
  (dersData?.dersler || []).forEach(d => {
    (d.konular || []).forEach(k => {
      (k.kayitlar || []).forEach(r => {
        if (r.tarih === todayStr && r.saat) totalHours += Number(r.saat);
      });
    });
  });

  const meetingsToday = (panelData?.takvimNotlari?.[todayStr] || []).length;

  let examDiffText = "Tarih Seçilmedi";
  let examWarn = false;
  if (dersData?.sinavTarihi) {
    const b = new Date();
    b.setHours(0, 0, 0, 0);
    const target = new Date(dersData.sinavTarihi + "T00:00:00");
    const diff = Math.ceil((target - b) / (1000 * 60 * 60 * 24));
    if (diff > 0) { examDiffText = `${diff} gün kaldı`; examWarn = diff <= 7; }
    else if (diff === 0) { examDiffText = "Sınav bugün!"; examWarn = true; }
    else { examDiffText = "Sınav geçti"; }
  }

  return (
    <div className="gunluk-ozet-grid" style={{ margin: 0 }}>
      <div className="gunluk-ozet-kutu">
        <div className="gunluk-ozet-ikon">{simgesi("✅")}</div>
        <div className="gunluk-ozet-metin">
          <div className="gunluk-ozet-deger">{completedTasks}/{totalTasks}</div>
          <div className="gunluk-ozet-etiket">görev tamamlandı</div>
        </div>
      </div>
      <div className="gunluk-ozet-kutu">
        <div className="gunluk-ozet-ikon">{simgesi("⏱️")}</div>
        <div className="gunluk-ozet-metin">
          <div className="gunluk-ozet-deger">{totalHours ? `${totalHours}s` : '0dk'}</div>
          <div className="gunluk-ozet-etiket">bugün çalışma</div>
        </div>
      </div>
      <div className="gunluk-ozet-kutu">
        <div className="gunluk-ozet-ikon">{simgesi("🤝")}</div>
        <div className="gunluk-ozet-metin">
          <div className="gunluk-ozet-deger">{meetingsToday}</div>
          <div className="gunluk-ozet-etiket">toplantı / not</div>
        </div>
      </div>
      <div className={`gunluk-ozet-kutu ${examWarn ? "uyari" : ""}`}>
        <div className="gunluk-ozet-ikon">{simgesi("🎯")}</div>
        <div className="gunluk-ozet-metin">
          <div className="gunluk-ozet-deger">{examDiffText}</div>
          <div className="gunluk-ozet-etiket">Hedef Sınav</div>
        </div>
      </div>
    </div>
  );
};