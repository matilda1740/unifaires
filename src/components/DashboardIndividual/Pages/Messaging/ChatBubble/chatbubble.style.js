import styled from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { colorStyle } from '../../../../customVariant';
import { base } from '../../../../base';

const ChatBubbleStyle = styled.div`
  /* Chat default style */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px 8px 16px;
    /* width: 55%; */
    width:fit-content;
    max-width: 55%;
    height: fit-content;
    max-height: 78px;
    border-radius: 10px;
    position: relative; /* POSITION RELATIVE TO GET CORNER */
    margin: 10px 20px; 
    p {
        margin-bottom: 0;
    }
    div{
        display: flex;
        flex-direction: row;
        font-size: 12px;
                    p{
            color: #ADA8BE !important;
            /* padding-left: 8px; */
        }
        img {
            margin-right: 8px;
        }
    }

    &.sent{
        background: rgba(88, 50, 218, 1);
        margin-left: auto;
        p {
            color: #FFFFFF;
        }
    }
    &.received {
        background: rgba(247, 245, 255, 1);
        margin-right: auto;

        p{
            color: #000000;
        }
    }
    /* CORNER STYLES */
    &:before {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        border-radius: 1px;
        border-left: 10px solid transparent; /* POSITIONING BOTH TRIANGLE */
        border-right: 10px solid transparent; /* POSITIONING BOTH TRIANGLE */
    }
    &.sent:before{
        /* POSITIONING TRIANGLE ON THE BOTTOM RIGHT */
        border-bottom: 10px solid rgba(88, 50, 218, 1);
        right: -10px;
        bottom: 0px;
    }
    &.received:before {
        /* POSITIONING TRIANGLE ON THE BOTTOM LEFT */
        border-bottom: 10px solid rgba(247, 245, 255, 1);
        left: -10px;
        bottom: 0px;
    }


  /* Material style goes here */
  &.is-material {

  }

  /* Style system custome color variant */
  ${colorStyle}
  ${base}
`;

// prop types can also be added from the style functions
ChatBubbleStyle.propTypes = {
  ...variant.propTypes,
};

ChatBubbleStyle.displayName = 'ChatBubbleStyle';

export default ChatBubbleStyle;
