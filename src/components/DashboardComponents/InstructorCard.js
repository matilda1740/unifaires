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
    @media screen and (max-width: 480px) {
        flex-direction: column;
    }
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
    @media screen and (max-width: 480px) {
        :nth-child(n+1){
          margin-top: 10px;
        }
    }


    /* BUSINESS DASHBOARD */
    &.business_instructor_card, &.business_org_card{ 
      width: 280px;
      height: 290px;
      padding: 16px;
      :nth-child(n+1){ margin-right:25px;}
      :nth-child(n+4){ margin-top: 25px;}
    }
    &.business_org_card{
      background: rgba(173, 168, 190, 0.08);
      border: 1px solid rgba(18, 53, 91, 0.08);
      border-radius: 16px;
      height: 230px;

        .image_container{
          width: 70%;

          img {

          }
        }

        h6 { 
          color: #ADA8BE;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          font-size: 10px;
         }
        h5 { 
          color: #12355B;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 500;
         }

    }
`;

export const ImageOverTextWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width:80%;
      &.wrapper_row{
        width: 100%;
      }
`;

export const ImageOverTextStyle = styled.div`
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


export const ImageOverText = ({icon, text}) => {

  return (
    <ImageOverTextStyle>
      <img src={icon?.src} alt="Icon" />
      <p>{text}</p> 
    </ImageOverTextStyle>
  );
}

export const IconOverTextStyle = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;  
      margin: 10px 0;

      /* ELLIPSE */
      .icon {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background: rgba(88, 50, 218, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;  
      }
      svg{
        width: 50%;
        height: 50%;
      }
      &.row_icon_div {
        flex-direction: row;
        p{
          margin-left: 8px;
        }
      }
`;

export const IconOverText = ({variant, Icon, number, text}) => {

  return (
    <IconOverTextStyle className={variant}>
      <div className="icon">{Icon}</div>
      <p>{number} {text}</p> 
    </IconOverTextStyle>
  );
}


const InstructorCard = ({variant, image={InstructorBg}, name, role, company, preview, registeredNumber, rating, coursesNumber}) => {

  
  return (
    <InstructorCardStyle className={variant}>
        <div className="top_container">
          <div className="image_container">
            <img src={InstructorBg?.src} alt="Instructor" />
          </div>
        </div>


        <h6>{name}</h6>
        <p>{role}, {company}</p>
        <p>{preview}</p>

        <ImageOverTextWrapper>
          <ImageOverText icon={StudentsEnrolledIcon} text={registeredNumber} />
          <ImageOverText icon={StarFullIcon} text={rating} />
          <ImageOverText icon={CoursesIcon} text={coursesNumber} />
        </ImageOverTextWrapper>
    </InstructorCardStyle>
  )
}
export default InstructorCard