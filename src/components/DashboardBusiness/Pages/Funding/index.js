import React, { useState } from 'react';
import ModulesHeading from 'components/DashboardComponents/ModulesHeading';
import ViewAllSection from 'components/DashboardBusiness/Pages/ViewAllModules';
import { DashboardLinks, ModuleSection } from 'components/DashboardBusiness/business.style';
import  { funding } from 'common/data/appData';

const FundingWrapper = ({userType}) => {
    const [moduleType, setModuleType] = useState("allfunds");
    const handleModuleChange = type => () => setModuleType(type)

    return (
        <>
        <ModulesHeading
            heading={"My Funding"}
            subheading={"Welcome, find all your created funds, grants and scholarships here"}
        />
        <DashboardLinks>
            <p onClick={handleModuleChange("allfunds")} className={moduleType === "allfunds" ? "selected" : ""}>All Funds</p>
            <p onClick={handleModuleChange("list")} className={moduleType === "list" ? "selected" : ""}>My List</p>
            <p onClick={handleModuleChange("wishlist")} className={moduleType === "wishlist" ? "selected" : ""}>WishList</p>
            <p onClick={handleModuleChange("archived")} className={moduleType === "archived" ? "selected" : ""}>Archived</p>
        </DashboardLinks>

        <ModuleSection>
            {moduleType === "list" ? <></>
            : <ViewAllSection array={funding} type={"funding"} userType={userType}/>}
        </ModuleSection>
    </>
    );
}

export default FundingWrapper;