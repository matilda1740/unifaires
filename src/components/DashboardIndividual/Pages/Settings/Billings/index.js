import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import styled from 'styled-components';

// STYLE COMPONENTS 
import { ModuleHeader } from '../settings.style';
// REUSABLE COMPONENTS 
import FormSectionDivider from '../Components/FormSectionDivider';
import Form from '../Components/Form';
import FormRadioButton from '../Components/FormRadioButton';
import BillingPlanCard from './BillingPlanCard';
// DATA
import { userModule } from 'common/data/appData';

// ICONS
import creditCard from '../../../../../public/images/dashboard/settings/creditCard.png'

const PaymentWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    margin: 20px 0 10px 0;
    :hover { cursor:pointer }
    img { 
        object-fit: contain;
        width: 47.5%;
    }
`;

// MAIN FUNCTION
const BillingsSection = () => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });

  const initialValues = {
  };

  return (
    <>
      <ModuleHeader>
          <Heading as="h6" content={"Billings"} />
          <Text as="p" content={"Update your billing details and address."} />
      </ModuleHeader>

      <Form initialValues={initialValues}>

        <FormSectionDivider content={"Your Plan"} />

        <BillingPlanCard 
            title={"Entreprise Plan"}
            subtitle={"24 days remaining"}
            variant={"white"}
            pricing={"$100"}
            buttonText={"Cancel Subscription"}
        />

        <BillingPlanCard 
            title={"Educational Institute"}
            subtitle={"Learn more about this plan"}
            variant={"purple"}
            pricing={"$200"}
            buttonText={"Upgrade"}
        />

        <BillingPlanCard 
            title={"Governmental Institute"}
            subtitle={"Learn more about this plan"}
            variant={"blue"}
            pricing={"$500"}
            buttonText={"Upgrade"}
        />
        
        <FormSectionDivider content={"Payment Details"} />

        {/* <BillingPaymentCard/> */}
        <PaymentWrapper>
            <img src={creditCard?.src} alt="Credit Card" />
            <img src={creditCard?.src} alt="Credit Card" />
        </PaymentWrapper>
      </Form>
    </>
  );
};

export default BillingsSection;
