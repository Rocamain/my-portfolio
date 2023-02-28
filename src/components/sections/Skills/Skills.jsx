import { useContext } from 'react';
import { ThemeContext } from '../../../context/themeContext';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { skills } from '../../../data';
import { motion } from 'framer-motion';
import Section from '../../global/Section';
const transitionConfig = {
  type: 'spring',
  duration: 1,
  bounce: 0.65,
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function Skills() {
  const { isDarkTheme } = useContext(ThemeContext);
  const matchesPhone = !useMediaQuery('pad');

  return (
    <Section section="Skills" noRotate>
      <div className="techContainer">
        {skills.map(({ title, src, dark }, index) => (
          <motion.div
            key={index + '-' + title}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ ...transitionConfig, delay: 0.1 * index }}
            viewport={viewportConfig}
          >
            <img
              width={matchesPhone ? '55' : '90'}
              height={matchesPhone ? '55' : '90'}
              title={title}
              src={isDarkTheme && dark ? dark : src}
              alt={title}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
