// import React, { useState } from 'react';
// import Link from 'next/link';
// import Text from 'components/Layout/Text';
// import Heading from 'components/Layout/Heading';
// import { NotificationsOutlined, SearchOutlined } from "@mui/icons-material";

// const ModuleHeadingStyle = styled.section`
// width: 100%;
// display:flex;
// flex-direction: column;

// .top_row{
// display:flex;
// flex-flow:row wrap;
// }
// .bottom_row{
//     display: flex;
//     flex-flow:row nowrap;
//     width:100%;
//     justify-content: space-between;
//     /* margin: 10px 20px 0px 0px; */
// }
// p{
//     color:rgba(128, 128, 128, 0.9);
// }
//     @media screen and (max-width: 480px) {
//         .bottom_row{
//             /* display: none; */
//         }
//         &.no_header_modules {
//             display: none;
//         }
//         &.settings_header_mobile{
//             height: 50px;
//             h4 { color: rgba(18, 53, 91, 1);}
//         }
//         .dashboard_slides{
//             display: none;
//         }
//     }

// `;

// const ModuleHeading = ({heading, subheading, bottomRow}) => {

//     return (
//         <ModuleHeadingStyle>
//             <div className="top_row">
//             <HeadingLeft>
//                 <Heading as="h4" content={"My Dashboard"}/>
//                 <Text as="p" content={`Welcome ${firstname}, here are your daily analytics`}/>
//             </HeadingLeft>
//             <HeadingRight>
//                 <SearchBar>
//                     <SearchOutlined />
//                     <input type="text" placeholder="Search for anything" name="searchBar" className="searchBar"></input>
//                 </SearchBar>
//                 <div className="icon_ellipse"> <NotificationsOutlined /></div>
//                 <div className="counter"><span>4</span></div>
//             </HeadingRight>
//             </div>
//             <SwipeableComponent />  
//             {
//             bottomRow === true ? 
//             <div className="bottom_row dashboard_slides">
//                 <DashboardBadges 
//                     label={"Posted Courses"}
//                     number={980}
//                     // icon={<AutoStories/>}
//                     icon={CoursesIcon}

//                 />
//                 <DashboardBadges 
//                     label={"Posted Jobs"}
//                     number={980}
//                     icon={JobIcon}
//                 />
//                 <DashboardBadges 
//                     label={"Awarded Certifications & Badges"}
//                     number={980}
//                     icon={MedalIcon}
//                 />                               
//             </div>

//             : <></>                
//             }         


//         </ModuleHeadingStyle>
//     )
// }

// export default ModuleHeading;