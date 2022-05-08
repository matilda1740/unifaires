import React from 'react';
import styled from 'styled-components';

import paperClipIcon from 'public/images/dashboard/paperclip.svg'
import smileIcon from 'public/images/dashboard/smile.svg'
import sendIcon from 'public/images/dashboard/send.svg'

const ChatFormStyle = styled.form`
    width: 100%;
    margin: 20px 0;
    padding: 0 24px;
    display: flex;
    *{ font-weight: 300; }
    input {
        background: rgba(255, 255, 255, 0.1);
        color: rgba(191, 191, 191, 1);
        outline: none;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        height: 40px;
        width: 95%;
        position: relative;
    }
    input[type="text"]::placeholder {
            padding-left: 10px;
    }
    input[type="text"]::value {
            padding-left: 10px;
    }
    .form_actions_div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100px;
        height: 100%;
        margin: 0px 2% 0px -23.5%;
        * {
            margin: 0 4px;
        }
        img {
            width: 15px;
            height: 15px;
            :hover {
                cursor: pointer;
            }
        }
        .send_div {
            background: #5832DA;
            border-radius: 6px;
            width: 20px;
            height: 20px;
            img {
            margin-left: 2px;

            }
        }
    }
`;

const ChatForm = () => {
    return (
    <ChatFormStyle>
        <input name="message" type="text" placeholder="Type your message"></input>
        <div className="form_actions_div">
            <img src={paperClipIcon?.src} alt="Attachment" />
            <img src={smileIcon?.src} alt="Emoji" />
            <div className="send_div">
                <img src={sendIcon?.src} alt="Send" />
            </div>
        </div>
    </ChatFormStyle>
    )
}

export default ChatForm