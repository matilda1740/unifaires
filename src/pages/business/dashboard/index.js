import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import HomeWrapper from 'components/DashboardBusiness/Pages/Home';

const Main = () => {
  return (
      <Fragment>
        <Head><title>Unifaires | Business Suite</title></Head>
        <BusinessWrapper content={<HomeWrapper />}/>    
      </Fragment>
  );
};
export default Main;