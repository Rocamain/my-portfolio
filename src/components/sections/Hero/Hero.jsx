import { motion } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';
import HeroIntroduction from './HeroIntroduction';

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function Hero() {
  const matchDesktop = useMediaQuery('laptop');

  return (
    <section className="hero-container">
      <motion.div
        aria-label="background photo of myself"
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
            marginTop: matchDesktop ? undefined : '-25vh',
          }}
        >
          <HeroIntroduction />
        </div>
      </div>
    </section>
  );
}
