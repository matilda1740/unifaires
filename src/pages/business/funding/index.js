import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import FundingWrapper from 'components/DashboardBusiness/Pages/Funding';
import AllFunds from 'components/DashboardBusiness/Pages/Funding/AllFunds';

const Main = () => {
return (
    <Fragment>
    <Head><title>Unifaires | Funding</title></Head>
    <BusinessWrapper 
    content={(<FundingWrapper content={<AllFunds />} />)}
    />
    </Fragment>
);
};
export default Main;