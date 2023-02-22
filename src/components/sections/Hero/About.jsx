import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutButton from './AboutButton';

const animation = {
  height: 'auto',
  opacity: 1,
  transition: {
    height: {
      duration: 0.4,
    },
    opacity: {
      duration: 0.25,
      delay: 0.15,
    },
  },
};
const animationExit = {
  height: 0,
  opacity: 0,
  transition: {
    height: {
      duration: 0.4,
    },
    opacity: {
      duration: 0.25,
    },
  },
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function About() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <AboutButton handleOpen={handleOpen} isOpen={isOpen} />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.p
            style={{ overflow: 'hidden' }}
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={animation}
            exit={animationExit}
            viewport={viewportConfig}
          >
            After completing the Bootcamp with Northcoders, I decided to
            continue building my foundations on javascript, Css , react and
            learn other technologies. Gaining the ability to be confident in
            reading documentation and transform a design into reality, making
            interactive and adaptive interfaces for different market devices.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
