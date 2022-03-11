import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';


export const AvatarIcon = styled.div`

`;

// export const DashboardCard = styled.div`
//     border-radius: 12px;
//     background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/card_bg.png');
//     height: 220px;
//     width: 370px;
//     margin-right: 20px;
//     padding: 10px 20px;
//     color: #f4f4f4;
//     font-size: 14px;
//     display: flex;
//     flex-direction: column;
// h5{   
//     /* font-weight: bold; */
//     color: #f4f4f4;
//     font-size: 14px;
// }
// p{
//     color: #f4f4f4;
// }
// .row_top{
//     height: 80%;
// }
// .row_bottom{
//     width: 100%;
//     height: 50px;
//     display: flex;
//     flex-direction: row;
// }
// .col_bottom{
//     width: 50%;
//     flex-direction: column;
//     p{
//      margin:0 0 5px 0;
//  }
// }
// .col_row{
//     display: flex;
//     flex-direction: row;
//     align-items:center;

//     .icon_ellipse{
//         height: 20px;
//         width:20px;
//         margin:0% 5px 0 0;
//         background-color:rgba(255, 255, 255, 0.5);
//     }
 
// }
// `;

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
    margin: 28px 0 0 0;
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
:nth-child(n+1) {
    margin-right: 40px;
}
img {
    border-radius: 8px;
    width: 122px;
    height: 64px;
    margin-bottom: 16px;
}
.courses_resume_top {

}
h6 {
    color: rgba(173, 168, 190, 1);
    font-size: 12px;
    margin-bottom: 0px;
    line-height: 180%;
    letter-spacing: 0.02em;
}
h5{
    margin: 1px 0 12px 0;
    color: rgba(18, 53, 91, 1) !important;
font-size: 18px;
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
    /* border: rgba(192, 118, 84, 0.05); */
height: 316px;
width: 332px;
border-radius: 12px;
padding: 16px;
display: flex;
flex-direction: column;
color: #12355B;

:nth-child(n+1) {
    margin-right: 31px;
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
    color:  rgba(192, 118, 84, 1) !important;
    line-height: 140%;
}
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

a{
    color: #C07654;
    align-self: flex-end;
    text-transform: uppercase;
    line-height: 180%;
}
`;

export const BadgesCard = styled.div`
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
:nth-child(n+1) {
    margin-right: 35px;
}
.badge_logo_div{
    width: 100%;
    height: 114px;
    padding: 12px 0;
}
.badge_text_div{
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
`;

export const DashboardRow = styled.div`
height: 54px;
width: 100%;
display: flex;
align-items: center;
/* font-size: 14px; */
/* justify-content: center; */
/* background-color:blue; */
padding: 0px 30px;
border-color: transparent;
border-radius: 0px 12px 12px 0px;
transition:all 0.3s ease-in-out;

:hover {
    border-left: 4px solid rgba(88, 50, 218, 1);
;
}

img{
    margin-right:10px;
}
p{
    font-size: 14px;
/* line-height: 120%; */
 height: 24px;
}
p:hover {
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

export const HeadingLeft = styled.div`
height: 100px;
width: 30%;
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
`;

export const ModuleColumn = styled.div`
    display:flex;
    flex-direction: column; 
    background-color: #f8f8f8;
    padding:40px 40px;
    width: 70%;
    /* height:1400px; */
`;

export const ModuleHeading = styled.div`
width: 100%;
display:flex;
flex-direction: column;

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

`;

export const ModuleSection = styled.div`
/* TITLE, BUTTON(SEE ALL), RENDER COURSES */
    /* padding: 20px 0 0 0px; */
    overflow-y: scroll;
    font-weight: 300;

`;

export const ModuleRow = styled.div`
    width: 100%;
    /* height: 250px; */
    height: 316px;
    margin-bottom: 40px; 
    display:flex;
    flex-flow: column wrap;
    overflow-x:scroll;

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
    }
    a{
        color: rgba(18, 53, 91, 0.9);
        line-height: 120%;
        margin-right: 30px;
        font-weight: 500;

    }
`;

const SectionWrapper = styled.section`
    color:#5832DA;
    height: 1000px;
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

export const SidebarCard = styled.section`
    background: linear-gradient(180deg, rgba(176, 214, 255, 0.1) 0%, rgba(163, 189, 217, 0.1) 100%);
    width:25%;
    height:1000px;
    /* padding: 50px 0 0 0; */

    h4 {
        margin: 20px 0 0 35px;
    }
    h5 {
        margin: 0px 0 0px 36.25px;
        opacity: 0.5;
    }

/* display: */
`;
export const ProfileCard = styled.section`
    /* background: linear-gradient(180deg, rgba(176, 214, 255, 0.1) 0%, rgba(163, 189, 217, 0.1) 100%); */background: #ffffff;
    width: 25%;
    height:1000px;
    padding: 0 0 0 25px;
    h4 {
        margin: 20px 0 20px 0px;
        color: rgba(18, 53, 91, 1);
    }
    .profile_name{
        display: flex;
        width: 100%;
        /* justify-content: space-between; */
        padding-right: 20px;
        margin: 25px 0 9px 0;


    img {
        width: 20px !important;
        margin-left: 10px;
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
