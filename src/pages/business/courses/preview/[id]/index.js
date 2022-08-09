import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import LearningSection from 'components/DashboardIndividual/Pages/Learning';
import SpecificCourseSection from 'components/DashboardIndividual/Pages/Learning/SpecificCourse';
import BusinessWrapper from 'components/DashboardBusiness';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Course Preview</title>
    </Head>
      <BusinessWrapper 
        content={(<LearningSection content={(<SpecificCourseSection />)} />)}
      />
  </Fragment>
  );
};
export default Main;