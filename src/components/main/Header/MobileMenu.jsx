import { useState } from 'react';

import Burger from './Burger';
import MobileMenuPopOver from './MobileMenuPopOver';

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    console.log('click menu');
    setShow(!show);
    console.log('click menu', !show);
  };

  return (
    <>
      <Burger show={show} toggleShow={toggleShow} />
      <MobileMenuPopOver show={show} toggleShow={toggleShow} />
    </>
  );
}
