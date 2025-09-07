import { useState, useEffect } from 'react';

const ADMIN_PASSWORD_HASH = 'a5a4c61d1c0b8b4d3a3c3d5e4f0b6e9d0a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isAdmin') === 'true';
  });

  const login = async (password) => {
    try {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hash = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hash));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      if (hashHex === ADMIN_PASSWORD_HASH) {
        localStorage.setItem('isAdmin', 'true');
        setIsLoggedIn(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('isAdmin');
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};