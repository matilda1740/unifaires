import React, { useState } from 'react';
import { userModule } from 'common/data/appData';
// ------- ROUTING ---------
import Link from 'next/link';
import {useRouter} from 'next/router'
// --------- END ---------
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { SectionWrapper, SidebarCard,  ProfileCard, DashboardRow } from '../../DashboardBusiness/business.style' ;

import accountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Account.svg'
import activityIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Activity.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import discountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Discount.svg'
import homeIcon from 'public/images/dashboard/Dashboard/Dashboard/Home/Home.svg'
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
    const router = useRouter();
    return (
    <SidebarCard>
        <Heading as="h4" content={company}/>
        <Heading as="h5" content={suite}/>
        <div className="dash_sectionOne">
            <Link href="/individual/dashboard">
                <DashboardRow className={router.pathname === "/individual/dashboard" ? "dash_row dash_selected" : "dash_row"}>
                    <img src={homeIcon?.src} alt="Dashboard" /> 
                    <Text as="p" content={"Dashboard"}/>
                </DashboardRow>
            </Link>
            <Link href="/individual/learning/courses">
                <DashboardRow className={ router.pathname === "/individual/learning/courses" || router.pathname === "/individual/learning/certifications" || router.pathname === "/individual/learning/badges"   ? "dash_row dash_selected" : "dash_row"}>
                    <img src={accountIcon?.src} alt="My Learning" /> 
                    <Text as="p" content={"My Learning"}/>
                </DashboardRow>
            </Link>
            <Link href="/individual/jobs">
                <DashboardRow className={ router.pathname === "/individual/jobs" ? "dash_row dash_selected" : "dash_row"}>
                    <img src={postsIcon?.src} alt="Jobs" /> 
                    <Text as="p" content={"Jobs"}/>
                </DashboardRow>
            </Link>


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
            <Link href="/individual/settings">
                <DashboardRow className="dash_row">
                    <img src={settingIcon?.src} alt="Settings" /> 
                    <Text as="p" content={"Settings"}/>
                </DashboardRow> 
            </Link>
            <Link href="/individual/help">
                <DashboardRow className="dash_row">
                    <img src={helpIcon?.src} alt="Help" /> 
                    <Text as="p" content={"Help"}/>
                </DashboardRow> 
            </Link>
            <Link href="/login"><button>Sign Out</button></Link>
        </div>  
               

        
               
    </SidebarCard>
  );
};

export default SidebarLeft;
