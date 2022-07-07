import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import { DashboardLinks, HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar } from 'components/DashboardBusiness/business.style';
import Link from 'next/link';
import { useRouter } from 'next/router';


const LearningWrapper = ({content}) => {
    const router = useRouter();

    return (
        <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"My Jobs"}/>
                <Text as="p" content={"All your posted jobs"}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <SearchOutlined /> 
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse">
                <NotificationsOutlined />
                </div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
            <div className="bottom_row">
                <DashboardLinks>
                    <Link href="/business/learning/courses">
                        <a className={router.pathname === "/business/learning/courses" ? "selected" : ""}>My Courses</a>
                    </Link>
                    <Link href="/business/learning/certifications">
                        <a className={router.pathname === "/business/learning/certifications" ? "selected" : ""}>My Certifications</a>
                    </Link>
                    <Link href="/business/learning/badges">
                        <a className={router.pathname === "/business/learning/badges" ? "selected" : ""}>My Badges</a>
                    </Link>
                </DashboardLinks>               
            </div>
        </ModuleHeading>

        <ModuleSection>
            {content}
        </ModuleSection>
       
        </>
    );
}

export default LearningWrapper;