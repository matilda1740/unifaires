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

export const ReviewsWrapper = styled.section`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-flow: column wrap;
    overflow-x: scroll;
    margin: 20px 0;
    border-radius: 8px;
    padding: 12px;
    border: 1px solid #F2F2F2;
    background: rgba(255, 255, 255, 1);

`;

export const ReviewsCardStyle = styled.div`
    width: 100%;
    min-height: 160px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    :nth-of-type(2){
        margin-top: 10px;
    }
    :hover { 
      cursor: pointer;
    }
    .top_container {
      width: 100%;
      height: 80px;  
        display: flex;
    }
    .image_container {
      width: 80px;
      height: 80px;
      margin: 10px 0;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: contain;
      }
    }
    .details_container{
        width: 90%;
        height: 100%;
        margin-left: 5px;
        padding: 15px 0;
    }
    h6, p{ 
      margin: 4px 0;
      font-size: 14px;
    }

    .review_info{
        width: 100%;
        height: 100%;
        font-size: 12px;
    }
    @media screen and (max-width: 480px) {
        :nth-child(n+1){
          margin-top: 10px;
        }
    }
`;

const RatingsWrapper = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width:80%;

    .label {
        margin-left: 4px;
        font-size: 10px;
    }
    /* FOR THE BOX IN THE RATINGS SECTION */
      &.rating_box{
        width: 20%;
        /* align-items: flex-end; */
        @media screen and (max-width: 480px) {
          width: 70%;
        }
    }
    &.center {
        width: 100%;
        justify-content: center;
    }
`;

const RatingsBoxStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .stars { 
        width: 12px;
        height: 12px;
    }
`;

export const RatingsBox = ({label, value, size}) => {

  return (
    <RatingsWrapper className={size}>
        <RatingsBoxStyle>
            {[...Array(5)].map((star) => (         
                <img className="stars" src={StarFullIcon?.src} alt="Star" />
                )
            )}
        </RatingsBoxStyle>
        <Text className="label" as={"p"} content={label} />
    </RatingsWrapper>
  );
}

const ReviewsCard = ({ createdBy, createdAt, message, value}) => {
  
  return (
    <ReviewsCardStyle>
        <div className="top_container">
          <div className="image_container">
            <img src={InstructorBg?.src} alt="Instructor" />
          </div>
          <div className="details_container">
            <h6>{createdBy}</h6>
            <RatingsBox 
                label={createdAt}
            />
          </div>
        </div>
        <p className="review_info">{message}</p>
    </ReviewsCardStyle>
  )
}
export default ReviewsCard