import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../globalApp.style';
import SectionWrapper, { ModuleColumn, ModuleHeading, HeadingLeft, HeadingRight,ToggleButton, OptionsRow,OptionButton, ModuleSection, SectionHeading,  ModuleRow, ModuleRowEmpty, CertsCard, DashboardLinks, SearchBar } from '../../../DashboardBusiness/business.style';
import SidebarLeft from '../../SidebarLeft';
import SidebarRight from '../../SidebarRight';

import { userModule } from 'common/data/appData';

import notificationIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Notification.svg'
import showIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/Show.svg'
import addUserIcon from 'public/images/dashboard/Dashboard/Iconly/Light-outline/AddUser.svg'
import arrowDownIcon from 'public/images/dashboard/Dashboard/arrowDown2.svg'
import searchIcon from 'public/images/dashboard/Dashboard/search.svg'

import coursesIcon from 'public/images/dashboard/Courses.svg'
import badgeIcon from 'public/images/dashboard/Group.svg'
import workIcon from 'public/images/dashboard/Dashboard/Work.svg'
import dashCard from 'public/images/dashboardCard.png'
import paypal from 'public/images/partners/paypal.svg'
import cisco from 'public/images/dashboard/Resume Course/cisco.png'

import bookIcon from 'public/images/dashboard/book.svg'
import threeUsersIcon from 'public/images/dashboard/3User.svg'

const CertificationsSection = () => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });
  

  return (
    <>
      {
          userOptions.map(( section => (
              section.certifications?.length > 0 ?
              <ModuleRow className="row2col">
                  {
                      section.certifications.map(( cert => (
                          <CertsCard className="each_cert_card">
                              <div className="cert_logo_div">
                                  <img src={cisco?.src}  alt="Image" />
                              </div>

                              <div className="cert_text_div">
                                  <Heading as="h5" content={cert.name}></Heading>

                                  <Text as="p" content={"has successfully completed the course"} />

                                  <Heading as="h5" content={cert.title}></Heading>

                                  <Text as="p" content={`on the ${cert.date}`} />
                                  
                                  <Heading as="h6" content={`Distinction: ${cert.distinction}`} />
                              </div>                               
                          </CertsCard>
                      )))
                  }
              </ModuleRow>
              :   
              <ModuleRowEmpty>
                  <Text as="p" content={"Oops, you haven’t earned a certificate yet."} />
              </ModuleRowEmpty> 
      )))
      } 
    </>
  );
};

export default CertificationsSection;
