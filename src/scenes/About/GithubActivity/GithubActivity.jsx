import s from './GithubActivity.module.scss';
import GitHubCalendar from 'react-github-calendar';

const GithubActivity = () => {
  const colorTheme = {
    background: 'transparent',
    text: '#000',
    grade4: '#2d3a1c',
    grade3: '#2d3a1c',
    grade2: '#2d3a1c',
    grade1: '#2d3a1c',
    grade0: '#ecd9fc',
  };
  return (
    <div className={s.container}>
      <GitHubCalendar
        username="ValentinaRippe"
        blockSize={15}
        blockMargin={5}
        theme={colorTheme}
        hideTotalCount 
        fontSize={30}
      />
    </div>
  );
};

export default GithubActivity;
