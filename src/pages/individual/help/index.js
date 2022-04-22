import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/appCreative';
import { GlobalStyle, AppWrapper } from 'components/globalApp.style';
import ResetCSS from 'common/assets/css/style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
// Page Sections
import Navbar from "components/LandingPage/Navbar";
import UserWrapper from 'components/DashboardIndividual';
import HelpSectionWrapper from 'components/DashboardIndividual/Pages/Help';
import HelpCenter from 'components/DashboardIndividual/Pages/Help/HelpCenter';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Help Center</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link href="http://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet"/>       
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          </Sticky>
          <UserWrapper content={(<HelpSectionWrapper content={(<HelpCenter />)}/>)}/>       
          </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;