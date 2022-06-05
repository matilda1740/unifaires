import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import InstructorBg from 'public/images/dashboard/Dashboard/instructor_bg.png'
import { IconOverText, ImageOverTextWrapper, InstructorCardStyle } from './InstructorCard';
import { AutoStoriesOutlined, MilitaryTechOutlined } from '@mui/icons-material';


const StudentsCard = ({variant, image={InstructorBg}, name, degree, description, coursesNo, certificatesNo}) => {

  
  return (
    <InstructorCardStyle className={variant}>
        <div className="top_container">
          <div className="image_container">
            <img src={InstructorBg?.src} alt="Student" />
          </div>
        </div>

        <h6>{name}</h6>
        <p>{degree}</p>
        <p>{description}</p>

        <ImageOverTextWrapper>
          <IconOverText Icon={<AutoStoriesOutlined />} number={coursesNo} text={"Courses"} />
          <IconOverText Icon={<MilitaryTechOutlined />} number={certificatesNo} text={"Certifications"} />
        </ImageOverTextWrapper>
    </InstructorCardStyle>
  )
}
export default StudentsCard