import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { Close } from '@mui/icons-material';
import FormTextArea from 'components/DashboardIndividual/Pages/Settings/Components/FormTextArea';

const MessageFormStyle = styled.div`
    min-width: 400px;
    min-height: 200px;

    width: fit-content;
    height: fit-content;

    display: flex;
    flex-direction: column;
    border-radius: 12px;

    .top_row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        margin: 10px 0;
    }
    h6{ 
            font-weight: 500; 
            color: rgba(18, 53, 91, 0.8);
            margin-bottom: 0;
    }
    h6:last-of-type{ margin-top: 10px;}
    .message_row{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 40px;
        h6, ul, li {
            margin: 0 0 0 0;
        }
        ul { 
            max-width: 350px;
            padding-left: 10px;
            white-space:nowrap;
            overflow-x: scroll;
            ::-webkit-scrollbar { display: none;}
        }

        /* h6:last-of-type { margin} */
        p{
            margin-left: 10px;
            color: rgba(18, 53, 91, 0.5);
        }
        li{
            display: inline;
            list-style: none;
            color: rgba(18, 53, 91, 0.5);
        }
        li:nth-child(2){ margin-left: 5px; }

        li::after { content: ","; }

        li:last-child::after { content: ""; }
    }

    .ellipse{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        background: rgba(88, 50, 218, 0.1);
        border-radius: 50%;
        svg {
            color: rgba(88, 50, 218, 1);
            :hover{ cursor: pointer;}
        }
    }
`;

const MessageForm = ({handleClose, details}) => {

    const [sendMsgResponse, setSendMsgResponse] = useState(""); //Success/Failure
    const [sending, SetSending] = useState(false);

    const [message, setMessage] = useState({
        from: "matilda@gmail.com",
        to: "",
        text: ""
    });

    const handleMessageChange = (event) => {
        const { name, value } = event.target;
        setMessage({
            ...message,
            [name]: value
        })
    }

    const handleSendMessage = () => {
        handleClose();
        console.log("Message: ", message);
    }


    return (
    <MessageFormStyle>
        <div className="top_row">
            <h5>Compose Message</h5>
           <div className="ellipse"><Close onClick={handleClose} /></div> 
        </div>
        <div className="message_row">
            <h6>From: </h6>
            <p>matilda@gmail.com</p>
        </div>
        
        <div className="message_row">
            <h6>To: </h6>
            <ul>
            {
                details?.map((user, i) => (
                    <li key={i}>{user}</li>
                ))
            }
            </ul>
        </div>
        
        <h6>Message</h6>

        <FormTextArea
            placeholder={"Type your message here..."}
            size={"full"}
            variant={"msg_textarea"}
            name={"message"}
        />
        <BillingButton 
            text={"Send Message"}
            variant={"primary"}
            position={"start"}
            openModal={handleSendMessage}
        />
    </MessageFormStyle>
    );
}

export default MessageForm;