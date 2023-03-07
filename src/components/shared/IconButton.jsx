import { IconContext } from 'react-icons';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function IconButton({ children, link, big, ...props }) {
  const matchesLaptop = useMediaQuery('laptop');

  const isMail = props?.href?.includes('mailto:');

  if (isMail) {
  }
  return (
    <IconContext.Provider
      value={{
        size: big ? '2rem' : matchesLaptop ? '2rem' : '1.5rem',
        className: 'icon-button',
      }}
    >
      {link ? (
        <a rel="noopener" target={isMail ? undefined : '_blank'} {...props}>
          {children}
        </a>
      ) : (
        <button {...props}>{children}</button>
      )}
    </IconContext.Provider>
  );
}
