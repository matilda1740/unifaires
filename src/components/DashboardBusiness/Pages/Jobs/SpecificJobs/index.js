import React, { useEffect, useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import Link from 'next/link';
import { useRouter } from "next/router";
import { mockJobData } from "common/data/appData";
import FormTextArea from 'components/DashboardIndividual/Pages/Settings/Components/FormTextArea';
import { ArrowBack } from '@mui/icons-material';
import { SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import Form from 'components/DashboardIndividual/Pages/Settings/Components/Form';
import FormSectionDivider from 'components/DashboardIndividual/Pages/Settings/Components/FormSectionDivider';
import FormInput from 'components/DashboardIndividual/Pages/Settings/Components/FormInput';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import styled from 'styled-components';
import { individualModule } from 'common/data/appData';

const SpecificJobStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const JobFormStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .button_row {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0 5px;
        button{
            margin-right: 16px !important;
            border-radius: 6px !important;
        }
    }
`;

const SpecificJobSection = ({formMode}) => {

    const { userOptions } = individualModule; 

    const [createJob, setCreateJob] = useState();
    const [updateJob, setUpdateJob] = useState();

    const [jobDetails, setJobDetails] = useState();

    const router = useRouter();
    const { query } = router;


    const handleSubmit = (data) => {
        return formMode === "update" 
                ? handleUpdateJob(query.id,data)
                : handleCreateJob(data)
    }

    const handleCreateJob = (data) => {
        // CALL AXIOS FUNCTION TO CREATE JOBS

    }

    const handleUpdateJob = (id, data) => {
        // CALL AXIOS FUNCTION TO UPDATE JOBS
    }   

    const getJobsFromMock = (jobID) => {
        let matchedJob = userOptions.map( section => section.jobs.filter( job => job.id === jobID)).reduce( (all, job) => ({...all, ...job}), {})
        // console.log("Matched Job: ", matchedJob[0])
        setJobDetails(matchedJob[0]);
    }
    
    useEffect(() => {
        if(formMode === "update"){
            // FUNCTION TO GET JOB DETAILS FROM DATABASE BUT FOR NOW FROM MOCK DATA
            getJobsFromMock(query.id)
        }
    }, [])
    return (
        <>
            <SectionHeading>
                <Link href={"/business/jobs"}>
                    <SeeAllStyle className="start">
                    <ArrowBack />
                    <p>My Jobs</p>
                    </SeeAllStyle>
                </Link>
            </SectionHeading> 

            <JobFormStyle>
                <Form initialValues={mockJobData} className={"job_form"}>
                    <FormSectionDivider className={"business_job_section"} content={"Job Title"} />
                    <FormInput value={formMode === "update" ? `${jobDetails?.title}` : ""} size={"full"} variant={"covered_blue"} label={""} placeholder={"Technology Expert"} name={"title"} type={"text"} />

                    <FormSectionDivider className={"business_job_section"} content={"Job Description"} />
                    <FormTextArea 
                        name={"description"}
                        size={"full"}
                        placeholder={"Please input the job description here..."}
                        variant={"job_textarea"}
                        value={formMode === "update" ? `${jobDetails?.description}` : ""}
                    />
                </Form>
            </JobFormStyle>  

        <div className="button_row">
            <BillingButton 
                text={ formMode === "update" ? "Create" : "Update" + "Job Posting" }
                variant={"primary"}
            />
            <BillingButton 
                text={"Save Posting Draft"}
                variant={"white"}
            />
            <BillingButton 
                text={"Delete Job Posting"}
                variant={"red"}
            />
        </div>                    
        </>
    );
}

export default SpecificJobSection;