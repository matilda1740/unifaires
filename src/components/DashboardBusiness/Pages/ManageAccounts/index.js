import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import {useRouter} from 'next/router'

import { businessModule } from 'common/data/appData';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar, SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import SwipeableComponent from 'components/DashboardComponents/SwipeableComponent';
import { Search, Notifications, NotificationsOutlined } from '@material-ui/icons'
import DashboardBadges from 'components/DashboardComponents/DashboardBadge';
import { ArrowForwardIos, AutoStories, PersonOutlined, CorporateFareOutlined, SchoolOutlined, MarkAsUnreadOutlined } from '@mui/icons-material';
import { AccountsBarEach, AccountsBarWrapper, AccountsContentSection, AccountsHeadSection } from 'components/DashboardBusiness/Pages/Home/AccountManagement/accounts.styles';

// --------------- STYLES -------------------

// -----------------------------------------

import CoursesIcon from 'public/images/dashboard/Courses.svg'
import JobIcon from 'public/images/dashboard/Dashboard/Work.svg'
import MedalIcon from 'public/images/dashboard/Group.svg'
import { ToolBarEach, ToolBarWrapper } from './manageaccounts.style';


const ManageAccounts = ({content}) => {
    const {firstname, accounts, userOptions} = businessModule;
    const [instructors, setInstructors] = useState();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"Account Management"}/>
                <Text as="p" content={`Welcome ${firstname}, manage your accounts here`}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <Search />
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse"> <NotificationsOutlined /></div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
            <ToolBarWrapper>
                { accounts.map( account => (
                <Link href={`/business/accountmanagement/${account.title}`} key={account.id}>
                    <ToolBarEach className={router.pathname === `/business/accountmanagement/${account.title}` ? "active" : ""}>
                    {account.icon}
                    <h6>{account.title}</h6>
                    </ToolBarEach>
                </Link>
                ))}
            </ToolBarWrapper>
        </ModuleHeading>

        <ModuleSection>
            <AccountsContentSection>
                {content}
            </AccountsContentSection>
        </ModuleSection>  
    </>
    );
};

export default ManageAccounts;
