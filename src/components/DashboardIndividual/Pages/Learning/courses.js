import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../globalApp.style';
import SectionWrapper, { ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, CoursesResumeCard, DashboardLinks, SearchBar } from '../../../DashboardBusiness/business.style';
import SidebarLeft from '../../SidebarLeft';
import SidebarRight from '../../SidebarRight';

import { individualModule } from 'common/data/appData';

import notificationIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Notification.svg'
import showIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Show.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import arrowDownIcon from 'public/images/dashboard/Dashboard/arrowDown2.svg'
import searchIcon from 'public/images/dashboard/Dashboard/search.svg'

import coursesIcon from 'public/images/dashboard/Courses.svg'
import badgeIcon from 'public/images/dashboard/Group.svg'
import workIcon from 'public/images/dashboard/Dashboard/Work.svg'
import dashCard from 'public/images/dashboardCard.png'

import paypal from 'public/images/partners/paypal.svg'
import bookIcon from 'public/images/dashboard/book.svg'
import threeUsersIcon from 'public/images/dashboard/3User.svg'

const CoursesSection = () => {
  const {userOptions} = individualModule;

  const [state, setState] = useState({
  });
  

  return (
    <>
    <SectionHeading className="title_row">
        <Heading as="h5" content={"My Courses"}></Heading>
        <Link href="/">See all ></Link>
    </SectionHeading>  
    {
        userOptions.map(( section => (
            section.courses?.length > 0 ?
            <ModuleRow className="courses_row">
                {
                    section.courses.map(( course=> (
                        <CoursesResumeCard key={course.courseID}>
                            <div className="courses_resume_top">
                                <img src={dashCard?.src} alt="Image" /> 
                                <div className="top_icons">
                                    <div className="each_top_icons">
                                        <img src={bookIcon?.src} alt="Search" /> 
                                        <span>5</span>
                                    </div>
                                    <div className="each_top_icons">
                                        <img src={threeUsersIcon?.src} alt="Search" /> 
                                        <span>12,342</span>
                                    </div>
                                </div>
                            </div>
                            
                            <Heading as="h6" content={course.category}></Heading>
                            <Heading as="h5" content={"JavaScript Complete Beginners Course For Web 2.0"}></Heading>

                            <div className="courses_resume_bottom">

                                <div className="percentage_div">
                                    <span>47%</span> 
                                </div>
                            <Link href="/">RESUME COURSE</Link>
                            </div>
                        </CoursesResumeCard>
                    )))
                }

            </ModuleRow>
            : 
            <ModuleRowEmpty>
                <Text as="p" content={"You have no courses yet! Explore our courses to get started"} />
                <button>Explore Courses</button>
            </ModuleRowEmpty>          
        )))
    }

    <SectionHeading className="title_row">
        <Heading as="h5" content={"New Courses"}></Heading>
        {/* INSERT FILTER OPTION IF COURSES */}
        <Link href="/">See all ></Link>
    </SectionHeading>    
    {
        userOptions.map(( section => (
            section.courses?.length > 0 ?
            <ModuleRow>
                {
                    section.courses.map(( course => (
                        <CoursesStartCard key={course.courseID}>
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
                            <Link                                
                                href={{
                                pathname: "/individual/learning/courses/[id]",
                                query: { id: course.courseID }
                                }}>Start Course
                            </Link>
                        </CoursesStartCard>
                    )))
                }
            </ModuleRow>
            :
            <ModuleRowEmpty>
                <Text as="p" content={"You have no courses yet! Explore our courses to get started"} />
                <button>Explore Courses</button>
            </ModuleRowEmpty>
        )))
    }
    
    </>
  );
};

export default CoursesSection;
