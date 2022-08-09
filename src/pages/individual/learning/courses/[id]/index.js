import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import IndividualWrapper from 'components/DashboardIndividual';
import LearningSection from 'components/DashboardIndividual/Pages/Learning';
import SpecificCourseSection from 'components/DashboardIndividual/Pages/Learning/SpecificCourse';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Course Preview</title>
    </Head>
      <IndividualWrapper 
        content={(<LearningSection content={(<SpecificCourseSection />)} />)}
      />
  </Fragment>
  );
};
export default Main;