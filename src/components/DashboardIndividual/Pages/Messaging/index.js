import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import { MessagingSectionWrapper, BoxWrapper, ChatForm, ColumnConversation, ColumnChat, ConversationHeading, ConversationLinks, DaySectionDivider } from './messaging.style';

import ChatBubble from './ChatBubble';
import ChatHeading from './ChatHeading';
import ConversationBox from './ConversationBox';

import SectionWrapper, {FilterSeeAllContainer, FilterButton, ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CoursesStartCard, JobCard, DashboardBadge, SearchBar } from '../../../DashboardBusiness/business.style';

import { userModule } from 'common/data/appData';

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
import paperClipIcon from 'public/images/dashboard/paperclip.svg'
import smileIcon from 'public/images/dashboard/smile.svg'
import sendIcon from 'public/images/dashboard/send.svg'
import readIcon from 'public/images/dashboard/tick.svg'




const MessagingSection = () => {
    const {userOptions} = userModule;

    const [state, setState] = useState({
    });



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

        <MessagingSectionWrapper>

            <ColumnConversation>
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

                    <ConversationBox className="active">
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
            
            <ColumnChat>
            
                <ChatHeading>
                    <div className="profile_row">
                        <div className="profile_picture">
                            <img src={profilePic?.src} alt="Profile" />              
                        </div>
                        <div className="online"></div>
                    </div>

                    <div className="profile_details">
                        <Heading as="h6" content={"Oreoluwanimi Adeyemi"}/>
                        <Text as="p" content={"Active"}></Text>
                    </div>

                    <div className="options">
                        <img src={optionsIcon?.src} alt="Options" />
                    </div>

                </ChatHeading>

                <BoxWrapper>
                {/* Hello I’m excited to be here. */}
                    <ChatBubble className="main_bubble received">
                        <Text as="p" content={"Hello I’m excited to be here."} />
                        <div>
                            <Text as="p" content={"4:00pm"} />
                            {/* <img src={searchIcon?.src} alt="Search" /> */}
                        </div>
                    </ChatBubble>
                    <ChatBubble className="main_bubble received">
                        <Text as="p" content={"Hello I’m excited to be here. I have no idea why you might be interested"} />
                        <div>
                            <Text as="p" content={"4:00pm"} />
                            {/* <img src={searchIcon?.src} alt="Search" /> */}
                        </div>
                    </ChatBubble>
                    <DaySectionDivider>
                        <Text as="p" content={"Wednesday, 23 Dec"} />
                    </DaySectionDivider>
                    <ChatBubble className="main_bubble sent">
                        <Text as="p" content={"Hello I’m excited to be here. I have no idea why you might be interested"} />
                        <div>
                            <img src={readIcon?.src} alt="Search" />
                            <Text as="p" content={"4:00pm"} />
                        </div>
                    </ChatBubble>
                </BoxWrapper>


                <ChatForm>
                    <input name="message" type="text" placeholder="Type your message"></input>
                    <div className="form_actions_div">
                        <img src={paperClipIcon?.src} alt="Attachment" />
                        <img src={smileIcon?.src} alt="Emoji" />
                        <div className="send_div">
                            <img src={sendIcon?.src} alt="Send" />
                        </div>
                    </div>

                </ChatForm>
            </ColumnChat>


        {/* 3 hours ----- LOGIC -------
            1. I need to display previous messages    
            2. Add a form to take in new messages 
            3. Color and position bubble according to the sender 
            4. Group Messages by days sent 
            5. Check active tab to display all messages/deleted messages
            6. Check active tab to show current conversation
         */}


         {/* ----- CSS -------------------------------
            1. TWO COLUMNS: 30% AND 70 %
            COLUMN 1: 
                MAJOR ROW 1: MESSAGE HEADING ROW
                    ROW 1 : HEADING (H5) "Conversations" + IMG: ICON (SEARCH)
                    ROW 2 : START CONVERSATION BUTTON
                MAJOR ROW 1: MESSAGE HEADING ROW
                    ROW 1 : URL STATION: TWO LINKS/BUTTONS FOR ALL & DELETED
                    ROW 2 : MESSAGE ROWS: MODULE (CHATPREVIEWBOX) : MAPPED
            COLUMN 2: 
                MAJOR ROW 1: CHAT HEADING ROW 
                    COLUMN 1 : PROFILE PICTURE & STATUS
                    COLUMN 2 : NAME 
                    COLUMN 3 : OPTIONS
                MAJOR ROW 2: 
                    ROW 1 : CHAT BUBBLES
                    ROW 2 : CHAT FORM
          */}
        {/* {
            userOptions.map(( section => (
                section.jobs?.length > 0 &&
                <ModuleRow className="module_row_jobs">
                    {
                        section.jobs.map(( job => (
                            <JobCard className="module_row_jobs_card">
                                <div className="company_logo_div">
                                    <img src={paypal?.src}  alt="Image" />
                                </div>
                                    
                                <Heading as="h6" content={job.company}></Heading>
                                <Heading as="h5" content={job.title}></Heading>
                                <div className="timing_row">
                                    <button>Remote</button>
                                    <button>Full-time</button>
                                </div>                        <Text as="p" content={job.description}></Text>

                                <Link href="/">{job.current === 1 ? "In Progress" : "Apply"}</Link>
                            </JobCard>
                        )))
                    }

                </ModuleRow>          
            )))
        } */}
               
        </MessagingSectionWrapper>
    </>
  );
};

export default MessagingSection;
