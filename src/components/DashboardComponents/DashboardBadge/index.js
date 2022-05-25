import React from 'react';
import PropTypes from 'prop-types';
import DashboardBadgeStyle from './dashboardbadge.style'

const DashboardBadges = ({ label, number, icon, className, isMaterial, children, ...props }) => {
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
    <DashboardBadgeStyle className={addAllClasses.join(' ')} {...props}>
        <div className="col1">
            <p>{label}</p>
            <span>{number}</span>
        </div>
        <div className="icon">
            <img src={icon?.src} alt="icon" /> 
        </div>
    </DashboardBadgeStyle>
  );
};

DashboardBadges.propTypes = {
  className: PropTypes.string,
  isMaterial: PropTypes.bool,
  children: PropTypes.element,
  label: PropTypes.string,
  number: PropTypes.number, 
  icon: PropTypes.any,
};

DashboardBadges.defaultProps = {};

export default DashboardBadges;
