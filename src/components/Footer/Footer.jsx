import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaEnvelope,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h3>Desarrolado Valentina</h3>
        </div>

        <div className={s.copyright}>
          <h3>Copyright © {year} SV.dev</h3>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/ValentinaRippe"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:lauravalentina200102@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/valentina-rippe/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
