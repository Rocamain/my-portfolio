import { motion } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import HeroIntroduction from './HeroIntroduction';
const transitionConfig = {
  type: 'spring',
  duration: 1.5,
  bounce: 0.45,
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function Hero() {
  const matchDesktop = useMediaQuery();
  return (
    <section className={matchDesktop ? 'hero-container' : undefined}>
      <motion.div
        id={!matchDesktop ? 'hero-image' : undefined}
        initial={{ opacity: 0 }}
        viewport={viewportConfig}
        whileInView={{ opacity: 1 }}
      />
      <div>
        {matchDesktop && (
          <motion.img
            initial={{ opacity: 0 }}
            viewport={viewportConfig}
            whileInView={{ opacity: 1 }}
            id={matchDesktop ? 'hero-image' : undefined}
            alt="myself"
          />
        )}

        <div
          style={{
            marginTop: matchDesktop ? undefined : '-9.5em',
          }}
        >
          <HeroIntroduction />
        </div>
      </div>
    </section>
  );
}
