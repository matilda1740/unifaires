import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appCreative';
import { GlobalStyle, AppWrapper } from 'components/globalApp.style';
import ResetCSS from 'common/assets/css/style';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import ManageAccounts from 'components/DashboardBusiness/Pages/ManageAccounts';
import ManageInstructors from 'components/DashboardBusiness/Pages/ManageAccounts/Instructors';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Manage Accounts</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link href="http://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet"/>      
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          </Sticky>
          <BusinessWrapper content={<ManageAccounts content={<ManageInstructors/>} />}/>    
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;