import React from 'react';
import PropTypes from 'prop-types';
import ChatHeadingStyle from './chatheading.style';

const ChatHeading = ({ className, isMaterial, children, ...props }) => {
  const addAllClasses = ['reusecore__alert'];
  if (className) {
    addAllClasses.push(className);
  }
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  return (
    <ChatHeadingStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </ChatHeadingStyle>
  );
};

ChatHeading.propTypes = {
  className: PropTypes.string,
  isMaterial: PropTypes.bool,
  children: PropTypes.element,
};

ChatHeading.defaultProps = {};

export default ChatHeading;
