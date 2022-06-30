import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { businessModule } from 'common/data/appData';
import SectionWrapper, { ModuleColumn } from './business.style';
import SidebarLeft from 'components/DashboardIndividual/SidebarLeft';
import SidebarRight from 'components/DashboardIndividual/SidebarRight';
import { MobileHeader } from 'components/DashboardIndividual/SidebarLeft/sidebarleft.style';
import SearchIcon from 'public/images/dashboard/Search.svg'
import MenuBarIcon from 'public/images/dashboard/MenuBar.svg'
import { MenuOutlined, SearchOutlined } from '@mui/icons-material';

// --------------- STYLES -------------------

// -----------------------------------------

const BusinessWrapper = ({content}) => {
    const {userOptions} = businessModule;
    const [isNavOpen, setIsNavOpen] = useState(true);

    return (
    <SectionWrapper>
        <SidebarLeft userType={"business"} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <ModuleColumn>
        {
        isNavOpen &&
        <MobileHeader className="mobile_header">
            <div className="ellipse" onClick={() => setIsNavOpen(!isNavOpen)}>
                <MenuOutlined />
            </div>
            <div className="ellipse">
            <SearchOutlined />
            </div>
        </MobileHeader>
        }        
        {content}
        </ModuleColumn>
        
        <SidebarRight/>
    </SectionWrapper>
    );
};

export default BusinessWrapper;
