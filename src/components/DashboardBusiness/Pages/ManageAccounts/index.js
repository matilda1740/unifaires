import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import {useRouter} from 'next/router'

import { businessModule } from 'common/data/appData';
import { HeadingLeft, HeadingRight, ModuleHeading, ModuleSection, SearchBar} from 'components/DashboardBusiness/business.style';
import { Search, NotificationsOutlined } from '@material-ui/icons';
import { AccountsContentSection, AccountsHeadSection } from 'components/DashboardBusiness/Pages/Home/AccountManagement/accounts.styles';

// --------------- STYLES -------------------

// -----------------------------------------
import { ToolBarEach, ToolBarWrapper } from './manageaccounts.style';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import AddNewWrapper from '../Home/AddNew';
import AddOrganization from '../Home/AddNew/Organization';
import AddInstructor from '../Home/AddNew/Instructor';
import AddStudent from '../Home/AddNew/Student';


const ManageAccounts = ({content}) => {
    const {firstname, accounts, userOptions} = businessModule;
    const [instructors, setInstructors] = useState();
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [modalType, setModalType] = useState("organization");
    const updateModalType = (type) => () => setModalType(type);

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
        </ModuleHeading>

        <AccountsHeadSection>
            <div className="title_row">
                <Heading as="h5" content={"Accounts"}></Heading>
                <div className="right_div">
                    {/* <Link href="/business/accountmanagement/create/instructor"> */}
                    <BillingButton 
                    variant={"primary"}
                    position={""}
                    text={"Add New User"}
                    openModal={openModal}
                    />
                    {/* </Link> */}
                </div>
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
        </AccountsHeadSection>
        

        <ModuleSection>
            <AccountsContentSection>
                {content}
            </AccountsContentSection>
        </ModuleSection>  

        {
            isOpen &&
            <AddNewWrapper 
                isOpen={isOpen}
                closeModal={closeModal} 
                modalType={modalType}
                updateModalType={updateModalType}
                orgContent={<AddOrganization />}
                insContent={<AddStudent />}
                stdContent={<AddInstructor />}
            /> 
        }
    </>
    );
};

export default ManageAccounts;
