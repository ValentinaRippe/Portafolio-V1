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
        Graduada del Bootcamp Prográmate de Educamas.
        <br />
        <br />
      </p>

      <p
        style={{
          color: '#000',
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
