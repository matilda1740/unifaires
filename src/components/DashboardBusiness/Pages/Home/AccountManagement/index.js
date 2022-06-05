import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import {useRouter} from 'next/router'

import { businessModule } from 'common/data/appData';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar, SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import SwipeableComponent from 'components/DashboardComponents/SwipeableComponent';
import { Search, Notifications } from '@material-ui/icons'
import DashboardBadges from 'components/DashboardComponents/DashboardBadge';
import { ArrowForwardIos, AutoStories } from '@mui/icons-material';
import { AccountsBarEach, AccountsBarWrapper, AccountsContentSection, AccountsHeadSection } from './accounts.styles';

// --------------- STYLES -------------------

// -----------------------------------------

import CoursesIcon from 'public/images/dashboard/Courses.svg'
import JobIcon from 'public/images/dashboard/Dashboard/Work.svg'
import MedalIcon from 'public/images/dashboard/Group.svg'
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';

import AddNewWrapper from '../AddNew';
import AddOrganization from '../AddNew/Organization'

const AccountsManagement = ({content}) => {
    const {firstname, accounts, userOptions} = businessModule;
    const [instructors, setInstructors] = useState();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    console.log("Modal: ", isOpen)
    return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"My Dashboard"}/>
                <Text as="p" content={`Welcome ${firstname}, here are your daily analytics`}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <Search />
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse"> <Notifications /></div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
            <SwipeableComponent />           
            <div className="bottom_row dashboard_slides">
                <DashboardBadges 
                    label={"Posted Courses"}
                    number={980}
                    // icon={<AutoStories/>}
                    icon={CoursesIcon}

                />
                <DashboardBadges 
                    label={"Posted Jobs"}
                    number={980}
                    icon={JobIcon}
                />
                <DashboardBadges 
                    label={"Awarded Certifications & Badges"}
                    number={980}
                    icon={MedalIcon}
                />                               
            </div>

        </ModuleHeading>

        <ModuleSection>
            <AccountsHeadSection>
                <div className="title_row">
                <Heading as="h5" content={"Accounts"}></Heading>
                <div className="right_div">
                    <BillingButton 
                    variant={"primary"}
                    position={""}
                    text={"Add New User"}
                    openModal={openModal}
                    isOpen={isOpen}
                    />
                    <SeeAllStyle>
                        <p>See All</p>
                        <ArrowForwardIos />
                    </SeeAllStyle>
                </div>
                </div>

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
            <AddNewWrapper 
                content={<AddOrganization isOpen={isOpen}  closeModal={closeModal}/>}
            />              
        }
    </>
    );
};

export default AccountsManagement;
