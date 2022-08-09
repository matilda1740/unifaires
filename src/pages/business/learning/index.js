import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import LearningWrapper from 'components/DashboardBusiness/Pages/Learning';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>My Learning | Courses</title>
        </Head>
          <BusinessWrapper 
          content={(<LearningWrapper userType={"business"} />)}
          />
      </Fragment>
  );
};
export default Main;
