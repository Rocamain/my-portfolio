import { useRef, useEffect } from 'react';
export default function Burger({ toggleShow, show }) {
  const refBurgerLineOne = useRef(null);
  const refBurgerLineTwo = useRef(null);
  const refBurgerLineThree = useRef(null);

  useEffect(() => {
    show
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');

    const { current: line1 } = refBurgerLineOne;
    const { current: line2 } = refBurgerLineTwo;
    const { current: line3 } = refBurgerLineThree;

    if (line1 && line2 && line3) {
      line1.classList.toggle('animate__line_one');
      line2.classList.toggle('animate__line_two');
      line3.classList.toggle('animate__line_three');
    }
  }, [show]);

  const toggleMenu = () => {
    toggleShow(!show);
  };

  return (
    <div onClick={toggleMenu} className="burger">
      <div ref={refBurgerLineOne} className="burger__line" />
      <div ref={refBurgerLineTwo} className="burger__line" />
      <div ref={refBurgerLineThree} className="burger__line" />
    </div>
  );
}
