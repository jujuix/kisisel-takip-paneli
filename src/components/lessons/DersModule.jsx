import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { KONU_DURUMLARI, YANLIS_SEBEPLERI, MONTH_NAMES, GUN_ADLARI } from '../../constants';
import { CustomSelect } from '../ui/CustomSelect';
import { CustomDatePicker } from '../ui/CustomDatePicker';

// --- 1. KONULAR WIDGET ---
export const KonularWidget = () => {
  const { dersData, setDersData, simgesi, showConfirm } = useApp();
  const [newLessonName, setNewLessonName] = useState('');
  const [newTopicNames, setNewTopicNames] = useState({});
  const [topicModal, setTopicModal] = useState(null);
  
  const [recordType, setRecordType] = useState('test');
  const [recSoru, setRecSoru] = useState('');
  const [recDogru, setRecDogru] = useState('');
  const [recYanlis, setRecYanlis] = useState('');
  const [recSaat, setRecSaat] = useState('');
  const [recNot, setRecNot] = useState('');
  
  const todayStr = new Date().toISOString().split('T')[0];

  const handleAddRecord = () => {
    if (!topicModal) return;
    const { dersId, konu } = topicModal;
    const newRec = {
      id: "rec_" + Date.now(), tip: recordType, tarih: todayStr,
      soru: Number(recSoru) || 0, dogru: Number(recDogru) || 0,
      yanlis: Number(recYanlis) || 0, saat: Number(recSaat) || 0, not: recNot
    };

    setDersData(prev => ({
      ...prev,
      calismaGunleri: { ...prev.calismaGunleri, [todayStr]: true },
      dersler: prev.dersler.map(d => d.id === dersId ? {
        ...d,
        konular: d.konular.map(k => k.id === konu.id ? {
          ...k,
          durum: k.durum === 'baslanmadi' ? 'calisiyor' : k.durum,
          kayitlar: [...(k.kayitlar || []), newRec]
        } : k)
      } : d)
    }));

    setRecSoru(''); setRecDogru(''); setRecYanlis(''); setRecSaat(''); setRecNot('');
    setTopicModal(null);
  };

  return (
    <div style={{ width: '100%' }}>
      <div className="gorev-formu-satir" style={{ marginBottom: '16px' }}>
        <input type="text" placeholder="Yeni ders adı..." value={newLessonName} onChange={e => setNewLessonName(e.target.value)} />
        <button className="ders-buyuk-buton" onClick={() => {
          if (!newLessonName.trim()) return;
          setDersData(prev => ({ ...prev, dersler: [...prev.dersler, { id: "d_" + Date.now(), ad: newLessonName.trim(), konular: [] }] }));
          setNewLessonName('');
        }}>＋ Ders Ekle</button>
      </div>
      <div id="dersKartlariAlani">
        {dersData.dersler.map(ders => (
          <div key={ders.id} className="ders-karti acik" style={{ marginBottom: '14px' }}>
            <div className="section-header">
              <h3>{ders.ad}</h3>
              <button className="kategori-sil-btn" onClick={() => {
                showConfirm({
                  title: 'Dersi Sil', message: `"${ders.ad}" dersini silmek istediğinize emin misiniz?`, confirmText: 'Sil', isDanger: true,
                  onConfirm: () => setDersData(prev => ({ ...prev, dersler: prev.dersler.filter(d => d.id !== ders.id) }))
                });
              }}>🗑️</button>
            </div>
            <div className="konu-listesi" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ders.konular.map(konu => {
                const st = KONU_DURUMLARI.find(d => d.id === konu.durum) || KONU_DURUMLARI[0];
                return (
                  <div key={konu.id} className="konu-satiri">
                    <span className="konu-satiri-ad" onClick={() => setTopicModal({ dersId: ders.id, konu })}>{konu.ad}</span>
                    <div className="konu-satiri-sag">
                      <button className="konu-durum-rozeti" style={{ backgroundColor: st.renk }} onClick={() => setTopicModal({ dersId: ders.id, konu })}>{st.ad}</button>
                    </div>
                  </div>
                );
              })}
              <div className="konu-ekle-satiri">
                <input type="text" placeholder="Yeni konu ekle..." value={newTopicNames[ders.id] || ''} onChange={e => setNewTopicNames({ ...newTopicNames, [ders.id]: e.target.value })} />
                <button className="ders-ikincil-buton" onClick={() => {
                  const name = (newTopicNames[ders.id] || '').trim();
                  if (!name) return;
                  const k = { id: "k_" + Date.now(), ad: name, durum: 'baslanmadi', kayitlar: [], tekrarSayisi: 0, tekrarTarihi: null, tekrarGecmisi: [] };
                  setDersData(prev => ({ ...prev, dersler: prev.dersler.map(d => d.id === ders.id ? { ...d, konular: [...d.konular, k] } : d) }));
                  setNewTopicNames({ ...newTopicNames, [ders.id]: '' });
                }}>＋</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {topicModal && (
        <div className="modal-overlay" onClick={() => setTopicModal(null)}>
          <div className="modal-kutu konu-modal-kutu" onClick={e => e.stopPropagation()}>
            <div className="modal-baslik">
              <h3>{topicModal.konu.ad}</h3>
              <button className="gun-detay-kapat" onClick={() => setTopicModal(null)}>✕</button>
            </div>
            <div className="konu-durum-secimi">
              {KONU_DURUMLARI.map(d => (
                <button key={d.id} style={{ backgroundColor: d.renk }} className={topicModal.konu.durum === d.id ? 'aktif' : ''} onClick={() => {
                  setDersData(prev => ({ ...prev, dersler: prev.dersler.map(ders => ders.id === topicModal.dersId ? { ...ders, konular: ders.konular.map(k => k.id === topicModal.konu.id ? { ...k, durum: d.id } : k) } : ders) }));
                  setTopicModal(prev => ({ ...prev, konu: { ...prev.konu, durum: d.id } }));
                }}>{d.ad}</button>
              ))}
            </div>
            <div className="konu-kayit-formu" style={{ marginTop: '14px' }}>
              <div className="konu-kayit-tip-secimi">
                <button type="button" className={`tekrar-btn ${recordType === 'test' ? 'aktif' : ''}`} onClick={() => setRecordType('test')}>🧪 Test</button>
                <button type="button" className={`tekrar-btn ${recordType === 'calisma' ? 'aktif' : ''}`} onClick={() => setRecordType('calisma')}>🎬 Video/Saat</button>
              </div>
              {recordType === 'test' ? (
                <div className="gorev-formu-satir" style={{ marginTop: '8px' }}>
                  <input type="number" placeholder="Soru" value={recSoru} onChange={e => setRecSoru(e.target.value)} />
                  <input type="number" placeholder="Doğru" value={recDogru} onChange={e => setRecDogru(e.target.value)} />
                  <input type="number" placeholder="Yanlış" value={recYanlis} onChange={e => setRecYanlis(e.target.value)} />
                </div>
              ) : (
                <div className="gorev-formu-satir" style={{ marginTop: '8px' }}>
                  <input type="number" step="0.25" placeholder="Süre (saat)" value={recSaat} onChange={e => setRecSaat(e.target.value)} />
                </div>
              )}
              <textarea className="konu-not-textarea" placeholder="Not yaz..." rows="2" value={recNot} onChange={e => setRecNot(e.target.value)} style={{ marginTop: '8px' }} />
              <button className="gorev-kaydet-btn" onClick={handleAddRecord} style={{ marginTop: '8px' }}>Kaydı Ekle</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 2. YENİ DENEME EKLE WIDGET ---
export const DenemeEkleWidget = () => {
  const { dersData, setDersData } = useApp();
  const [examName, setExamName] = useState('');
  const [examDate, setExamDate] = useState(new Date().toISOString().split('T')[0]);
  const [branchResults, setBranchResults] = useState({});

  return (
    <div className="deneme-formu">
      <div className="gorev-formu-satir">
        <input type="text" placeholder="Deneme Adı..." value={examName} onChange={e => setExamName(e.target.value)} />
        <CustomDatePicker value={examDate} onChange={val => setExamDate(val)} />
      </div>
      <div className="deneme-brans-satirlari" style={{ margin: '10px 0' }}>
        {dersData.dersler.map(d => (
          <div key={d.id} className="deneme-brans-satiri">
            <span>{d.ad}</span>
            <input type="number" placeholder="D" value={branchResults[d.id]?.d || ''} onChange={e => setBranchResults({ ...branchResults, [d.id]: { ...branchResults[d.id], d: e.target.value } })} />
            <input type="number" placeholder="Y" value={branchResults[d.id]?.y || ''} onChange={e => setBranchResults({ ...branchResults, [d.id]: { ...branchResults[d.id], y: e.target.value } })} />
          </div>
        ))}
      </div>
      <button className="ders-buyuk-buton" onClick={() => {
        let td = 0, ty = 0, branches = [];
        dersData.dersler.forEach(d => {
          const res = branchResults[d.id] || { d: 0, y: 0 };
          const dogru = Number(res.d) || 0, yanlis = Number(res.y) || 0;
          if (dogru || yanlis) { branches.push({ ad: d.ad, dogru, yanlis }); td += dogru; ty += yanlis; }
        });
        const ex = { id: "ex_" + Date.now(), ad: examName.trim() || "Genel Deneme", tarih: examDate, toplamDogru: td, toplamYanlis: ty, toplamNet: Math.max(0, td - ty / 4), branslar: branches };
        setDersData(prev => ({ ...prev, denemeler: [ex, ...(prev.denemeler || [])] }));
        setExamName(''); setBranchResults({});
      }}>Kaydet</button>
    </div>
  );
};

// --- 3. DENEME GEÇMİŞİ WIDGET ---
export const DenemeGecmisiWidget = () => {
  const { dersData, simgesi } = useApp();
  const [examDetailModal, setExamDetailModal] = useState(null);

  return (
    <div>
      <div className="widget-ic-baslik"><h2>{simgesi("📈")} Deneme Geçmişi</h2></div>
      <div className="deneme-listesi">
        {(dersData.denemeler || []).map((ex, idx, arr) => {
          const prev = arr[idx + 1];
          const diff = prev ? ex.toplamNet - prev.toplamNet : null;
          return (
            <div key={ex.id} className="deneme-karti" onClick={() => setExamDetailModal({ ex, prev })}>
              <div className="deneme-karti-ust">
                <div>
                  <h4>{ex.ad}</h4>
                  <span className="deneme-karti-tarih">{ex.tarih}</span>
                  {diff !== null && (
                    <span style={{ marginLeft: '10px', fontWeight: 'bold', color: diff >= 0 ? 'var(--renk-basari)' : 'var(--renk-tehlike)' }}>
                      {diff >= 0 ? `▲ +${diff.toFixed(2)}` : `▼ ${diff.toFixed(2)}`}
                    </span>
                  )}
                </div>
                <div className="deneme-net-rozeti">{ex.toplamNet.toFixed(2)} Net</div>
              </div>
            </div>
          );
        })}
        {(dersData.denemeler || []).length === 0 && (
          <p className="bos-durum-notu widget-bos-durum">Henüz deneme kaydı yok. Deneme eklediğinde geçmiş burada görünecek.</p>
        )}
      </div>
      {examDetailModal && (
        <div className="modal-overlay" onClick={() => setExamDetailModal(null)}>
          <div className="modal-kutu konu-modal-kutu" onClick={e => e.stopPropagation()}>
            <div className="modal-baslik">
              <h3>{examDetailModal.ex.ad} · {examDetailModal.ex.tarih}</h3>
              <button className="gun-detay-kapat" onClick={() => setExamDetailModal(null)}>✕</button>
            </div>
            <div className="konu-ozet-grid" style={{ margin: '14px 0' }}>
              <div className="konu-ozet-kutu"><div className="konu-ozet-deger">{examDetailModal.ex.toplamNet.toFixed(2)}</div><div className="konu-ozet-etiket">Toplam Net</div></div>
              <div className="konu-ozet-kutu"><div className="konu-ozet-deger">{examDetailModal.ex.toplamDogru}</div><div className="konu-ozet-etiket">Doğru</div></div>
              <div className="konu-ozet-kutu"><div className="konu-ozet-deger">{examDetailModal.ex.toplamYanlis}</div><div className="konu-ozet-etiket">Yanlış</div></div>
            </div>
            <div className="deneme-brans-detay-listesi">
              {examDetailModal.ex.branslar.map((b, i) => (
                <div key={i} className="deneme-brans-detay-satiri">
                  <span className="deneme-brans-detay-ad">{b.ad}</span>
                  <span>{b.dogru}D / {b.yanlis}Y</span>
                  <span className="deneme-brans-detay-net">{(b.dogru - b.yanlis / 4).toFixed(2)} Net</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- 4. YANLIŞ ANALİZ WIDGET ---
export const YanlisAnalizWidget = () => {
  const { dersData, simgesi } = useApp();
  const wrongReasonCounts = {};
  (dersData.yanlislar || []).forEach(y => {
    wrongReasonCounts[y.sebep] = (wrongReasonCounts[y.sebep] || 0) + 1;
  });

  return (
    <div>
      <div className="widget-ic-baslik"><h2>{simgesi("📊")} Yanlış Analizi</h2></div>
      {Object.keys(wrongReasonCounts).length === 0 && (
        <p className="bos-durum-notu widget-bos-durum">Henüz yanlış soru kaydı yok. Kayıt eklediğinde analiz burada görünecek.</p>
      )}
      {Object.keys(wrongReasonCounts).map(reason => {
        const count = wrongReasonCounts[reason];
        const percent = Math.round((count / (dersData.yanlislar || []).length) * 100) || 0;
        return (
          <div key={reason} className="yanlis-sebep-analiz-satiri">
            <span className="yanlis-sebep-analiz-ad">{reason}</span>
            <div className="ilerleme-bar"><div className="ilerleme-dolu" style={{ width: `${percent}%` }}></div></div>
            <span className="yanlis-sebep-analiz-sayi">%{percent} ({count})</span>
          </div>
        );
      })}
    </div>
  );
};

// --- 5. YANLIŞ SORU EKLE WIDGET ---
export const YanlisEkleWidget = () => {
  const { dersData, setDersData } = useApp();
  const [wrongLesson, setWrongLesson] = useState('');
  const [wrongTopic, setWrongTopic] = useState('');
  const [wrongReason, setWrongReason] = useState(YANLIS_SEBEPLERI[0]);
  const [wrongNote, setWrongNote] = useState('');
  const [wrongMedia, setWrongMedia] = useState(null);
  const [wrongMediaType, setWrongMediaType] = useState('image');
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="yanlis-formu">
      <div className="gorev-formu-satir">
        <CustomSelect 
          value={wrongLesson} 
          onChange={(val) => setWrongLesson(val)} 
          options={[
            { value: "", label: "Ders Seçiniz..." },
            ...dersData.dersler.map(d => ({ value: d.ad, label: d.ad }))
          ]}
        />
        <input type="text" placeholder="Konu" value={wrongTopic} onChange={e => setWrongTopic(e.target.value)} />
      </div>
      <div className="yanlis-sebep-pilleri" style={{ margin: '8px 0' }}>
        {YANLIS_SEBEPLERI.map(s => (
          <button key={s} type="button" className={`yanlis-sebep-pil ${wrongReason === s ? 'secili' : ''}`} onClick={() => setWrongReason(s)}>{s}</button>
        ))}
      </div>
      <input type="file" accept="image/*,video/*" onChange={e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => { setWrongMedia(reader.result); setWrongMediaType(file.type.startsWith('video') ? 'video' : 'image'); };
        reader.readAsDataURL(file);
      }} />
      <textarea className="konu-not-textarea" placeholder="Soru notu..." value={wrongNote} onChange={e => setWrongNote(e.target.value)} />
      <button className="ders-buyuk-buton" onClick={() => {
        if (!wrongLesson) return;
        const item = { id: "w_" + Date.now(), ders: wrongLesson, konu: wrongTopic, sebep: wrongReason, not: wrongNote, medya: wrongMedia, medyaTip: wrongMediaType, tarih: todayStr, tekrarEdildi: false };
        setDersData(prev => ({ ...prev, yanlislar: [item, ...(prev.yanlislar || [])] }));
        setWrongTopic(''); setWrongNote(''); setWrongMedia(null);
      }}>Kaydet</button>
    </div>
  );
};

// --- 6. YANLIŞ ARŞİV WIDGET ---
export const YanlisArsivWidget = () => {
  const { dersData, setDersData, simgesi } = useApp();
  return (
    <div>
      <div className="widget-ic-baslik"><h2>{simgesi("❌")} Yanlış Arşivim</h2></div>
      <div className="yanlis-grid">
        {(dersData.yanlislar || []).map(y => (
        <div key={y.id} className="yanlis-karti">
          {y.medya && (y.medyaTip === 'video' ? <video src={y.medya} controls /> : <img src={y.medya} alt="Soru" />)}
          <div className="yanlis-etiket-satiri"><span>{y.ders} · {y.konu}</span><span>{y.tarih}</span></div>
          <span className="yanlis-sebep-rozet">{y.sebep}</span>
          {y.not && <p>{y.not}</p>}
          <div className="yanlis-karti-alt">
            <button className={`yanlis-tekrar-durum ${y.tekrarEdildi ? 'edildi' : 'edilmedi'}`} onClick={() => setDersData(prev => ({ ...prev, yanlislar: prev.yanlislar.map(x => x.id === y.id ? { ...x, tekrarEdildi: !x.tekrarEdildi } : x) }))}>
              {y.tekrarEdildi ? '🟢 Tekrar Edildi' : '🔴 Tekrar Edilmedi'}
            </button>
            <button className="gorev-sil" onClick={() => setDersData(prev => ({ ...prev, yanlislar: prev.yanlislar.filter(x => x.id !== y.id) }))}>🗑️</button>
          </div>
        </div>
        ))}
        {(dersData.yanlislar || []).length === 0 && (
          <p className="bos-durum-notu widget-bos-durum">Henüz yanlış soru eklenmedi. Eklediğin sorular burada arşivlenecek.</p>
        )}
      </div>
    </div>
  );
};

// --- 7. ÇALIŞMA TAKVİM WIDGET ---
export const CalismaTakvimWidget = () => {
  const { dersData, setDersData } = useApp();
  const [displayDate, setDisplayDate] = useState(() => new Date());
  const year = displayDate.getFullYear();
  const month = displayDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7;
  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const workedCount = monthDays.filter(day => dersData.calismaGunleri?.[`${monthPrefix}-${String(day).padStart(2, '0')}`]).length;

  const changeMonth = (offset) => {
    setDisplayDate(new Date(year, month + offset, 1));
  };

  const toggleDay = (day) => {
    const dateKey = `${monthPrefix}-${String(day).padStart(2, '0')}`;
    if (dateKey > new Date().toISOString().split('T')[0]) return;
    setDersData(prev => ({
      ...prev,
      calismaGunleri: { ...prev.calismaGunleri, [dateKey]: !prev.calismaGunleri?.[dateKey] }
    }));
  };

  return (
    <div className="calisma-takvim">
      <div className="calisma-takvim-ust">
        <button type="button" onClick={() => changeMonth(-1)} aria-label="Önceki ay">‹</button>
        <div>
          <strong>{MONTH_NAMES[month]} {year}</strong>
          <span>{workedCount} gün çalışıldı</span>
        </div>
        <button type="button" onClick={() => changeMonth(1)} aria-label="Sonraki ay">›</button>
      </div>
      <div className="calisma-takvim-hafta">
        {GUN_ADLARI.map(dayName => <span key={dayName}>{dayName}</span>)}
      </div>
      <div className="heatmap-grid calisma-takvim-grid">
        {Array.from({ length: firstDay }).map((_, index) => <div className="heatmap-gun bos-hucre" key={`empty-${index}`} />)}
        {monthDays.map(day => {
          const dateKey = `${monthPrefix}-${String(day).padStart(2, '0')}`;
          const isWorked = !!dersData.calismaGunleri?.[dateKey];
          const isToday = dateKey === new Date().toISOString().split('T')[0];
          const isFuture = dateKey > new Date().toISOString().split('T')[0];
          return (
            <button
              type="button"
              key={dateKey}
              className={`heatmap-gun ${isWorked ? 'dolu' : ''} ${isToday ? 'bugun' : ''} ${isFuture ? 'gelecek' : ''}`}
              disabled={isFuture}
              title={`${dateKey}: ${isWorked ? 'Çalışıldı' : 'Çalışılmadı'}`}
              onClick={() => toggleDay(day)}
            >
              <span>{day}</span>
            </button>
          );
        })}
      </div>
      <div className="calisma-takvim-aciklama">
        <span><i className="bos-renk" /> Çalışılmadı</span>
        <span><i className="dolu-renk" /> Çalışıldı</span>
      </div>
    </div>
  );
};

// --- 8. HEDEFLER WIDGET ---
export const HedeflerWidget = () => {
  const { dersData, setDersData } = useApp();
  const [goalText, setGoalText] = useState('');
  const [goalDate, setGoalDate] = useState('');

  return (
    <div>
      <div className="gorev-formu-satir">
        <input type="text" placeholder="Yeni hedef yaz..." value={goalText} onChange={e => setGoalText(e.target.value)} />
        <CustomDatePicker value={goalDate} onChange={val => setGoalDate(val)} />
        <button className="ders-buyuk-buton" onClick={() => {
          if (!goalText.trim()) return;
          setDersData(prev => ({ ...prev, hedefler: [...(prev.hedefler || []), { id: "g_" + Date.now(), metin: goalText.trim(), tarih: goalDate, tamamlandi: false }] }));
          setGoalText(''); setGoalDate('');
        }}>Ekle</button>
      </div>
      <div className="hedef-listesi" style={{ marginTop: '12px' }}>
        {(dersData.hedefler || []).map(g => (
          <div key={g.id} className={`hedef-item ${g.tamamlandi ? "tamamlandi" : ""}`}>
            <input type="checkbox" checked={g.tamamlandi} onChange={() => setDersData(prev => ({ ...prev, hedefler: prev.hedefler.map(item => item.id === g.id ? { ...item, tamamlandi: !item.tamamlandi } : item) }))} />
            <span className="hedef-metin">{g.metin}</span>
            {g.tarih && <span className="hedef-tarih">📅 {g.tarih}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};