import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import HomeWrapper from 'components/DashboardBusiness/Pages/Home';
import IndividualWrapper from 'components/DashboardIndividual';

const Main = () => {
  return (
      <Fragment>
        <Head><title>Unifaires | Individual Suite</title></Head>
        <IndividualWrapper content={<HomeWrapper userType="individual" />}/>    
      </Fragment>
  );
};
export default Main;

