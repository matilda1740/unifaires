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
    {/* 
      1. H3: COURSE HEADING
      2. IMAGE: THUMBNAIL/VIDEO
      3. Simple Heading: About This Course
      4. P TAG: Course Description
      5. Course Section Heading: Recommended Study Material/ Recommended Research Materilas + Div with: Two Links (Bopoks/Articles)
    
     */}
    </>
  );
};

export default SpecificCourseSection;
