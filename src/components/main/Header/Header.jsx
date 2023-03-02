import ThemeButton from './ThemeButton';
import Menu from './Menu';
import Logo from './Logo';
import SideNav from './SideNav';

export default function Header() {
  return (
    <>
      <header id="Header" className="header">
        <Logo />
        <div className="menu-wrapper gap-1">
          <Menu />
          <ThemeButton aria-label="Change Theme" big />
        </div>
      </header>
      <SideNav />
    </>
  );
}
