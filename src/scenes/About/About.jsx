import s from './About.module.scss';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import about from '../../assets/about.svg';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import TechSkills from './TechSkills/TechSkills';
import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Sobre <b className={s.purple}>Mi</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src={about} alt="about" />
          </div>
        </div>

        <h2 className={s.skills}>
          <b className={s.purple}>Habilidades</b> Profesionales
        </h2>
        <TechSkills />

        <h2 className={s.githubActivity}>
          Días de <b className={s.purple}>Código</b>
        </h2>
        <GithubActivity />
      </div>
    </BaseLayout>
  );
};

export default About;
