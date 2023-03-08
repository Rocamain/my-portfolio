import { motion } from 'framer-motion';
import HeroIntroduction from './HeroIntroduction';

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function Hero() {
  return (
    <section className="hero-container">
      <div>
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            viewport={viewportConfig}
            whileInView={{ opacity: 1 }}
            id="hero-image"
            alt="myself"
          />
        </div>

        <HeroIntroduction />
      </div>
    </section>
  );
}
