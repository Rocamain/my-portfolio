import { motion } from 'framer-motion';
import About from './About';

const transitionConfig = {
  type: 'spring',
  duration: 1.5,
  bounce: 0.45,
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function HeroIntroduction() {
  return (
    <>
      <div id="About" className="hero-intro">
        <motion.h5
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.15 }}
          viewport={viewportConfig}
          className="hero-intro__title"
        >
          Javier Roca
        </motion.h5>

        <motion.h5
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.35 }}
          viewport={viewportConfig}
        >
          Full Stack Developer
        </motion.h5>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transitionConfig, delay: 0.35 }}
          viewport={viewportConfig}
          style={{ marginBottom: '1em' }}
        >
          I am a Full Stack Developer eager to gain professional experience. I
          would like to share some of the applications I have created along with
          information about myself.
        </motion.p>
        <About />
      </div>
    </>
  );
}
