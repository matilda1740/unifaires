// NEW DESIGN
import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import IndividualWrapper from 'components/DashboardIndividual';
import JobsWrapper from 'components/DashboardIndividual/Pages/Jobs';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Individual | Jobs</title>
        </Head>
          <IndividualWrapper 
          content={(<JobsWrapper userType={"individual"} />)}
          />
      </Fragment>
  );
};
export default Main;