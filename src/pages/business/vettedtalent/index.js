import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import VettedTalent from 'components/DashboardBusiness/Pages/VettedTalent';
import VettedRequests from 'components/DashboardBusiness/Pages/VettedTalent/VettedRequests';
import VettedProfiles from 'components/DashboardBusiness/Pages/VettedTalent/VettedProfiles';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Vetted Talent</title></Head>
    <BusinessWrapper 
      content={<VettedTalent 
        requestContent={<VettedRequests />} 
        profileContent={<VettedProfiles />}
      />} />    
  </Fragment>
  );
};
export default Main;