import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import ManageAccounts from 'components/DashboardBusiness/Pages/ManageAccounts';
import ManageCourses from 'components/DashboardBusiness/Pages/ManageAccounts/Courses';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Manage Accounts</title></Head>
    <BusinessWrapper content={<ManageAccounts content={<ManageCourses />} />}/>    
  </Fragment>
  );
};
export default Main;