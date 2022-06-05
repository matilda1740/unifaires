import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import cardBg from 'public/images/card_bg.png'
import { IconOverText, ImageOverTextWrapper, InstructorCardStyle } from './InstructorCard';
import {GroupOutlined , AdminPanelSettingsOutlined } from '@mui/icons-material';



const OrganizationCard = ({variant, image={cardBg}, type, company, staffNo, adminNo}) => {

  
  return (
    <InstructorCardStyle className={variant}>
        <div className="top_container">
          <div className="image_container">
            <img src={cardBg?.src} alt="Card" />
          </div>
        </div>

        <h6>{type}</h6>
        <h5>{company}</h5>

        <ImageOverTextWrapper className="wrapper_row">
          <IconOverText variant={"row_icon_div"} Icon={<GroupOutlined />} number={staffNo} text={"Total Staff"} />
          <IconOverText variant={"row_icon_div"} Icon={<AdminPanelSettingsOutlined />} number={adminNo} text={"Administrators"} />
        </ImageOverTextWrapper>
    </InstructorCardStyle>
  )
}
export default OrganizationCard