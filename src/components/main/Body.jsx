import { useState, useEffect } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';

const navigate = (hash, matchesSmallScreens) => {
  const section = hash.split('#')[1];

  const sectionTop = document
    .getElementById(section)
    .getBoundingClientRect().top;

  const windowTop = document.documentElement.getBoundingClientRect();

  const windowTopCorrection = windowTop.top < 0 ? windowTop.top * -1 : 0;

  const headerHeight =
    document.getElementById('Header').getBoundingClientRect().height * 2;
  const scrollTo = sectionTop - headerHeight + windowTopCorrection;

  window.scrollTo({
    top: scrollTo,
    behavior: matchesSmallScreens ? 'instant' : 'smooth',
  });
};

export default function Body() {
  const [isOpen, setOpen] = useState(false);
  const matchesSmallScreens = !useMediaQuery('laptop');

  const { hash } = useLocation();

  useEffect(() => {
    let timer;
    if (hash) {
      navigate(hash, matchesSmallScreens);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  useEffect(() => {
    let timer;
    if (hash === '#About') {
      timer = setTimeout(() => {
        setOpen(true);
      }, 700);
    } else {
      if (isOpen) {
        setOpen(false);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [hash]);

  return (
    <>
      <Header className="app-container" />
      <Outlet context={{ isOpen, setOpen }} />
      <Footer />
    </>
  );
}
