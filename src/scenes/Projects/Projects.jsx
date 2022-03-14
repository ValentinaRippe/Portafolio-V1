import s from './Projects.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import { PROJECTS } from '../../constants/projects';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <h1 className={s.title}>
          Mis Recientes <strong className={s.purple}>Trabajos</strong>
        </h1>
        <p className={s.subtitle}>
          He aquí algunos proyectos en los que he trabajado recientemente.
        </p>

        <ul className={s.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
