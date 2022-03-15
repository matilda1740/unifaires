import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../../globalApp.style';
import SectionWrapper, { ModuleRow, ModuleRowEmpty, BadgesCard } from '../../../../DashboardBusiness/business.style';

import { userModule } from 'common/data/appData';

import goldMedal from 'public/images/dashboard/Dashboard/My Learning/GoldMedal.svg'
import silverMedal from 'public/images/dashboard/Dashboard/My Learning/SilverMedal.svg'
import bronzeMedal from 'public/images/dashboard/Dashboard/My Learning/BronzeMedal.svg'
const SpecificCourseSection = () => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });

  return (
    <>      
    </>
  );
};

export default SpecificCourseSection;
