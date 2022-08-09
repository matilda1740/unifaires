// NEW DESIGN
import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import IndividualWrapper from 'components/DashboardIndividual';
import LearningWrapper from 'components/DashboardBusiness/Pages/Learning';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Individual | Learning | Courses</title>
        </Head>
          <IndividualWrapper 
          content={(<LearningWrapper userType={"individual"} />)}
          />
      </Fragment>
  );
};
export default Main;