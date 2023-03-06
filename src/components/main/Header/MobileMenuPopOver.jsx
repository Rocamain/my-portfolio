import { motion } from 'framer-motion';
import MenuLinks from './MenuLinks';

const variants = {
  show: {
    height: '100%',
    overflowY: 'auto',
  },
  hide: {
    height: '0%',
    overflowY: 'hidden',
  },
};

export default function MobileMenuPopOver({ show, toggleShow }) {
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
        whileInView={show ? 'show' : 'hide'}
        transition={{ duration: 0.45 }}
        variants={variants}
      >
        <MenuLinks handleShow={toggleShow} />
      </motion.nav>
    </motion.div>
  );
}
