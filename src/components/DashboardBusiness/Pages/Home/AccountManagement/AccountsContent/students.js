import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import StudentsCard from 'components/DashboardComponents/StudentsCard';


const StudentsSection = () => {
    const {userOptions} = businessModule;

    return (
    <>
        { userOptions.map( (section) => (
            section.students.map( mode => (
                <StudentsCard
                    // onClick={handleClick}
                    key={mode.id}
                    variant={"business_instructor_card"}
                    image={mode.image}
                    name={mode.name}
                    degree={mode.degree}
                    description={mode.description}
                    coursesNo={mode.coursesNo}
                    certificatesNo={mode.certificatesNo}
                />
            ))
        ))}
    </>
    );
};

export default StudentsSection;

