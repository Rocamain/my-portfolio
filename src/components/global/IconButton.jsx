import { IconContext } from 'react-icons';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function IconButton({ children, link, big, color, ...props }) {
  const matchesLaptop = useMediaQuery('laptop');

  return (
    <IconContext.Provider
      value={{
        color: color,
        size: big ? '2rem' : matchesLaptop ? '2rem' : '1.5rem',
        className: 'icon-button',
      }}
    >
      {link ? (
        <a rel="noopener" target="_blank" {...props}>
          {children}
        </a>
      ) : (
        <button {...props}>{children}</button>
      )}
    </IconContext.Provider>
  );
}
