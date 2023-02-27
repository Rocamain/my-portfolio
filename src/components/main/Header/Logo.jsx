import { ThemeContext } from '../../../context/themeContext';
import { useContext } from 'react';

export default function Logo() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div className="flex__a_center gap-1 flex_grow">
      <div>
        <button onClick={() => window.scrollTo(0, 0)}>
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill={
              isDarkTheme
                ? 'var(--text-color-light)'
                : 'var(--background-color-light)'
            }
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="29.5"
              cy="30.5"
              r="25.75"
              stroke={
                isDarkTheme
                  ? 'var(--dark-highlight)'
                  : 'var(--text-color-light)'
              }
              strokeWidth="3.5"
            />
            <path
              d="M22.8556 44.28L22.6156 41.52L25.0156 41.36C26.3756 41.2533 27.4156 40.7867 28.1356 39.96C28.8556 39.1067 29.2156 37.9467 29.2156 36.48V15.8H32.4956V36.52C32.4956 38.84 31.8956 40.6533 30.6956 41.96C29.4956 43.24 27.749 43.96 25.4556 44.12L22.8556 44.28Z"
              fill={
                isDarkTheme
                  ? 'var(--text-color-dark)'
                  : 'var(--text-color-light)'
              }
            />
            <title>logo</title>
            <desc>Javier Roca logo</desc>
          </svg>
        </button>
      </div>
      <div>
        <p className="logo__title">Javier Roca</p>
        <p className="logo__subtitle">Full Stack</p>
      </div>
    </div>
  );
}
