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
import { ToolBarEach, ToolBarWrapper } from '../ManageAccounts/manageaccounts.style';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';

const VettedTalent = ({requestContent, profileContent}) => {
    const {firstname, vettedtalents, userOptions} = businessModule;

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [currentView, setCurrentView] = useState("requests");

    return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"Vetted Talent"}/>
                <Text as="p" content={`Welcome ${firstname}, vet talents here`}/>
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

            <ToolBarWrapper>
                { vettedtalents.map( vettedtalent => (
                <div onClick={() => setCurrentView(vettedtalent.reference)} key={vettedtalent.id}>
                    <ToolBarEach className={ currentView === vettedtalent.reference ? "active" : ""}>
                    {vettedtalent.icon}
                    <h6>{vettedtalent.title}</h6>
                    </ToolBarEach>
                </div>
                ))}
            </ToolBarWrapper>            
        </AccountsHeadSection>
        

        <ModuleSection>
            <AccountsContentSection>
                {
                    currentView === "profiles" ? 
                     profileContent
                    : 
                    requestContent
                }
            </AccountsContentSection>
        </ModuleSection>  
    </>
    );
};

export default VettedTalent;
