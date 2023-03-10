import Section from '../../shared/Section';
import ProjectsGrid from './ProjectsGrid';
import { motion } from 'framer-motion';
import useMediaQuery from '../../../hooks/useMediaQuery';

const transitionConfig = {
  type: 'spring',
  duration: 1.5,
  bounce: 0.45,
};
const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};

export default function Projects() {
  const matchMobile = !useMediaQuery('laptop');
  const x = matchMobile ? 20 : 60;
  return (
    <Section id="Projects" section="Projects">
      <motion.div
        className="projects_intro"
        initial={{ opacity: 0.2, x: x }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transitionConfig, delay: 0.15 }}
        viewport={viewportConfig}
      >
        <h3>/ Advanced Beauty</h3>
        <p style={{ fontSize: '1.1rem' }}>
          The projects below are all related between them, there are part of a
          whole project. Advanced beauty is a beauty company with different
          shops, where you can the information of services, promotion and make
          bookings.
        </p>

        <p style={{ fontSize: '1.1rem' }}>
          This project has three parts the front end, a CMS that control the
          content and the order or the component within the page, as well as the
          navigation and a back end the deals with services, shops customers,
          booking availability , and email confirmations.
        </p>
      </motion.div>

      <ProjectsGrid />
    </Section>
  );
}
