import React from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';

const MessageStatusStyle = styled.div`
`;

const MessageStatus = ({sender, recipients}) => {

    const [message, setMessage] = useState("");
    const handleSetMessage = input => () => {
        setMessage(input)
    }
    return (
    <MessageStatusStyle>
        <img src={} alt="Message" />

        <h5>Your messages have been sent!</h5>

        {/* 1. DIV WITH RECIPIENTS
            2. DIV WITH MESSAGE
         */}
    </MessageStatusStyle>
    );