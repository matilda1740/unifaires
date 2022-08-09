import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import SectionWrapper, { ModuleColumn } from '../DashboardBusiness/business.style';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import { MobileHeader } from './SidebarLeft/sidebarleft.style'
// --------------
import { MenuOutlined, SearchOutlined } from '@mui/icons-material';

import SkillsMatchingModal from './SkillsMatching';
// --------------

const IndividualWrapper = (props) => {

    const [isNavOpen, setIsNavOpen] = useState(true);
    const [popup, setPopUp] = useState(false)
    const togglePopUp = () => setPopUp(!popup)
  return (
    <SectionWrapper>
      <SidebarLeft userType={"individual"} isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>  
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
          {props.content}
          </ModuleColumn>
      <SidebarRight togglePopUp={togglePopUp} />
      { popup ? <SkillsMatchingModal togglePopUp={togglePopUp} /> : null }
    </SectionWrapper>
  );
};

export default IndividualWrapper;
