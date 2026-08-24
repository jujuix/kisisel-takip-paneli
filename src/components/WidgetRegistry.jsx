// --- DASHBOARD KLASÖRÜNDEKİ WIDGET'LAR ---
import { CalendarView } from './dashboard/CalendarView';
import { DailySummary } from './dashboard/DailySummary';
import { HabitMonthlyWidget } from './dashboard/HabitMonthlyWidget';
import { HabitWeeklyWidget } from './dashboard/HabitWeeklyWidget';
import { Notebook } from './dashboard/Notebook';
import { Pomodoro } from './dashboard/Pomodoro';
import { TaskCategoryCard } from './dashboard/TaskCategoryCard';
import { WorkTimelineWidget } from './dashboard/WorkTimelineWidget';

// --- WORK KLASÖRÜNDEKİ WIDGET'LAR ---
import { BugunOdakWidget } from './work/BugunOdakWidget';
import { HizliBaglantilarWidget } from './work/HizliBaglantilarWidget';
import { ProjeFikirleriWidget } from './work/ProjeFikirleriWidget';
import { WorkKanbanWidget } from './work/WorkKanbanWidget';
import { YoutubeKursWidget } from './dashboard/YoutubeKursWidget';

// SİSTEMDEKİ TÜM WIDGET'LARIN BAĞLANTI HARİTASI
export const WIDGET_COMPONENTS = {
  "gunluk-ozet": DailySummary,
  "pomodoro": Pomodoro,
  "not-defteri": Notebook,
  "takvim": CalendarView,
  "gorevler": TaskCategoryCard,
  "aliskanlik-haftalik": HabitWeeklyWidget,
  "aliskanlik-aylik": HabitMonthlyWidget,
  "is-zaman": WorkTimelineWidget,
  "is-kanban": WorkKanbanWidget,
  "bugun-odak": BugunOdakWidget,
  "proje-fikirleri": ProjeFikirleriWidget,
  "hizli-baglantilar": HizliBaglantilarWidget,
  "youtube-kurs": YoutubeKursWidget,
};