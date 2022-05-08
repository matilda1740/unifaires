import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import { userModule } from 'common/data/appData';
import { useRouter } from "next/router";
import BackURLModule from '../../Components/BackURLModule';
import ChatHeading from '../ChatHeading';
import ChatBubble from '../ChatBubble';
import { BoxWrapper } from '../messaging.style';
import ChatForm from '../ChatForm';
import profilePic from 'public/images/dashboard/profile/profile.jpeg'
import optionsIcon from 'public/images/dashboard/dotIcon.svg'


const SpecificChatSection = ({chatObject}) => {
    const {userOptions} = userModule;

    const { name, userID, messages} = chatObject;
    
    return (
    <React.Fragment key={userID}>
        <ChatHeading>
            <div className="profile_row">
                <div className="profile_picture">
                    <img src={profilePic?.src} alt="Profile" />              
                </div>
                <div className="online"></div>
            </div>

            <div className="profile_details">
                <Heading as="h6" content={name}/>
                <Text as="p" content={"Active"}></Text>
            </div>

            <div className="options">
                <img src={optionsIcon?.src} alt="Options" />
            </div>
        </ChatHeading>

        <BoxWrapper>
        {
            chatObject?.messages?.map( message => (
            <ChatBubble className={`main_bubble ${message.isFrom === 1 ? "received" : "sent"}`}>
                    <Text as="p" content={message.text} />
                    <div>
                        <Text as="p" content={"4:00pm"} />
                    </div>
                </ChatBubble>
            ))
        }
        </BoxWrapper>
        <ChatForm />
    </React.Fragment>
    );
};

export default SpecificChatSection;
