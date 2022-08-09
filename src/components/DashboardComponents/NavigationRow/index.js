import React, { useState } from 'react';

const DashboardCard = (props) => {

  const { icon, heading, subheading, handleClick } = props;
  return (
    <DashboardCardStyle onClick={handleClick}>
      {icon}
      <h6>{heading}</h6>
      <p>{subheading}</p>
    </DashboardCardStyle>
  );
};

export default DashboardCard;
