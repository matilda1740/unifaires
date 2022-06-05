import React, { useState } from 'react';
import  { userDetails, courses } from 'common/data/appData';
import { EmptyAccountsContentSection } from '../accounts.styles';
import CoursesCard from 'components/DashboardComponents/Cards/ViewCards/CoursesCard';


const CoursesSection = () => {
    return (
    <>
        {/* <EmptyAccountsContentSection>
        <h6>You have no information to view yet.</h6>
        </EmptyAccountsContentSection> */}

        { courses.map (course => (

        course.status === 0 &&
        <CoursesCard
            key={course.courseID}
            variant={course.status === 0 ? "start" : course.status === 1 && "resume"}
            type={userDetails.userType}
            image={""}
            title={course.title}
            category={course.category}
            description={course.description}
            lessons={course.lessons}
            time={course.time}
            students={course.students}
            percentage={course.percentage}
        />

        ))}
    </>
    );
};

export default CoursesSection;
