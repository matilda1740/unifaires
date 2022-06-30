import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const BillingButtonStyle = styled.button`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 !important;
    font-weight: 500;

    &.regular_btn {
        border-radius: 8px;
        border: 1px solid rgba(18, 53, 91, 1);
        color: #12355B;
        width: 150px !important;
        height: 45px !important;
        background: transparent;
        margin: 20px 0 0 0 !important;
    }
    /* BILLING SECTION BUTTONS */
    &.white_btn, &.purple_btn, &.blue_btn, &.primary_btn{
        border-radius: 36px !important;
        width: 160px;
        height: 35px !important;
    }
    &.white_btn {
        background: rgba(88, 50, 218, 0.2);
        color: rgba(88, 50, 218, 1);
    }
    &.purple_btn, &.blue_btn {
        background: rgba(255, 255, 255, 0.2);
        color: rgba(255, 255, 255, 1);
    }

    &.primary_btn {
        background-color: rgba(88, 50, 218, 1);
        color: rgba(255, 255, 255, 1);
    }
    /* FUNDING SECTION BUTTONS */
    &.granted_btn, &.rejected_btn, &.waiting_btn{
        width: 100px  !important;
        height: 35px  !important;
        border-radius: 19px  !important;
        border: none !important;
        align-self: center !important;
    }
    &.rejected_btn {
        background: rgba(255, 12, 62, 0.1)  !important;
        color: #FF0C3E  !important;
    }
    &.granted_btn {
        background: rgba(125, 191, 16, 0.2) !important;
        color: #7DBF10  !important;
    }
    &.waiting_btn{
        border: none !important;
        background: rgba(18, 53, 91, 0.1) !important;
        color: #12355B;
    }

    /* SKILL MATCHING BUTTONS */
    &.skills_btn {
        width: 150px !important;
        height: 48px !important;
        border: none !important;
        border-radius: 8px !important;
        font-weight: 300;
    }

    /* BUTTON POSITIONS */
    &.beginning {
        align-self: flex-start;
    }
    &.end {
        align-self: flex-end;
    }
    &.center {
        align-self: center ;
    }

    @media screen and (max-width: 480px) {
        &.regular_btn {
            height: 80px !important;
        }
        &.white_btn, &.purple_btn, &.blue_btn{
            width: 180px !important;
            font-size: 12px;
        }
    }
`;

const BillingButton = (props) => {

    const { variant, text, type="button", position} = props;

    return (
        <BillingButtonStyle onClick={props.openModal} className={`${variant}_btn ${position}`}>{text}</BillingButtonStyle>
    );
}
export default BillingButton;