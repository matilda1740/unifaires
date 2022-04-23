import React from 'react';
import PropTypes from 'prop-types';
import ConversationBoxStyle from './conversationbox.style';

const ConversationBox = ({ className, isMaterial, children, ...props }) => {
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
    <ConversationBoxStyle className={addAllClasses.join(' ')} {...props}>
      {children}
    </ConversationBoxStyle>
  );
};

ConversationBox.propTypes = {
  /** ClassName of the Alert */
  className: PropTypes.string,

  /** Add Material effect */
  isMaterial: PropTypes.bool,

  /** Used to render icon, button, text or any elements inside the Chat.
   * This can be a string or any component. */
  children: PropTypes.element,
};

ConversationBox.defaultProps = {};

export default ConversationBox;
