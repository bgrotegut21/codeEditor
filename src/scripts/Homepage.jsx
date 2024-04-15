import Settings from './Settings';

const HomePage = () => {
  return (
    <div className='homePage'>
      <header className='banner'>
        <div className='codeEditorIcon'>
          <h1> {'</>'} </h1>
        </div>
        <h1>Code Editor</h1>

        <div className='settings-container'>
          <Settings />
        </div>
      </header>
    </div>
  );
};

export default HomePage;
