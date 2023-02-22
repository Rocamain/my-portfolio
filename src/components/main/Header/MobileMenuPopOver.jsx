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
      className="container"
      onClick={handleClick}
    >
      <nav>
        <MenuLinks handleShow={toggleShow} />
      </nav>
    </motion.div>
  );
}
