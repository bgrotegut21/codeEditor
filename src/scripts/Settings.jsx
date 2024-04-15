import settingsIcon from '../images/settings-icon.png';

const Settings = () => {
  return (
    <div className='settings-button'>
      <div className='settings-button-overlay'></div>
      <img src={settingsIcon} alt='settings-icon' />
    </div>
  );
};

export default Settings;
