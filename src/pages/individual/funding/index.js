// NEW DESIGN
import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import IndividualWrapper from 'components/DashboardIndividual';
import FundingWrapper from 'components/DashboardBusiness/Pages/Funding';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Individual | Funding</title>
        </Head>
          <IndividualWrapper 
          content={(<FundingWrapper userType={"individual"} />)}
          />
      </Fragment>
  );
};
export default Main;