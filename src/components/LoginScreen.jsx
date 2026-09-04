import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';
import { PAGE_TEMPLATES } from '../constants';

const STARTER_PAGES = PAGE_TEMPLATES.filter(page => ['ders', 'is', 'spor', 'gunluk'].includes(page.builtinId || page.id));

export const LoginScreen = () => {
  const { signIn, signUp } = useAuth();
  const { simgesi } = useApp();
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
      if (!email.trim()) { setError('E-posta adresini yazmalısın.'); return; }
      if (password.length < 6) { setError('Şifre en az 6 karakter olmalı.'); return; }
      setSignupStep(2);
      return;
    }

    setLoading(true);
    if (mode === 'giris') {
      const result = await signIn(email, password);
      if (result.error) setError(result.error.message);
    } else {
      const cleanName = displayName.trim();
      if (!cleanName) setError('İsim yazmak zorunlu.');
      else if (cleanName.length > 30) setError('İsim en fazla 30 karakter olabilir.');
      else if (selectedPages.length === 0) setError('En az bir sayfa seçmelisin.');
      else {
        const result = await signUp(email, password, cleanName, ['ana', ...selectedPages]);
        if (result.error) setError(result.error.message);
        else if (result.data?.user && !result.data?.session) {
          await supabase.from('profiles').upsert({ id: result.data.user.id, user_name: cleanName }, { onConflict: 'id' });
          setInfo('Kayıt başarılı! E-postana gelen bağlantıyla giriş yapabilirsin.');
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
        <div className="login-marka-ust"><span className="login-durum-noktasi" /> Kişisel çalışma alanın</div>
        <div className="login-yuzen-ikon login-ikon-1">{simgesi('📅')}</div>
        <div className="login-yuzen-ikon login-ikon-2">{simgesi('✅')}</div>
        <div className="login-yuzen-ikon login-ikon-3">{simgesi('📊')}</div>
        <div className="login-mini-paneli" aria-hidden="true">
          <div className="login-mini-baslik"><span>Bugünkü akış</span><b>● Canlı</b></div>
          <div className="login-mini-grafik"><i /><i /><i /><i /><i /><i /><i /></div>
          <div className="login-mini-alt"><span><strong>12</strong> görev</span><span><strong>%84</strong> odak</span></div>
        </div>
        <div className="login-marka-icerik">
          <div className="login-logo">vion<span>.</span></div>
          <h1>Planla. Odaklan. <span>İlerle.</span></h1>
          <p>İşlerini, derslerini ve günlük planını tek yerde yönet.</p>
        </div>
      </section>

      <section className="login-form-paneli">
        <div className="login-form-ust">
          <div className="login-form-meta"><span className="login-adim">{mode === 'giris' ? 'HESABINA DÖN' : isSignupDetails ? '2 / 2  •  SANA ÖZEL BAŞLANGIÇ' : '1 / 2  •  HESAP OLUŞTUR'}</span>{mode === 'giris' && <span className="login-guvenli">● Güvenli giriş</span>}</div>
          {mode === 'kayit' && <div className="login-ilerleme"><span className={signupStep >= 1 ? 'aktif' : ''} /><span className={signupStep >= 2 ? 'aktif' : ''} /></div>}
          <h2>{mode === 'giris' ? 'Hoş geldin! 👋' : isSignupDetails ? 'Alanını seç.' : 'Aramıza katıl! 🚀'}</h2>
          <p>{mode === 'giris' ? 'vion hesabına giriş yap.' : isSignupDetails ? 'Panelini kullanmak istediğin alanlarla başlat.' : 'Önce giriş bilgilerini belirleyelim.'}</p>
        </div>

        <form key={`${mode}-${signupStep}`} className="login-form" onSubmit={handleSubmit}>
          {showCredentials && <>
            <label className="login-alan"><span>E-posta</span><div><span>{simgesi('✉️')}</span><input type="email" placeholder="E-posta adresiniz" value={email} onChange={event => setEmail(event.target.value)} required /></div></label>
            <label className="login-alan"><span>Şifre</span><div><span>{simgesi('🔒')}</span><input type={showPassword ? 'text' : 'password'} placeholder="En az 6 karakter" value={password} onChange={event => setPassword(event.target.value)} required minLength={6} /><button type="button" className="login-sifre-goster" onClick={() => setShowPassword(value => !value)} aria-label="Şifreyi göster veya gizle">{showPassword ? '🙈' : '👁️'}</button></div></label>
          </>}

          {isSignupDetails && <>
            <label className="login-alan"><span>İsmin</span><div><span>{simgesi('👋')}</span><input type="text" placeholder="Sana nasıl hitap edelim?" value={displayName} maxLength={30} onChange={event => setDisplayName(event.target.value.slice(0, 30))} required /></div></label>
            <div className="kayit-sayfa-secimi">
              <div className="kayit-sayfa-baslik"><div><strong>Başlangıç sayfaların</strong><span>Panel otomatik gelir.</span></div><b>Panel + {selectedPages.length}/4</b></div>
              <div className="kayit-sayfa-secenekleri">{STARTER_PAGES.map(page => { const id = page.builtinId || page.id; return <label key={id} className={`kayit-sayfa-secenegi ${selectedPages.includes(id) ? 'aktif' : ''}`}><input type="checkbox" checked={selectedPages.includes(id)} onChange={() => setSelectedPages(previous => previous.includes(id) ? previous.filter(item => item !== id) : [...previous, id])} /><span>{page.ikon}</span><strong>{page.ad}</strong></label>; })}</div>
              <p>Sayfaları daha sonra Ayarlar bölümünden ekleyebilir veya kaldırabilirsin.</p>
            </div>
          </>}

          {mode === 'giris' && <label className="login-hatirla"><span><input type="checkbox" checked={rememberMe} onChange={event => setRememberMe(event.target.checked)} /> Beni hatırla</span><button type="button">Şifremi unuttum?</button></label>}
          {error && <div className="login-mesaj hata">{error}</div>}
          {info && <div className="login-mesaj bilgi">{info}</div>}
          <button className="login-ana-buton" type="submit" disabled={loading}>{loading ? 'Bekleyin...' : mode === 'giris' ? 'Giriş Yap' : isSignupDetails ? 'Hesabımı Oluştur' : 'Devam Et'}</button>
        </form>

        <div className="login-degisir"><span>{mode === 'giris' ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}</span><button type="button" onClick={() => switchMode(mode === 'giris' ? 'kayit' : 'giris')}>{mode === 'giris' ? 'Kayıt ol' : 'Giriş yap'}</button></div>
      </section>
    </div>
  </div>;
};
