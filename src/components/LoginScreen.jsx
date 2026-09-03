import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export const LoginScreen = () => {
  const { signIn, signUp } = useAuth();
  const { simgesi } = useApp();
  const [mode, setMode] = useState('giris'); // giris | kayit
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setInfo('');
    setLoading(true);

    if (mode === 'giris') {
      const { error } = await signIn(email, password);
      if (error) setError(error.message);
    } else {
      const cleanName = displayName.trim();
      if (!cleanName) {
        setError('İsim yazmak zorunlu.');
        setLoading(false);
        return;
      }
      if (cleanName.length > 30) {
        setError('İsim en fazla 30 karakter olabilir.');
        setLoading(false);
        return;
      }
      const { data, error } = await signUp(email, password, cleanName);
      if (error) {
        setError(error.message);
      } else if (data?.user && !data?.session) {
        try {
          await supabase.from('profiles').upsert({
            id: data.user.id,
            user_name: cleanName
          }, { onConflict: 'id' });
        } catch (profileError) {
          console.error('Profil kaydı oluşturulamadı:', profileError);
        }
        setInfo('Kayıt başarılı! E-postana gelen bağlantıya tıklayıp giriş yapabilirsin.');
        setDisplayName('');
      }
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--renk-arkaplan)',
      padding: '24px'
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        maxWidth: '980px',
        minHeight: '540px',
        borderRadius: '28px',
        overflow: 'hidden',
        boxShadow: '0 30px 70px rgba(0,0,0,0.15)',
        background: 'var(--renk-yuzey)'
      }}>
        {/* SOL PANEL - Marka */}
        <div style={{
          flex: '0 0 46%',
          position: 'relative',
          background: 'var(--renk-arkaplan)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '56px',
          overflow: 'hidden',
          backgroundImage: 'radial-gradient(var(--renk-kenarlik) 1px, transparent 1px)',
          backgroundSize: '18px 18px'
        }}>
          {/* Dekoratif noktalar */}
          <div style={{ position: 'absolute', top: '60px', left: '40px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--renk-vurgu)', opacity: 0.4 }} />
          <div style={{ position: 'absolute', bottom: '90px', right: '70px', width: '10px', height: '10px', borderRadius: '50%', background: 'var(--renk-vurgu)', opacity: 0.3 }} />

          {/* Yüzen ikon kartları */}
          <div style={{
            position: 'absolute', top: '70px', right: '80px',
            width: '54px', height: '54px', borderRadius: '14px',
            background: 'var(--renk-yuzey)', boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px'
          }}>
            {simgesi("📅")}
          </div>
          <div style={{
            position: 'absolute', top: '20px', left: '130px',
            width: '54px', height: '54px', borderRadius: '14px',
            background: 'var(--renk-yuzey)', boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px'
          }}>
            {simgesi("✅")}
          </div>
          <div style={{
            position: 'absolute', bottom: '110px', right: '30px',
            width: '54px', height: '54px', borderRadius: '14px',
            background: 'var(--renk-yuzey)', boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px'
          }}>
            {simgesi("📊")}
          </div>

          <div style={{ position: 'relative', marginTop: '60px' }}>
            <div style={{
              fontSize: '48px', fontWeight: '800', letterSpacing: '-1px',
              color: 'var(--renk-metin)', marginBottom: '18px',
              display: 'flex', alignItems: 'flex-end'
            }}>
              vion
              <span style={{ color: 'var(--renk-vurgu)' }}>.</span>
            </div>

            <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: '700', color: 'var(--renk-metin)' }}>
              Planla. Odaklan. <span style={{ color: 'var(--renk-vurgu)' }}>İlerle.</span>
            </h3>

            <p style={{ margin: 0, fontSize: '14px', color: 'var(--renk-metin-ikincil)', lineHeight: 1.6, maxWidth: '280px' }}>
              İşlerini, derslerini ve günlük planını tek yerde yönet.
            </p>
          </div>
        </div>

        {/* SAĞ PANEL - Form */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '56px 60px',
          background: 'var(--renk-yuzey)'
        }}>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', fontWeight: '800', color: 'var(--renk-metin)' }}>
            {mode === 'giris' ? 'Hoş geldin! 👋' : 'Aramıza katıl! 🚀'}
          </h2>
          <p style={{ margin: '0 0 28px 0', fontSize: '13.5px', color: 'var(--renk-metin-ikincil)' }}>
            {mode === 'giris' ? (
              <>vion<span style={{ color: 'var(--renk-vurgu)' }}>.</span> hesabına giriş yap</>
            ) : (
              <>vion<span style={{ color: 'var(--renk-vurgu)' }}>.</span> hesabı oluştur</>
            )}
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {mode === 'kayit' && (
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'var(--renk-metin)', marginBottom: '6px' }}>
                  İsim
                </label>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  border: '1px solid var(--renk-kenarlik)', borderRadius: '10px',
                  padding: '11px 14px', background: 'var(--renk-arkaplan)'
                }}>
                  <input
                    type="text"
                    placeholder="İsminiz"
                    value={displayName}
                    maxLength={30}
                    onChange={e => setDisplayName(e.target.value.slice(0, 30))}
                    required
                    style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: 'var(--renk-metin)', fontSize: '13.5px' }}
                  />
                </div>
              </div>
            )}

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'var(--renk-metin)', marginBottom: '6px' }}>
                E-posta
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                border: '1px solid var(--renk-kenarlik)', borderRadius: '10px',
                padding: '11px 14px', background: 'var(--renk-arkaplan)'
              }}>
                <span style={{ opacity: 0.5, fontSize: '14px' }}>{simgesi("✉️")}</span>
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: 'var(--renk-metin)', fontSize: '13.5px' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12.5px', fontWeight: '600', color: 'var(--renk-metin)', marginBottom: '6px' }}>
                Şifre
              </label>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                border: '1px solid var(--renk-kenarlik)', borderRadius: '10px',
                padding: '11px 14px', background: 'var(--renk-arkaplan)'
              }}>
                <span style={{ opacity: 0.5, fontSize: '14px' }}>{simgesi("🔒")}</span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Şifreniz"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                  style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: 'var(--renk-metin)', fontSize: '13.5px' }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer', opacity: 0.5, fontSize: '14px' }}
                  title={showPassword ? 'Gizle' : 'Göster'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </span>
              </div>
            </div>

            {mode === 'giris' && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12.5px', color: 'var(--renk-metin-ikincil)', cursor: 'pointer' }}>
                  <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
                  Beni hatırla
                </label>
                <span style={{ fontSize: '12.5px', color: 'var(--renk-vurgu)', fontWeight: '600', cursor: 'pointer' }}>
                  Şifremi unuttum?
                </span>
              </div>
            )}

            {error && <div style={{ color: '#ff6961', fontSize: '12.5px' }}>{error}</div>}
            {info && <div style={{ color: 'var(--renk-vurgu)', fontSize: '12.5px' }}>{info}</div>}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '13px', borderRadius: '10px', border: 'none',
                background: 'var(--renk-vurgu)', color: '#fff',
                fontWeight: '700', fontSize: '14px', cursor: 'pointer',
                boxShadow: '0 8px 20px var(--renk-vurgu-halka)',
                marginTop: '4px'
              }}
            >
              {loading ? 'Bekleyin...' : mode === 'giris' ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </form>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '22px 0' }}>
            <div style={{ flex: 1, height: '1px', background: 'var(--renk-kenarlik)' }} />
            <span style={{ fontSize: '12px', color: 'var(--renk-metin-ikincil)' }}>veya</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--renk-kenarlik)' }} />
          </div>

          <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--renk-metin-ikincil)' }}>
            {mode === 'giris' ? (
              <>Hesabın yok mu? <span onClick={() => setMode('kayit')} style={{ color: 'var(--renk-vurgu)', fontWeight: '700', cursor: 'pointer' }}>Kayıt ol</span></>
            ) : (
              <>Zaten hesabın var mı? <span onClick={() => setMode('giris')} style={{ color: 'var(--renk-vurgu)', fontWeight: '700', cursor: 'pointer' }}>Giriş yap</span></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};