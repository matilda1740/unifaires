import styled from 'styled-components';
import { variant } from 'styled-system';

const ChatHeadingStyle = styled.div`
    background: rgba(247, 245, 253, 1);
    display: flex;
    width: 100%;
    height: 100px;
    padding: 12px;

    .profile_row {
        /* width: 80%; */
        padding-right: 16px;
        height: 100%;
        .profile_picture{
            width: 76px;
            height: 76px;
            border-radius: 50%;
            img{
                border-radius: 50%;
                width: 100%;
                height: 90%;
                margin: 5% 0;
                position: relative;
                object-fit: fill;
            }
        }

        .online {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #7DBF10;
            position: absolute;
            margin-top: -1.25rem;
            margin-left : 3.5rem;

        }
    }
    .profile_details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 90%;
        h6{
            color: rgba(18, 53, 91, 1);
            margin-bottom: 0px;
        }
        p{
            color: rgba(173, 168, 190, 1);
        }
    }

    .options{
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        img {
            width: 30%;
            height: 80%;
        }
    }
`;

// prop types can also be added from the style functions
ChatHeadingStyle.propTypes = {
  ...variant.propTypes,
};

// ChatSectionWrapper.displayName = 'ChatSectionWrapper';

export default ChatHeadingStyle;
