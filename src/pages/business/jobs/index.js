import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import JobsWrapper from 'components/DashboardBusiness/Pages/Jobs';
import AllJobsSection from 'components/DashboardBusiness/Pages/Jobs/AllJobs';


const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Jobs</title></Head>
    <BusinessWrapper 
      content={
      <JobsWrapper
        content={<AllJobsSection/>}
      />} />    
  </Fragment>
  );
};
export default Main;