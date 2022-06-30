import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import Link from 'next/link';
import { KeyboardArrowDown } from '@mui/icons-material';

import { FilterButton,  JobCard, ModuleRow, SectionHeading } from 'components/DashboardBusiness/business.style';

import { individualModule, filterData } from 'common/data/appData';

import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import FilterDropDownComponent from 'components/DashboardComponents/FilterDropDown';
import ModalWrapper from '../../Home/AddNew';


const AllJobsSection = ({content}) => {

  const {userOptions} = individualModule;

    const [show, setShow ] = useState(false);
    const toggleDropDown = () => setShow(!show)

    const [isViewJob, setIsViewJob] = useState(false);
    const [viewJobDetails, setViewJobDetails] = useState();
    const handleJobDetails = job => () => {
        setIsViewJob(true)
        setViewJobDetails([job])
        console.log([job], isViewJob);
    }
    const handleViewClose = () =>{ 
        setViewJobDetails([])
        setIsViewJob(false)
    };

    return (
        <>
        <SectionHeading className="title_row position_dropdown job_section">
            <Link href="/business/jobs/create">
                <BillingButton 
                text={"Create Job"}
                variant={"white"}
                position={"end"}
                />
            </Link>
            <FilterButton onClick={toggleDropDown} className="only_element">
                <Text as="p" content={"FILTER"} />
                <KeyboardArrowDown />
            </FilterButton>
        </SectionHeading>  
        <FilterDropDownComponent
            data={filterData.jobs}
            variant={ show ? "show_dropdown filter" : "hide_dropdown filter"} />
         
        {
            userOptions.map(( section => (
                section.jobs?.length > 0 &&
                <ModuleRow className="module_row_jobs">
                    {
                        section.jobs.map(( job => (
                            <JobCard key={job.id} onClick={handleJobDetails(job)} className="module_row_jobs_card">
                                <div className="company_logo_div">
                                    <img src={job.logo?.src}  alt="Image" />
                                </div>
                                    
                                <Heading as="h6" content={job.company}></Heading>
                                <Heading as="h5" content={job.title}></Heading>
                                <div className="timing_row">
                                    <button>{job.location}</button>
                                    <button>{job.duration}</button>
                                </div>                        
                                <Text as="p" content={job.description}></Text>
                                <p>Applicants: <span>32</span></p>
                            </JobCard>
                        )))
                    }

                </ModuleRow>          
            )))
        }            

       {/* VIEW JOB MODAL  */}
        {
            isViewJob &&
            <ModalWrapper isViewJob={isViewJob} closeModal={handleViewClose} details={viewJobDetails} />              
        }
        </>
    );
}

export default AllJobsSection;