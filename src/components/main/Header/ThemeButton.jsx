import { FaRegLightbulb } from 'react-icons/fa';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import IconButton from '../../shared/IconButton';

export default function ThemeButton(props) {
  const { changeTheme } = useContext(ThemeContext);

  const handleClick = () => changeTheme();
  return (
    <IconButton onClick={handleClick} className="theme-button" {...props}>
      <FaRegLightbulb />
    </IconButton>
  );
}
