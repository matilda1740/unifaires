import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import Button from 'common/components/Button';
import PageWrapper from '../PricingPage/pricing.style';

import PricingPolicy from './PricingPolicy/index.js';
import PricingTestimonials from './PricingTestimonials/index.js';

const PricingPageSection = () => {
 
  return (
    <PageWrapper>
        <PricingPolicy/>    
        <PricingTestimonials/>        
    </PageWrapper>
  );
};

export default PricingPageSection;
