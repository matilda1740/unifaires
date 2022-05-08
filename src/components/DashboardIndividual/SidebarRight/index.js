import React, { useState } from 'react';
import { userModule } from 'common/data/appData';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { ProfileCard, ProfileCardSkills} from '../../DashboardBusiness/business.style' ;

import avatarIcon from 'public/images/dashboard/Dashboard/avatarIcon.svg'
import verifiedIcon from 'public/images/dashboard/verifiedIcon.svg'
const SidebarRight = () => {
  const {company, suite} = userModule;
  const [state, setState] = useState({
  });
  

  return (
    <ProfileCard className="sidebar_right">
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

        {/* <Heading as="h5" content={suite}/> */}
        {/* FORMER PROFILE CARD */}
        {/* <ProfileCard className="profile_card">
            <img className="profile_pic" src={profileImg?.src} alt="Profile"/> 
            <div className="profile_info">
            <Text as="p" content={"Janice Smith"}/>
            <Text as="p" content={"info@janicesmith.com"}/>
            <Text as="p" content={"Harvard University"}/>
            </div>
            <img className="profile_badge" src={badgeIcon?.src} alt="Badge"/> 

        </ProfileCard> */}

        {/* NEW PROFILE CARD */}
        {/* SKILL PROFILE */}
 
               

        
               
    </ProfileCard>
  );
};

export default SidebarRight;
