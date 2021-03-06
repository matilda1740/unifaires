import React, { useState } from 'react';
import Link from 'next/link';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// PHONE PACKAGE 
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// STYLE COMPONENTS 
import { Button, ButtonWrapper, ProfileForm, SkillsButton, SkillsWrapper } from './profile.style';
import { ModuleHeader } from '../settings.style';
// REUSABLE COMPONENTS 
import FormSectionDivider from '../Components/FormSectionDivider';
import ImageInput from '../Components/ImageInput';
import FormInput from '../Components/FormInput';
import Form, { FormEachPhoneContainer, FormHalfContainer } from '../Components/Form';
import FormCheckbox from '../Components/FormCheckbox';
import FormWorkGroup from '../Components/FormWorkGroup';
import AccountCard, { AccountsWrapper } from '../Components/AccountCard';
import FormSelectBox from '../Components/FormSelectBox';

// DATA
import { individualModule } from 'common/data/appData';

// ICONS
import settingsIcon from 'public/images/dashboard/settings/Setting.svg'
import closeIcon from 'public/images/dashboard/settings/close.svg'
import AddGroup from 'components/DashboardComponents/ToggleGroups';


// MAIN FUNCTION
const ProfileSection = () => {
  const {userOptions} = individualModule;

  const [phone, setPhone] = useState()
  const [altPhone, setAltPhone] = useState()


  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    about: '',
    gender: '',
    location: '',
    companyname: '',
    role: '',
    description: '',
    startdate: '',
    enddate: '',

    school: '',
    degree: '',
    gradyear: '',
    gpa: '',
    phonenumber: '',
    altphonenumber: '',
    portfoliolink: '',
    linkedAccounts: '',

    skills: '',
    identity: ''
  };

  const [newWorkGroup, setNewWorkGroup] = useState(false);

  const workGroupAddRef = React.useRef(null)

  const skills = [
    { title: "Product Design" },
    { title: "Product Design" },
    { title: "Product Design" },
    { title: "Product Design" },
    { title: "Art" },
    { title: "3D Design" },
    { title: "Motion" },
  ];

  return (
    <>
      <ModuleHeader>
          <Heading as="h6" content={"Profile"} />
          <Text as="p" content={"This information will be displayed publicly"} />
      </ModuleHeader>

      <Form initialValues={initialValues}>
        <ImageInput title={"Upload personal image"} text={"Size limit: 5mb (jpeg,png,svg)"} />
        <FormSectionDivider content={"Personal Information"} />

        <FormHalfContainer>
          <FormInput size={"half"} label={"First Name"} placeholder={"Alice"} name={"firstname"} type={"text"} />
          <FormInput size={"half"} label={"Last Name"} placeholder={"Johnson"} name={"lastname"} type={"text"} />
        </FormHalfContainer>

        <FormInput size={"full"} label={"Email Address"} placeholder={"info@alicejohnson.com"} name={"email"} type={"email"} />

        <FormInput size={"full"} label={"About"} placeholder={"I am passionate about being at the forefornt "} name={"about"} type={"text"} />

        <FormHalfContainer>
          <FormSelectBox label={"Gender"} placeholder={"Female"} name={"gender"} />
          <FormSelectBox label={"Location"} placeholder={""} name={"location"} />
          {/* <FormLocationSelector /> */}
        </FormHalfContainer>

        <FormSectionDivider content={"Work Experience"} />

        <FormInput size={"full"} label={"Company Name"} placeholder={"Microsoft"} name={"companyname"} type={"text"} />
        <FormInput size={"full"} label={"Role"} placeholder={"Product Designer"} name={"role"} type={"text"} />
        <FormInput size={"full"} label={"Description"} placeholder={"https://dribbble.com/shots/15186840-Setting-page-example"} name={"description"} type={"text"} />

        <FormHalfContainer>
        <FormInput size={"half"} label={"Start Date"} placeholder={"16-01-2021"} name={"startdate"} type={"date"} />
        <FormInput size={"half"} label={"End Date"} placeholder={"16-01-2021"} name={"enddate"} type={"date"} />
        </FormHalfContainer>

        <FormWorkGroup 
          newWorkGroup ={newWorkGroup} 
          setNewWorkGroup={setNewWorkGroup} 
          workGroupAddRef={workGroupAddRef}
          />
        <AddGroup 
          // onClick={() => workGroupAddRef.current()}
          text={"Add Work Experience"}
        />
        <FormSectionDivider content={"Education"} />

        <FormInput size={"full"} label={"College/University"} placeholder={"Harvard University"} name={"school"} type={"text"} />
        <FormInput size={"full"} label={"Degree and Major"} placeholder={"Bachelor of Science in Computer Science"} name={"email"} type={"text"} />

        <FormHalfContainer>
          <FormInput size={"half"} label={"Graduation Year"} placeholder={"16-01-2021"} name={"gradyear"} type={"date"} />
          <FormInput size={"half"} label={"GPA"} placeholder={"4.8"} name={"gpa"} type={"date"} />
        </FormHalfContainer>
        
        <AddGroup text={"Add Education"} />
        <FormSectionDivider content={"Contact Information"} />

        <FormHalfContainer>
          <FormEachPhoneContainer>
            <label>Phone Number</label>
            <PhoneInput
              placeholder="3 44 736 9000"
              value={phone}
              onChange={setPhone} 
              />
          </FormEachPhoneContainer>

          <FormEachPhoneContainer>
            <label>Alternative Phone Number</label>
            <PhoneInput
              placeholder="3 44 736 9000"
              value={altPhone}
              onChange={setAltPhone} 
              />
          </FormEachPhoneContainer>
        </FormHalfContainer>

        <FormInput size={"full"} label={"Portfolio Link"} placeholder={"https://dribbble.com/shots/15186840-Setting-page-example"} name={"portfoliolink"} type={"url"} />

        <FormSectionDivider content={"Linked Accounts"} />

        <AccountsWrapper>
          <AccountCard 
            sitename={"Linkedln"} siteurl={"facebook.com/username"} 
          />
          <AccountCard 
            sitename={"Facebook"} siteurl={"facebook.com/username"} 
          />         
        </AccountsWrapper>

        <FormSectionDivider content={"Skills"} />

        <SkillsWrapper>
          {
            skills.map( skill => (
              <SkillsButton>
                <p>{skill.title}</p>
                <img src={closeIcon?.src} alt="" />
              </SkillsButton>
            ))
          }
        </SkillsWrapper>
        
        <FormInput size={"full"} label={"Add skill"} placeholder={"e.g. Python, React"} name={"addskill"} type={"text"} />

        <FormSectionDivider content={"Identity"} />

        <FormCheckbox text={"Black/ African-American"} />
        <FormCheckbox text={"Middle Eastern"} />
        <FormCheckbox text={"East Asian"} />
        <FormCheckbox text={"Pacific Islander"} />

        <ButtonWrapper><Button className="beginning purple">Save</Button></ButtonWrapper>

      </Form>
    </>
  );
};

export default ProfileSection;
