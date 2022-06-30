import React from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

const MessageFormStyle = styled.div`
`;

const MessageWrapper = ({content}) => {
  const {userOptions} = individualModule;

    const [show, setShow ] = useState(false);
    const toggleDropDown = () => setShow(!show)


    return (
        <>
            {/* INSERT OVERLAY */}
            <MessageFormStyle>
                <h5>Compose Message</h5>
            </MessageFormStyle>
        </>
    );
}

export default MessageWrapper;