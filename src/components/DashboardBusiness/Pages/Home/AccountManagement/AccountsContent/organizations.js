import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import OrganizationCard from 'components/DashboardComponents/OrganizationCard';


const OrganizationSection = () => {
    const {userOptions} = businessModule;

    return (
    <>
        { userOptions.map( (section) => (
            section.organizations.map( mode => (
                <OrganizationCard
                    // onClick={handleClick}
                    key={mode.id}
                    variant={"business_org_card"}
                    image={mode.image}
                    type={mode.type}
                    company={mode.company}
                    staffNo={mode.staffNo}
                    adminNo={mode.adminNo}
                />
            ))
        ))}
    </>
    );
};

export default OrganizationSection;

