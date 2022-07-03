import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import JobsWrapper from 'components/DashboardBusiness/Pages/Jobs';
import SpecificJobSection from 'components/DashboardBusiness/Pages/Jobs/SpecificJobs';


const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Create Job</title></Head>
    <BusinessWrapper 
      content={
      <JobsWrapper
        content={<SpecificJobSection/>}
      />} />    
  </Fragment>
  );
};
export default Main;