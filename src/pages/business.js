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
import BusinessModule from 'components/BusinessDashboard';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Business Suite</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          {/* Load google fonts */}
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@500&display=swap'
            rel="stylesheet"
          ></link>
        </Head>
        <ResetCSS />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AppWrapper>
        {/* <h1>Contact</h1> */}
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              {/* <Navbar /> */}
            </DrawerProvider>
          </Sticky>
          <BusinessModule/>
          {/* <Footer /> */}
        </AppWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;