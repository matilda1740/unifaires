import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

import { applicationCols, applications } from 'common/data/_mock/business/applications';
import DataTables from '../../ManageAccounts/DataTables';
import { SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import { ArrowBack } from '@mui/icons-material';


const JobApplicantsSection = () => {

    const router = useRouter();
  const { query } = router;

    const [ jobApps, setJobApps] = useState([])

    const getApplicationsByJobID = (jobId) => {
       let matchedApps = applications.filter( appl => appl.jobID === jobId)
       console.log(matchedApps)
       setJobApps(matchedApps)
    }
    
    useEffect( () => {
        getApplicationsByJobID(query.id)
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
        <DataTables datarows={jobApps} datacols={applicationCols} /> 

        </>
    );
}

export default JobApplicantsSection;