import s from './IntroSection.module.scss';
import avatar from '../../../assets/svg/avataaars.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaEnvelope,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
          Soy<span className={s.purple}> desarrolladora web </span>{' '}
          Full-Stack
          </h1>

          <div className={s.description}>
            <p>
            Tengo una gran pasión
                    por las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
            </p>

            <p>
            Persona bien organizada y solucionadora de problemas basada en
              <i>
                <b className={s.purple}>
                  {' '}
                  tecnologías y productos web
                </b>
              </i>
            </p>

            <p>
            Una apasionada desarrolladora Full Stack 🚀.<br />Tengo una experiencia en la construcción{' '}
              <i>
                <b className={s.purple}>de aplicaciones web y móviles</b>
              </i>{' '}
              con
              <br />
              <i>
                <b className={s.purple}>
                JavaScript, Reactjs, Nodejs, React Native 
                </b>
              </i>{' '}
              y algunas otras bibliotecas geniales.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>Encuéntrame en</h1>
        <p>
          No dude en <span className={s.purple}>concectarse </span>conmigo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/ValentinaRippe"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:lauravalentina200102@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaEnvelope />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/valentina-rippe/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
