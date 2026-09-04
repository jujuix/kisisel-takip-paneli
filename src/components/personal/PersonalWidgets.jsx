import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MonthCalendar, getStreak } from '../ui/MonthCalendar';
import { CustomDatePicker } from '../ui/CustomDatePicker';

const today = () => new Date().toISOString().split('T')[0];

const ListWidget = ({ title, icon, field, placeholder }) => {
  const { personalData, setPersonalData, simgesi } = useApp();
  const [value, setValue] = useState('');
  const add = () => { if (!value.trim()) return; setPersonalData(prev => ({ ...prev, [field]: [...(prev[field] || []), { id: `${field}_${Date.now()}`, ad: value.trim(), tamamlandi: false }] })); setValue(''); };
  const items = personalData[field] || [];
  const completed = items.filter(item => item.tamamlandi).length;
  const remove = id => setPersonalData(prev => ({ ...prev, [field]: (prev[field] || []).filter(item => item.id !== id) }));
  return <div className="kisisel-widget kisisel-widget-liste"><div className="section-header"><h2>{simgesi(icon)} {title}</h2><span className="widget-mini-ozet">{completed}/{items.length}</span></div><div className="gorev-formu-satir"><input placeholder={placeholder} value={value} onChange={e => setValue(e.target.value)} /><button type="button" className="ders-buyuk-buton" onClick={add}>+ Ekle</button></div><div className="kisisel-liste">{items.map(item => <div className={`kisisel-liste-satiri ${item.tamamlandi ? 'tamamlandi' : ''}`} key={item.id}><input type="checkbox" checked={item.tamamlandi} onChange={() => setPersonalData(prev => ({ ...prev, [field]: prev[field].map(entry => entry.id === item.id ? { ...entry, tamamlandi: !entry.tamamlandi } : entry) }))} /><span>{item.ad}</span><button type="button" className="kisisel-sil-btn" onClick={() => remove(item.id)} aria-label={`${item.ad} kaydını sil`}>×</button></div>)}</div></div>;
};

export const MoodTrackerWidget = () => {
  const { personalData, setPersonalData, simgesi } = useApp();
  const moods = [{ ad: 'Harika', renk: '95%' }, { ad: 'İyi', renk: '78%' }, { ad: 'Dengeli', renk: '60%' }, { ad: 'Yorgun', renk: '42%' }, { ad: 'Zor', renk: '25%' }];
  const colorForDate = date => personalData.modlar?.[date] ? `color-mix(in srgb, var(--renk-vurgu) ${personalData.modlar[date]} , transparent)` : undefined;
  const selectedMood = personalData.modlar?.[personalData.modSeciliTarih || today()];
  return <div className="kisisel-widget kisisel-widget-mod"><div className="section-header"><h2>{simgesi('🌤️')} Mod Takibi</h2><span className="widget-mini-ozet">{Object.keys(personalData.modlar || {}).length} gün kayıtlı</span></div><p className="widget-yardimci-metin">Bir gün seç, sonra o günün ruh halini renk ile kaydet.</p><MonthCalendar markedDates={personalData.modlar || {}} colorForDate={colorForDate} onSelect={date => setPersonalData(prev => ({ ...prev, modSeciliTarih: date }))} selectedDate={personalData.modSeciliTarih} /><div className="mod-secim">{moods.map(mood => <button type="button" key={mood.ad} className={selectedMood === mood.renk ? 'aktif' : ''} style={{ '--mod-renk': `color-mix(in srgb, var(--renk-vurgu) ${mood.renk}, transparent)` }} onClick={() => setPersonalData(prev => ({ ...prev, modlar: { ...(prev.modlar || {}), [prev.modSeciliTarih || today()]: mood.renk } }))}><span className="mod-renk-noktasi" />{mood.ad}</button>)}</div></div>;
};

export const PersonalHabitWidget = () => {
  const { personalData, setPersonalData, simgesi } = useApp();
  const [value, setValue] = useState('');
  const habits = personalData.aliskanliklar || [];
  const activeHabit = habits.find(item => item.id === personalData.seciliAliskanlik) || habits[0];
  const activeDates = activeHabit ? Object.keys(personalData.aliskanlikKayitlari?.[activeHabit.id] || {}) : [];
  const markedDates = Object.fromEntries(activeDates.map(date => [date, true]));
  const add = () => { if (!value.trim()) return; setPersonalData(prev => ({ ...prev, aliskanliklar: [...(prev.aliskanliklar || []), { id: `habit_${Date.now()}`, ad: value.trim() }] })); setValue(''); };
  const toggleHabitDate = date => setPersonalData(prev => { const current = { ...(prev.aliskanlikKayitlari?.[activeHabit.id] || {}) }; if (current[date]) delete current[date]; else current[date] = true; return { ...prev, aliskanlikKayitlari: { ...(prev.aliskanlikKayitlari || {}), [activeHabit.id]: current } }; });
  return <div className="kisisel-widget kisisel-widget-aliskanlik"><div className="section-header"><h2>{simgesi('🌱')} Alışkanlık Takibi</h2><strong className="seri-rozeti">{simgesi('🔥')} {getStreak(activeDates)} gün</strong></div><div className="gorev-formu-satir"><input placeholder="Yeni alışkanlık" value={value} onChange={e => setValue(e.target.value)} /><button type="button" className="ders-buyuk-buton" onClick={add}>+ Ekle</button></div><div className="kisisel-habitler">{habits.map(habit => <button type="button" className={activeHabit?.id === habit.id ? 'aktif' : ''} key={habit.id} onClick={() => setPersonalData(prev => ({ ...prev, seciliAliskanlik: habit.id }))}>{habit.ad}</button>)}</div>{activeHabit ? <><div className="takip-durum-bandi"><span>{activeHabit.ad}</span><strong>{activeDates.length} gün tamamlandı</strong></div><MonthCalendar markedDates={markedDates} onSelect={toggleHabitDate} /></> : <p className="widget-bos-mesaj">İlk alışkanlığını ekleyerek serini başlat.</p>}</div>;
};

const MediaWidget = ({ title, field, icon, kind }) => {
  const { personalData, setPersonalData, simgesi } = useApp();
  const [form, setForm] = useState({ ad: '', tur: 'Dizi', yazar: '', sayfa: '', sure: '', sezon: '', bolum: '', gorsel: '' });
  const add = () => { if (!form.ad.trim()) return; setPersonalData(prev => ({ ...prev, [field]: [...(prev[field] || []), { ...form, id: `${field}_${Date.now()}` }] })); setForm({ ad: '', tur: 'Dizi', yazar: '', sayfa: '', sure: '', sezon: '', bolum: '', gorsel: '' }); };
  const remove = id => setPersonalData(prev => ({ ...prev, [field]: (prev[field] || []).filter(item => item.id !== id) }));
  return <div><div className="section-header"><h2>{simgesi(icon)} {title}</h2></div><div className="medya-formu"><input placeholder={kind === 'book' ? 'Kitap adı' : 'Film veya dizi adı'} value={form.ad} onChange={e => setForm({ ...form, ad: e.target.value })} /><input placeholder="Görsel URL (isteğe bağlı)" value={form.gorsel} onChange={e => setForm({ ...form, gorsel: e.target.value })} />{kind === 'book' && <><input placeholder="Yazar" value={form.yazar} onChange={e => setForm({ ...form, yazar: e.target.value })} /><input type="number" min="1" placeholder="Sayfa" value={form.sayfa} onChange={e => setForm({ ...form, sayfa: e.target.value })} /></>}{kind === 'series' && <><select value={form.tur} onChange={e => setForm({ ...form, tur: e.target.value })}><option>Dizi</option><option>Film</option></select>{form.tur === 'Film' ? <input type="number" min="1" placeholder="Süre (dakika)" value={form.sure} onChange={e => setForm({ ...form, sure: e.target.value })} /> : <><input type="number" min="1" placeholder="Sezon" value={form.sezon} onChange={e => setForm({ ...form, sezon: e.target.value })} /><input type="number" min="1" placeholder="Bölüm" value={form.bolum} onChange={e => setForm({ ...form, bolum: e.target.value })} /></>}</>}<button type="button" className="ders-buyuk-buton" onClick={add}>+ Ekle</button></div><div className="medya-listesi">{(personalData[field] || []).map(item => <div className="medya-satiri" key={item.id}>{item.gorsel ? <img src={item.gorsel} alt="" /> : <span className="medya-gorsel-yok">{simgesi(icon)}</span>}<div><strong>{item.ad}</strong><small>{item.yazar || (item.sayfa ? `${item.sayfa} sayfa` : '') || (item.sure ? `${item.sure} dakika` : '') || (item.sezon ? `${item.sezon} sezon · ${item.bolum} bölüm` : '')}</small></div><button type="button" className="kisisel-sil-btn" onClick={() => remove(item.id)} aria-label={`${item.ad} kaydını sil`}>×</button></div>)}</div></div>;
};

export const PersonalHabitListWidget = () => <ListWidget title="Alışkanlıklar" icon="🌱" field="aliskanliklar" placeholder="Yeni alışkanlık" />;
export const PersonalListsWidget = () => <ListWidget title="Alışveriş ve İhtiyaç Listesi" icon="🛒" field="listeler" placeholder="Alınacak veya ihtiyaç ekle" />;
export const PersonalBooksWidget = () => <MediaWidget title="Okunacak Kitaplar" icon="📖" field="kitaplar" kind="book" />;
export const PersonalMediaWidget = () => <MediaWidget title="İzlenecek Film ve Diziler" icon="🎬" field="medya" kind="series" />;

export const PersonalCycleWidget = () => {
  const { personalData, setPersonalData } = useApp();
  const cycle = personalData.regl || {};
  const marked = {};
  if (cycle.baslangic) { const start = new Date(cycle.baslangic); for (let i = 0; i < Number(cycle.sure || 5); i++) { const date = new Date(start); date.setDate(start.getDate() + i); marked[date.toISOString().split('T')[0]] = true; } }
  return <div><div className="section-header"><h2>🌙 Regl Takibi</h2></div><p className="widget-yardimci-metin">Başlangıç ve süreyi seç; tahmini dönemi soluk renkle gör. Bu bir tıbbi tahmin değildir.</p><div className="gorev-formu-satir"><CustomDatePicker value={cycle.baslangic || ''} onChange={value => setPersonalData(prev => ({ ...prev, regl: { ...(prev.regl || {}), baslangic: value } }))} placeholder="Başlangıç tarihi" /><input type="number" min="1" max="14" placeholder="Kaç gün?" value={cycle.sure || ''} onChange={e => setPersonalData(prev => ({ ...prev, regl: { ...(prev.regl || {}), sure: e.target.value } }))} /></div><MonthCalendar markedDates={marked} /></div>;
};

const ABONELIKLER = { 'YouTube Premium': { Kişisel: 57.99, Duo: 79.99, Aile: 115.99 }, Spotify: { Kişisel: 59.99, Duo: 79.99, Aile: 99.99 }, 'Apple Music': { Kişisel: 59.99, Aile: 89.99 }, 'Disney+': { Kişisel: 239.99, Aile: 239.99 }, 'Amazon Prime': { Kişisel: 69.90, Aile: 69.90 } };
export const PersonalSubscriptionWidget = () => {
  const { personalData, setPersonalData, simgesi } = useApp();
  const [form, setForm] = useState({ ad: 'Spotify', paket: 'Kişisel', yenileme: '', ozelFiyat: '' });
  const plans = ABONELIKLER[form.ad] || {};
  const add = () => { const fiyat = Number(form.ozelFiyat || plans[form.paket] || 0); if (!form.yenileme) return; setPersonalData(prev => ({ ...prev, abonelikler: [...(prev.abonelikler || []), { id: `sub_${Date.now()}`, ...form, fiyat }] })); };
  const remove = id => setPersonalData(prev => ({ ...prev, abonelikler: (prev.abonelikler || []).filter(item => item.id !== id) }));
  return <div><div className="section-header"><h2>{simgesi('🔁')} Abonelikler</h2></div><div className="abonelik-formu"><select value={form.ad} onChange={e => setForm({ ...form, ad: e.target.value, paket: 'Kişisel' })}>{Object.keys(ABONELIKLER).map(name => <option key={name}>{name}</option>)}</select><select value={form.paket} onChange={e => setForm({ ...form, paket: e.target.value })}>{Object.keys(plans).map(plan => <option key={plan}>{plan}</option>)}</select><input type="number" placeholder={`Fiyat (${plans[form.paket] || 0} TL)`} value={form.ozelFiyat} onChange={e => setForm({ ...form, ozelFiyat: e.target.value })} /><CustomDatePicker value={form.yenileme} onChange={value => setForm({ ...form, yenileme: value })} placeholder="Yenileme tarihi" /><button type="button" className="ders-buyuk-buton" onClick={add}>+ Ekle</button></div><div className="abonelik-listesi">{(personalData.abonelikler || []).map(item => <div className="abonelik-satiri" key={item.id}><div><strong>{item.ad} · {item.paket}</strong><span>{item.fiyat} TL · {item.yenileme} yenileme</span></div><button type="button" className="kisisel-sil-btn" onClick={() => remove(item.id)} aria-label={`${item.ad} aboneliğini sil`}>×</button></div>)}</div></div>;
};

export const PersonalBudgetWidget = () => {
  const { personalData, setPersonalData } = useApp();
  const [form, setForm] = useState({ tip: 'gider', tutar: '', aciklama: '', kategori: 'Genel' });
  const gelir = (personalData.gelirler || []).reduce((sum, item) => sum + Number(item.tutar || 0), 0);
  const gider = (personalData.giderler || []).reduce((sum, item) => sum + Number(item.tutar || 0), 0) + (personalData.abonelikler || []).reduce((sum, item) => sum + Number(item.fiyat || 0), 0);
  const add = () => { if (!form.tutar) return; const field = form.tip === 'gelir' ? 'gelirler' : 'giderler'; setPersonalData(prev => ({ ...prev, [field]: [...(prev[field] || []), { id: `budget_${Date.now()}`, ...form, tarih: today() }] })); setForm({ ...form, tutar: '', aciklama: '' }); };
  const transactions = [...(personalData.gelirler || []).map(item => ({ ...item, hareket: 'Gelir' })), ...(personalData.giderler || []).map(item => ({ ...item, hareket: 'Gider' })), ...(personalData.abonelikler || []).map(item => ({ ...item, hareket: 'Abonelik', aciklama: `${item.ad} (${item.paket})`, tarih: item.yenileme }))].sort((a, b) => String(b.tarih || '').localeCompare(String(a.tarih || '')));
  const removeTransaction = item => setPersonalData(prev => item.hareket === 'Abonelik' ? { ...prev, abonelikler: (prev.abonelikler || []).filter(entry => entry.id !== item.id) } : { ...prev, [item.hareket === 'Gelir' ? 'gelirler' : 'giderler']: (prev[item.hareket === 'Gelir' ? 'gelirler' : 'giderler'] || []).filter(entry => entry.id !== item.id) });
  return <div><div className="section-header"><h2>💰 Aylık Bütçe</h2></div><div className="butce-ozet"><span>Gelir <strong>{gelir.toFixed(2)} TL</strong></span><span>Gider <strong>{gider.toFixed(2)} TL</strong></span><span>Kalan <strong>{(gelir - gider).toFixed(2)} TL</strong></span></div><div className="gorev-formu-satir"><select value={form.tip} onChange={e => setForm({ ...form, tip: e.target.value })}><option value="gelir">Gelir</option><option value="gider">Gider</option></select><input type="number" min="0" placeholder="Tutar" value={form.tutar} onChange={e => setForm({ ...form, tutar: e.target.value })} /><select value={form.kategori} onChange={e => setForm({ ...form, kategori: e.target.value })}>{['Maaş', 'Market', 'Ulaşım', 'Eğitim', 'Fatura', 'Eğlence', 'Genel'].map(item => <option key={item}>{item}</option>)}</select><input placeholder="Neye harcandı?" value={form.aciklama} onChange={e => setForm({ ...form, aciklama: e.target.value })} /><button type="button" className="ders-buyuk-buton" onClick={add}>Ekle</button></div><label className="maas-gunu">Maaş günü <select value={personalData.maasGunu || 1} onChange={e => setPersonalData(prev => ({ ...prev, maasGunu: e.target.value }))}>{Array.from({ length: 31 }, (_, i) => <option key={i + 1} value={i + 1}>{i + 1}. gün</option>)}</select></label><div className="butce-ekstre"><div className="butce-ekstre-baslik"><span>Tarih</span><span>İşlem</span><span>Tutar</span><span /></div>{transactions.length === 0 ? <p className="widget-bos-mesaj">Henüz işlem eklenmedi.</p> : transactions.map(item => <div className="butce-ekstre-satiri" key={item.id}><small>{item.tarih || '-'}</small><span><strong>{item.aciklama || item.kategori || item.hareket}</strong><small>{item.hareket} · {item.kategori || item.paket || 'Otomatik'}</small></span><b className={item.hareket === 'Gelir' ? 'gelir' : 'gider'}>{item.hareket === 'Gelir' ? '+' : '-'}{Number(item.tutar || item.fiyat || 0).toFixed(2)} TL</b><button type="button" className="kisisel-sil-btn" onClick={() => removeTransaction(item)} aria-label="İşlemi sil">×</button></div>)}</div></div>;
};
