import { AddCircleOutlineOutlined } from '@mui/icons-material';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import React, {useState} from 'react';
import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input'
import Form, { FormEachPhoneContainer} from 'components/DashboardIndividual/Pages/Settings/Components/Form';

const ToolsStyle = styled.section`

h5,small {color: #12355B;}
h5 {margin-bottom: 12px;}

display: flex;
flex-direction: column;
justify-content: space-between;
height:500px;

`;

const LearningToolsSection = ({userType}) => {
    const [phone, setPhone] = useState()

    return (
    <ToolsStyle>
        <h5>Learning Reminders</h5>
        <h6>Calender Events</h6>
        <p>Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
        <small>Requires Google Calendar, Apple Calendar, or Outlook</small>
        <BillingButton
            variant={"tools"}
            text={"Schedule learning time"}
            icon={<AddCircleOutlineOutlined/>}
        />
        <h6>Push Notifications</h6>
        <p>Don’t want to schedule time blocks? Set a learning reminder to get push notifications from the Unifaires mobile app.</p>
        <small><strong>Text me a link to download the app</strong></small>

        <FormEachPhoneContainer className="row_phone_input">
            <PhoneInput
            placeholder={"3 44 736 9000"}
            value={phone}
            onChange={setPhone} 
            />
        </FormEachPhoneContainer>

        <p>By providing your phone number, you agree to receive a one-time automated text message with a link to get app. Standard messaging rates may apply</p>

    </ToolsStyle>
    );
}

export default LearningToolsSection;