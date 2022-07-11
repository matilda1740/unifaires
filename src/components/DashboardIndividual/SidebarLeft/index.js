import React, { useState } from 'react';
import { individualModule } from 'common/data/appData';
import Link from 'next/link';
import {useRouter} from 'next/router'
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import { SectionHeader } from '../../globalApp.style';
import { SectionWrapper,  ProfileCard, DashboardRow } from '../../DashboardBusiness/business.style' ;
import SidebarCard, { MobileHeader }  from './sidebarleft.style';

import MenuBarIcon from 'public/images/dashboard/MenuBar.svg'
import {AccountBalanceOutlined, AccountBalanceWalletOutlined, CheckCircleOutlined, GroupOutlined, HomeRepairServiceOutlined, HomeOutlined, MessageOutlined, CloseOutlined, SearchOutlined, SettingsOutlined, HelpOutlineOutlined } from '@mui/icons-material';

import profileImg from 'public/images/dashboard/Dashboard/icon.svg'
import unifairesLogo from 'public/images/unifaireslogofull.svg'

import UserSelectBox from 'components/DashboardComponents/UserSelectBox';


const SidebarLeft = ({userType, isNavOpen, setIsNavOpen}) => {
    const {company, suite} = individualModule;
    const [state, setState] = useState({
    });
    const router = useRouter();

    const customPathNames = {
        accountmanagement: `/${userType}/accountmanagement`,
        jobs: `/${userType}/jobs`
    }

    // CONTROL MOBILE NAV BAR

    return (
    <SidebarCard className={ isNavOpen ? "expanded" : "not_expanded"}>
        {/* IF MOBLIE NAV */}
        <MobileHeader>
            <div className="ellipse" onClick={() => setIsNavOpen(!isNavOpen)}>
                <CloseOutlined />
            </div>
            <div className="ellipse">
                <SearchOutlined />
            </div>
        </MobileHeader>


        {/* <Heading as="h4" content={company}/> */}
        {/* <Heading as="h5" content={userType}/> */}
        <div className="logo_div">
            <img src={unifairesLogo?.src} alt="logo" />
        </div>
        <UserSelectBox userType={userType}/>
        <div className="dash_sectionOne">
            <Link href={`/${userType}/dashboard`}>
                <DashboardRow className={router.pathname === `/${userType}/dashboard` ? "dash_row dash_selected" : "dash_row"}>
                    <HomeOutlined />
                    <Text as="p" content={"Dashboard"}/>
                </DashboardRow>
            </Link>
            <Link href="/individual/learning/courses">
                <DashboardRow className={ router.pathname === "/individual/learning/courses" || router.pathname === "/individual/learning/certifications" || router.pathname === "/individual/learning/badges"   ? "dash_row dash_selected" : "dash_row"}>
                    <GroupOutlined /> 
                    <Text as="p" content={"My Learning"}/>
                </DashboardRow>
            </Link>
            <Link href={`/${userType}/jobs`}>
                <DashboardRow className={ router.pathname.indexOf(customPathNames.jobs) >= 0 ? "dash_row dash_selected" : "dash_row"}>
                    <HomeRepairServiceOutlined /> 
                    <Text as="p" content={"Jobs"}/>
                </DashboardRow>
            </Link>

            <Link href={`${userType}/funding`}>
                <DashboardRow className={ router.pathname === "/individual/funding" ? "dash_row dash_selected" : "dash_row"}>
                    <AccountBalanceWalletOutlined /> 
                    <Text as="p" content={"Funding"}/>
                </DashboardRow>
            </Link>
            <Link href="/individual/messaging">
                <DashboardRow className={ router.pathname === "/individual/messaging" ? "dash_row dash_selected" : "dash_row"}>
                    <MessageOutlined /> 
                    <Text as="p" content={"Messages"}/>
                </DashboardRow>
            </Link>
            {
                userType === "business" &&
                <>
                <Link href={`/${userType}/accountmanagement/courses`}>
                <DashboardRow className={ router.pathname.indexOf(customPathNames.accountmanagement) >= 0  ? "dash_row dash_selected" : "dash_row"}>
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
                    <SettingsOutlined /> 
                    <Text as="p" content={"Settings"}/>
                </DashboardRow> 
            </Link>
            <Link href="/individual/help">
                <DashboardRow className="dash_row">
                    <HelpOutlineOutlined /> 
                    <Text as="p" content={"Help"}/>
                </DashboardRow> 
            </Link>
            <Link href="/"><button>Sign Out</button></Link>
        </div>  
               

        
               
    </SidebarCard>
  );
};

export default SidebarLeft;
