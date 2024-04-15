import editIcon from '../icons/edit-icon.svg';
import garbageIcon from '../icons/garbage-icon.svg';

import PropTypes from 'prop-types';

const ProjectIcon = ({ src, alt }) => {
  return (
    <div className='project-icon'>
      <img className='project-icon-image' src={src} alt={alt} />
    </div>
  );
};

ProjectIcon.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

const Project = () => {
  return (
    <div className='project'>
      <div className='project-icons-holder'>
        <ProjectIcon src={editIcon} alt='edit-icon' />
        <ProjectIcon src={garbageIcon} alt='garbage-icon' />
      </div>

      <h2 className='project-title-holder'>
        <h2>Project Name</h2>
      </h2>
    </div>
  );
};

export default Project;
