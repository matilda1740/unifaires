import React from 'react';
import { useRouter } from 'next/router'
import { SectionHeading } from 'components/DashboardBusiness/business.style';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import ViewSection from '../Home/AccountManagement/AccountsContent/courses';

const ViewAllSection = (props) => {
    const router = useRouter(); 
    const {userType, type} = props;
    return (
    <>
        {
        userType === "business" &&
        <SectionHeading className="title_row position_dropdown job_section">
            <BillingButton 
            text={type === "jobs" ? "Create Job" : type === "funding" ? "Create Fund" : "Create Course"}
            variant={"white"}
            position={"end"}
            openModal={() => router.push(`/business/${type}/create`)}
            />
        </SectionHeading>        
        }
        <ViewSection {...props} />
    </>
    );
}

export default ViewAllSection;