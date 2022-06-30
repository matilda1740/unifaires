import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import ManageAccounts from 'components/DashboardBusiness/Pages/ManageAccounts';
import ManageOrganizations from 'components/DashboardBusiness/Pages/ManageAccounts/Organizations';

const Main = () => {
  return (
    <Fragment>
      <Head><title>Unifaires | Manage Accounts</title></Head>
      <BusinessWrapper content={<ManageAccounts content={<ManageOrganizations />} />}/>    
    </Fragment>
  );
};
export default Main;