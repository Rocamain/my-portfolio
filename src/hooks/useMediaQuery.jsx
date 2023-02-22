import { useEffect, useState } from 'react';

export default function useMediaQuery() {
  const [matchMedia, setMatchMedia] = useState(
    window.matchMedia('(min-width: 900px)').matches
  );

  useEffect(() => {
    const mql = window.matchMedia('(min-width: 900px)');

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
