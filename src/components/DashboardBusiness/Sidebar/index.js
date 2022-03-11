import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { SectionWrapper, SidebarCard,  ProfileCard, DashboardRow } from '../business.style' ;
import { businessModule } from 'common/data/appData';
import { useRouter } from 'next/router'
import accountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Account.svg'
import activityIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Activity.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import discountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Discount.svg'
import homeIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Home.svg'
import postsIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Work.svg'
import settingIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Setting.svg'
import helpIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Help.svg'
import feedbackIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Feedback.svg'

import badgeIcon from 'public/images/dashboard/Dashboard/badge.svg'
import profileImg from 'public/images/dashboard/Dashboard/icon.svg'


// import {Home} from '@material-ui/icons';
const SidebarModule = () => {
  const {company, suite} = businessModule;
  const [state, setState] = useState({
  });
  

  return (
    <SidebarCard>
        <Heading as="h4" content={company}/>
        <Heading as="h5" content={suite}/>
        <ProfileCard className="profile_card">
            <img className="profile_pic" src={profileImg?.src} alt="Profile"/> 
            <div className="profile_info">
            <Text as="p" content={"Janice Smith"}/>
            <Text as="p" content={"info@janicesmith.com"}/>
            <Text as="p" content={"Harvard University"}/>
            </div>
            <img className="profile_badge" src={badgeIcon?.src} alt="Badge"/> 

        </ProfileCard>
        <DashboardRow className="dash_row">
            <img src={homeIcon?.src} alt="Home" /> 
            <Text as="p" content={"Home"}/>
        </DashboardRow>
        <DashboardRow className="dash_row">
            <img src={accountIcon?.src} alt="Account" /> 
            <Text as="p" content={"Accounts"}/>
        </DashboardRow>
        <DashboardRow className="dash_row">
            <img src={postsIcon?.src} alt="Posts" /> 
            <Text as="p" content={"Posts"}/>
        </DashboardRow>
        <DashboardRow className="dash_row">
            <img src={postsIcon?.src} alt="Messages" /> 
            <Text as="p" content={"Messages"}/>
        </DashboardRow>
        <DashboardRow className="dash_row">
            <img src={activityIcon?.src} alt="Ads" /> 
            <Text as="p" content={"Ads & Post Insights"}/>
        </DashboardRow>
         <DashboardRow className="dash_row">
            <img src={discountIcon?.src} alt="Vouchers" /> 
            <Text as="p" content={"Voucher Codes"}/>
        </DashboardRow>     
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

export default SidebarModule;
