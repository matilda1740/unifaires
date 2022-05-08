import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import editIcon from 'public/images/dashboard/settings/edit.svg'

export const AccountsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width:480px){
        height: auto;
    }
`;

const AccountsCardStyle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    /* background: #fff;
    box-shadow:  4px 8px 4px rgba(221, 221, 221, 0.15); */
    background: #F7F5FD;
    box-shadow: 2px 8px 4px rgba(221, 221, 221, 0.05);
    border-radius: 8px;
    color: rgba(18, 53, 91, 1);
    padding: 16px;
    margin: 10px 0;
    :first-of-type{
        margin-top: 5px;
    }
    :last-of-type{
        margin-bottom: 20px;
    }
    .top_div {
        display: flex; 
        justify-content: space-between;
        .icon_div{
            width: 10%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                margin-bottom: 4px;
            }
            :hover{ cursor: pointer; }
        }
    }
    h6, p{ margin-bottom: 0; }

    @media screen and (max-width: 480px) {
        .top_div .icon_div img { margin-left: 2.5px; }
    }
`;

const AccountsCard = (props) => {

    const { sitename, siteurl } = props;

    return (
        <AccountsCardStyle>
            <div className="top_div">
                <Heading as={"h6"} content={sitename} />
                <div className="icon_div">
                    <Text as={"p"} content={"Edit"} />
                    <img src={editIcon?.src} alt="" />
                </div>
            </div>
            <Text as={"p"} content={siteurl} />
        </AccountsCardStyle>
    );
}
export default AccountsCard