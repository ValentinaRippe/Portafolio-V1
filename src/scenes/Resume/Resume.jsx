import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { useEffect, useRef, useState } from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink =
  'https://raw.githubusercontent.com/vsnaichuk/vsnaichuk/master/CV.pdf';

const Resume = () => {
  const [name, setName] = useState("");
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);
  useEffect(() => {
    setPdfPageWidth(
      pdfWrapper.current?.getBoundingClientRect().width || null,
    );
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent',
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };
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
            My <br /> Resume
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

        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            loading={<LinerProgress />}
            file={{
              url: resumeLink,
            }}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
      <div className="u-wrapper">
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="form">
            <img
              className="logocard"
              src="img/logofooter.png"
              alt=""
            />
            <input
              name="name"
              required
              type="text"
              value={name}
              onChange={handleSubmit}
              placeholder='Name'
            />
            <input
              name="email"
              type="text"
              id="email"
              required
              placeholder="E-mail"
            />
            <textarea
              id="message"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="btnSubmit">
              Submit
            </button>
            <a
              href="mailto:lauravalentina200102@gmail.com"
              id="emailSubmit"
            >
              mail
            </a>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
