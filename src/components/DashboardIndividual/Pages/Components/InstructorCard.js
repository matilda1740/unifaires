import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// IMAGES AND ICONS
import InstructorBg from 'public/images/dashboard/Dashboard/instructor_bg.png'
import StudentsEnrolledIcon from 'public/images/dashboard/studentsEnrolled.svg'
import CoursesIcon from 'public/images/dashboard/Courses.svg'
import StarFullIcon from 'public/images/dashboard/starFull.svg'
import StarHalfIcon from 'public/images/dashboard/starHalf.svg'
// -----------------

export const InstructorWrapper = styled.section`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: row wrap;
    overflow-x: scroll;
    /* background: rgba(255, 255, 255, 1); */
    margin: 20px 0;
    border-radius: 8px;
    padding: 12px;
`;

export const InstructorCardStyle = styled.div`
    width: 300px;
    height: 300px;
    margin-right: 20px; 
    padding: 12px;
    border: 1px solid #F2F2F2;
    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-in-out;

    :hover { 
      cursor: pointer;
      transform: scale(1.01);
    }
    .top_container {
      width: 100%;
      height: 100px;
      
    }
    .image_container {
      width: 106px;
      height:100%;
      /* background: #eee; */
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h6, p{ 
      margin: 4px 0;
    }
    h6:first-of-type{
      margin-top: 8px;
    }

    p{ font-size: 12px;}

`;

const IconOverTextWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width:80%;
`;

const IconOverTextStyle = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 30px;
      margin: 10px 0;
      &.height {

      }
      img { 
        width: 80%;
        height: 80%;
      }
`;

const IconOverText = ({icon, text}) => {

  return (
    <IconOverTextStyle>
      <img src={icon?.src} alt="Icon" />
      <Text as={"p"} content={text} />
    </IconOverTextStyle>
  );
}


const InstructorCard = ({image={InstructorBg}, name, role, company, preview, registeredNumber, rating, coursesNumber}) => {
  
  return (
    <InstructorCardStyle>
        <div className="top_container">
          <div className="image_container">
            <img src={InstructorBg?.src} alt="Instructor" />
          </div>
        </div>


        <h6>{name}</h6>
        <p>{role}, {company}</p>
        <p>{preview}</p>

        <IconOverTextWrapper>
          <IconOverText icon={StudentsEnrolledIcon} text={registeredNumber} />
          <IconOverText icon={StarFullIcon} text={rating} />
          <IconOverText icon={CoursesIcon} text={coursesNumber} />
        </IconOverTextWrapper>
    </InstructorCardStyle>
  )
}
export default InstructorCard