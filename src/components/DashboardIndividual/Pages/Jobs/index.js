import { individualModule, jobs } from 'common/data/appData';

import React, { useState } from 'react';
import ModulesHeading from 'components/DashboardComponents/ModulesHeading';
import ViewAllSection from 'components/DashboardBusiness/Pages/ViewAllModules';
import { DashboardLinks, ModuleSection } from 'components/DashboardBusiness/business.style';

const JobsWrapper = ({userType}) => {
    const [moduleType, setModuleType] = useState("alljobs");
    const handleModuleChange = type => () => setModuleType(type)

    return (
        <>
        <ModulesHeading
            heading={"My Jobs"}
            subheading={"Check out Organisations that are making the most impact on Funding, Grants, & Scholarships"}
        />
        <DashboardLinks>
            <p onClick={handleModuleChange("alljobs")} className={moduleType === "alljobs" ? "selected" : ""}>All Jobs</p>
            <p onClick={handleModuleChange("list")} className={moduleType === "list" ? "selected" : ""}>My List</p>
            <p onClick={handleModuleChange("wishlist")} className={moduleType === "wishlist" ? "selected" : ""}>WishList</p>
            <p onClick={handleModuleChange("archived")} className={moduleType === "archived" ? "selected" : ""}>Archived</p>
        </DashboardLinks>

        <ModuleSection>
            {moduleType === "list" ? <></>
            : <ViewAllSection array={jobs} type={"jobs"} userType={userType}/>}
        </ModuleSection>
    </>
    );
}

export default JobsWrapper;

