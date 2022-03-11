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
import SidebarLeft from 'components/DashboardIndividual/SidebarLeft';
import UserResumeCourse from 'components/DashboardIndividual/resume';
import SidebarRight from 'components/DashboardIndividual/SidebarRight';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Resume Course</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link href="http://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet"/>       
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            {/* <DrawerProvider>
            </DrawerProvider> */}
          </Sticky>
          {/* <SidebarLeft/> */}
          <UserResumeCourse/>
          {/* <SidebarRight/> */}
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;