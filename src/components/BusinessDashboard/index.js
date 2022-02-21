import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SectionWrapper, { ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, DashboardCard } from './business.style';
import SidebarModule from './Sidebar';
import { businessModule } from 'common/data/appData';

import notificationIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Notification.svg'
import showIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Show.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import arrowDownIcon from 'public/images/dashboard/Dashboard/arrowDown2.svg'
import searchIcon from 'public/images/dashboard/Dashboard/search.svg'


// import cardBG from 'public/images/dashboard/Dashboard/card_bg.png'

const BusinessWrapper = (props) => {
  const {userOptions} = businessModule;

  const [state, setState] = useState({
  });
  

  return (
    <SectionWrapper>
      <SidebarModule/>
      
      <ModuleColumn>
        <ModuleHeading>
            <HeadingLeft>
                <Heading as="h4" content={"Dashboard"}/>
                <Text as="p" content={"Manage all your tasks here"}/>
            </HeadingLeft>
            <div className="icon_ellipse">
            <img src={notificationIcon?.src} alt="Notify" /> 
            </div>
            <div className="counter"><span>4</span></div>
            <HeadingRight>
                <OptionsRow className="toggle_row">
                <ToggleButton>All</ToggleButton>
                <ToggleButton>My Learning</ToggleButton>
                <ToggleButton>Jobs</ToggleButton>
                <ToggleButton>Scholarships</ToggleButton>
                <ToggleButton>Badges</ToggleButton>
                </OptionsRow>
            </HeadingRight>

            <OptionsRow>
             
                <OptionButton className="search_bar">
                    <img src={searchIcon?.src} alt="Arrow Down" /> 
                    <Text as="p" content={"Search for Anything"}/>
                </OptionButton>

                <OptionButton>
                    <Text as="p" content={"Course Title"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>
                <OptionButton>
                    <Text as="p" content={"hard & soft skills"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>
                <OptionButton>
                    <Text as="p" content={"Technology Stacks"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>
                <OptionButton>
                    <Text as="p" content={"Language"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>
                <OptionButton>
                    <Text as="p" content={"price"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>
                <OptionButton>
                    <Text as="p" content={"Price Range Per Course"}/>
                    <img src={arrowDownIcon?.src} alt="Arrow Down" /> 
                </OptionButton>


            </OptionsRow>
        </ModuleHeading>

        <ModuleSection>
            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Courses"}></Heading>
                <Link href="/">See all ></Link>
            </SectionHeading>        
            <ModuleRow>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>                                
            </ModuleRow> 


            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Jobs"}></Heading>
                <Link href="/">See all ></Link>
            </SectionHeading>        
            <ModuleRow>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>                                
            </ModuleRow>             

            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Scholarships"}></Heading>
                <Link href="/">See all ></Link>
            </SectionHeading>        
            <ModuleRow>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>                                
            </ModuleRow> 

            <SectionHeading className="title_row">
                <Heading as="h5" content={"My Badges"}></Heading>
                <Link href="/">See all -></Link>
            </SectionHeading>        
            <ModuleRow>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>
                <DashboardCard>
                    <div className="row_top">
                        <Text as="h5" content={"Data Science for IoT"}></Text>
                        <Text as="p" content={"12th Jan 2021"}></Text>
                    </div>
                    <div className="row_bottom">
                        <div className="col_bottom">
                            <Text as="p" content={"Views"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={showIcon?.src} alt="View" /> 
                            </div>
                            <p><span>605</span> Views</p>                            
                            </div>
                        </div>
                        <div className="col_bottom">
                            <Text as="p" content={"Enrollments"}></Text>
                            <div className="col_row">
                            <div className="icon_ellipse">
                            <img src={addUserIcon?.src} alt="Enrollment" /> 
                            </div>
                            <p><span>605</span> Enrollments</p>                            
                            </div>
                        </div>                        
                    </div>
                </DashboardCard>                                
            </ModuleRow>             
        </ModuleSection>
      </ModuleColumn>
    </SectionWrapper>
  );
};

export default BusinessWrapper;
