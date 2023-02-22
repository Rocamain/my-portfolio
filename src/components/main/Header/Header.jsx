import ThemeButton from './ThemeButton';
import Menu from './Menu';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="menu-wrapper gap-1">
        <Menu />
        <ThemeButton />
      </div>
    </header>
  );
}
