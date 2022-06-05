import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../../../globalApp.style';
import SectionWrapper, { ModuleRow, ModuleRowEmpty, BadgesCard } from '../../../DashboardBusiness/business.style';

import { individualModule } from 'common/data/appData';

import goldMedal from 'public/images/dashboard/Dashboard/My Learning/GoldMedal.svg'
import silverMedal from 'public/images/dashboard/Dashboard/My Learning/SilverMedal.svg'
import bronzeMedal from 'public/images/dashboard/Dashboard/My Learning/BronzeMedal.svg'
const BadgesSection = () => {
  const {userOptions} = individualModule;

  const [state, setState] = useState({
  });

  return (
    <> 
      {
        userOptions.map(( section => (
              section.badges?.length > 0 ?
              <ModuleRow className="row2col">
                  {
                    section.badges.map(( badge => (
                      <BadgesCard>
                      <div className="badge_logo_div">
                        {
                        
                          badge?.rank === 1 ? 
                          <img src={goldMedal?.src}  alt="Gold" /> 
                          : badge.rank === 2 ? 
                          <img src={silverMedal?.src}  alt="Silver" /> 
                          : badge.rank === 3 &&
                          <img src={bronzeMedal?.src}  alt="Bronze" /> 
                        }
                      </div>
                      <div className="badge_info_div">
                        <Heading as="h5" content={badge.title}></Heading>
                        <Text as="p" content={`presented to ${badge.name}`} />
                        <Heading as="h5" content={badge.category}></Heading>
                        <Text as="p" content={`on the ${badge.date}`} />
                        </div>
                    </BadgesCard>
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

export default BadgesSection;
