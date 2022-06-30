import React, { Fragment } from 'react';
import Head from 'next/head';

// Page Sections
import ContactSection from 'components/ContactPage/ContactSection';

const Main = () => {
  return (
      <Fragment>
        <Head>
          <title>Unifaires | Contact Page</title>
        </Head>
        {/* <AppWrapper> */}
          <ContactSection />
        {/* </AppWrapper> */}
      </Fragment>
  );
};
export default Main;