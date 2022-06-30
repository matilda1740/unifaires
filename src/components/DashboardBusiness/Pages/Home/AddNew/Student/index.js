import React, { useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router'
// PHONE PACKAGE 
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import { AddButtonsRow, Buttons, FormColumn, ImageColumn } from '../addnew.style';

import ImageInput from 'components/DashboardIndividual/Pages/Settings/Components/ImageInput';
import { FormEachPhoneContainer, FormHalfContainer } from 'components/DashboardIndividual/Pages/Settings/Components/Form';
import FormInput from '../Components/FormInput';
import avatarBoxProfile from 'public/images/dashboard/avatarBoxProfile.png'

const AddStudent = () => {

    const router = useRouter();
    const [phone, setPhone] = useState()

    return (
        <>
        <ImageColumn>
        {/* <ImageInput title={"Upload Image"} text={"Size limit: 5mb (jpeg,png,svg)"} /> */}
        <div className="image_container">
            <img src={avatarBoxProfile?.src} alt="Upload"/>
        </div>  

        </ImageColumn>

        <FormColumn>
            <FormHalfContainer>

            <FormInput size={"half"} label={"Full Name"} placeholder={"John Doe"} name={"fullname"} type={"text"} />
            <FormInput size={"half"} label={"Date of Birth"} placeholder={"Select date"} name={"dob"} type={"datetime"} />
       
            </FormHalfContainer>

            <FormHalfContainer>
                <FormInput size={"half"} label={"Email Address"} placeholder={"microsoft@gmail.com"} name={"email"} type={"email"} />
                <FormInput size={"half"} label={"Country"} placeholder={"USA"} name={"country"} type={"text"} />
            </FormHalfContainer>
            <FormHalfContainer>
                <FormInput size={"half"} label={"Gender"} placeholder={"Male"} name={"gender"} type={"text"} />
                <FormEachPhoneContainer className="business_phone_input">
                    <label>Phone Number</label>
                    <PhoneInput
                    placeholder="3 44 736 9000"
                    value={phone}
                    onChange={setPhone} 
                    />
                </FormEachPhoneContainer>
            </FormHalfContainer>

            <FormInput size={"full"} label={"Invitation Message"} placeholder={"Optional"} name={"invitemessage"} type={"text"} />

        </FormColumn>
        </>
    );
};

export default AddStudent;