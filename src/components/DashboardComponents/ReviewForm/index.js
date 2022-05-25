import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import { BadgesCard, CertsCard, ModuleSectionHeader, SectionHeading } from 'components/DashboardBusiness/business.style';

import FormInput from 'components/DashboardIndividual/Pages/Settings/Components/FormInput';


export const ReviewFormStyle = styled.div`
background: rgba(223, 223, 223, 0.2);
border: 1px solid rgba(223, 223, 223, 1);
border-radius: 8px;
width: 100%;
height: 230px;
padding: 32px 18px;
h5 { text-align: left; }
@media screen and (max-width:480px){
height: 55%;

}
`;


export default function ReviewForm({title, video, description }) {

  return (
    <ReviewFormStyle>
        <Heading as="h5" content={"Tell us about your experience"} />
        <FormInput size={"full"} label={"How would you describe the course and your experience"} placeholder={"I enjoyed the lectures"} name={"reviewText"} type={"text"}  />
        <FormInput size={"full"} label={"How would you rate Unifaires"} placeholder={"4.5"} name={"reviewValue"} type={"number"}  />
    </ReviewFormStyle>
  )
}
