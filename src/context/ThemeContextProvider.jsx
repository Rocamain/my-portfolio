import { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(() => {
    const initialTheme = localStorage.getItem('preferredTheme') || 'system';
    return initialTheme === 'dark' ? true : false;
  });

  //  will set on  local storage the preferred theme and setDarkTheme

  const setTheme = (newTheme) => {
    const html = document.documentElement;
    html.dataset.theme = newTheme;
    localStorage.setItem('preferredTheme', newTheme);
    setDarkTheme(newTheme === 'dark');
  };

  // On Mount will check the theme preferences. if the there is a preference on local storage it will be used.
  // If not will e use the default them of the browser.

  useEffect(() => {
    const html = document.documentElement;
    const browserTheme = window.matchMedia('(prefers-color-scheme:dark)')
      .matches
      ? 'dark'
      : 'light';

    const currentTheme = localStorage.getItem('preferredTheme')
      ? localStorage.getItem('preferredTheme')
      : browserTheme;

    setDarkTheme(currentTheme === 'dark');

    html.dataset.theme = currentTheme;
  }, []);

  const changeTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
