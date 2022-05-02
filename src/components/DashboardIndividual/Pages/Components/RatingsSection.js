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
import { RatingsBox } from './ReviewsCard';
// -----------------

export const RatingsSectionStyle = styled.div`

    display: flex;
    margin: 30px 0 20px 0;
    border-radius: 8px;
    border: 1px solid #F2F2F2;
    background: rgba(255, 255, 255, 1);

    width: 100%;
    height: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;

    .average_rating_container{
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3 { 
            color: rgba(18, 53, 91, 0.9);
            font-weight: 500;
            font-size: 30px;
            margin-bottom: 10px;
        }
        p{
            margin-top: 15px;
        }
    }
    .rating_inputs_container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const EachRatingStyle = styled.div`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

`;

const EachRatingInputStyle = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 2px;
    margin-right: 15px;
    &.oneStar {
        background: linear-gradient(90deg, #BFBFBF 20%, #DFDFDF 80%);
    }
    &.twoStar{
        background: linear-gradient(90deg, #BFBFBF 40%, #DFDFDF 60%);
    }
    &.threeStar{
        background: linear-gradient(90deg, #BFBFBF 60%, #DFDFDF 40%);
    }
    &.fourStar{
        background: linear-gradient(90deg, #BFBFBF 80%, #DFDFDF 20%);
    }
    &.fiveStar{
        background: linear-gradient(90deg, #BFBFBF 99%, #DFDFDF 1%);
    }    
`;

const EachRating = ({variant}) => {
    return (
        <EachRatingStyle>
            <EachRatingInputStyle className={variant} />
            <RatingsBox size={"rating_box"} label={"54%"}/>
        </EachRatingStyle>
    );
}

const RatingsSection = () => {
    return (
    <RatingsSectionStyle>
        <div className="average_rating_container">
            <h3>4.4</h3>
            <RatingsBox size={"center"}/>
            <p>Course Rating</p>
        </div>
        <div className="rating_inputs_container">
            <EachRating variant={"fiveStar"} />
            <EachRating variant={"fourStar"} />
            <EachRating variant={"threeStar"} />
            <EachRating variant={"twoStar"} />
            <EachRating variant={"oneStar"} />
        </div>
    </RatingsSectionStyle>
    )
}
export default RatingsSection