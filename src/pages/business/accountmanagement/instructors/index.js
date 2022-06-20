import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import ManageAccounts from 'components/DashboardBusiness/Pages/ManageAccounts';
import ManageInstructors from 'components/DashboardBusiness/Pages/ManageAccounts/Instructors';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Manage Accounts</title></Head>
    <BusinessWrapper content={<ManageAccounts content={<ManageInstructors/>} />}/>    
  </Fragment>
  );
};
export default Main;