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
import AuthWrapper from 'components/AuthPages';
import LoginCard from 'components/AuthPages/LoginPage';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Login Page</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link href="http://fonts.cdnfonts.com/css/maison-neue" rel="stylesheet"/>
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              {/* <Navbar /> */}
            </DrawerProvider>
          </Sticky>
          <AuthWrapper content={(<LoginCard/> )}/>
          {/* <Footer /> */}
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;