import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import AccountsManagement from 'components/DashboardBusiness/Pages/Home/AccountManagement';
import CoursesSection from 'components/DashboardBusiness/Pages/Home/AccountManagement/AccountsContent/courses';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Business | Courses</title></Head>
    <BusinessWrapper content={<AccountsManagement content={<CoursesSection />} />}/>    
  </Fragment>
  );
};
export default Main;