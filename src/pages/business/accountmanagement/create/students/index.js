import React, { Fragment } from 'react';
import Head from 'next/head';

// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import AddStudent from 'components/DashboardBusiness/Pages/Home/AddNew/Student';
import AddNewWrapper from 'components/DashboardBusiness/Pages/Home/AddNew';

const Main = () => {
  return (
    <Fragment>
      <Head>
        <title>Unifaires | Add Student</title>
      </Head>
      <BusinessWrapper content={<AddNewWrapper content={<AddStudent />} />}/>    
    </Fragment>
  );
};
export default Main;