import React, { useState } from 'react';
import { userModule } from 'common/data/appData';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { SectionWrapper, SidebarCard,  ProfileCard, DashboardRow } from '../../DashboardBusiness/business.style' ;

import accountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Account.svg'
import activityIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Activity.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import discountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Discount.svg'
import homeIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Home.svg'
import postsIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Work.svg'
import settingIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Setting.svg'
import helpIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Help.svg'
import feedbackIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Feedback.svg'

// import badgeIcon from 'public/images/dashboard/Dashboard/badge.svg'
import profileImg from 'public/images/dashboard/Dashboard/icon.svg'


const SidebarLeft = () => {
  const {company, suite} = userModule;
  const [state, setState] = useState({
  });
  

  return (
    <SidebarCard>
        <Heading as="h4" content={company}/>
        <Heading as="h5" content={suite}/>
        {/* <ProfileCard className="profile_card">
            <img className="profile_pic" src={profileImg?.src} alt="Profile"/> 
            <div className="profile_info">
            <Text as="p" content={"Janice Smith"}/>
            <Text as="p" content={"info@janicesmith.com"}/>
            <Text as="p" content={"Harvard University"}/>
            </div>
            <img className="profile_badge" src={badgeIcon?.src} alt="Badge"/> 

        </ProfileCard> */}
        <div className="dash_sectionOne">
            <DashboardRow className="dash_row">
                <img src={homeIcon?.src} alt="Dashboard" /> 
                <Text as="p" content={"Dashboard"}/>
            </DashboardRow>
            <DashboardRow className="dash_row">
                <img src={accountIcon?.src} alt="My Learning" /> 
                <Text as="p" content={"My Learning"}/>
            </DashboardRow>
            <DashboardRow className="dash_row">
                <img src={postsIcon?.src} alt="Jobs" /> 
                <Text as="p" content={"Jobs"}/>
            </DashboardRow>
            <DashboardRow className="dash_row">
                <img src={postsIcon?.src} alt="Funding" /> 
                <Text as="p" content={"Funding"}/>
            </DashboardRow>
            <DashboardRow className="dash_row">
                <img src={activityIcon?.src} alt="Messages" /> 
                <Text as="p" content={"Messages"}/>
            </DashboardRow>
        </div>         

    
        <div className="dash_sectionTwo">
            <DashboardRow className="dash_row">
                <img src={settingIcon?.src} alt="Settings" /> 
                <Text as="p" content={"Settings"}/>
            </DashboardRow> 
            <DashboardRow className="dash_row">
                <img src={helpIcon?.src} alt="Help" /> 
                <Text as="p" content={"Help"}/>
            </DashboardRow> 
            <DashboardRow className="dash_row">
                <img src={feedbackIcon?.src} alt="Feedback" /> 
                <Text as="p" content={"Give Feedback"}/>
            </DashboardRow> 
             <button>Sign Out</button>
        </div>  
               

        
               
    </SidebarCard>
  );
};

export default SidebarLeft;
