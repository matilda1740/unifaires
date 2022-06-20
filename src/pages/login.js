import React, { Fragment } from 'react';
import Head from 'next/head';
import AuthWrapper from 'components/AuthPages';
import LoginCard from 'components/AuthPages/LoginPage';

const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Login Page</title></Head>
    <AuthWrapper content={(<LoginCard/> )}/>
  </Fragment>
  );
};
export default Main;