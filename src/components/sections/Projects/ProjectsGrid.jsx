import { projectsData } from '../../../data';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid() {
  return (
    <div className="projects_grid">
      {projectsData.map(({ ...props }, index) => (
        <ProjectCard key={index} {...props} />
      ))}
    </div>
  );
}
