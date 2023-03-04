import { useRef, useEffect } from 'react';
export default function Burger({ toggleShow, show }) {
  const refBurgerLineOne = useRef(null);
  const refBurgerLineTwo = useRef(null);
  const refBurgerLineThree = useRef(null);

  useEffect(() => {
    show
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');

    const line1 = refBurgerLineOne.current;
    const line2 = refBurgerLineTwo.current;
    const line3 = refBurgerLineThree.current;

    if (line1 && line2 && line3) {
      if (show) {
        line1.classList.add('animate__line_one');
        line2.classList.add('animate__line_two');
        line3.classList.add('animate__line_three');
      } else {
        line1.classList.remove('animate__line_one');
        line2.classList.remove('animate__line_two');
        line3.classList.remove('animate__line_three');
      }
    }
  }, [show]);

  const toggleMenu = () => {
    toggleShow(!show);
  };

  return (
    <div onClick={toggleMenu} className="burger">
      <div ref={refBurgerLineOne} className="burger__line background-color" />
      <div ref={refBurgerLineTwo} className="burger__line background-color" />
      <div ref={refBurgerLineThree} className="burger__line background-color" />
    </div>
  );
}
