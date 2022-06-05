import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import { MessagingSectionWrapper, BoxWrapper, ChatForm, ColumnConversation, ColumnChat, ConversationHeading, ConversationLinks, DaySectionDivider } from './messaging.style';

import ChatBubble from './ChatBubble';
import ChatHeading from './ChatHeading';
import ConversationBox from './ConversationBox';

import SectionWrapper, {FilterSeeAllContainer, FilterButton, ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, JobCard, SearchBar, ModuleSectionHeader } from '../../../DashboardBusiness/business.style';

import { individualModule } from 'common/data/appData';

// UTILITY FUNCTIONS

import {getCurrentDate} from '../../../../utils/CurrentDate';
import moment from 'moment';

// ICONS
import notificationIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Notification.svg'
import showIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Show.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import arrowDownIcon from 'public/images/dashboard/Dashboard/arrowDown2.svg'
import searchIcon from 'public/images/dashboard/Dashboard/search.svg'

import profilePic from 'public/images/dashboard/profile/profile.jpeg'
import optionsIcon from 'public/images/dashboard/dotIcon.svg'

// FORM ACTION ICONS

import readIcon from 'public/images/dashboard/tick.svg'
import SpecificChatSection from './SpecificChat';
import useWindowSize from 'hooks/useWindowSize';
import BackURLModule from 'components/DashboardComponents/BackURLModule';

// import use


const MessagingSection = () => {
    const {userOptions} = individualModule;
    const [senderID, setSenderID] = useState("AS239TH");
    const sizeWindow = useWindowSize();
    // console.log(sizeWindow)

    // const getMessages = () => {
    //     return userOptions.map( section => {
    //         if(senderID !== undefined ){
    //             return section.messaging.find( chatObject => senderID === chatObject.userID)
    //         }else {
    //             return {}
    //         }
    //     }) 
    // }
    const handleConversationClick = input => (e) => {
        setSenderID(input)
        // console.log(getMessages())
        if(sizeWindow.width < 480){
            if(e.target.parentNode.parentNode.parentNode.parentNode.classList.contains("conversation_col")){
                e.target.parentNode.parentNode.parentNode.parentNode.classList.add("slide_left")
                // console.log("nice", e);
            }
        }
    }

    const handleBackURL = () => {

    }

    const getTimeStamp = () => {
        // const createdAt = {
        let now = 1650714956000
        let today = 1650702716000
        let yesterday = 1650591116000
        let weekAgo = 1649986316000
        // }
        let timestamp = '';
        let newDate = new Date()

        let leo = newDate.getDate();
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((yesterday - leo) / oneDay));
        if(leo - now < 60000) {
            timestamp = "Now";
            return timestamp;
        } 
        // else{
        //     if()
        // }
        console.log(diffDays, timestamp)

// // IF NOW - MILLISECONDS = 0 THEN: NOW

// // ELSE IF -> SAME DAY (USE MOMENTJS TO DETERMINE HOURS AGO) THEN DISPLAY HOUR AND MINUTE

// // ELSE IF -> MORE THAN A DAY AGO BUT LESS THAN A WEEK AGO THEN DISPLAY DAY SENT

// // ELSE IF -> MORE THAN A WEEK AGO THEN DISPLAY MONTH AND DATE SENT
    }
    // getTimeStamp();
    // const dateTimeAgo = moment(new Date(createdAt)).fromNow();
    // console.log(getCurrentDate(), dateTimeAgo)


    // 1. FUNCTION TO GET ALL MESSAGES AND SET MESSAGE STATE

    const groupMessagesByDays = () => {

    }

    const generateMessages = status => (el) => {
        // FOR THE FRONTEND
        if(!el.target.classList?.contains("active")){
            Array.from(el.target.parentElement.children).forEach(sib => sib.classList.remove('active'))
            el.target.classList.add("active")
        }else {
            Array.from(el.target.parentElement.children).forEach(sib => sib.classList.add('active'))
            el.target.classList.remove("active")

        }
        // THE LOGIC
    }

  return (
    <>
        <ModuleHeading>
            <div className="top_row">
            <HeadingLeft>
                <Heading as="h4" content={"Messages"}/>
            </HeadingLeft>
            <HeadingRight>
                <SearchBar>
                    <img src={searchIcon?.src} alt="Search" /> 
                    <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
                </SearchBar>
                <div className="icon_ellipse" onClick={getTimeStamp}>
                <img src={notificationIcon?.src} alt="Notify" /> 
                </div>
                <div className="counter"><span>4</span></div>
            </HeadingRight>
            </div>
        </ModuleHeading>

        <MessagingSectionWrapper className="messaging_section">
            <ColumnConversation className="conversation_col">
                <ConversationHeading>
                    <div className="top_row_div">
                        <Heading as="h6" content={"Conversations"}/>
                        <div className="search_icon">
                            <img src={searchIcon?.src} alt="Search" />              
                        </div>
                    </div>
                    <button>Start a new conversation</button>
                </ConversationHeading>   

                <ConversationLinks>
                    <button onClick={generateMessages("All")}>All Messages</button>
                    <button onClick={generateMessages("Deleted")}>Deleted Messages</button>
                </ConversationLinks>

                <BoxWrapper>
                    {/* MAP THROUGH THE CONVERSATIONS */}
                        <a href="#specific_chats">
                        <ConversationBox className="active" onClick={handleConversationClick("AS239TH")} id="conversation_box">
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Anna Smith"}></Text>
                            <Text as="p" content={"Hey, what’s the update .."}></Text>
                        </div>
                        <div className="timestamp">
                            <Text as="p" content={"Today"}></Text>
                        </div>
                        </ConversationBox>
                        </a>
             

                    <ConversationBox onClick={() => setSenderID("JS239TH")}>
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"John Smith"}></Text>
                            <Text as="p" content={"Hey, what’s the update .."}></Text>
                        </div>
                        <div className="timestamp">
                            <Text as="p" content={"Yesterday"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox>
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Anna Smith"}></Text>
                            <Text as="p" content={"Hey, what’s the update .."}></Text>
                        </div>
                        <div className="timestamp">
                            <Text as="p" content={"Aug 29"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox>
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Anna Smith"}></Text>
                            <Text as="p" content={"Hey, what’s the update .."}></Text>
                        </div>
                        <div className="timestamp">
                            <Text as="p" content={"Aug 29"}></Text>
                        </div>
                    </ConversationBox>
                    <ConversationBox>
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="profile_details">
                            <Text as="h6" content={"Anna Smith"}></Text>
                            <Text as="p" content={"Hey, what’s the update .."}></Text>
                        </div>
                        <div className="timestamp">
                            <Text as="p" content={"Aug 29"}></Text>
                        </div>
                    </ConversationBox>
                </BoxWrapper>
        
            </ColumnConversation>
            <ColumnChat className="chat_col" id="specific_chats">
                {/* {props.content} */}
                {sizeWindow.width < 480 &&
                    <ModuleSectionHeader>
                    <BackURLModule
                        text={"My Conversations"}
                        prevPath={"#conversation_box"}
                    />
                    </ModuleSectionHeader>
                }
                {
                    userOptions.map( section => (
                        senderID !== undefined && 
                        section.messaging.map( chatObject => (
                            senderID === chatObject.userID  ?
                            <SpecificChatSection 
                                chatObject={chatObject}
                            />
                            : 
                            <></>
 //                           {/* <ChatBubble className={`main_bubble sent`}>
   //                              <Text as="p" content={"Spark a conversation"} />
  //                           </ChatBubble> */}
                        ))
                    ))
                }

            </ColumnChat>        
        </MessagingSectionWrapper>
    </>
  );
};

export default MessagingSection;


