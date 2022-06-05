import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// STYLE COMPONENTS 
import { ModuleHeader } from '../settings.style';
// REUSABLE COMPONENTS 
import FormSectionDivider from '../Components/FormSectionDivider';
import Form from '../Components/Form';

// DATA
import { individualModule } from 'common/data/appData';

// ICONS
import settingsIcon from 'public/images/dashboard/settings/Setting.svg'
import avatarDevice from 'public/images/dashboard/settings/avatarDevice.png'
import phoneIcon from 'public/images/dashboard/settings/phone.svg'
import dotIcon from 'public/images/dashboard/dotIcon.svg'
import FormRadioButton from '../Components/FormRadioButton';

// MAIN FUNCTION
const NotiificationsSection = () => {
  const {userOptions} = individualModule;

  const [state, setState] = useState({
  });

  const initialValues = {
    notifications: '',
    newsandupdate: '',
    messaging: '',
    newpassword: '',
    newjobposting: '',
    newapplicant: '',
    matchedjobs: '',
  };

  return (
    <>
      <ModuleHeader>
          <Heading as="h6" content={"Notifications"} />
          <Text as="p" content={"Choose when and how we contact you."} />
      </ModuleHeader>

      <Form initialValues={initialValues}>

        <FormSectionDivider content={"General"} />

        <FormRadioButton label={"Notifications"} />
        <FormRadioButton label={"News and Updates"} />
        <FormRadioButton label={"Messaging"} />

        <FormSectionDivider content={"Jobs"} />

        <FormRadioButton label={"New job posting"} />
        <FormRadioButton label={"News and Updates"} />
        <FormRadioButton label={"Jobs matching your skill"} />
       
      </Form>
    </>
  );
};

export default NotiificationsSection;
