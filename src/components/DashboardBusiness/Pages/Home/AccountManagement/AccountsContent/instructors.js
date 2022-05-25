import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import InstructorCard from '../../../../../DashboardComponents/InstructorCard'
// --------------- STYLES -------------------

// -----------------------------------------

const InstructorsSection = () => {
    const {userOptions} = businessModule;

    const handleClick = () => {

    }
    return (
    <>
        { userOptions.map( (section) => (
            section.instructors.map( instructor => (
                <InstructorCard
                    onClick={handleClick}
                    key={instructor.id}
                    variant={"business_instructor_card"}
                    image={instructor.image}
                    name={instructor.name}
                    role={instructor.role}
                    company={instructor.company}
                    preview={instructor.preview}
                    registeredNumber={instructor.registeredNumber}
                    rating={instructor.rating}
                    coursesNumber={instructor.coursesNumber}
                />
            ))
        ))}
    </>
    );
};

export default InstructorsSection;
