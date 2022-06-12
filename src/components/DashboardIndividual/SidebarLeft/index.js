import React, { useState } from 'react';
import { individualModule } from 'common/data/appData';
// ------- ROUTING ---------
import Link from 'next/link';
import {useRouter} from 'next/router'
// --------- END ---------
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../globalApp.style';
import { SectionWrapper,  ProfileCard, DashboardRow } from '../../DashboardBusiness/business.style' ;

import accountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Account.svg'
import activityIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Activity.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import discountIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Discount.svg'
import homeIcon from 'public/images/dashboard/Dashboard/Dashboard/Home/Home.svg'
import postsIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Work.svg'
import settingIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Setting.svg'
import helpIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Help.svg'
import feedbackIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Feedback.svg'
import CloseIcon from 'public/images/dashboard/Close.svg'
import SearchIcon from 'public/images/dashboard/Search.svg'
import MenuBarIcon from 'public/images/dashboard/MenuBar.svg'


import { AccountBalance, AccountBalanceOutlined, CheckCircleOutlined } from '@mui/icons-material';

// import badgeIcon from 'public/images/dashboard/Dashboard/badge.svg'
import profileImg from 'public/images/dashboard/Dashboard/icon.svg'
import SidebarCard, { MobileHeader }  from './sidebarleft.style';


const SidebarLeft = ({userType, isNavOpen, setIsNavOpen}) => {
    const {company, suite} = individualModule;
    const [state, setState] = useState({
    });
    const router = useRouter();

    // CONTROL MOBILE NAV BAR

    return (
    <SidebarCard className={ isNavOpen ? "expanded" : "not_expanded"}>
        {/* IF MOBLIE NAV */}
        <MobileHeader>
            <div className="ellipse" onClick={() => setIsNavOpen(!isNavOpen)}>
                <img src={CloseIcon?.src} alt="Close" />
            </div>
            <div className="ellipse">
                <img src={SearchIcon?.src} alt="Search" />
            </div>
        </MobileHeader>


        <Heading as="h4" content={company}/>
        <Heading as="h5" content={userType}/>
        <div className="dash_sectionOne">
            <Link href={`/${userType}/dashboard`}>
                <DashboardRow className={router.pathname === "/individual/dashboard" || router.pathname === "/business/dashboard"  ? "dash_row dash_selected" : "dash_row"}>
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

            <Link href="/individual/funding">
                <DashboardRow className={ router.pathname === "/individual/funding" ? "dash_row dash_selected" : "dash_row"}>
                    <img src={postsIcon?.src} alt="Funding" /> 
                    <Text as="p" content={"Funding"}/>
                </DashboardRow>
            </Link>
            <Link href="/individual/messaging">
                <DashboardRow className={ router.pathname === "/individual/messaging" ? "dash_row dash_selected" : "dash_row"}>
                    <img src={activityIcon?.src} alt="Messages" /> 
                    <Text as="p" content={"Messages"}/>
                </DashboardRow>
            </Link>
            {
                userType === "business" &&
                <>
                <Link href={`/${userType}/accountmanagement/courses`}>
                <DashboardRow className={ router.pathname === `/business/accountmanagement/courses` || router.pathname === `/business/accountmanagement/organizations` || router.pathname === `/business/accountmanagement/instructors` || router.pathname === `/business/accountmanagement/invites` || router.pathname === `/business/accountmanagement/students` ? "dash_row dash_selected" : "dash_row"}>
                    <AccountBalanceOutlined />
                    <Text as="p" content={"Manage Account"}/>
                </DashboardRow>
                </Link> 
                <Link href={`/${userType}/vettedtalent`}>
                <DashboardRow className={ router.pathname === `/${userType}/vettedtalent` ? "dash_row dash_selected" : "dash_row"}>
                    <CheckCircleOutlined />
                    <Text as="p" content={"Vetted Talent"}/>
                </DashboardRow>
                </Link>              
                </>
            }

        </div>         

    
        <div className="dash_sectionTwo">
            <Link href="/individual/settings/profile">
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
