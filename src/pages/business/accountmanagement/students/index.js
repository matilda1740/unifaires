import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import ManageAccounts from 'components/DashboardBusiness/Pages/ManageAccounts';
import ManageStudents from 'components/DashboardBusiness/Pages/ManageAccounts/Students';

const Main = () => {
  return (
    <Fragment>
      <Head><title>Unifaires | Manage Accounts</title></Head>
      <BusinessWrapper content={<ManageAccounts content={<ManageStudents />} />}/>    
    </Fragment>
  );
};
export default Main;