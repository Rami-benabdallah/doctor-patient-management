import React from 'react';

import PropTypes from 'prop-types';

export const DocAvatar = ({ src, alt, size, border }) => {
  return (
    <img
        src={src || 'https://docs.material-tailwind.com/img/face-2.jpg'}
        alt={alt}
        className={`${size} ${border} inline-block rounded-full object-cover object-center`}
    />
  );
};

DocAvatar.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    size: PropTypes.string,
    border: PropTypes.string,
};

DocAvatar.defaultProps = {
    src: 'https://docs.material-tailwind.com/img/face-2.jpg',
    alt: '',
    size: '',
    border: '',
};
