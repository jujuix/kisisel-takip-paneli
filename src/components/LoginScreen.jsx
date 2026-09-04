import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { PAGE_TEMPLATES } from '../constants';
import { getTranslations } from '../i18n';

const STARTER_PAGES = PAGE_TEMPLATES.filter(page => ['ders', 'is', 'spor', 'gunluk'].includes(page.builtinId || page.id));

export const LoginScreen = () => {
  const { signIn, signUp } = useAuth();
  const { simgesi, language, setLanguage } = useApp();
  const t = getTranslations(language).login;
  const [mode, setMode] = useState('giris');
  const [signupStep, setSignupStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [selectedPages, setSelectedPages] = useState(['ders', 'is', 'spor', 'gunluk']);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const switchMode = nextMode => {
    setMode(nextMode);
    setSignupStep(1);
    setError('');
    setInfo('');
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setError('');
    setInfo('');

    if (mode === 'kayit' && signupStep === 1) {
      if (!email.trim()) { setError(t.emailRequired); return; }
      if (password.length < 6) { setError(t.passwordLength); return; }
      setSignupStep(2);
      return;
    }

    setLoading(true);
    if (mode === 'giris') {
      const result = await signIn(email, password);
      if (result.error) setError(result.error.message);
    } else {
      const cleanName = displayName.trim();
      if (!cleanName) setError(t.nameRequired);
      else if (cleanName.length > 30) setError(t.nameLength);
      else if (selectedPages.length === 0) setError(t.pageRequired);
      else {
        const result = await signUp(email, password, cleanName, ['ana', ...selectedPages]);
        if (result.error) setError(result.error.message);
        else if (result.data?.user && !result.data?.session) {
          await supabase.from('profiles').upsert({ id: result.data.user.id, user_name: cleanName }, { onConflict: 'id' });
          setInfo(language === 'en' ? 'Registration successful! Use the link in your email to sign in.' : 'Kayıt başarılı! E-postana gelen bağlantıyla giriş yapabilirsin.');
          setDisplayName('');
          setSignupStep(1);
        }
      }
    }
    setLoading(false);
  };

  const isSignupDetails = mode === 'kayit' && signupStep === 2;
  const showCredentials = mode === 'giris' || signupStep === 1;

  return <div className="login-ekrani">
    <div className="login-kapsayici">
      <section className="login-marka-paneli">
        <div className="login-marka-ust"><span className="login-durum-noktasi" /> {t.workspace}</div>
        <div className="login-yuzen-ikon login-ikon-1">{simgesi('📅')}</div>
        <div className="login-yuzen-ikon login-ikon-2">{simgesi('✅')}</div>
        <div className="login-yuzen-ikon login-ikon-3">{simgesi('📊')}</div>
        <div className="login-mini-paneli" aria-hidden="true">
          <div className="login-mini-baslik"><span>{t.liveFlow}</span><b>● {t.live}</b></div>
          <div className="login-mini-grafik"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="login-mini-alt"><span><strong>12</strong> {t.tasks}</span><span><strong>%84</strong> {t.focus}</span></div>
        </div>
        <div className="login-marka-icerik">
          <div className="login-logo">vion<span>.</span></div>
          <h1>{t.flow}</h1>
          <p>{t.description}</p>
        </div>
      </section>

      <section className="login-form-paneli">
        <div className="login-form-ust">
          <div className="login-form-meta"><span className="login-adim">{mode === 'giris' ? t.return : isSignupDetails ? `2 / 2  •  ${t.chooseAreas.toUpperCase()}` : `1 / 2  •  ${t.register.toUpperCase()}`}</span>{mode === 'giris' && <span className="login-guvenli">{t.secure}</span>}</div>
          {mode === 'kayit' && <div className="login-ilerleme"><span className={signupStep >= 1 ? 'aktif' : ''} /><span className={signupStep >= 2 ? 'aktif' : ''} /></div>}
          <h2>{mode === 'giris' ? t.welcome : isSignupDetails ? t.chooseAreas : t.register}</h2>
          <p>{mode === 'giris' ? t.loginDescription : isSignupDetails ? t.chooseAreasDescription : t.registerDescription}</p>
        </div>

        <form key={`${mode}-${signupStep}`} className="login-form" onSubmit={handleSubmit}>
          {showCredentials && <>
            <label className="login-alan"><span>{t.email}</span><div><span>{simgesi('✉️')}</span><input type="email" placeholder={t.emailPlaceholder} value={email} onChange={event => setEmail(event.target.value)} required /></div></label>
            <label className="login-alan"><span>{t.password}</span><div><span>{simgesi('🔒')}</span><input type={showPassword ? 'text' : 'password'} placeholder={t.passwordPlaceholder} value={password} onChange={event => setPassword(event.target.value)} required minLength={6} /><button type="button" className="login-sifre-goster" onClick={() => setShowPassword(value => !value)} aria-label={t.password}>{simgesi(showPassword ? '🙈' : '👁️')}</button></div></label>
          </>}

          {isSignupDetails && <>
            <label className="login-alan"><span>{t.name}</span><div><span>{simgesi('👋')}</span><input type="text" placeholder={t.namePlaceholder} value={displayName} maxLength={30} onChange={event => setDisplayName(event.target.value.slice(0, 30))} required /></div></label>
            <div className="kayit-sayfa-secimi">
              <div className="kayit-sayfa-baslik"><div><strong>{t.starterPages}</strong><span>{t.panelAuto}</span></div><b>{t.panel} + {selectedPages.length}/4</b></div>
              <div className="kayit-sayfa-secenekleri">{STARTER_PAGES.map(page => { const id = page.builtinId || page.id; return <label key={id} className={`kayit-sayfa-secenegi ${selectedPages.includes(id) ? 'aktif' : ''}`}><input type="checkbox" checked={selectedPages.includes(id)} onChange={() => setSelectedPages(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id])} /><span>{page.ikon}</span><strong>{page.ad}</strong></label>; })}</div>
              <p>{t.pagesLater}</p>
            </div>
          </>}

          {mode === 'giris' && <label className="login-hatirla"><span><input type="checkbox" checked={rememberMe} onChange={event => setRememberMe(event.target.checked)} /> {t.remember}</span><button type="button">{t.forgot}</button></label>}
          {error && <div className="login-mesaj hata">{error}</div>}
          {info && <div className="login-mesaj bilgi">{info}</div>}
          <button className="login-ana-buton" type="submit" disabled={loading}>{loading ? t.wait : mode === 'giris' ? t.login : isSignupDetails ? t.createAccount : t.continue}</button>
        </form>

        <div className="login-degisir"><span>{mode === 'giris' ? t.noAccount : t.hasAccount}</span><button type="button" onClick={() => switchMode(mode === 'giris' ? 'kayit' : 'giris')}>{mode === 'giris' ? t.signUp : t.signIn}</button></div>
        <label className="login-dil-secici"><span>Language / Dil</span><select value={language} onChange={event => setLanguage(event.target.value)}><option value="tr">Türkçe</option><option value="en">English</option></select></label>
      </section>
    </div>
  </div>;
};
