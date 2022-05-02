import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'

import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import SectionWrapper, {FilterSeeAllContainer, FilterButton, ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, JobCard, DashboardBadge, SearchBar } from '../../../DashboardBusiness/business.style';

import { MessagingSectionWrapper, BoxWrapper, ChatForm, ColumnConversation, ColumnChat, ConversationHeading, ConversationLinks, DaySectionDivider } from '../Messaging/messaging.style';

import ConversationBox from '../Messaging/ConversationBox';

import { userModule } from 'common/data/appData';

import notificationIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Notification.svg'
import showIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Show.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import arrowDownIcon from 'public/images/dashboard/Dashboard/arrowDown2.svg'
import searchIcon from 'public/images/dashboard/Dashboard/search.svg'

// SETTINGS ICONS

import settingsIcon from 'public/images/dashboard/settings/Setting.svg'
import { ModuleHeader, ProfileForm } from './settings.style';
import ProfileSection from './Profile';

const SettingsSection = (props) => {
  const {userOptions} = userModule;

    const router = useRouter();

  return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"Settings"}/>
                <Text as="p" content={""}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <img src={searchIcon?.src} alt="Search" /> 
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse">
                <img src={notificationIcon?.src} alt="Notify" /> 
                </div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
        </ModuleHeading>

        <MessagingSectionWrapper>

            <ColumnConversation className="column1_settings">
                <Heading as="h6" content={"Settings"}/>
                <BoxWrapper>
                    <ConversationBox href="/individual/settings/profile" className={ router.pathname === "/individual/settings/profile" ? "active settings_div" : "settings_div"}>
                        <div className="icon_div">
                            <img src={settingsIcon?.src} alt="Settings" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Profile"}></Text>
                            <Text as="p" content={"Edit your name and how people"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox href="/individual/settings/billings" className={ router.pathname === "/individual/settings/billings" ? "active settings_div" : "settings_div"}>
                        <div className="icon_div">
                            <img src={settingsIcon?.src} alt="Settings" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Billings"}></Text>
                            <Text as="p" content={"Edit your name and how people"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox href="/individual/settings/notifications" className={ router.pathname === "/individual/settings/notifications" ? "active settings_div" : "settings_div"}>
                        <div className="icon_div">
                            <img src={settingsIcon?.src} alt="Settings" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Notifications"}></Text>
                            <Text as="p" content={"Edit your name and how people"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox href="/individual/settings/security" className={ router.pathname === "/individual/settings/security" ? "active settings_div" : "settings_div"}>
                        <div className="icon_div">
                            <img src={settingsIcon?.src} alt="Settings" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Security"}></Text>
                            <Text as="p" content={"Edit your name and how people"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox className="settings_div">
                        <div className="icon_div">
                            <img src={settingsIcon?.src} alt="Settings" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Accessibility / Video Playback"}></Text>
                            <Text as="p" content={"Edit your name and how people"}></Text>
                        </div>
                    </ConversationBox>
                </BoxWrapper>
                {/* {
                    userOptions.map(( section => (
                        section.settings.modules?.length > 0 &&
                        <BoxWrapper>

                            {
                                section.settings.modules.map(( module => (
                                    <ConversationBox className="active settings_div">
                                        <div className="icon_div">
                                            <img src={settingsIcon?.src} alt="Settings" />              
                                        </div>
                                        <div className="profile_details">
                                            <Text as="h6" content={module.title}></Text>
                                            <Text as="p" content={md}></Text>
                                        </div>
                                    </ConversationBox>
                                )))
                            }
                        </BoxWrapper>
                    )))
                }                    
 */}
            </ColumnConversation>
               
            
            <ColumnChat className="column2_settings">
                {props.content}
            </ColumnChat>
        </MessagingSectionWrapper>
    </>
  );
};

export default SettingsSection;
