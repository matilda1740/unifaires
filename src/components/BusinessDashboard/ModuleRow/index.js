import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SidebarModule from './Sidebar';
import { businessModule } from 'common/data/appData';

const ModuleRow = (props) => {

  const [state, setState] = useState({
  });
  

  return (
    <ContactAreaRight className="auth_bg_right">
    {props.content}
    </ContactAreaRight>
  );
};

export default ModuleRowr;
