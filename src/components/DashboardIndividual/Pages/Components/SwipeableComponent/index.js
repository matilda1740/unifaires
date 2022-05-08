import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Text from 'components/Layout/Text';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";

import { DashboardBadge } from 'components/DashboardBusiness/business.style';

import coursesIcon from 'public/images/dashboard/Courses.svg'
import badgeIcon from 'public/images/dashboard/Group.svg'
import workIcon from 'public/images/dashboard/Dashboard/Work.svg'

const SwipeableComponentStyle = styled.section`
    @media screen and (min-width: 786px){
        display: none;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: 125px;
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        .swiper { margin-left: 10px;}
        .swiper-horizontal>.swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
            bottom: 0px;
            span{ 
            background-color: #5832DA;

            }
        }
    }
`;

const SwipeableComponent = ({ children }) => {
    return (
        <SwipeableComponentStyle>
            <Swiper
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ dynamicBullets: true }}
            modules={[Pagination]}
            >
                <SwiperSlide>
                    <DashboardBadge>
                        <div className="col1">
                            <Text as="p" content={"My Learning"} />
                            <span>0</span>
                        </div>
                        <div className="icon">
                            <img src={coursesIcon?.src} alt="Learn" /> 
                        </div>
                    </DashboardBadge>     
                </SwiperSlide>
                <SwiperSlide>
                    <DashboardBadge>
                        <div className="col1">
                            <Text as="p" content={"My Jobs"} />
                            <span>0</span>
                        </div>
                        <div className="icon">
                    <img src={workIcon?.src} alt="Learn" /> 
                        </div>
                    </DashboardBadge>
                </SwiperSlide>
                <SwiperSlide>
                    <DashboardBadge>
                        <div className="col1">
                            <Text as="p" content={"My Certifications & Badges"} />
                            <span>0</span>
                        </div>
                        <div className="icon">
                    <img src={badgeIcon?.src} alt="Learn" /> 
                        </div>
                    </DashboardBadge> 
                </SwiperSlide>
            </Swiper>
        </SwipeableComponentStyle>
    );
}

export default SwipeableComponent;