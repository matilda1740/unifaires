import React from 'react';
import {useRouter} from 'next/router'
import { Home, Paid, Notifications , Security} from '@mui/icons-material'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import styled from 'styled-components';
// --------------------------------------------

const TabNavigationStyle = styled.section`
    /* similar to icon over text wrapper  */
    @media screen and (min-width:768px){
        display: none;
    }
    @media screen and (max-width:480px){
        display: flex;
        justify-content: space-between;
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #f8f8f8;
        padding: 0 0px;

        .eachTab {
            width: 22.5%;
            height: 100%; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            :hover { cursor: pointer }

            .MuiSvgIcon-root {
                color: rgba(18, 53, 91, 1);
                font-size: 20px;
            }
            p { font-size: 10px;}
        }

        .active_tab {
            .MuiSvgIcon-root, p { color: rgba(88, 50, 218, 1); }
        }

    }

`;

const TabNavigation = () => {
    const router = useRouter();
    return (
        <TabNavigationStyle>
            <Link href="/individual/settings/profile">
            <div className={ router.pathname === "/individual/settings/profile" ? "active_tab eachTab" : "eachTab"}>
                <Home />
                <Text as="p" content="Profile" />
            </div>
            </Link>
            <Link href="/individual/settings/billings">
            <div  className={ router.pathname === "/individual/settings/billings" ? "active_tab eachTab" : "eachTab"}>
                <Paid />
                <Text as="p" content="Billings" />
            </div>
            </Link>
            <Link href="/individual/settings/notifications">
            <div className={ router.pathname === "/individual/settings/notifications" ? "active_tab eachTab" : "eachTab"}>
                <Notifications />
                <Text as="p" content="Notifications" />
            </div>
            </Link>
            <Link href="/individual/settings/security">
            <div className={ router.pathname === "/individual/settings/security" ? "active_tab eachTab" : "eachTab"}>
                <Security />
                <Text as="p" content="Security" />
            </div>                
            </Link>
        </TabNavigationStyle>
    );
}

export default TabNavigation;
