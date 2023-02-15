import React, { useState, createContext, useEffect } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const preferredTheme = window.localStorage.getItem('preferredTheme');

    if (preferredTheme) {
      setTheme(preferredTheme);
    } else {
      setTheme('light');
    }
  }, []);

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    window.localStorage.setItem('preferredTheme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <main id="app-root" className={`theme-${theme}`}>
        {children}
      </main>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
