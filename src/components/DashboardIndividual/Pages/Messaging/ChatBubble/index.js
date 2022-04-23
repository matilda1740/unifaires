import React from 'react';
import PropTypes from 'prop-types';
import ChatBubbleStyle from './chatbubble.style';

const ChatBubble = ({ className, isMaterial, children, ...props }) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__alert'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // isMaterial prop checking
  if (isMaterial) {
    addAllClasses.push('is-material');
  }

  return (
    <ChatBubbleStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </ChatBubbleStyle>
  );
};

ChatBubble.propTypes = {
  /** ClassName of the Alert */
  className: PropTypes.string,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Used to render icon, button, text or any elements inside the Chat.
   * This can be a string or any component. */
  children: PropTypes.element,
};

ChatBubble.defaultProps = {};

export default ChatBubble;
