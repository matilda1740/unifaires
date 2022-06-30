import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import UserWrapper from 'components/DashboardIndividual';
// import ResumeCoursesSection from 'components/DashboardIndividual/Pages/Home/resume';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Unifaires | Resume Course</title>     
        </Head>
        {/* <UserWrapper content={(<ResumeCoursesSection/>)}/> */}
      </Fragment>
  );
};
export default Main;