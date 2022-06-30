import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar } from 'components/DashboardBusiness/business.style';


const JobsWrapper = ({content}) => {

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
        </ModuleHeading>

        <ModuleSection className="business_job_section">
            {content}
        </ModuleSection>
       
        </>
    );
}

export default JobsWrapper;