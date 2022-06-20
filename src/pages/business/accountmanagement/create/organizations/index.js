import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import AddNewWrapper from 'components/DashboardBusiness/Pages/Home/AddNew';
import AddOrganization from 'components/DashboardBusiness/Pages/Home/AddNew/Organization';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Add Organization</title></Head>
    <BusinessWrapper content={<AddNewWrapper content={<AddOrganization />} />}/>    
  </Fragment>
  );
};
export default Main;