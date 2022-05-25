import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { BadgesCard, CertsCard, ModuleSectionHeader, SectionHeading } from 'components/DashboardBusiness/business.style';

import BackURLModule from '../../../Components/BackURLModule';
import CelebrationImage from 'public/images/dashboard/CompletedCourse.svg'
import ReviewForm from '../../../Components/ReviewForm'
import BillingButton from '../../Settings/Billings/BillingButton'
 
export const CourseCompletedStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    h5 {
        margin: 0px 0 10px 0px;
        color: rgba(18, 53, 91, 1); 
    }
    h6 { margin-bottom: 4px; color: rgba(18, 53, 91, 1);}
    p:first-of-type {color: rgba(128, 128, 128, 1); }
    p{ margin-left: 5px; }

    @media screen and (max-width: 480px) {
        h5 { 
            text-align: center; 
            margin: 10px 0 20px 0px; 
        }
        h6 { margin-bottom: 10px;}
    }

`;

const CelebrationWrapper = styled.section`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(223, 223, 223, 1);
    border-radius: 8px;
    margin-bottom: 20px;
    img {
        width: 225px;
        height: 175px;
    }
    .certs_card{
        width: 359px;
        height: 226px;
        background: rgba(88, 50, 218, 0.2);
        border-radius: 8px;
        margin: 10px 0;

    }
    @media screen and (max-width: 480px) {
        height: 100%;
        img {
            width: 60%;
            height: 50%;
        }
        .certs_card {
            width: 90%;
            height: 200px;
            margin: 20px 0 15px 0;
        }
    }
`;


export default function CourseCompleted({title, certificate }) {

  return (
    <CourseCompletedStyle>
        <ModuleSectionHeader>
            <BackURLModule 
            text="My Courses" 
            prevPath="/individual/learning/courses"
            />
        </ModuleSectionHeader>    
        <Heading as={"h5"} content={"JavaScript Complete Beginners Course For Web 2.0"} />
        <Heading as={"h6"} content={"Course Completed"}/>
        <Text as="p" content={"You’ve successfully come to the end of this couse. Good job"} />

        <CelebrationWrapper>
            <img src={CelebrationImage?.src} alt="Congratulations" />
            <div className="certs_card"></div>
            {/* <CertsCard></CertsCard> */}
        </CelebrationWrapper>

        <ReviewForm />
        <BillingButton variant={"regular"} text={"Submit Review"} position={"end"}
        />
    </CourseCompletedStyle>
  )
}
