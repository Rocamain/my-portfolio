import { useState } from 'react';

import Burger from './Burger';
import MobileMenuPopOver from './MobileMenuPopOver';

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <Burger show={show} toggleShow={toggleShow} />
      <MobileMenuPopOver show={show} toggleShow={toggleShow} />
    </>
  );
}
