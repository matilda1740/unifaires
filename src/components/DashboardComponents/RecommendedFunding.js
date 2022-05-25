import styled from 'styled-components';
import React from 'react'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

import ClockIcon from 'public/images/dashboard/clock.svg'
import DollarIcon from 'public/images/dashboard/Dollar.svg'

export const FundingSectionWrapper = styled.section`
    width: 100%;
    height: 540px;
    padding: 20px 12px;
    margin: 20px 0;
    display: flex;
    flex-flow: column wrap;
    overflow-x: scroll;
`;

const FundingCardStyle = styled.section`

    background: rgba(88, 50, 218, 0.05);
    width: 325px;
    height: 420px;
    margin-right: 20px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    h6{
        font-size: 16px;
    }
    h5, p {
        font-size: small;
    }
    h6, h5, p {margin-bottom: 8px; }

    .image_container{
        width: 100%;
        height: 150px;
        /* background: #000; */
        margin: 20px 0% 10px 0%;
        border-radius: 16px;
        img{
            width: 120%;
            height: 100%;
            object-fit: contain;
            border-radius: 16px;
        }
    }

    .company_container{
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .tag_container{
        min-width: 50px;
        max-height: 24px;
        width: fit-content;
        border-radius: 48px;
        text-align: center;
        font-size: smaller;
        padding-top: 2.5px;
        margin: 0 0 8px 20px;
        &.new { 
            background: rgba(192, 118, 84, 1);
            color: #fff;
        }
    }
    .info_container {
        width: 100%;
        height: 20px;
        display: flex;
        /* flex-direction: row; */
        div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            img {
                width: 12px;
                height: 12px;
            }
            p{
                font-size: 10px;
                margin: 0 0 0 4px;
            }
        }
    }

    button {
        margin: 15px 0%;
        width: 100%;
        height: 40px;
    }
`;

export default function RecommendedFundingCard({thumbnail,company,title,description,duration,amount}) {
  return (
    <FundingCardStyle>
        <div className="image_container">
            <img src={thumbnail?.src} alt="" />
        </div>
        <div className="company_container">
            <Heading as="h6" content={company} />
            <div className="tag_container new">NEW</div>
        </div>
        <Heading as="h5" content={title} />
        <Text as={"p"} content={description} />
        <div className="info_container">
            <div>
                <img src={ClockIcon?.src} alt="Clock" />
                <Text as={"p"} content={duration} />
            </div>
            <div>
                <img src={DollarIcon?.src} alt="Dollar" />
                <Text as={"p"} content={amount} />
            </div>
        </div>
        <button>Find out more</button>
    </FundingCardStyle>
  )
}
