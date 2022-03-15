import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SectionWrapper, { ModuleColumn } from '../DashboardBusiness/business.style';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

const UserWrapper = (props) => {

  return (
    <SectionWrapper>
      <SidebarLeft/>  
        <ModuleColumn>{props.content}</ModuleColumn>
      <SidebarRight/>
    </SectionWrapper>
  );
};

export default UserWrapper;
