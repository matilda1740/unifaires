import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import BillingButton from './BillingButton';

const BillingPlanCardStyle = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 150px;
    margin: 10px 0; 
    padding: 16px 10px;
    transition: all 0.3s ease-in-out;
    h6, p{
        margin-bottom: 4px;
    }
    :hover {
        cursor: pointer;
    }
    &.white_wrapper {
        background: #FFFFFF;
        border: 1px solid #5832DA;
        h6 { color: #5832DA; }
        p { color: rgba(173, 168, 190, 1); }
        :hover { box-shadow: 1px 1px 2px 2px rgba(88, 50, 218, 0.2) }
        .billing_plan_bottom > div > p:first-of-type {
            color: #000;
        }
    }
    &.purple_wrapper {
        background: #5832DA;
        border: 1px solid #5832DA; 
        h6 { color: #FFFFFF; }
        p { color: rgba(191, 191, 191, 1); }
        :hover { box-shadow: 1px 1px 2px 2px rgba(88, 50, 218, 0.2) }
    }
    &.blue_wrapper {
        background: #12355B;
        border: 1px solid #12355B;
        h6 { color: #FFFFFF; }
        p { color: rgba(191, 191, 191, 1); }
        :hover { box-shadow: 1px 1px 2px 2px rgba(18, 53, 91, 0.2); }
    }
    .billing_plan_bottom{
        width: 100%;
        height: 40px;
        display: flex;
        margin-top: 20px;
        div{ 
        display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 80%;
            height: 100%;
            p:first-of-type { 
                color: #fff; 
                font-weight: 500;
                font-size: 16px;
            }
        }      
    }

`;

const BillingPlanCard = (props) => {

    const {title, subtitle, variant, pricing, buttonText} = props;

    return (
        <BillingPlanCardStyle className={`${variant}_wrapper`}>
            <Heading as={"h6"} content={title}/>
            <Text as={"p"} content={subtitle}/>
            <div className="billing_plan_bottom">
                <BillingButton 
                    variant={variant}
                    text={buttonText}
                />
                <div>
                    <Text as={"p"} content={pricing}/>
                    <Text as={"p"} content={"/month"}/>
                </div>
            </div>
        </BillingPlanCardStyle>
    );
}
export default BillingPlanCard