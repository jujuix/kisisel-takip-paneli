import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export const LoginScreen = () => {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState('giris'); // giris | kayit
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      const { data, error } = await signUp(email, password);
      if (error) {
        setError(error.message);
      } else if (data?.user && !data?.session) {
        setInfo('Kayıt başarılı! E-postana gelen bağlantıya tıklayıp giriş yapabilirsin.');
      }
    }

    setLoading(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--renk-arkaplan)' }}>
      <form onSubmit={handleSubmit} style={{ width: '320px', padding: '24px', background: 'var(--renk-yuzey)', borderRadius: '12px', border: '1px solid var(--renk-kenarlik)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2 style={{ margin: '0 0 8px 0', textAlign: 'center' }}>
          {mode === 'giris' ? 'Giriş Yap' : 'Kayıt Ol'}
        </h2>

        <input
          type="email"
          placeholder="E-posta"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--renk-kenarlik)', background: 'transparent', color: 'var(--renk-metin)', outline: 'none' }}
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
          style={{ padding: '10px', borderRadius: '8px', border: '1px solid var(--renk-kenarlik)', background: 'transparent', color: 'var(--renk-metin)', outline: 'none' }}
        />

        {error && <div style={{ color: '#ff6961', fontSize: '13px' }}>{error}</div>}
        {info && <div style={{ color: 'var(--renk-vurgu)', fontSize: '13px' }}>{info}</div>}

        <button
          type="submit"
          disabled={loading}
          style={{ padding: '10px', borderRadius: '8px', border: 'none', background: 'var(--renk-vurgu)', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
        >
          {loading ? 'Bekleyin...' : mode === 'giris' ? 'Giriş Yap' : 'Kayıt Ol'}
        </button>

        <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--renk-metin-ikincil)' }}>
          {mode === 'giris' ? (
            <>Hesabın yok mu? <span onClick={() => setMode('kayit')} style={{ color: 'var(--renk-vurgu)', cursor: 'pointer' }}>Kayıt ol</span></>
          ) : (
            <>Zaten hesabın var mı? <span onClick={() => setMode('giris')} style={{ color: 'var(--renk-vurgu)', cursor: 'pointer' }}>Giriş yap</span></>
          )}
        </div>
      </form>
    </div>
  );
};