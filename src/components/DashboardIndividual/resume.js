import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SectionWrapper, { ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, CoursesResumeCard, JobCard, BadgesCard, DashboardBadge, SearchBar } from '../DashboardBusiness/business.style';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

import { userModule } from 'common/data/appData';

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
import cisco from 'public/images/dashboard/Resume Course/cisco.png'
const UserResumeCourse = (props) => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });
  

  return (
    <SectionWrapper>
      <SidebarLeft/>  
    
      <ModuleColumn>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"My Dashboard"}/>
                <Text as="p" content={"Welcome Bassey, ready to learn?"}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <img src={searchIcon?.src} alt="Search" /> 
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse">
                <img src={notificationIcon?.src} alt="Notify" /> 
                </div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>

            <div className="bottom_row">
                <DashboardBadge>
                    <div className="col1">
                        <Text as="p" content={"My Learning"} />
                        <span>980</span>
                    </div>
                    <div className="icon">
                <img src={coursesIcon?.src} alt="Learn" /> 
                    </div>
                </DashboardBadge>

                <DashboardBadge>
                    <div className="col1">
                        <Text as="p" content={"My Jobs"} />
                        <span>980</span>
                    </div>
                    <div className="icon">
                <img src={workIcon?.src} alt="Learn" /> 
                    </div>
                </DashboardBadge>
                <DashboardBadge>
                    <div className="col1">
                        <Text as="p" content={"My Certifications & Badges"} />
                        <span>980</span>
                    </div>
                    <div className="icon">
                <img src={badgeIcon?.src} alt="Learn" /> 
                    </div>
                </DashboardBadge>                
            </div>

        </ModuleHeading>


        <ModuleSection>
            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Courses"}></Heading>
                {/* INSERT FILTER OPTION IF COURSES */}
                <Link href="/">See all ></Link>
            </SectionHeading>    
            {
                userOptions.map(( section => (
                    section.courses?.length > 0 ?
                    <ModuleRow>
                        {
                            section.courses.map(( course => (
                                <CoursesResumeCard>
                                    <div className=".courses_resume_top">

                                        <img src={dashCard?.src} alt="Image" /> 

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
                <Heading as="h5" content={"My Job Applications"}></Heading>
                <Link href="/">See all ></Link>
            </SectionHeading>  
            {
                userOptions.map(( section => (
                    section.jobs?.length > 0 ?
                    <ModuleRow>
                        {
                            section.jobs.map(( job => (
                                <JobCard>
                                    <div className="company_logo_div">
                                        <img src={paypal?.src}  alt="Image" />
                                    </div>
                                     
                                    <Heading as="h6" content={job.company}></Heading>
                                    <Heading as="h5" content={job.title}></Heading>
                                    <div className="timing_row">
                                        <button>Remote</button>
                                        <button>Full-time</button>
                                    </div>                        <Text as="p" content={job.description}></Text>

                                    <Link href="/">In Progress</Link>
                                </JobCard>
                            )))
                        }

                    </ModuleRow>
                    :            
                    <ModuleRowEmpty>
                <Text as="p" content={"Jobs you’ve applied to will be documented here. Get searching"} />
                <button>Find Jobs</button>
            </ModuleRowEmpty>            
                )))
            }
            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Certifications & Badges"}></Heading>
                <Link href="/">See all ></Link>
            </SectionHeading>        
            {
                userOptions.map(( section => (
                    section.badges?.length > 0 ?
                    <ModuleRow>
                        {
                            section.badges.map(( badge => (
                                <BadgesCard>
                                    <div className="badge_logo_div">
                                        <img src={cisco?.src}  alt="Image" />
                                    </div>

                                    <div className="badge_text_div">
                                        <Heading as="h5" content={badge.name}></Heading>

                                        <Text as="p" content={"has successfully completed the course"} />

                                        <Heading as="h5" content={badge.title}></Heading>

                                        <Text as="p" content={`on the ${badge.date}`} />
                                        
                                        <Heading as="h6" content={`Distinction: ${badge.distinction}`} />
                                    </div>                               
                                </BadgesCard>
                            )))
                        }
                    </ModuleRow>
                    :   
                    <ModuleRowEmpty>
                        <Text as="p" content={"Oops, you haven’t earned a certificate yet."} />
                    </ModuleRowEmpty> 
            )))
            }               
        </ModuleSection>

      </ModuleColumn>

      <SidebarRight/>
    </SectionWrapper>
  );
};

export default UserResumeCourse;
