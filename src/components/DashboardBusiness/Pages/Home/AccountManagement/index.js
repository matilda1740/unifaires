import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import {useRouter} from 'next/router'

import { businessModule } from 'common/data/appData';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar, SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import SwipeableComponent from 'components/DashboardComponents/SwipeableComponent';
import DashboardBadges from 'components/DashboardComponents/DashboardBadge';
import { ArrowForwardIos, AutoStoriesOutlined, HomeRepairServiceOutlined, MilitaryTechOutlined, NotificationsOutlined, SearchOutlined } from '@mui/icons-material';
import { AccountsBarEach, AccountsBarWrapper, AccountsContentSection, AccountsHeadSection } from './accounts.styles';

// --------------- STYLES -------------------

// -----------------------------------------

import CoursesIcon from 'public/images/dashboard/Courses.svg'
import JobIcon from 'public/images/dashboard/Dashboard/Work.svg'
import MedalIcon from 'public/images/dashboard/Group.svg'
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';

import ModalWrapper from '../AddNew';
import AddOrganization from '../AddNew/Organization'
// import ModuleHeading from 'components/DashboardComponents/ModuleHeading';

const AccountsManagement = ({content}) => {
    const {firstname, accounts, userOptions} = businessModule;
    const [instructors, setInstructors] = useState();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // console.log("Modal: ", isOpen)
    return (
    <>
        {/* <ModuleHeading
            heading={"My Dashboard"}
            subheading={`Welcome ${firstname}, here are your daily analytics`}
            bottomRow={true}
        /> */}
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"My Dashboard"}/>
                <Text as="p" content={`Welcome ${firstname}, here are your daily analytics`}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <SearchOutlined />
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse"> <NotificationsOutlined /></div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
            <SwipeableComponent />           
            <div className="bottom_row dashboard_slides">
                <DashboardBadges 
                    label={"Posted Courses"}
                    number={980}
                    icon={<AutoStoriesOutlined />}
                    // icon={CoursesIcon}

                />
                <DashboardBadges 
                    label={"Posted Jobs"}
                    number={980}
                    // icon={JobIcon}
                    icon={<HomeRepairServiceOutlined />}
                />
                <DashboardBadges 
                    label={"Awarded Certifications & Badges"}
                    number={980}
                    // icon={MedalIcon}
                    icon={<MilitaryTechOutlined />}
                />                               
            </div>

        </ModuleHeading>

        <ModuleSection>
            <AccountsHeadSection>

                <AccountsBarWrapper>
                    { accounts.map( account => (
                        <Link href={`/business/dashboard/${account.title}`} key={account.id}>
                        <AccountsBarEach className={router.pathname === `/business/dashboard/${account.title}` ? "active" : ""}>
                            <h6>{account.title}</h6>
                            <span>{account.number}</span>
                        </AccountsBarEach>
                        </Link>
                    ))}
                </AccountsBarWrapper>

            </AccountsHeadSection>

            <AccountsContentSection>
                {content}
            </AccountsContentSection>
        </ModuleSection>  

        {
            isOpen &&
            <ModalWrapper 
                content={<AddOrganization isOpen={isOpen}  closeModal={closeModal}/>}
            />              
        }
    </>
    );
};

export default AccountsManagement;
