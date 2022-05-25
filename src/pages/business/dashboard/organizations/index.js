import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appCreative';
import { GlobalStyle, AppWrapper } from 'components/globalApp.style';
import ResetCSS from 'common/assets/css/style';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import AccountsManagement from 'components/DashboardBusiness/Pages/Home/AccountManagement';
import OrganizationSection from 'components/DashboardBusiness/Pages/Home/AccountManagement/AccountsContent/organizations';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Organizations</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link href="http://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet"/>   
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          </Sticky>
          <BusinessWrapper content={<AccountsManagement content={<OrganizationSection />} />}/>    
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;