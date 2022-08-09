import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import IndividualWrapper from 'components/DashboardIndividual';
import CoursePreview from 'components/DashboardIndividual/Pages/Learning/CoursePreview';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Unifaires | Preview Course</title>
        </Head>
          <IndividualWrapper 
            content={(<CoursePreview />)}
          />
      </Fragment>
  );
};
export default Main;