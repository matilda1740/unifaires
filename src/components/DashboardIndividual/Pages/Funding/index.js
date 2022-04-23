import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import SectionWrapper, {FilterSeeAllContainer, FilterDropDown, FilterButton, ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, FundingCard, DashboardBadge, SearchBar } from '../../../DashboardBusiness/business.style';
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

const FundingSection = () => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });

  return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"Funding"}/>
                <Text as="p" content={"Your collection of requested funding."}/>
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
        </ModuleHeading>

        <ModuleSection>

        {
            userOptions.map(( section => (
                section.funding?.length > 0 &&
                <ModuleRow className="module_row_jobs">
                    {
                        section.funding.map(( job => (
                            <FundingCard className="module_row_jobs_card">
                                <div className="top_row">
                                    <span className="company_logo_div">
                                        <img src={paypal?.src}  alt="Image" />
                                    </span>
                                    <span className="top_row_right">
                                        <button className={job.status === 1 ? "granted" : job.status === 2 ? "waiting" : job.status === 3 &&  "rejected"} >{job.status === 1 ? "Granted" : job.status === 2 ? "Waiting" : job.status === 3 &&  "Rejected"}</button>
                                    </span>
                                </div>
                                    
                                <Heading as="h6" content={job.company}></Heading>
                                <Heading as="h5" content={job.title}></Heading>

                                <div className="timing_row">
                                    <button>{job.type}</button>
                                    <button>{job.duration}</button>
                                </div>                        
                                
                                <Text as="p" content={job.description}></Text>
                            </FundingCard>
                        )))
                    }

                </ModuleRow>          
            )))
        }
               
        </ModuleSection>
    </>
  );
};

export default FundingSection;
