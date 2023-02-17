import Footer from './Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

export default function Body() {
  return (
    <>
      <Header className="app-container" />
      <Outlet />
      <Footer className="app-container" />
    </>
  );
}
