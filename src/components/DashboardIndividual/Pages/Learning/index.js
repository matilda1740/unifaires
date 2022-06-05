import React, { useState, useEffect } from 'react';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// ------- ROUTING ---------
import Link from 'next/link';
import {useRouter} from 'next/router'
// --------- END ---------

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

const LearningSection = (props, {children, href}) => {
    const {userOptions} = individualModule;

    const router = useRouter();
  return (
    <>
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
                <DashboardLinks>
                    <Link href="/individual/learning/courses">
                        <a className={router.pathname === "/individual/learning/courses" ? "selected" : ""}>My Courses</a>
                    </Link>
                    <Link href="/individual/learning/certifications">
                        <a className={router.pathname === "/individual/learning/certifications" ? "selected" : ""}>My Certifications</a>
                    </Link>
                    <Link href="/individual/learning/badges">
                        <a className={router.pathname === "/individual/learning/badges" ? "selected" : ""}>My Badges</a>
                    </Link>
                </DashboardLinks>               
            </div>

        </ModuleHeading>

        <ModuleSection>
            {props.content}
        </ModuleSection>
    </>
  );
};

export default LearningSection;
