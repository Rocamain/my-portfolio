import { projectsData } from '../../../data';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
const transitionConfig = {
  type: 'spring',
  duration: 1.25,
  bounce: 0.3,
};

const viewportConfig = {
  once: true,
  margin: '0px 0px -100px 0px',
};
export default function ProjectsGrid() {
  return (
    <motion.div
      // initial={{ opacity: 0, x: -50 }}
      // whileInView={{ opacity: 1, x: 0 }}
      // transition={transitionConfig}
      // viewport={viewportConfig}
      className="projects_grid"
    >
      {projectsData.map(({ ...props }, index) => (
        <ProjectCard key={index} {...props} />
      ))}
    </motion.div>
  );
}
