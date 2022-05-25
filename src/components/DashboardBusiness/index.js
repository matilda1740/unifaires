import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import SectionWrapper, { ModuleColumn } from './business.style';
import SidebarLeft from 'components/DashboardIndividual/SidebarLeft';
import SidebarRight from 'components/DashboardIndividual/SidebarRight';

// --------------- STYLES -------------------

// -----------------------------------------

const BusinessWrapper = ({content}) => {
    const {userOptions} = businessModule;

    return (
    <SectionWrapper>
        <SidebarLeft userType={"Business"}/>
        <ModuleColumn>{content}</ModuleColumn>
        
        <SidebarRight/>
    </SectionWrapper>
    );
};

export default BusinessWrapper;
