import { FaRegLightbulb } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext.jsx';
import { ThemeContext } from '../../../context/ThemeContext';

export default function ThemeButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <IconContext.Provider
      value={{
        color: theme === 'dark' && 'yellow',
        className: 'global-class-name',
        size: '2em',
      }}
    >
      <div onClick={changeTheme}>
        <FaRegLightbulb />
      </div>
    </IconContext.Provider>
  );
}
