import { useEffect, useState } from 'react';

const breakpoints = { pad: '600px', laptop: '900px', desktop: '1440px' };

export default function useMediaQuery(screen) {
  const [matchMedia, setMatchMedia] = useState(
    window.matchMedia(`(min-width: ${breakpoints[screen]}`).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${breakpoints[screen]})`);

    const matchMedia = (event) => {
      if (event.matches) {
        setMatchMedia(true);
      } else {
        setMatchMedia(false);
      }
    };

    mql.addEventListener('change', matchMedia);

    return () => {
      removeEventListener('change', matchMedia);
    };
  });

  return matchMedia;
}
