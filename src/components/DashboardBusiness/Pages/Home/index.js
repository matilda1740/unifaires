import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import { useRouter } from 'next/router'
import { staticDashboard } from 'common/data/appData';

import { NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar } from 'components/DashboardBusiness/business.style';


import DashboardCard from 'components/DashboardComponents/DashboardCard';
import ModulesHeading from 'components/DashboardComponents/ModulesHeading';

const HomeWrapper = () => {
    const router = useRouter(); 

    return (
        <>
        <ModulesHeading
            heading={"My Dashboard"}
            subheading={"Welcome, here are your daily analytics"}
        />
        <ModuleSection className="module_column_to_row">
            {
            staticDashboard?.map( (module, i) => (
                module.position !== 0 &&
                <DashboardCard 
                    key={i}
                    icon={module.icon}
                    heading={module.heading}
                    subheading={module.subheading}
                    handleClick={ () => router.push(`/business/${module.moduleRoute}`)}
                />
            ))
            }
        </ModuleSection>
    </>
    );
}

export default HomeWrapper;