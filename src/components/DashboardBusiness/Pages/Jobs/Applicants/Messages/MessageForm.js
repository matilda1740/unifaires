import React from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';

const MessageFormStyle = styled.div`
`;

const MessageForm = ({sender, recipients}) => {

    const [message, setMessage] = useState("");
    const handleSetMessage = input => () => {
        setMessage(input)
    }
    return (
    <MessageFormStyle>
        <h5>Compose Message</h5>

        <h6>Message</h6>
        <BillingButton 
            text={"Send Message"}
            variant={"blue"}
            position={"center"}
        />
    </MessageFormStyle>
    );
}

export default MessageForm;