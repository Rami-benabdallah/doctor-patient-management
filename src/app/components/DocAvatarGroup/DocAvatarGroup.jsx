import React from 'react';
import PropTypes from 'prop-types';

import { DocAvatar } from '../DocAvatar/DocAvatar';

export const DocAvatarGroup = ({ avatars, maxVisible}) => {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const remainingCount = avatars.length - maxVisible;
  return (
    <div className="flex -space-x-2">
      {visibleAvatars.map((avatar, index) => (
        <DocAvatar
          key={index}
          src={avatar.src}
          alt={avatar.alt}
          size={avatar.size}
        />
      ))}
      {remainingCount > 0 && (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-sm text-gray-700 font-medium">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

DocAvatarGroup.propTypes = {
    avatars: PropTypes.array,
    maxVisible: PropTypes.number,
};

DocAvatarGroup.defaultProps = {
    avatars: [],
    maxVisible: 2,
};
