import '../styles/BannerIcon.css';

import settingsIcon from '../icons/settings-icon.svg';
import homeIcon from '../icons/home-icon.svg';
import saveIcon from '../icons/save-icon.svg';
import garbageIcon from '../icons/garbage-icon.svg';
import playIcon from '../icons/play-icon.svg';

import PropTypes from 'prop-types';

const BannerIcon = ({ iconModel }) => {
  const icons = {
    home: {
      altText: 'homeicon',
      src: homeIcon,
    },
    save: {
      altText: 'save-icon',
      src: saveIcon,
    },
    garbage: {
      altText: 'garbage-icon',
      src: garbageIcon,
    },
    play: {
      altText: 'play-icon',
      src: playIcon,
    },
    settings: {
      altText: 'settings-icon',
      src: settingsIcon,
    },
  };

  const icon = icons[iconModel];
  if (icon === undefined) return new Error('Icon not found');

  return (
    <div className='banner-icon'>
      <div className='banner-icon-button'>
        <img className='banner-icon-image' src={icon.src} alt={icon.altText} />
      </div>
    </div>
  );
};

BannerIcon.propTypes = {
  iconModel: PropTypes.string,
};

export default BannerIcon;
