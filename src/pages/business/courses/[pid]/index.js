import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import CoursePreview from 'components/DashboardIndividual/Pages/Learning/CoursePreview';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Unifaires | Course</title>
        </Head>
          <BusinessWrapper 
            content={(<CoursePreview />)}
          />
      </Fragment>
  );
};
export default Main;