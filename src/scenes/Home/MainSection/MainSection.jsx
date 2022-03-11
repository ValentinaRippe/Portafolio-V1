import s from './MainSection.module.scss';
import logo from '../../../assets/logos/Logo.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MainSection = () => {
  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          ¡Hola! <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          Soy
          <strong className={s.mainName}> Valentina</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              'MERN Stack',
              'Continuamente aprendiendo',
              'React Native',
              'Desarrolladora web Full-Stack'
            ]}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={logo}
        wrapperClassName={s.logo}
      />
    </section>
  );
};

export default MainSection;
