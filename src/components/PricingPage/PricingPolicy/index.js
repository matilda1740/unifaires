import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import Button from 'common/components/Button';
import { Icon } from 'react-icons-kit';
import { checkmarkCircled } from 'react-icons-kit/ionicons/checkmarkCircled';

import SectionWrapper, {PricingSectionHeader, ButtonGroup,PricingArea,InnerWrapper,PricingCard, } from '../../PricingPage/pricing.style';
import PricingSliderSection from '../PricingSlider'
import crown from 'common/assets/images/crown.svg';
import checkmark from 'common/assets/images/checkmark.svg';


import { pricing } from 'common/data/appData';

const PricingPolicy = () => {
  const { slogan, title, subtitle, monthly, annualy, class_name } = pricing;
  const [state, setState] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });


  const handlePricingPlan = (plan) => {
    if (plan === 'annualy') {
      setState({
        ...state,
        active: 'year',
        pricingPlan: annualy,
      });
    } else {
      setState({
        ...state,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
  };  
  return (
    <SectionWrapper id="pricing_section">
        <PricingSectionHeader>
          <Heading className="slogan"  as="h5" content={slogan} />
          <Heading className="pricing_title" content={title} />
          <Text className="pricing_subtitle" content={subtitle} />

         <ButtonGroup>
          <button
            className={state.active === 'annualy' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('annualy')}
          >Anually
          </button>
          <button
            className={state.active === 'monthly' ? 'active' : ''}
            type="button"
            onClick={() => handlePricingPlan('monthly')}
          >Monthly
          </button>          
        </ButtonGroup>          
        </PricingSectionHeader>

        <PricingSliderSection >

        </PricingSliderSection>
        <PricingArea>
          <InnerWrapper>
            {state.pricingPlan.map((item) => (
              <PricingCard key={`${state.active}-card--key${item.id}`} id={class_name}>
                {item.notice.boolean === true && (
                  <span className="tag">{item.notice.message}</span>
                )}
                <div className="card_header">
                  <Heading as="h3" content={item.title} />
                  <Text content={item.description} />
                  <Button className="price_card_btn" title={item.button_title} />                 
                </div>
                <div className="card_price_div">
                  <p><strong><span>€ {item.price}</span></strong><span>/ {state.active}</span></p>
                  

                  {/* {item.trail ? (
                    <div className="trail">
                      <Link href={item.trailLink}>
                        <a>Or Start {item.trail} Days trail</a>
                      </Link>
                    </div>
                  ) : (
                    ''
                  )} */}
                  </div> 
                  <div className="card-body">
                  <ul className="feature-list">
                    {item.features.map((item) => (
                      <li key={`${state.active}-feature--key${item.id}`}>
                        {/* <img src={checkmark?.src} alt="CheckMark" /> */}
                         <Icon icon={checkmarkCircled} />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

              </PricingCard>
            ))}
          </InnerWrapper>
        </PricingArea>             
    </SectionWrapper>
  );
};

export default PricingPolicy;
