import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import useMediaQuery from '../../../hooks/useMediaQuery';

export default function Menu() {
  const matchesDesktop = useMediaQuery('laptop');

  return <div>{matchesDesktop ? <DesktopMenu /> : <MobileMenu />}</div>;
}
