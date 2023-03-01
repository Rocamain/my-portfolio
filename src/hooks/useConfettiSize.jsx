import { useEffect, useState } from 'react';

export default function useConfettiSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      // Set window width/height to state and get the position
      const html = document.documentElement;
      const top = -1 * html.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      setWindowSize({
        width: windowWidth,
        height: windowHeight,
        top: top,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
