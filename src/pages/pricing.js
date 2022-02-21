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
import PricingPageSection from 'components/PricingPage';

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>Unifaires | Pricing Page</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next pricing page" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@100&display=swap'
            rel="stylesheet"
          ></link>        
        </Head>
        <ResetCSS />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
            </DrawerProvider>
          </Sticky>
          <PricingPageSection />
        </AppWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;