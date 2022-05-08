import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// STYLE COMPONENTS 
import { ModuleHeader } from '../settings.style';
// REUSABLE COMPONENTS 
import FormSectionDivider from '../Components/FormSectionDivider';
import ImageInput from '../Components/ImageInput';
import FormInput from '../Components/FormInput';
import Form, { FormHalfContainer } from '../Components/Form';
import FormCheckbox from '../Components/FormCheckbox';
import { DeviceContainer, DeviceHeader } from './security.style';
import DeviceComponent from './DeviceComponent';

// DATA
import { userModule } from 'common/data/appData';

// ICONS
import settingsIcon from 'public/images/dashboard/settings/Setting.svg'
import avatarDevice from 'public/images/dashboard/settings/avatarDevice.png'
import phoneIcon from 'public/images/dashboard/settings/phone.svg'
import dotIcon from 'public/images/dashboard/dotIcon.svg'



// MAIN FUNCTION
const SecuritySection = () => {
  const {userOptions} = userModule;

  const [state, setState] = useState({
  });

  const initialValues = {
    email: '',
    phonenumber: '',
    currentpassword: '',
    newpassword: '',
    confirmpassword: ''
  };

  return (
    <>
      <ModuleHeader>
          <Heading as="h6" content={"Security"} />
          <Text as="p" content={"Choose when and how we contact you."} />
      </ModuleHeader>

      <Form initialValues={initialValues}>

        <FormSectionDivider content={"Two-factor Authentication"} />

        <FormInput size={"full"} label={"Email Address"} placeholder={"Add an email address incase you have trouble signing in"} name={"email"} type={"email"} />

        <FormInput size={"full"} label={"Phone Number"} placeholder={"I am passionate about being at the forefornt "} name={"about"} type={"text"} />

        <FormSectionDivider content={"Password"} />

        <FormInput size={"full"} label={"Current Password"} placeholder={""} name={"currentpassword"} type={"password"} password="" />
        <FormInput size={"full"} label={"New Password"} placeholder={""} name={"newpassword"} type={"password"} password="" />
        <FormInput size={"full"} label={"Confirm New Password"} placeholder={""} name={"confirmpassword"} type={"password"} password="" />

        {/* ADD DEVICES MODULE */}
        <DeviceContainer>
          <DeviceHeader>
            <div className="top_div">
              <img src={avatarDevice?.src} alt="Avatar" />
              <button>Sign out of all devices</button>
            </div>
            <Heading as="h6" content={"Devices"} />
            <Text as="p" content={"See where you’re signed into"} />
          </DeviceHeader>

          
          <DeviceComponent image={phoneIcon} type={"Iphone 11"} location={"London, UK"} date={"Oct 28"} time={"1:15AM"} icon={dotIcon} 
          />
          <DeviceComponent  image={phoneIcon} type={"Iphone 11"} location={"London, UK"} date={"Oct 28"} time={"1:15AM"} icon={dotIcon}  
          />
          <DeviceComponent  image={phoneIcon} type={"Iphone 11"} location={"London, UK"} date={"Oct 28"} time={"1:15AM"} icon={dotIcon} 
          />          
          </DeviceContainer>
      </Form>
    </>
  );
};

export default SecuritySection;
