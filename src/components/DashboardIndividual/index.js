import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SectionWrapper, { ModuleColumn } from '../DashboardBusiness/business.style';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import { MobileHeader } from './SidebarLeft/sidebarleft.style'
// --------------
import SearchIcon from 'public/images/dashboard/Search.svg'
import MenuBarIcon from 'public/images/dashboard/MenuBar.svg'
// --------------

const UserWrapper = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <SectionWrapper>
      <SidebarLeft isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>  
          <ModuleColumn>
          {
          isNavOpen &&
            <MobileHeader className="mobile_header">
              <div className="ellipse" onClick={() => setIsNavOpen(!isNavOpen)}>
                  <img src={MenuBarIcon?.src} alt="Menu" />
              </div>
              <div className="ellipse">
                <img src={SearchIcon?.src} alt="Search" />
              </div>
            </MobileHeader>
          }
          {props.content}
          </ModuleColumn>
      <SidebarRight/>
    </SectionWrapper>
  );
};

export default UserWrapper;
