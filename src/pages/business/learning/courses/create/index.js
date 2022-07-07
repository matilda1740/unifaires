import React, { Fragment } from 'react';
import Head from 'next/head';
// Page Sections
import BusinessWrapper from 'components/DashboardBusiness';
import LearningWrapper from 'components/DashboardBusiness/Pages/Learning';
import CreateWrapper from 'components/DashboardBusiness/Create';
import CreateCourseForm from 'components/DashboardBusiness/Pages/Learning/Courses/CreateCourse';


const Main = () => {
  return (
  <Fragment>
    <Head><title>Unifaires | Courses</title></Head>
    <BusinessWrapper 
      content={
      <LearningWrapper
        content={<CreateWrapper 
            content={<CreateCourseForm/>}
            formType={"create"}
            objType={"courses"}
        />}
      />} />    
  </Fragment>
  );
};
export default Main;