import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const SeeAllStyle = styled.div`
display: flex;
height: 50px;
width: 50%;
justify-content: flex-end;
align-items: center;
transition: all 0.3s ease-in-out;

&.start {
justify-content: flex-start;
svg {
    font-size: 1rem;
    margin: 0 8px 0 8px;
    width: 1em;
    height: 1em;
}
}
    p,svg {
        color: rgba(173, 168, 190, 1);
    }
    p{ 
        margin-bottom: 0px; 
        text-transform: capitalize;
    }
    svg {
        width: 12px;
        height: 10px;
    }

    :hover{ 
        cursor: pointer;
        p,svg { color:rgba(88, 50, 218, 1) ;}
        }
`;

export const ModuleSectionWrapper = styled.section`
        /* background: rgba(255, 255, 255, 1); */

    .whereTo_section{
        height: 100%;
        background: rgba(238, 234, 251, 1);
        width: 70%;
        margin: 10px 10px 40px auto;
        border-radius: 8px 8px 8px 8px;
        border-left: 4px solid #5832DA;

        padding: 12px 24px; 
        .not_expanded{
            height: 58px;
            div{
                margin-bottom: 0px;
            }
            p{
                display: none;
            }
        }
        .expanded{
            height: 150px;
            div {
                margin-bottom: 10px;
            }
            img {
                height: 7px;
            }
        }
    }
    @media screen and (max-width: 480px) {
        .whereTo_section{
            width: 100%;
        }
    }
`;

export const ModuleSectionHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;

    .left_div {
        display: flex;
        align-items: center;
        width: 30%;
        height: 100%;
        :hover{ cursor: pointer;}
        img {
            width: 12px;
            height: 12px;
            margin-right: 8px;
        }
    }

    .right_div {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
            border: 1px solid rgba(18, 53, 91, 1);
            background: transparent;
            border-radius: 8px;
            width: 150px;
            height: 42px;
            color: rgba(18, 53, 91, 1);
            margin: 0 5px 0 0;
            align-self: flex-end;
            
        }
        img {
            width: 20px;
            height: 20px;
            margin-left: 16px;
            :hover { cursor: pointer}
        }
    }
    .right_div.funding {
        /* TO ALLOW DROP DOWN */
        position: relative;
    }
    @media screen and (max-width: 480px) {
        a { width: auto; }
        .right_div{
            display: none;
        }
    }
`;

export const ModuleSectionContainer = styled.section`

    width: 100%;
    height: 100%;
    display: flex; 
        padding: 20px 0;

    /* flex-direction: column; */
    .col1 {
        width: 30%;
        height: 100%;
        .module_thumbnail{
            width: 200px;
            height: 200px;
            /* background: #F5F7F9; */
            /* background: #eee; */

            border-radius: 16px;
            img{
                width: 100%;
                /* height: 100%; */
                height: 60%;
                object-fit: contain;
                border-radius: 16px;
            }
        }
    }
    .col2 {
        width: 70%;
        height: 100%;
        h5 {
            margin-bottom: 8px;
            color: rgba(18, 53, 91, 1);

        }
        p{
            color: rgba(77, 77, 77, 1);
            text-align:left;
        }   
    }
    @media screen and (max-width: 480px) {
        flex-direction: column;
        .col1, .col2{
            width: 100%;
            h5:hover {
                 cursor: pointer; 
                color: #5832DA;
                }
        }
        .col1{
            margin-bottom: 20px;
            .module_thumbnail{
            width: 100%;
            height: 100%;
        }
        }

    }
`;

export const SectionDivider = styled.div`
        height: 40px;
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: -10px 0 10px auto;

        * {
            color: rgba(173, 168, 190, 1);
            font-size: 12px;

        }

        h6 {
            margin-bottom: 0;
            font-size: 12px;

        }
        .right_div{
            width: 50%;
            height: 100%;
            display: flex;     
            div {
                width: 50%;
                height: 100%;
                display: flex;
                align-items: center;           
                img {
                    margin-right: 8px;
                    width: 12px;
                    height: 12px;
                }
            }
        }
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const WhereToSection = styled.div`

        height: 100%;
        background: rgba(238, 234, 251, 1);
        width: 70%;
        margin: 10px 0 0 auto;
        border-radius: 8px 0px 0px 8px;
        border: 4px solid #5832DA;
    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const InformationContainer = styled.div`

        height: 100%;
        /* background: rgba(238, 234, 251, 1); */
        width: 100%;
        margin: 20px 10px 0  auto;
        border-radius: 8px;
        padding: 24px 24px 24px 24px; 
        background: transparent;
        border: 1px solid #F2F2F2;
        &.funding{
            width: 70%;

        }
        *{
            color: rgba(18, 53, 91, 1) !important;
            margin-bottom: 10px !important;
        }
        h5 {
                margin-bottom: 10px !important;
        }
        ul li{
                margin-bottom: 8px !important;
                list-style-type: disc;
                margin-left: 12px; 

        }
    
    @media screen and (max-width: 480px){
       &.funding{ width: 100%;}
    }
`;

export const SectionTitle = styled.h5`
    color: rgba(18, 53, 91, 1) !important;
    height: 20px;
    width: 100%;
    /* line-height:25px; */
    margin: 20px 0px -10px 17.5px !important;

`;


export const RecommendationsWrapper = styled.div`
    margin: 20px 0;
    h5 {
        /* color: #5832DA */
        margin: 10px 0 !important;
    }
`;
export const AvatarIcon = styled.div`
`;

// -------- CARDS --------------- //
export const BadgesCard = styled.div`

    width: 365px;
    height: 141px;
    background: rgba(88, 50, 218, 0.05);
    border: 1px solid rgba(88, 50, 218, 0.01);
    border-radius: 12px;
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;

    :hover {
        cursor: pointer;
        transform: scale(1.01);
    }
    .badge_logo_div{
        width: 25%;
        height: 60%;

        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }
    .badge_info_div{
        width: 75%;
        height: 100%;
        text-align: center;
        padding: 20px 0;
        h5, p{
            color: #12355B;
            line-height: 140%;
            margin: 0 0 8px 0 ;
        }
        h5 { font-size: 14px; }
        p{ font-size: 12px; }
    }
    @media screen and (max-width: 480px) {
    .badge_logo_div{
        height: 50%;
    }
    .badge_info_div{ width: 100% }
}
`;

export const CoursesStartCard = styled.div`
background-color: rgba(173, 168, 190, 0.08);
border: 1px solid rgba(173, 168, 190, 0.08);
height: 316px;
width: 332px;
border-radius: 16px;
padding: 16px;
display: flex;
flex-direction: column;
color: #12355B;
/* margin-top: 5px; */
transition: all 0.3s ease-in-out;

:hover {
    cursor: pointer;
    transform: scale(1.01);
}

:nth-child(n+1) {
    margin-right: 40px;
}
img {
    border-radius: 8px;
    width: 122px;
    height: 64px;
    margin-bottom: 16px;

}
h6 {
    color: rgba(173, 168, 190, 1);
    font-size: 12px;
    margin-bottom: 0px;
    line-height: 180%;
    letter-spacing: 0.02em;
}
h5{
    margin: 1px 0 8px 0;
    color: rgba(18, 53, 91, 1);
    line-height: 140%;
}
p{
    color: rgba(18, 53, 91, 1);
    font-size: 14px;
    line-height: 150%;
    margin-top: 8px;
}
.functions_row{
    display: flex;
    div {
        width: 80px;
        height: 15px;
        display: flex;
        align-items: center;
        margin-right: 16px;
        p{
            margin-top: 0px;
            font-size: 12px;

        }        
    }
    img{
        width: 15px;
        height: 15px;
        margin: 0 8px 0 0;
     }
}
/* .course_card_button */
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
}

`;

export const CoursesResumeCard = styled.div`
background: #FFFFFF;
border: 1px solid rgba(18, 53, 91, 0.1);
width: 332px;
height: 268px;
border-radius: 16px;
padding: 16px;
display: flex;
flex-direction: column;
color: #12355B;
margin-top: 5px;

transition: all 0.3s ease-in-out;

:hover {
    cursor: pointer;
    transform: scale(1.01);
}
:nth-child(n+1) {
    margin-right: 40px;
}

.courses_resume_top {
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
h6 {
    color: rgba(173, 168, 190, 1);
    font-size: 12px;
    margin: 8px 0 1px 0;
    line-height: 180%;
    letter-spacing: 0.02em;
}
h5{
    margin: 1px 0 0px 0;
    color: rgba(18, 53, 91, 1) !important;
    font-size: 16px;
    line-height: 150%;
    height: 64px;
}
.courses_resume_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100%);
        height: 75px;
        margin: 8px 0 0 0px;
        padding:  16px 0;
        border-top: 2px solid rgba(18, 53, 91, 0.1);
;
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
        text-transform: uppercase;
    }
}
`;

export const JobCard = styled.div`
background-color: rgba(192, 118, 84, 0.05);

height: 256px;
width: 262px;
border-radius: 12px;
padding: 16px;
display: flex;
flex-direction: column;
color: #12355B;
transition: all 0.3s ease-in-out;

:hover {
    cursor: pointer;
    transform: scale(1.01);
}
:nth-child(n+1) {
    margin-right: 24px;
}
:nth-child(n+4) {
    margin-top: 12px;
}
h6 {
    color: rgba(173, 168, 190, 1);
    font-size: 12px;
    margin: 8px 0 0px 0;
    line-height: 140%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}
h5{
    margin: 8px 0 8px 0 !important;
    color:  rgba(192, 118, 84, 1) !important;
    line-height: 100%;
    font-size: 16px;
}
.company_logo_div{
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(141.54deg, #D4FAEA 7.01%, #B79FD4 96.64%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content:center;

    img {
        width: 32px;
        height: 32px;
        margin: 16px 0;
    }
}

.timing_row{
    display: flex;
    width: 100%;
    button {
        background: rgba(173, 168, 190, 0.1);
        border-radius: 16px;
        padding: 0px 18px;
        font-size: 13px;
        font-weight: 500;
        line-height: 150%;
        height: 30px;
        color: #12355B;
        margin: 4px 16px 16px 0;
        width: fit-content;
        min-width: 90px;
    }
}

a{
    color: #C07654;
    align-self: flex-end;
    text-transform: uppercase;
    line-height: 180%;
}
p:first-of-type {
    display: -webkit-box;
    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 240px;
}
p:last-of-type{
    color: #C07654;
    text-transform: capitalize;
    font-weight: 500;
}
@media screen and (max-width: 480px) {
    :nth-child(n+1) {
    margin-right: 24px;
}
}
`;

export const CertsCard = styled.div`
width: 439px;
height: 306px;
background: rgba(88, 50, 218, 0.02);
border: 1px solid rgba(88, 50, 218, 0.1);
border-radius: 12px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-top: 5px;
transition: all 0.3s ease-in-out;

:hover {
    cursor: pointer;
    transform: scale(1.01);
}
:nth-child(n+1) {
    margin-right: 35px;
}
.cert_logo_div{
    width: 100%;
    height: 114px;
    padding: 12px 0;
}
.cert_text_div{
    color: rgba(18, 53, 91, 1) !important;
}
h5, p, h6 {
    color: rgba(18, 53, 91, 1) !important;
    margin-bottom: 8px !important;
line-height: 140%;
}
p:last-of-type{
    font-weight: 300;
}
    @media screen and (max-width: 480px) {
        width: 322px;
        &.each_cert_card {
            padding: 0 0px;
        }
    }
`;

export const FundingCard = styled.div`

/* WHOLE DIV  */
height: 316px;
width: 332px;
border-radius: 12px;
background: rgba(247, 245, 253, 0.5);
padding: 8px 8px 8px 16px;

:hover {
    cursor: pointer;
    transform: scale(1.01);
}
:nth-child(n+1) {
    margin-right: 31px;
}

/* TOP DIV  */
.top_row {
    display: flex;
    justify-content: space-between;
    padding: 0 16px 0 8px;
    
}
/* LEFT */
.company_logo_div{
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(141.54deg, #D4FAEA 7.01%, #B79FD4 96.64%);
    width: 64px;
    height: 64px;
    border-radius: 50%;
;
    display: flex;
    align-items: center;
    justify-content:center;

    img {
        width: 32px;
        height: 32px;
        margin: 16px 0;
    }
}
/* right */
.top_row_right{
    margin-top: 8px;
    button {
        display: flex;
        align-items: center;
        border-radius: 19px;
        padding: 10px 18px;
        font-size: 14px;
        line-height: 150%;
        width: 90px;
        height: 38px;
        margin: 0px 16px 16px 0;
    }
    .waiting{
        background: rgba(173, 168, 190, 0.1);
        color: #12355B;
    }
    .granted {
        background: rgba(125, 191, 16, 0.1);
        color: #7DBF10;;
    }
    .rejected {
        background: rgba(255, 12, 62, 0.1);
        color: #FF0C3E;
    }
}
h6 {
    color: rgba(173, 168, 190, 1);
    font-size: 12px;
    margin: 16px 0 0px 0;
    line-height: 180%;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}
h5{
    margin: 1px 0 12px 0 !important;
    color:  #5832DA !important;
    line-height: 140%;
    font-size: 18px;
}
.timing_row{
    display: flex;
    width: 100%;
    button {
        background: rgba(173, 168, 190, 0.1);
        border-radius: 19px;
        padding: 10px 18px;
        font-size: 14px;
        line-height: 150%;
        width: 90px;
        height: 38px;
        color: #12355B;
        margin: 0px 16px 16px 0;
    }
}
@media screen and (max-width: 480px) {
    :nth-child(n+1) {
    margin-right: 0px;
    }
}
`;

// --------- END OF CARDS --------- //
export const DashboardRow = styled.a`
height: 54px;
width: 100%;
display: flex;
align-items: center;
padding: 0px 30px 0 26px;
border-color: transparent;
border-radius: 0px 12px 12px 0px;
border-left: 4px solid rgba(88, 50, 218, 0);
transition:all 0.3s ease-in-out;

:hover{
    border-left: 4px solid rgba(88, 50, 218, 1);
    cursor: pointer;
    svg {
        color : rgba(88, 50, 218, 1);
    }
    img{
    /* filter: invert(25%) sepia(93%) saturate(1986%) hue-rotate(243deg) brightness(81%) contrast(111%); */
    filter: invert(16%) sepia(97%) saturate(3077%) hue-rotate(252deg) brightness(98%) contrast(95%);
    }
}
    svg {
        color : #12355B;
    }

img, svg{
    margin-right:10px;
}
p{
    font-size: 14px;
     height: 24px;
}

`;

export const DashboardBadge = styled.div`
width: 280px;
height: 104px;
background: #FFFFFF;
box-shadow: 0px 8px 30px 4px rgba(102, 102, 102, 0.08);
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
padding: 0 10px;
margin: 0 25px 20px 0;

.col1{
    width: 80%;
color: #082262;

    font-weight: 600;
    p{
color: #082262;

    font-weight: 500 !important;
    }
    span{
    font-weight: 500 !important;

    }
}

.icon{
    /* width: 20% !important; */
    background-color: rgba(184, 188, 202, 0.1);
    border-radius: 50px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
img{
    width: 18px;
    color: #5832DA;
}
}

`;

export const DashboardLinks = styled.div`
width: 100%;
height: 38px;
font-weight: 300;
border-bottom: rgba(234, 234, 234, 1);
margin-top: -20px;
a{
margin-right: 32px; 
color: #B8BCCA;
border-radius: 8px 8px 0px 0px;
padding-bottom: 8px;
transition: all 0.3s ease-in-out;
}
a:hover, .selected{
    color: #12355B;
    line-height: 120%;
    border-bottom: 4px solid  rgba(18, 53, 91, 1);

}
a:last-of-type{
    margin-right: 0;
}
@media screen and (max-width: 480px) {
    margin-top: 0px;
    a{
    margin-right: 24px; 

    }
}
`;

export const FilterSeeAllContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 25%;

     a{
        color: rgba(18, 53, 91, 0.9);
        line-height: 120%;
        margin-right: 30px;
        font-weight: 500;

    }
    @media screen and (max-width: 480px) {
        width: 100%;
        a{
             margin-right: 0px;
        }
    }
`;

export const FilterButton = styled.div`
    width: 97px;
    height: 40px;
    background: rgba(128, 128, 128, 0.2);
    border-radius: 8px;
    display: flex;
    padding: 12px 12px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;

    &.only_element {
        margin-left: auto; /* flex-end */
    }
    &.courses_section {
        width: 112px;
    }

    :hover{
        cursor: pointer;
    }
    svg, p { 
    color: rgba(18, 53, 91, 1);
    }
    svg {
        font-size: 1rem;
    }
    p{
        width: 100%;
        height: 50%;
    margin: 0 0px 10px 0;
    }
    img {
        width: 8px;
        height: 4px;
    }
     @media screen and (max-width: 480px) {
         max-width: 97px;
    }
`;

export const HeadingLeft = styled.div`
height: 100px;
width: 30%;
     @media screen and (max-width: 480px) {
         width: 100%;
         height: 80px;
     }
`;

export const HeadingRight = styled.div`
height: 100px;
width: 70%;
display: flex;
/* align-items: flex-end; */
    justify-content: flex-end;

.toggle_row{
    justify-content: flex-end;
}
     @media screen and (max-width: 480px) {
         display: none;
     }
`;

export const HelpSectionDiv = styled.section`
    width: 100%;
    height: 100%;

    .help_section_heading{
        margin: 24px 0 12px 0;
        color: #12355B;
        line-height: 120%;

    }
    .help_section_input{
        border-radius: 16px;
        background: rgba(242, 242, 242, 0.4);
        border: 1px solid #DFDFDF;
        width: 100%;
        height: 200px;
        font-size: 14px;
        line-height: 120%;
        font-weight: 300;
        padding: 12px;
    }

    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    a {
        position: absolute;
        margin-top: -60%;

        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px ;
        width: 150px ;
        height: 42px ;
        border:  1px solid rgba(88, 50, 218, 1);
        color:  rgba(88, 50, 218, 1);
        font-size: 14px;
        line-height: 120%;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
        background: rgba(245, 247, 249, 0.5);        

    }
    a:hover, button:hover {
        transform: scale(1.02);
    }
    form {
        button {
            width: 195px;
            height: 54px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px ;
            width: 150px ;
            height: 42px ;
            border:  1px solid rgba(88, 50, 218, 1);
            color:  rgba(88, 50, 218, 1);
            font-size: 14px;
            line-height: 120%;
            font-weight: 500;
            transition: all 0.3s ease-in-out;
            background: rgba(245, 247, 249, 0.5);

       }
    }

    form {
        button {
            align-self: flex-end;
            margin: 0;
        }
    }
    .clicked{
        border: 1px solid rgba(88, 50, 218, 1);
        background-color: rgba(238, 234, 251, 1);
        h6, p {
            color: rgba(88, 50, 218, 1) !important;
        }
    }
    .not_clicked{
        background: #FFFFFF;
        border: 1px solid #DFDFDF;
    }
    .not_expanded{
        height: 58px;
        div{
            margin-bottom: 0px;
        }
        p{
            display: none;
        }
    }
    .expanded{
        height: 100px;
        div {
            margin-bottom: 10px;
        }
        img {
            height: 7px;
        }
    }
    @media screen and (max-width: 480px) {
        button {
            position: static;
            margin-left: auto !important;
            margin-top: 30px !important;
        }
    }
`;

export const HelpHeading = styled.div`
width: 100%;
height: 225px;
background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(141.54deg, rgba(212, 250, 234, 0.3) 7.01%, rgba(183, 159, 212, 0.6) 96.64%);
display: flex;
justify-content: space-between;
align-items: center;

    div{
        h6, p {
            color: rgba(18, 53, 91, 1);
            padding-left: 40px;
            margin-bottom: 4px;
        }
    }
.help_heading_right{
    width: 30%;
    height: 100%;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    a{

    }
}
@media screen and (max-width: 480px) {
    height: 100px;
    background: transparent;

    div {
        width: 100%;
            h6, p{ 
        padding-left: 0px !important;
        }
    }
    .help_heading_right{
        display: none;
    }
    h6{ 
        /* margin: 10px 0 0 0 ; */
        font-size: 20px;
    }

}
`;

export const HelpOptionsRow = styled.section`
    height: 200px;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    padding: 25px 0 0 0 ;
    overflow-x :scroll;
::-webkit-scrollbar{ display: none; }

    @media screen and (max-width: 480px) {
        height: 400px;
        flex-flow: column wrap;
    }
`;

export const HelpCard = styled.div`
    height: 150px;
    width: 175px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(238, 234, 251, 1);
    background: rgba(255, 255, 255, 1);

    :nth-child(n+1){
            margin-right: 20px;
        }
    h6, p {
        margin-bottom: 2px;
    }
    :hover{
        cursor: pointer;
    }
    @media screen and (max-width: 480px) {
        width: 160px;
        :nth-child(n+1) {
            margin-top: 10px;
            margin-right: 10px;
        }
    }

`;

export const HelpEmojiRow = styled.div`
    display:flex;
    width: 100%;
    height: 60px;

`;

export const HelpEmojiDiv = styled.div`
    width: 75px;
    height: 60px;
    border-radius: 8px;
    margin: 3px 11px;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .checked {
        width: 20%;
        height: 20px;
        margin-top: -30%;
        margin-right: -100%;
    }
    .not_checked {
        display: none;
    }
    img {
        width: 50%;
    }
    :hover{
        cursor: pointer;
    }
`;

export const HelpBottomSection = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 48px 24px;
background: rgba(247, 245, 253, 0.5);
width: 100%;
height: 802px;

    @media screen and (max-width: 480px) {
        padding: 6px 0px;

        .mobile_section {
            height: 70px;
            margin-left: auto;
            img {
                display: none;
            }
            a{
                margin-top: 30px;
                position: static;
            }
        }
    }
`;

export const HelpBottomOptions = styled.div`
    background: #FFFFFF;
    color: #000000;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 126px;
    padding: 18px 24px;
    border: transparent;
    margin: 10px 0 ;

    div{
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h6{
            margin-bottom: 0px;
        }
    }
    img {
        height: 10px;
        width: 15px;
    }
        :hover {
            cursor: pointer;
        }
    @media screen and (max-width: 480px) {
        &.expanded{ height: 200px; }
    }
`;

export const ModuleColumn = styled.div`
    display:flex;
    flex-direction: column; 
    background-color: #ffffff;
    padding:40px 30px;
    /* width: 75%; */
    width: 80%;

    border-right: 4px solid #F3F5F7;

    .module_row_jobs {
        height: 100%;
        display:flex;
        flex-flow: row wrap;
    }
     @media screen and (max-width: 480px) {
         width: 100%;
     }
`;

export const ModuleHeading = styled.div`
width: 100%;
display:flex;
flex-direction: column;
&.shorter_heading{
    height: 50px;
}
.top_row{
display:flex;
flex-flow:row wrap;
}
.bottom_row{
    display: flex;
    flex-flow:row nowrap;
    width:100%;
    justify-content: space-between;
    /* margin: 10px 20px 0px 0px; */
}
p{
    color:rgba(128, 128, 128, 0.9);
}
    @media screen and (max-width: 480px) and (min-width: 768px) {
        .bottom_row{
            /* display: none; */
        }
        &.no_header_modules {
            display: none;
        }
        &.settings_header_mobile{
            height: 50px;
            h4 { color: rgba(18, 53, 91, 1);}
        }
        .dashboard_slides{
            display: none;
        }
    }

`;

export const ModuleSection = styled.div`
/* TITLE, BUTTON(SEE ALL), RENDER COURSES */
    /* padding: 20px 0 0 0px; */
    overflow-y: scroll;
    font-weight: 300;
    ::-webkit-scrollbar {
        display: none;
    }

    .courses_row{
        height: 286px;
        margin-bottom: 10px;
    }
    .row2col {
        justify-content: space-between;
        flex-flow: row wrap;
        height: 100%;
        margin-top: 25px;
        padding: 0 10px;
    }
    .each_cert_card{
        width: 364px;
        margin-bottom: 20px;
        padding: 0 25px;
        /* font-size: small; */
        :nth-child(n+1) {
            /* margin-right: 0; */
        }
        h5 {
            font-size: 1rem;
        }
    }
    &.business_job_section{
        /* width: 104%; */
        width: 100%;
        margin: 10px 0 0 -7.5px;
    }
    &.module_column_to_row{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        /* height: 100%; */
    }
    @media screen and (max-width: 480px) {
        .each_cert_card{
            padding: 0;
        }
    }
`;

export const ModuleRow = styled.div`
    width: 100%;
    /* height: 250px; */
    height: 316px;
    margin-bottom: 40px; 
    display:flex;
    flex-flow: column wrap;
    overflow-x:scroll;

    .module_row_jobs_card:nth-child(n+4){
            margin-top: 20px;
    }

    @media screen and (max-width: 480px) {
        /* flex */
    }
`;

export const ModuleRowEmpty = styled.div`
    width: 100%;
    /* height: 250px; */
    /* height: 200px; */
    height: 364px;
    margin-bottom: 25px; 
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 16px; 

button {
    border: 1px solid #12355B !important;
    border-radius: 8px !important;
    width: 230.4px !important;
    height: 48.6px !important;
    margin: 10px 0 0 0 !important;
    background-color: #fff !important;
    color: #12355B !important;
    font-size: 14px;
    line-height: 120%;
    font-weight: 500;
    opacity: 0.6;
}


`;

export const OptionsRow = styled.div`
width: 100%;
height:80px;
display: flex;
justify-content: flex-start;
overflow-y:scroll;
align-items: center;

button:first-of-type {
    background: rgba(192, 118, 84, 0.9);
}
button:nth-of-type(2){
background-color:rgba(254, 185, 95, 0.1);
color: #FEB95F;
}
button:nth-of-type(3){
    background: rgba(192, 118, 84, 0.1);
    color: #C07654;
}
button:nth-of-type(4){
    background-color:rgba(18, 53, 91, 0.1);
    color: #12355B;
}
/* rgba(125, 191, 16, 1) */
button:nth-of-type(5){
    background-color:rgba(125, 191, 16, 0.1) ;
    color: #7DBF10;
}
`;

export const OptionButton = styled.div`
background: rgba(118, 118, 118, 0.1);
border-radius: 8px;
/* width: 160px; */
height: 40px;
/* width: 150px; */
display: flex;
padding:10px;
margin:0 10px 0 0;
/* align-items: center; */

*{
color: #12355B ;
}
p{
    margin-right: 5px;
    text-transform: capitalize;
    font-size: 14px;
color: #12355B ;

}
img {
    width: 8px;
    height: 8px;
    margin: 7.5px 0 0 2.5px;
color: #12355B ;


}
`;

export const SearchBar = styled.div`

background: rgba(255, 255, 255, 0.1);
opacity: 0.5;
border: 1px solid rgba(0, 0, 0, 0.1);
box-sizing: border-box;
border-radius: 34px;
width: 430px;
height: 60px;
 svg { 
     margin-left: 2%;
    color: rgba(18, 53, 91, 0.5);

    }
img {
    width: 3%;
    margin: 0px 2% 0px 3%;
    z-index: 0;
}
input{
    border: transparent;
    background: transparent;
    width: 92%;
    height: 100%;
    position: relative;
    z-index: 1;

    font-size: 14px;
line-height: 120%;
font-weight: 300;
}


`;

export const SectionHeading = styled.div`
        display:flex;
        width: 100%;
        height: 40px;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    h5{
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        width: 75%;
    }
    &.position_dropdown{
        position: relative;
        /* margin: 0 0 20px 0 !important; */

    }
    a{
       color: rgba(18, 53, 91, 0.9);
    }

    &.job_section{
        margin-right: 20px;
    }

    @media screen and (max-width: 480px) {
        h5 {
            font-size: 16px;
        }
    }
`;

const SectionWrapper = styled.section`
    color:#5832DA;
    /* height: 1000px; */
    min-height: fit-content;

        display:flex;
    flex-direction: row; 
.icon_ellipse{
    margin: 10px 10% 0 2.5%;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(88, 50, 218, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 65%;
    }
}
.counter{
    background-color:#5832DA;
    width: 17.5px;
    height: 17.5px;
    font-size: 10px;
    color: #ffffff;
    border-radius: 50%;
    margin: 5px 0 0 -11.5%;

    display: flex;
    align-items: center;
    justify-content: center;
    
}
    h3, h4, h5 {
        color:#5832DA;
        margin: 0px 0 0 0px;
    }

    /* font-family: 'Lato', sans-serif; */

.dash_row:hover{
  img,p {
    color:#5832DA;
  }
}
.dash_sectionOne{
    margin-top: 45px;

}
.dash_sectionTwo{
    margin-top: 100px;
    background-color:rgba(88, 50, 218, 0.1);
}
button {
  background-color: #5832DA;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 75%;
  height: 48px;
    margin:40px 30px;
    font-weight: 300;

  /* margin-top: 40px; */
  color: #ffffff;
    transition: all 0.3s ease-in-out;
}
button:hover,.profile_card:hover, .icon_ellipse:hover {
  cursor: pointer;
  transform: scale(1.02)
}

.search_bar{
    border-radius: 34px;
    img{
        margin-right: 5px;
    }
    p{
    color: #767676;

    }
}

`;



export const ProfileCard = styled.section`
    /* background: linear-gradient(180deg, rgba(176, 214, 255, 0.1) 0%, rgba(163, 189, 217, 0.1) 100%); */background: #ffffff;
    width: 22.5%;
    height:1000px;
    padding: 0 0 0 25px;
    h4 {
        margin: 20px 0 20px 0px;
        color: rgba(18, 53, 91, 1);
    }
    .profile_name{
        display: flex;
        width: 100%;
        padding-right: 20px;
        margin: 25px 0 9px 0;
        img {
            width: 20px !important;
            margin-left: 10px;
        }
    }
    @media screen and (max-width: 480px) {
        &.sidebar_right { 
            display: none;
        }
    }
`;

export const ProfileCardSkills = styled.section`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    /* margin: 0 10%;  */
    height: 225px;
    /* left: 1528px;
    top: 338px; */
     background: rgba(245, 247, 249, 1);
    border-radius: 16px;

    p {
        color: rgba(0, 0, 0, 1);
font-weight: 500;
    }
`;


// export const ProfileCard = styled.div`
// background-color:rgba(88, 50, 218, 0.05);
// height:100px;
// border-radius: 8px;
// margin:20px 50px 20px 50px;
// font-size: smaller;
// display:flex;
// flex-direction: row;
// padding: 10px;
// transition: all 0.3s ease-in-out;
//     cursor: pointer;

// .profile_pic{
//     width: 50px;
//     height: 50px;  
// }
// .profile_pic:hover{
//     cursor: pointer;
// }
// .profile_info{
//     width: 60%;
//     height: 100%;
//     margin-left:20px;
//     p {
//         margin: 0;
//         padding: 2.5px 0;
//     }
//     p:first-of-type{
//         color: #5832DA;
//     }
//     p:nth-of-type(2){
//     color: #808080;
//     }    
//     p:nth-of-type(3){
//         font-weight:bold;
//         color: #12355B;
//     }
// }
// .profile_badge{
//     margin: 0;
//     width: 20px;
//     height: 20px;  
// }

// `;


export const ToggleButton = styled.button`
border-radius: 40px !important;
margin:0 5px !important;
width: auto !important;
padding: 0 20px;
/* height:35px !important; */
`;


export default SectionWrapper;
