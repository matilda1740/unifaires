import React, {  Fragment, useState, useRef } from 'react';
import Link from 'next/link';
import { signup } from 'common/data/appData';

import IndividualStepOne  from '../SignUpPage/IndividualStepOne';
import IndividualStepTwo  from '../SignUpPage/IndividualStepTwo';
import BusinessStepOne from './BusinessStepOne';
import BusinessStepTwo from './BusinessStepTwo';


const SignUpPage = () => {
  const { slogan, title, description, heading, logo} = signup;
  // const [, setSignupDetails] = useState({})
  const [individual, setIndividual] = useState()
  const [business, setBusiness] = useState()
  
  const [formStep, setFormStep] = useState(0);
  const [formType, setFormType] = useState("individual");

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

  const handleSignUpType = (type) => {
    // console.log(type)
    setFormType((currentType) => currentType=type)
    setFormStep((currentStep) => currentStep=0)
  }

  console.log(formStep, formType)

  return (
    <div formtype={formType} currentStep={formStep} prevFormStep={prevFormStep} >
      {
        formType === "individual" && 
        formStep === 0 && (
          <IndividualStepOne handleSignUpType={handleSignUpType} formStep={formStep} nextFormStep={nextFormStep} formtype={formType}/>)
      }
      {
        formType === "individual" && 
        formStep === 1 && 
        (<IndividualStepTwo formStep={formStep} prevFormStep={prevFormStep} handleSignUpType={handleSignUpType} formtype={formType}/>)
        }
      {
        formType === "business" && 
        formStep === 0 && (<BusinessStepOne handleSignUpType={handleSignUpType} formStep={formStep} nextFormStep={nextFormStep}/>)
      }
      {formType === "business" && 
        formStep === 1 && (<BusinessStepTwo handleSignUpType={handleSignUpType} formStep={formStep} nextFormStep={nextFormStep}/>)
      }      
    </div>
  );
}
export default SignUpPage;
