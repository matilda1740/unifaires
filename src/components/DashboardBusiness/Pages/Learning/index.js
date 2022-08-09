import React, { useMemo, useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import { DashboardLinks, ModuleSection, SearchBar } from 'components/DashboardBusiness/business.style';
import Link from 'next/link';

import ModulesHeading from 'components/DashboardComponents/ModulesHeading';
import LearningToolsSection from './Tools';
import ViewAllSection from '../ViewAllModules';
import  { courses } from 'common/data/appData';

const LearningWrapper = ({userType}) => {
    const [moduleType, setModuleType] = useState("allcourses");
    const handleModuleChange = type => () => setModuleType(type)  

    return (
        <>
        <ModulesHeading
            heading={"My Learning"}
            subheading={"Check out Organisations that are making the most impact on Funding, Grants, & Scholarships"}
        />
        <DashboardLinks>
            <p onClick={handleModuleChange("allcourses")} className={moduleType === "allcourses" ? "selected" : ""}>All Courses</p>
            <p onClick={handleModuleChange("list")} className={moduleType === "list" ? "selected" : ""}>My List</p>
            <p onClick={handleModuleChange("wishlist")} className={moduleType === "wishlist" ? "selected" : ""}>WishList</p>
            <p onClick={handleModuleChange("archived")} className={moduleType === "archived" ? "selected" : ""}>Archived</p>
            <p onClick={handleModuleChange("tools")} className={moduleType === "tools" ? "selected" : ""}>Learning Tools</p>
        </DashboardLinks>
        <ModuleSection>
            {moduleType === "list" ? <ViewAllSection array={courses} useStatus={true} type={"courses"} userType={userType}/>
            : moduleType === "tools" ? <LearningToolsSection/>
            : <ViewAllSection array={courses} type={"courses"} userType={userType}/>
            }
        </ModuleSection>
       
        </>
    );
}

export default LearningWrapper;