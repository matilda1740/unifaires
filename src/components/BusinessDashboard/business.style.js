import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
    color:#5832DA;
    height: 1000px;
.counter{
    background-color:#5832DA;
    width: 17.5px;
    height: 17.5px;
    font-size: smaller;
    color: #ffffff;
    text-align: center;
    border-radius: 50%;
    margin: 5px 0 0 -11%;
}
    h3, h4, h5 {
        color:#5832DA;
        margin: 0px 0 0 0px;
    }

    font-family: 'Lato', sans-serif;
    display:flex;
    flex-direction: row; 
.dash_row:hover{
  img,p {
    color:#5832DA;
  }
}
.dash_sectionTwo{
    margin-top: 20px;
    background-color:rgba(88, 50, 218, 0.1);
}
button {
  background-color: #5832DA;
  border-radius: 6px;
  outline: none;
  border: none;
  width: 75%;
  height: 48px;
    margin:40px 50px;

  /* margin-top: 40px; */
  color: #ffffff;
    transition: all 0.3s ease-in-out;
}
button:hover,.profile_card:hover, .icon_ellipse:hover {
  cursor: pointer;
  transform: scale(1.02)
}
.icon_ellipse{
    margin: 10px 10% 0 2.5%;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: rgba(18, 53, 91, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
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

export const ModuleColumn = styled.div`
    display:flex;
    flex-direction: column; 
    background-color: #f8f8f8;
    padding:40px 40px;
    width: 75%;
    height:1000px;
`;

export const SidebarCard = styled.section`
    background: linear-gradient(180deg, rgba(176, 214, 255, 0.1) 0%, rgba(163, 189, 217, 0.1) 100%);
    width:25%;
    height:1000px;
    /* padding: 50px 0 0 0; */

    h4 {
        margin: 20px 0 0 50px;
    }
    h5 {
        margin: -5px 0 0px 50px;
        opacity: 0.5;
    }

/* display: */
`;

export const ProfileCard = styled.div`
background-color:rgba(88, 50, 218, 0.05);
height:100px;
border-radius: 8px;
margin:20px 50px 20px 50px;
font-size: smaller;
display:flex;
flex-direction: row;
padding: 10px;
transition: all 0.3s ease-in-out;
    cursor: pointer;

.profile_pic{
    width: 50px;
    height: 50px;  
}
.profile_pic:hover{
    cursor: pointer;
}
.profile_info{
    width: 60%;
    height: 100%;
    margin-left:20px;
    p {
        margin: 0;
        padding: 2.5px 0;
    }
    p:first-of-type{
        color: #5832DA;
    }
    p:nth-of-type(2){
    color: #808080;
    }    
    p:nth-of-type(3){
        font-weight:bold;
        color: #12355B;
    }
}
.profile_badge{
    margin: 0;
    width: 20px;
    height: 20px;  
}

`;


export const DashboardRow = styled.div`
height: 50px;
width: 100%;
display: flex;
align-items: center;
/* font-size: 14px; */
/* justify-content: center; */
/* background-color:blue; */
padding: 0px 50px;
border-color: transparent;
border-radius: 0px 12px 12px 0px;
transition:all 0.3s ease-in-out;


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

export const ModuleHeading = styled.div`
width: 100%;
display:flex;
flex-flow:row wrap;
p{
    color:rgba(128, 128, 128, 0.9);
}
`;

export const HeadingLeft = styled.div`
height: 100px;
/* width: 30%; */
`;
export const HeadingRight = styled.div`
height: 100px;
width:75%;
display: flex;
align-items: flex-end;
.toggle_row{
    justify-content: flex-end;
}
`;

export const ToggleButton = styled.button`
border-radius: 40px !important;
margin:0 5px !important;
width: auto !important;
padding: 0 20px;
/* height:35px !important; */
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


export const ModuleSection = styled.div`
/* TITLE, BUTTON(SEE ALL), RENDER COURSES */
    /* padding: 20px 0 0 0px; */
    overflow-y: scroll;


`;
export const SectionHeading = styled.div`
    /* .title_row { */
        display:flex;
        width: 100%;
        height:40px;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
    /* } */
    a{
        color: rgba(192, 118, 84, 0.9);
        margin-right: 30px;
    }
`;

export const ModuleRow = styled.div`
    width: 100%;
    /* height: 250px; */
    height: 200px;
    margin-bottom: 40px; 
    display:flex;
    flex-flow: column wrap;
    overflow-x:scroll;

`;

export const DashboardCard = styled.div`
    border-radius: 12px;
    background-image: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('/card_bg.png');
    height: 220px;
    width: 370px;
    margin-right: 20px;
    padding: 10px 20px;
    color: #f4f4f4;
    font-size: 14px;
    display: flex;
    flex-direction: column;
h5{   
    /* font-weight: bold; */
    color: #f4f4f4;
    font-size: 14px;
}
p{
    color: #f4f4f4;
}
.row_top{
    height: 80%;
}
.row_bottom{
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
}
.col_bottom{
    width: 50%;
    flex-direction: column;
    p{
     margin:0 0 5px 0;
 }
}
.col_row{
    display: flex;
    flex-direction: row;
    align-items:center;

    .icon_ellipse{
        height: 20px;
        width:20px;
        margin:0% 5px 0 0;
        background-color:rgba(255, 255, 255, 0.5);
    }
 
}
`;


export default SectionWrapper;
