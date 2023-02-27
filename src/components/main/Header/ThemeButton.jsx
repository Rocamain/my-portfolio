import { FaRegLightbulb } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import IconButton from '../../global/IconButton';

export default function ThemeButton(props) {
  const { changeTheme, isDarkTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme();
  return (
    <IconButton
      onClick={handleClick}
      className="theme-button"
      {...props}
      color={isDarkTheme ? 'var(--dark-highlight)' : undefined}
    >
      <FaRegLightbulb />
    </IconButton>
  );
}
