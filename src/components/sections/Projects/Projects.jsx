import SectionTitle from '../../global/SectionTitle';
import Section from '../../global/Section';
import ProjectsGrid from './ProjectsGrid';
import { motion } from 'framer-motion';

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
  return (
    <Section section="Projects">
      <motion.div
        className="projects_intro"
        initial={{ opacity: 0, x: -50 }}
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
