import { FaRegLightbulb } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';

export default function ThemeButton() {
  const { isDarkTheme, changeTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme();
  return (
    <IconContext.Provider
      value={{
        color: isDarkTheme && 'var(--dark-highlight)',
        size: '2em',
      }}
    >
      <div onClick={handleClick} className="theme-button">
        <FaRegLightbulb />
      </div>
    </IconContext.Provider>
  );
}
