import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import InvitesCard from 'components/DashboardComponents/InvitesCard';
import { EmptyAccountsContentSection } from '../accounts.styles';


const InvitesSection = () => {
    const {userOptions} = businessModule;

    return (
    <>
        {/* <EmptyAccountsContentSection>
        <h6>You have not invited anyone yet.</h6>
        </EmptyAccountsContentSection> */}
        { userOptions.map( (section) => (
            section.invites.map( mode => (
                <InvitesCard
                    // onClick={handleClick}
                    key={mode.id}
                    variant={"business_org_card"}
                    image={mode.image}
                    name={mode.name}
                    email={mode.email}
                    role={mode.role}
                    status={mode.status}
                />
            ))
        ))}
    </>
    );
};

export default InvitesSection;
