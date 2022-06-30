import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import JobsWrapper from 'components/DashboardBusiness/Pages/Jobs';
import SpecificJobSection from 'components/DashboardBusiness/Pages/Jobs/SpecificJobs';
import JobApplicantsSection from 'components/DashboardBusiness/Pages/Jobs/Applicants';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Job Applicants</title></Head>
    <BusinessWrapper 
      content={
      <JobsWrapper
        content={<JobApplicantsSection />}
      />} />    
  </Fragment>
  );
};
export default Main;