import '../styles/Homepage.css';

import BannerIcon from './BannerIcon';
import Project from './Project';

const AddProject = () => {
  return (
    <div className='addProject'>
      <h2>+</h2>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className='home-page'>
      <header className='banner'>
        <div className='code-editor-items-container'>
          <div className='code-editor-logo-container'>
            <h1 className='code-editor-logo'> {'</>'} </h1>
          </div>

          <div className='code-editor-text-container'>
            <h1 className='code-editor-text'>Code Editor</h1>
          </div>
        </div>

        <BannerIcon iconModel='settings' />
      </header>

      <main className='main'>
        <div className='projectsHolder'>
          <Project />
          <Project />
          <AddProject />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
