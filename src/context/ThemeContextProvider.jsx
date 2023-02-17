import React, { useState, useEffect } from 'react';
import { ThemeContext } from './themeContext';

const setCurrentTheme = (newTheme) => {
  const htmlEl = document.getElementsByTagName('html')[0];
  htmlEl.dataset.theme = newTheme;
  localStorage.setItem('preferredTheme', newTheme);
};

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(null);
  const [isUserChangeTheme, setUserChangeTheme] = useState(false);

  // On Mount will check the theme preferences. if the there is a preference on local storage it will be used.
  // If not will e use the default them of the browser.

  useEffect(() => {
    const htmlEl = document.getElementsByTagName('html')[0];

    const browserTheme = window.matchMedia('(prefers-color-scheme:dark)')
      .matches
      ? 'dark'
      : 'light';

    const currentTheme = localStorage.getItem('preferredTheme')
      ? localStorage.getItem('preferredTheme')
      : browserTheme;

    setDarkTheme(currentTheme === 'dark');
    htmlEl.dataset.theme = currentTheme;
  }, []);

  // EventListener on change on Browser theme, it change chngetheme.

  useEffect(() => {
    const darkModeListener = ({ matches }) => {
      let newTheme = matches ? 'dark' : 'light';
      setCurrentTheme(newTheme);
      if (matches) {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    };

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', darkModeListener);

    return () => {
      setUserChangeTheme(false);
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', darkModeListener);
    };
  });

  useEffect(() => {
    if (isUserChangeTheme) {
      const newTheme = isDarkTheme ? 'dark' : 'light';
      setCurrentTheme(newTheme);
    }
    return () => {
      setUserChangeTheme(false);
    };
  }, [isUserChangeTheme]);
  //  if client choose a theme will be set in local storage by activation the useEffect above.
  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
    setUserChangeTheme(true);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
