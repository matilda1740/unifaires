import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import AddInstructor from 'components/DashboardBusiness/Pages/Home/AddNew/Instructor';
import AddNewWrapper from 'components/DashboardBusiness/Pages/Home/AddNew';

const Main = () => {
  return (
    <Fragment>
    <Head><title>Unifaires | Add Instructor</title></Head>
    <BusinessWrapper content={<AddNewWrapper content={<AddInstructor />} />}/>    
    </Fragment>
  );
};
export default Main;