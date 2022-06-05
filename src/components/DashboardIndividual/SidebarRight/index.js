import React, { useState } from 'react';
import { individualModule } from 'common/data/appData';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { ProfileCard, ProfileCardSkills} from '../../DashboardBusiness/business.style' ;

import avatarIcon from 'public/images/dashboard/Dashboard/avatarIcon.svg'
import verifiedIcon from 'public/images/dashboard/verifiedIcon.svg'
const SidebarRight = ({togglePopUp}) => {
  const {company, suite} = individualModule;
  const [state, setState] = useState({
  });
  

  return (
    <ProfileCard className="sidebar_right" onClick={() => togglePopUp()}>
        <Heading as="h4" content={"Profile"}/>
        <img src={avatarIcon?.src} alt="Profile"/> 
        <div className="profile_name">
            <Heading as="h5" content={"Andikan Bassey"}/>
            <img src={verifiedIcon?.src} alt="Verified"/> 
        </div>
        <Text as="p" content={"Student, Harvard University"}/>

        <ProfileCardSkills>
            <Text as="p" content={"SKILL PROFILE"}/>
        </ProfileCardSkills>            
    </ProfileCard>
  );
};

export default SidebarRight;
