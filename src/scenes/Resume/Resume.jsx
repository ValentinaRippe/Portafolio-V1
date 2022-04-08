import { useState } from 'react';
import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import Button from '../../components/UIElements/Button/Button';

const resumeLink =
'http://drive.google.com/uc?export=view&id=1TBPJXgixBxDkw4FIi370G-T7zDWtAh-X';

const Resume = () => {
  const [name, setName] = useState("");
  //Form submit

  function handleSubmit(event) {
    event.preventDefault();
    setName(event.target.value)
    console.log(name)
  }

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            Mi <br /> Resumen
          </h1>

          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>

        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>
      </div>
        <div className={s.contact}>
          <form className={s.form} onSubmit={handleSubmit} > 
            <input
            className={s.inputs}
              name="name"
              required
              type="text"
              value={name}
              onChange={handleSubmit}
              placeholder='Nombre'
            />
            <input
            className={s.inputs}
              name="email"
              type="text"
              id="email"
              required
              placeholder="E-mail"
            />
            <textarea
              className="message"
              name="message"
              cols="30"
              rows="10"
              placeholder="Mensaje"
            ></textarea>
            <button type="submit" className={s.btnSubmit}>
              Enviar
            </button>
            <a
              href="mailto:lauravalentina200102@gmail.com"
              id="emailSubmit"
            >
            </a>
          </form>
        </div>
    </BaseLayout>
  );
};

export default Resume;
