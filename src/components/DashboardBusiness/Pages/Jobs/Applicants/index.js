import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

import { applicationCols, applications } from 'common/data/_mock/business/applications';
import DataTables from '../../ManageAccounts/DataTables';
import { SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import { ArrowBack } from '@mui/icons-material';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import styled from 'styled-components';
import MessageForm from './Messages/MessageForm';
import ModalWrapper from '../../Home/AddNew';

const JobApplicantsStyle = styled.div`
    .button_row{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0 5px;
        button{
            margin-right: 16px !important;
            border-radius: 6px !important;
            font-weight: 300;
            min-width: fit-content;
            padding: 10px 15px;
        }
    }
`;

const JobApplicantsSection = () => {

    const router = useRouter();
    const { query } = router;

    const [ jobApps, setJobApps] = useState([])
    const [ selectedApplicants, setSelectedApplicants ] = useState([])

    const isCheckBoxGrid = true;

    const getApplicationsByJobID = (jobId) => {
       let matchedApps = applications.filter( appl => appl.jobID === jobId)
       setJobApps(matchedApps)
    }

    const getSelectedApplicants = (applicants) => {
        let recipients = applicants.map( user => user.applicantDetails.email)
        // console.log("Selected: ", recipients);
        setSelectedApplicants(recipients);
    }
    // MESSAGING
    const [isFormOpen, setFormOpen] = useState(false);

    const handleFormOpen = () => setFormOpen(true);
    const handleFormClose = () => setFormOpen(false);

    useEffect( () => {
        getApplicationsByJobID(query.id)
    }, [])
    return (
        <JobApplicantsStyle>
        <SectionHeading>
            <Link href={"/business/jobs"}>
                <SeeAllStyle className="start">
                <ArrowBack />
                <p>My Jobs</p>
                </SeeAllStyle>
            </Link>
        </SectionHeading>
        <DataTables datarows={jobApps} datacols={applicationCols} isCheckBoxGrid={isCheckBoxGrid} getSelectedApplicants={getSelectedApplicants} /> 

        <div className="button_row">
            <BillingButton
                type={"button"} 
                text={"Accept Selected"}
                variant={"white"}
                position={"beginning"}
                openModal={handleFormOpen}
            />
            <BillingButton
                type={"button"} 
                text={"Reject Selected"}
                variant={"rejected"}
                position={"beginning"}
                openModal={handleFormOpen}
            />
        </div>

        {
            isFormOpen &&
            <ModalWrapper 
                modalType="msg_app" 
                content={<MessageForm 
                    handleClose={handleFormClose} details={selectedApplicants}/>} />              
        }
        </JobApplicantsStyle>
    );
}

export default JobApplicantsSection;