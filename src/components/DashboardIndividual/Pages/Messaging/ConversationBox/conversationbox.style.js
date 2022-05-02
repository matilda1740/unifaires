import styled from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { colorStyle } from '../../../../customVariant';
import { base } from '../../../../base';

const ConversationBoxStyle = styled.a`
    padding: 10px;
    width: 100%;
    height: 80px;
    display: flex;
    
    .profile_picture, .profile_details, .timestamp, .icon_div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .profile_picture{
        width: 20%;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
    .profile_details{
        width: 60%;
        flex-direction: column;
        align-items: flex-start;
        padding: 0 10px;
        h6 {
            font-size: 14px;
        }
        h6,p{
            margin-bottom: 0;
        }
        p{
            font-size: 12px;
        }
    }
    .timestamp{
        width: 20%;
    }
    &.active {
        background: rgba(247, 245, 253, 1);
    }
    &:hover {
        cursor: pointer;
    }

    /* SETTINGS STYLES */
    &.settings_div {
        .icon_div{
            img {
                height: 20px;
                width: 20px;
            }
        }
        .profile_details{
            width: 80%;
        }

    }

  /* Material style goes here */
  &.is-material {

  }

  /* Style system custome color variant */
  ${colorStyle}
  ${base}
`;

// prop types can also be added from the style functions
ConversationBoxStyle.propTypes = {
  ...variant.propTypes,
};

ConversationBoxStyle.displayName = 'ConversationBoxStyle';

export default ConversationBoxStyle;
