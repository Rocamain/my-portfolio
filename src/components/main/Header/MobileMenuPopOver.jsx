import { useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuLinks from './MenuLinks';

const variants = {
  show: {
    height: '100%',
  },
  hide: {
    height: '0%',
  },
};
const variantsNav = {
  visible: {
    visibility: 'visible',
    height: '100%',
  },
  hidden: {
    visibility: 'hidden',
  },
};

export default function MobileMenuPopOver({ show, toggleShow }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      show
        ? document.body.classList.add('no-scroll')
        : document.body.classList.remove('no-scroll');
    }, 460);

    return () => clearTimeout(timer);
  }, [show]);

  const handleClick = () => {
    toggleShow();
  };
  return (
    <motion.div
      initial={{ height: '0%' }}
      whileInView={show ? 'show' : 'hide'}
      transition={{ duration: 0.45 }}
      variants={variants}
      className="mobile-menu__container"
      onClick={handleClick}
    >
      <motion.nav
        initial={{ height: '0%' }}
        whileInView={show ? 'visible' : 'hidden'}
        transition={{ duration: 0.35, delay: 0.1 }}
        variants={variantsNav}
      >
        <MenuLinks handleShow={toggleShow} />
      </motion.nav>
    </motion.div>
  );
}
