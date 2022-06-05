import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import {AccessTimeOutlined, GroupsOutlined,  ImportContactsOutlined } from '@mui/icons-material';
import dashCard from 'public/images/dashboardCard.png'

import avatarIcon from 'public/images/dashboard/Dashboard/avatarIcon.svg'

export const CoursesCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    transition: all 0.3s ease-in-out;
    padding: 16px;
    color: #12355B;
    /* width: 332px; */
    width: 300px;
    h6 {
        color: rgba(173, 168, 190, 1);
        font-size: 12px;
        margin-bottom: 0px;
        line-height: 180%;
        letter-spacing: 0.02em;
    }
    h5{
        margin: 1px 0 4px 0;
        color: rgba(18, 53, 91, 1);
        line-height: 140%;
        font-size: 140%;
    }
    p{
        color: rgba(18, 53, 91, 1);
        font-size: 14px;
        line-height: 150%;
        /* margin-top: 8px; */
    }
    :hover {
        cursor: pointer;
        transform: scale(1.01);
    }
    :nth-child(n+1) {
        /* margin-right: 40px; */
        margin-right: 12.5px;
    }
    /* BUSINESS SUITES */
    /* &.business{
        :nth-child(n+4) {
            margin-top: 16px;
        }
    } */
       :nth-child(n+4) {
            margin-top: 16px;
        }
    /* SPECIFIC COURSE CARDS */
    &.start{
        background-color: rgba(173, 168, 190, 0.08);
        border: 1px solid rgba(173, 168, 190, 0.08);
        height: 316px;

            img {
            border-radius: 8px;
            width: 122px;
            height: 64px;
            margin-bottom: 16px;
            } 

        .functions_row{ /* icons row */
            display: flex;
            div {
                width: fit-content;
                height: 20px;
                display: flex;
                align-items: center;
                margin-right: 16px;              
                p{
                    margin-top: 0px;
                    font-size: 12px;
                    color: #000000;
                }        
            }
            svg{
                width: 20px;
                height: 20px;
                margin: 0 8px 0 0;
                color: #DADADA;
            }
        }
        a{
            background: rgba(88, 50, 218, 0.1);
            border-radius: 36px;
            width: 160px;
            height: 40px;
            padding: 10px 20px;
            color: #5832DA;
            font-weight: 300;
            font-size: 14px;
            line-height: 150%;
            margin: 28px 0 10px 0;
            align-self: flex-end;

            text-align: center;
            text-transform: capitalize;
        }       
    }

    &.resume {
        background: #FFFFFF;
        border: 1px solid rgba(18, 53, 91, 0.1);
        height: 268px;
        margin-top: 5px;
    }


    &.resume .courses_resume_top{
    width: 100%;
    height: 64px;
    display: flex;
    img {
        border-radius: 8px;
        width: 122px;
        height: 64px;
        margin-bottom: 16px;
    }
    .top_icons{
        display: flex;
        width: 100%;
        height:100%;
        align-self: flex-end;
        margin-left: 94px;
        color: rgba(32, 14, 50, 1);

        .each_top_icons{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            :first-of-type{
                margin-right: 20px;
                width: 12px;

            }
            img {
                width: 20px;
                height: 19px;
                margin-bottom: 5px;
            }
        }

    }
    }

    &.resume .courses_resume_bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100%);
        height: 75px;
        margin: 8px 0 0 0px;
        padding:  16px 0;
        border-top: 2px solid rgba(18, 53, 91, 0.1);
        .percentage_div{
            width: 43px;
            height: 43px;
            border-radius: 50%;
            border: 4px solid  rgba(88, 50, 218, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                color: #12355B; 
            }
        }
        a {
            color: rgba(88, 50, 218, 1);
            font-size: 14px;
            line-height: 180%;
            /* text-transform: uppercase; */
            text-transform: capitalize;
        }
    }

    &.business 
    {
        .subheading{
                color: #12355B; 
            font-size: 14px;
            text-transform: capitalize;
            margin: 6px 0 2px 0;
        }
    .instructors_row{
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        .each_map {
            display: flex;
            width: calc(100%/3);
            height: 100%;
            justify-content: center;
            align-items: center;
            img {
                width: 30%;
            }
            p{ 
                width: 70%;
                margin: 0 0 12px 4px; 
            }
        }
    }

    }

`;


const CoursesCard = ({ variant, type, image, key, category, title, description, lessons, time, students, path}) => {


    // if(variant === "resume") {
    // return (
    // <CoursesCardStyle key={key} className={variant}>
    //     <div className="courses_resume_top">
    //         <img src={dashCard?.src} alt="Image" /> 
    //         <div className="top_icons">
    //             <div className="each_top_icons">
    //                 <ImportContactsOutlined />
    //                 <span>{lessons}</span>
    //             </div>
    //             <div className="each_top_icons">
    //                 <GroupsOutlined />
    //                 <span>12,342</span>
    //             </div>
    //         </div>
    //     </div>
        
    //     <Heading as="h6" content={category}></Heading>
    //     <Heading as="h5" content={title}></Heading>

    //     <div className="courses_resume_bottom">

    //         <div className="percentage_div">
    //             <span>47%</span> 
    //         </div>
    //     {/* <Link href="/">{`${variant} Course`}</Link> */}
    //     </div>
    // </CoursesCardStyle>
    // )
    // }else {
        return (
        <CoursesCardStyle className={`${variant} ${type}`} key={key}>
            <img src={dashCard?.src} alt="Image" /> 
            <Heading as="h6" content={category}></Heading>
            <Heading as="h5" content={title}></Heading>
            <Text as="p" content={description}></Text>
            <div className="functions_row">
                <div>
                    <ImportContactsOutlined />
                    <Text as="p" content={`${lessons} Lessons`}></Text>
                </div>
                <div>
                    <AccessTimeOutlined />
                    <Text as="p" content={`${time} hrs`}></Text>
                </div>
                {
                    type === "business" && 
                <div>
                    <GroupsOutlined />
                    <Text as="p" content={`${students}`}></Text>
                </div>
                }
            </div>
            {
            type === "business" ? 
            <>
              <Heading as="h6" content={"Instructors"} className="subheading"></Heading>
              <div className="instructors_row">
                <div className="each_map">
                    <img src={avatarIcon?.src} alt="Instructor"/>
                    <p>Amabel</p>
                </div>
                <div className="each_map">
                    <img src={avatarIcon?.src} alt="Instructor"/>
                    <p>Amabel</p>
                </div>
                <div className="each_map">
                    <img src={avatarIcon?.src} alt="Instructor"/>
                    <p>Amabel</p>
                </div>
              </div>
            </>
            : 
            <Link                                
                href={{
                pathname: "/individual/learning/courses/[id]",
                query: { id: key }
                }}>{`${variant} Course`}
            </Link>           
            }
            

        </CoursesCardStyle>
        )
    }
// }
export default CoursesCard;