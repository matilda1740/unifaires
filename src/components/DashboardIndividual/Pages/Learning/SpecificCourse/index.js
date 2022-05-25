import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { useRouter } from 'next/router';


import { SectionHeader } from '../../../../globalApp.style';
import SectionWrapper, { ModuleRow, ModuleRowEmpty, BadgesCard, ModuleSectionHeader, ModuleSectionContainer, ModuleSectionWrapper, SectionDivider, HelpBottomOptions, WhereToSection, HelpBottomSection, InformationContainer, InstructorsWrapper, InstructorsCard, RecommendationsWrapper, SectionTitle, CoursesStartCard } from '../../../../DashboardBusiness/business.style';
import InstructorCard, { InstructorWrapper } from '../../../Components/InstructorCard';
import ReviewsCard, { ReviewsWrapper } from '../../../Components/ReviewsCard';
import RatingsSection from '../../../Components/RatingsSection'

import { individualModule } from 'common/data/appData';


import arrowLeft from 'public/images/dashboard/Dashboard/ArrowLeft.svg'
import arrowRight from 'public/images/dashboard/Dashboard/ArrowRight.svg';
import arrowDown from 'public/images/dashboard/Dashboard/ArrowDown.svg';
import BookIcon from 'public/images/dashboard/book.svg'
import ClockIcon from 'public/images/dashboard/clock.svg'
import dashCard from 'public/images/dashboardCard.png'
import workIcon from 'public/images/dashboard/Dashboard/Work.svg'
import BackURLModule from '../../../Components/BackURLModule';


const SpecificCourseSection = () => {
  const {userOptions} = individualModule;

  // TO ACCESS DATA PASSED IN FROM PREVIOUS LINK PARAMETERS (Import userouter from Next)
  const router = useRouter();

  console.log(router);

  const [imgExpanded, setImgExpanded] = useState(false);

  const handleExpansion = (e) => {
      // Check if child or parent
      if(e.target.classList.contains("not_expanded")){
          e.target.classList.add("expanded")
          e.target.classList.remove("not_expanded")
          setImgExpanded(true) // Toggle Arrow Direction
      }else if(e.target?.parentElement?.parentElement.classList.contains("not_expanded")){
          e.target?.parentElement?.parentElement.classList.add("expanded")
          e.target?.parentElement?.parentElement.classList.remove("not_expanded")
          setImgExpanded(true)
      }else if(e.target.classList.contains("expanded")) {
          e.target.classList.remove("expanded")
          e.target.classList.add("not_expanded")
          setImgExpanded(false)
      }else if(e.target?.parentElement?.parentElement.classList.contains("expanded")){
          e.target?.parentElement?.parentElement.classList.remove("expanded")
          e.target?.parentElement?.parentElement.classList.add("not_expanded")
          setImgExpanded(false)
      }
  }

  return (
    <>  
    <ModuleSectionWrapper>
      <ModuleSectionHeader>
        <BackURLModule 
          text="My Courses" 
          prevPath="/individual/learning/courses"
        />
        <div className="right_div">
          <Link href={{
            pathname: "/individual/learning/courses/preview/[id]",
            query: { id: router.query.id}
            }}>
            <button>Start Course</button> 
          </Link>
        </div>
      </ModuleSectionHeader>

      <ModuleSectionContainer>
        <div className="col1">
          <div className="module_thumbnail">
            {/* <img src={arrowLeft?.src} alt="Back" />  */}
          </div>
        </div>
        <div className="col2">
          <Link href={{
            pathname: "/individual/learning/courses/preview/[id]",
            query: { id: router.query.id}
            }}>
            <Heading as="h5" content={"JavaScript Complete Beginners Course For Web 2.0"}/>          
          </Link>
          {/* <Heading as="h5" content={"JavaScript Complete Beginners Course For Web 2.0"}/> */}
          <Text as="p" content={"IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world. We do this in part through innovative learning and credentialing programs that help develop and recognize the talent that fuels innovation to change the world. IBM's Digital Badge Program represents our latest endeavor for recognizing this talent through secure, verifiable digital credentials representing skill, achievement, and contribution. Earn and share your badge today!"} />

          <div className="selection_section">

          </div>
        </div>
      </ModuleSectionContainer>

      <SectionDivider>
          <Heading as="h6" content={"LESSONS"}/>   
          <div className="right_div">
            <div>
              <img src={BookIcon?.src} alt="Back" /> 
              <Text as="p" content={"9 Lessons"}/>   
            </div>
            <div>
              <img src={ClockIcon?.src} alt="Back" /> 
              <Text as="p" content={"150 hours"}/>   
            </div>
          </div>    
      </SectionDivider>

      <HelpBottomSection className="whereTo_section">
        {
            userOptions.map(( section => (
                section.helpBottom.map(( help => (
                    <HelpBottomOptions onClick={handleExpansion} className="not_expanded">
                        <div>
                            <Heading as="h6" content={help.heading}></Heading>
                            {
                                imgExpanded ? 
                                <img src={arrowDown?.src}  alt="Help" /> 
                                : <img src={arrowRight?.src}  alt="Help" /> 
                            }
                                   
                        </div>
                        <Text as="p" content={help.paragraph}></Text>
                    </HelpBottomOptions>
                )))
            )))
        }          
      </HelpBottomSection>

      <InformationContainer>
        <Heading as="h5" content={"What you’ll learn"}/>   
        <ul>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
          <li>IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be </li>
        </ul>
      </InformationContainer> 

      <SectionTitle>Instructors</SectionTitle>

        {
            userOptions.map(( section => (
                section.instructors?.length > 0 &&
                <InstructorWrapper>

                {
                  section.instructors.map(( instructor => (
                    <InstructorCard
                      image={instructor.image}
                      name={instructor.name}
                      role={instructor.role}
                      company={instructor.company}
                      preview={instructor.preview}
                      registeredNumber={instructor.registeredNumber}
                      rating={instructor.rating}
                      coursesNumber={instructor.coursesNumber}
                    />
                  )))
                } 
                </InstructorWrapper>
            )))
        }

      <SectionTitle>Featured Reviews</SectionTitle>
      {
        userOptions.map(( section => (
            section.featuredReviews?.length > 0 &&
            <ReviewsWrapper>
            {
              section.featuredReviews.map(( review => (
                <ReviewsCard
                  createdBy={review.createdBy}
                  createdAt={review.createdAt}
                  message={review.message}
                  value={review.reviewValue}
                />
              )))
            } 
            </ReviewsWrapper>
        )))
      }

      <SectionTitle>Rating</SectionTitle>
      <RatingsSection />
      <RecommendationsWrapper>
        <Heading as="h5" content={"Similar Courses"} />
        {
            userOptions.map(( section => (
                section.courses?.length > 0 &&
                <ModuleRow>
                    {
                        section.courses.map(( course => (
                            <CoursesStartCard>
                                <img src={dashCard?.src} alt="Image" /> 
                                <Heading as="h6" content={course.category}></Heading>
                                <Heading as="h5" content={course.title}></Heading>
                                <Text as="p" content={course.description}></Text>
                                <div className="functions_row">
                                    <div>
                                        <img src={workIcon?.src} alt="Image" /> 
                                        <Text as="p" content={`${course.lessons} Lessons`}></Text>
                                    </div>
                                    <div>
                                        <img src={workIcon?.src} alt="Image" /> 
                                        <Text as="p" content={`${course.time} hrs`}></Text>
                                    </div>
                                </div>
                                <Link className="course_card_button" href="/individual/learning/courses/start" >Start Course</Link>
                            </CoursesStartCard>
                        )))
                    }

                </ModuleRow>
            )))
        }        
      </RecommendationsWrapper>



</ModuleSectionWrapper>    
    </>
  );
};

export default SpecificCourseSection;
