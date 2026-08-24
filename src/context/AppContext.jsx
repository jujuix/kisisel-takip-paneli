import React, { createContext, useContext, useState, useEffect } from 'react';
import { createCurriculum, VEKTOR_IKONLAR, ALL_WIDGETS, SINAV_MUFREDATLARI } from '../constants';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('tema') || 'acik');
  const [accentColor, setAccentColor] = useState(() => localStorage.getItem('renkTemasi') || '#10b981');
  const [iconStyle, setIconStyle] = useState(() => localStorage.getItem('panelIkonStili') || 'emoji');
  
  const [userName, setUserName] = useState(() => localStorage.getItem('panelAdi_v1') || 'Kişisel Panel');
  const [userAvatar, setUserAvatar] = useState(() => {
    try { return JSON.parse(localStorage.getItem('panelAvatar_v1')); } catch(e) { return null; }
  });

  const [activePage, setActivePage] = useState('ana');
  const [activeDersTab, setActiveDersTab] = useState('ders_genel');
  const [isEditMode, setIsEditMode] = useState(false);

  // Evrensel Dialog State
  const [dialogModal, setDialogModal] = useState({
    isOpen: false,
    type: 'confirm',
    title: 'Uyarı',
    message: '',
    inputValue: '',
    confirmText: 'Tamam',
    cancelText: 'Vazgeç',
    isDanger: false,
    onConfirm: () => {}
  });

  const showConfirm = ({ title = 'Uyarı', message, confirmText = 'Tamam', cancelText = 'Vazgeç', isDanger = false, onConfirm }) => {
    setDialogModal({
      isOpen: true,
      type: 'confirm',
      title,
      message,
      confirmText,
      cancelText,
      isDanger,
      onConfirm: () => {
        if (onConfirm) onConfirm();
        setDialogModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const showPrompt = ({ title = 'Giriş', message, defaultValue = '', confirmText = 'Kaydet', onConfirm }) => {
    setDialogModal({
      isOpen: true,
      type: 'prompt',
      title,
      message,
      inputValue: defaultValue,
      confirmText,
      cancelText: 'Vazgeç',
      isDanger: false,
      onConfirm: (val) => {
        if (onConfirm) onConfirm(val);
        setDialogModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  const closeDialog = () => setDialogModal(prev => ({ ...prev, isOpen: false }));

  // Dinamik Sekmeler
  const defaultTabs = {
    ana: [{ id: "ana", ad: "Genel Panel", ikon: "🏠", ozelMi: false }],
    is: [{ id: "is", ad: "Genel Bakış", ikon: "💼", ozelMi: false }],
    ders: [
      { id: "ders_genel", ad: "Genel Bakış", ikon: "📊", ozelMi: false },
      { id: "ders_konular", ad: "Konular", ikon: "📖", ozelMi: false },
      { id: "ders_denemeler", ad: "Denemeler", ikon: "📝", ozelMi: false },
      { id: "ders_yanlislar", ad: "Yanlışlarım", ikon: "❌", ozelMi: false },
      { id: "ders_takip", ad: "Çalışma Takibi", ikon: "🔥", ozelMi: false }
    ]
  };

  const [tabs, setTabs] = useState(() => {
    try {
      const s = localStorage.getItem('dinamikSekmeler_v2');
      return s ? JSON.parse(s) : defaultTabs;
    } catch(e) {
      return defaultTabs;
    }
  });

  const [activeTabByPage, setActiveTabByPage] = useState({
    ana: "ana",
    is: "is",
    ders: "ders_genel"
  });

  // Orijinal Dosyalardaki Varsayılan Sekme Widget Düzenleri (İlk Açılışta Dolu Gelir)
  const defaultWidgets = {
    ana: [
      { id: "gunluk-ozet", genislik: 4, gorunur: true },
      { id: "gorevler", genislik: 2, gorunur: true },
      { id: "takvim", genislik: 2, gorunur: true },
      { id: "not-defteri", genislik: 2, gorunur: true },
      { id: "pomodoro", genislik: 2, gorunur: true }
    ],
    ders_genel: [
      { id: "ders-zayif-konular", genislik: 4, gorunur: true },
      { id: "ders-calisma-plani", genislik: 2, gorunur: true },
      { id: "ders-ilerleme", genislik: 2, gorunur: true },
      { id: "ders-net-grafik", genislik: 2, gorunur: true },
      { id: "gunluk-ozet", genislik: 2, gorunur: true }
    ],
    is: [
      { id: "is-zaman", genislik: 4, gorunur: true },
      { id: "gorevler", genislik: 2, gorunur: true },
      { id: "takvim", genislik: 2, gorunur: true },
      { id: "is-fikirler", genislik: 2, gorunur: true },
      { id: "is-hizli-not", genislik: 2, gorunur: true }
    ],
    ders_konular: [
      { id: "konular-panel", genislik: 4, gorunur: true }
    ],
    ders_denemeler: [
      { id: "deneme-ekle", genislik: 2, gorunur: true },
      { id: "deneme-gecmisi", genislik: 2, gorunur: true }
    ],
    ders_yanlislar: [
      { id: "yanlis-ekle", genislik: 2, gorunur: true },
      { id: "yanlis-analiz", genislik: 2, gorunur: true },
      { id: "yanlis-arsiv", genislik: 4, gorunur: true }
    ],
    ders_takip: [
      { id: "takip-takvim", genislik: 2, gorunur: true },
      { id: "takip-hedefler", genislik: 4, gorunur: true }
    ]
  };

  const [widgetLayouts, setWidgetLayouts] = useState(() => {
    try {
      const s = localStorage.getItem('widgetDuzenleri_v5');
      return s ? JSON.parse(s) : defaultWidgets;
    } catch(e) {
      return defaultWidgets;
    }
  });

  // Merkezi Görevler ve Kategoriler
  const defaultCategories = [
    { id: "kat_is", ad: "İş", ikon: "💼", baglanti: "is", anaSayfadaGoster: true },
    { id: "kat_ders", ad: "Ders", ikon: "📚", baglanti: "ders", anaSayfadaGoster: true },
    { id: "kat_kisisel", ad: "Kişisel", ikon: "🎯", baglanti: "bagimsiz", anaSayfadaGoster: true }
  ];

  const [categories, setCategories] = useState(() => {
    try {
      const s = localStorage.getItem('merkeziKategoriler_v1');
      return s ? JSON.parse(s) : defaultCategories;
    } catch(e) {
      return defaultCategories;
    }
  });

  const [tasks, setTasks] = useState(() => {
    try {
      const s = localStorage.getItem('merkeziGorevler_v1');
      return s ? JSON.parse(s) : [];
    } catch(e) {
      return [];
    }
  });

  const [panelData, setPanelData] = useState(() => {
    try {
      const s = localStorage.getItem('panelVerisi');
      return s ? JSON.parse(s) : { takvimNotlari: {}, notKagidi: "" };
    } catch(e) {
      return { takvimNotlari: {}, notKagidi: "" };
    }
  });

  const [dersData, setDersData] = useState(() => {
    try {
      const s = localStorage.getItem('dersPaneliVerisi');
      return s ? JSON.parse(s) : {
        sinavTuru: "kpss_ortaogretim",
        sinavTarihi: SINAV_MUFREDATLARI.kpss_ortaogretim.varsayilanTarih,
        dersler: createCurriculum("kpss_ortaogretim"),
        denemeler: [],
        yanlislar: [],
        calismaGunleri: {},
        hedefler: [],
        calismaPlani: []
      };
    } catch(e) {
      return {
        sinavTuru: "kpss_ortaogretim",
        sinavTarihi: "2026-10-04",
        dersler: createCurriculum("kpss_ortaogretim"),
        denemeler: [],
        yanlislar: [],
        calismaGunleri: {},
        hedefler: [],
        calismaPlani: []
      };
    }
  });

  const [isData, setIsData] = useState(() => {
    try {
      const s = localStorage.getItem('isPaneliVerisi');
      return s ? JSON.parse(s) : { projeler: [], fikirler: "", hizliNotlar: [] };
    } catch(e) {
      return { projeler: [], fikirler: "", hizliNotlar: [] };
    }
  });

  useEffect(() => { localStorage.setItem('tema', theme); document.body.classList.toggle('koyu-tema', theme === 'koyu'); }, [theme]);
  useEffect(() => {
    localStorage.setItem('renkTemasi', accentColor);
    document.body.style.setProperty('--renk-vurgu', accentColor);
    document.body.style.setProperty('--renk-vurgu-hover', `color-mix(in srgb, ${accentColor} 82%, black)`);
    document.body.style.setProperty('--renk-vurgu-halka', `color-mix(in srgb, ${accentColor} 15%, transparent)`);
    document.body.style.setProperty('--renk-vurgu-yuzey', `color-mix(in srgb, ${accentColor} 12%, ${theme === 'koyu' ? 'transparent' : 'white'})`);
  }, [accentColor, theme]);

  useEffect(() => { localStorage.setItem('panelIkonStili', iconStyle); }, [iconStyle]);
  useEffect(() => { localStorage.setItem('panelAdi_v1', userName); }, [userName]);
  useEffect(() => { localStorage.setItem('panelAvatar_v1', JSON.stringify(userAvatar)); }, [userAvatar]);
  useEffect(() => { localStorage.setItem('dinamikSekmeler_v2', JSON.stringify(tabs)); }, [tabs]);
  useEffect(() => { localStorage.setItem('widgetDuzenleri_v5', JSON.stringify(widgetLayouts)); }, [widgetLayouts]);
  useEffect(() => { localStorage.setItem('merkeziKategoriler_v1', JSON.stringify(categories)); }, [categories]);
  useEffect(() => { localStorage.setItem('merkeziGorevler_v1', JSON.stringify(tasks)); }, [tasks]);
  useEffect(() => { localStorage.setItem('panelVerisi', JSON.stringify(panelData)); }, [panelData]);
  useEffect(() => { localStorage.setItem('dersPaneliVerisi', JSON.stringify(dersData)); }, [dersData]);
  useEffect(() => { localStorage.setItem('isPaneliVerisi', JSON.stringify(isData)); }, [isData]);

  const simgesi = (emoji) => {
    if (iconStyle === "svg" && VEKTOR_IKONLAR[emoji]) {
      return <span className="vektor-ikon-kutusu" dangerouslySetInnerHTML={{ __html: VEKTOR_IKONLAR[emoji] }} />;
    }
    return emoji;
  };

  const toggleTheme = () => setTheme(prev => prev === 'koyu' ? 'acik' : 'koyu');

  const changeExamType = (examCode) => {
    const examInfo = SINAV_MUFREDATLARI[examCode];
    if (!examInfo) return;

    showConfirm({
      title: "Sınav Değiştir",
      message: `Hedef sınavını "${examInfo.ad}" olarak değiştirmek istediğine emin misin? Sınav tarihi otomatik olarak "${examInfo.varsayilanTarih}" olarak ayarlanacak ve ders müfredatın güncellenecektir.`,
      confirmText: "Evet, Değiştir",
      onConfirm: () => {
        setDersData(prev => ({
          ...prev,
          sinavTuru: examCode,
          sinavTarihi: examInfo.varsayilanTarih,
          dersler: createCurriculum(examCode)
        }));
      }
    });
  };

  // Yeni Sekme Ekle (Yalnızca Yeni Açılan Özel Sekmeler Boş Başlar)
  const addTab = (sayfaTuru, tabName) => {
    const newId = `${sayfaTuru}_ozel_${Date.now()}`;
    const newTab = { id: newId, ad: tabName, ikon: "📌", ozelMi: true };
    setTabs(prev => ({ ...prev, [sayfaTuru]: [...(prev?.[sayfaTuru] || []), newTab] }));
    setActiveTabByPage(prev => ({ ...prev, [sayfaTuru]: newId }));
    setWidgetLayouts(prev => ({ ...prev, [newId]: [] }));
  };

  const deleteTab = (sayfaTuru, tabId) => {
    setTabs(prev => ({ ...prev, [sayfaTuru]: (prev?.[sayfaTuru] || []).filter(t => t.id !== tabId) }));
    setActiveTabByPage(prev => ({ ...prev, [sayfaTuru]: defaultTabs[sayfaTuru][0].id }));
  };

  const updateWidgetWidth = (panelId, widgetId, genislik) => {
    setWidgetLayouts(prev => ({
      ...prev,
      [panelId]: (prev?.[panelId] || []).map(w => w.id === widgetId ? { ...w, genislik } : w)
    }));
  };

  const toggleWidgetVisibility = (panelId, widgetId) => {
    setWidgetLayouts(prev => {
      const currentList = prev?.[panelId] || [];
      const exists = currentList.some(w => w.id === widgetId);
      if (!exists) {
        const base = ALL_WIDGETS.find(w => w.id === widgetId) || { id: widgetId, varsayilanGenislik: 2 };
        return { ...prev, [panelId]: [...currentList, { id: widgetId, genislik: base.varsayilanGenislik, gorunur: true }] };
      }
      return {
        ...prev,
        [panelId]: currentList.map(w => w.id === widgetId ? { ...w, gorunur: !w.gorunur } : w)
      };
    });
  };

  const reorderWidgets = (panelId, startIndex, endIndex) => {
    setWidgetLayouts(prev => {
      const list = [...(prev?.[panelId] || [])];
      const [removed] = list.splice(startIndex, 1);
      list.splice(endIndex, 0, removed);
      return { ...prev, [panelId]: list };
    });
  };

  const resetWidgets = (panelId) => {
    setWidgetLayouts(prev => ({
      ...prev,
      [panelId]: defaultWidgets[panelId] || []
    }));
  };

  const addCategory = ({ name, icon = "📁", baglanti = "bagimsiz", anaSayfadaGoster = true }) => {
    const newCat = { id: "kat_" + Date.now(), ad: name.trim(), ikon: icon, baglanti, anaSayfadaGoster };
    setCategories(prev => [...(prev || []), newCat]);
    return newCat.id;
  };

  const deleteCategory = (catId) => {
    setCategories(prev => (prev || []).filter(c => c.id !== catId));
    setTasks(prev => (prev || []).filter(t => t.kategoriId !== catId));
  };

  const addTask = ({ kategoriId, metin, aciliyet = "orta", baglanti = "bagimsiz", anaSayfadaGoster = true }) => {
    if (!metin.trim()) return;
    const newTask = {
      id: "g_" + Date.now() + "_" + Math.random().toString(36).substring(2, 5),
      kategoriId,
      metin: metin.trim(),
      aciliyet,
      baglanti,
      anaSayfadaGoster,
      tamamlandi: false,
      olusturmaTarihi: new Date().toISOString().split('T')[0]
    };
    setTasks(prev => [newTask, ...(prev || [])]);
  };

  const toggleTask = (taskId) => {
    setTasks(prev => (prev || []).map(t => {
      if (t.id === taskId) {
        const isNowCompleted = !t.tamamlandi;
        return { 
          ...t, 
          tamamlandi: isNowCompleted,
          // Senkronizasyon sihri burada:
          status: isNowCompleted ? 'bitti' : (t.status === 'bitti' ? 'bekliyor' : t.status)
        };
      }
      return t;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(prev => (prev || []).filter(t => t.id !== taskId));
  };

  const toggleTaskHomeVisibility = (taskId) => {
    setTasks(prev => (prev || []).map(t => t.id === taskId ? { ...t, anaSayfadaGoster: !t.anaSayfadaGoster } : t));
  };

  const updateTask = (id, updatedFields) => {
    setTasks(prev => prev.map(t => 
      t.id === id ? { ...t, ...updatedFields } : t
    ));
  };

  return (
    <AppContext.Provider value={{
      updateTask,
      theme, toggleTheme,
      accentColor, setAccentColor,
      iconStyle, setIconStyle, simgesi,
      userName, setUserName,
      userAvatar, setUserAvatar,
      activePage, setActivePage,
      activeDersTab, setActiveDersTab,
      tabs: tabs || defaultTabs, setTabs,
      activeTabByPage: activeTabByPage || { ana: "ana", is: "is", ders: "ders_genel" }, setActiveTabByPage, addTab, deleteTab,
      widgetLayouts: widgetLayouts || defaultWidgets, isEditMode, setIsEditMode,
      updateWidgetWidth, toggleWidgetVisibility, reorderWidgets, resetWidgets,
      categories: categories || defaultCategories, setCategories, addCategory, deleteCategory,
      tasks: tasks || [], setTasks, addTask, toggleTask, deleteTask, toggleTaskHomeVisibility,
      panelData: panelData || { takvimNotlari: {}, notKagidi: "" }, setPanelData,
      dersData: dersData || { dersler: [], denemeler: [], yanlislar: [], hedefler: [], calismaPlani: [] }, setDersData,
      isData: isData || { projeler: [], fikirler: "", hizliNotlar: [] }, setIsData,
      changeExamType,
      dialogModal, setDialogModal, showConfirm, showPrompt, closeDialog
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);