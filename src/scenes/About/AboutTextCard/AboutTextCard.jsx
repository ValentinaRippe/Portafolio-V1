import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hola a todos, Soy{' '}
        <span className={s.purple}>Valentina Rippe </span>
        de <span className={s.purple}> Bogotá, Colombia.</span>
        <br />
        Desarrolladora en MERN Stack y React Native.
        <br />
        Graduada del Bootcamp Programate de Educamas.
        <br />
        <br />
        ¡Aparte de la codificación, algunas otras actividades que me encanta hacer!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight />  Video juegos
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Dibujar
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight />  Dibujar
        </li>
      </ul>

      <p
        style={{
          color: '#2d3a1c',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Esfuérzate por construir cosas que marquen la diferencia!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
