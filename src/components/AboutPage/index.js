// Sign Up Step One Section Index
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { SectionHeader } from '../globalApp.style';
import SectionWrapper from '../AuthPages/auth.style';
import { signup } from 'common/data/appData';

const AboutModule = () => {
  const { slogan, title, description, heading, logo} = signup;

  return (
    <SectionWrapper>

    </SectionWrapper>
  );
};

export default AboutModule;
