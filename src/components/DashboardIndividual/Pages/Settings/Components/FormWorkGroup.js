import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { RemoveGroup } from '../../../Components/ToggleGroups';
import { FormHalfContainer } from './Form';
import FormInput from './FormInput';
// import { FormHalfContainer } from './';

const FormWorkGroupStyle = styled.section`
    width: 100%;
    height: 100%;
    @media screen and (max-width: 480px) {
        height: auto;
    }
`;

const FormWorkGroup = (props) => {

    const {children, workGroupAddRef} = props;

    const [formFields, setFormFields] = useState([
        { companyname: '', role: '',  description: '', startdate: '', enddate: ''}
  ])

    React.useEffect(() => {
        workGroupAddRef.current = addFormFields
    }, [])
    const addFormFields = () => {
        console.log("From Work Group", formFields)
        setFormFields([...formFields, { companyname: '', role: '',  description: '', startdate: '', enddate: ''}])
    }
    return (
            formFields.map( element => (
            <FormWorkGroupStyle>
                <FormInput size={"full"} label={"Company Name"} placeholder={"Microsoft"} name={"companyname"} type={"text"} />
                <FormInput size={"full"} label={"Role"} placeholder={"Product Designer"} name={"role"} type={"text"} />
                <FormInput size={"full"} label={"Description"} placeholder={"https://dribbble.com/shots/15186840-Setting-page-example"} name={"description"} type={"text"} />

                <FormHalfContainer>
                <FormInput size={"half"} label={"Start Date"} placeholder={"16-01-2021"} name={"startdate"} type={"date"} />
                <FormInput size={"half"} label={"End Date"} placeholder={"16-01-2021"} name={"enddate"} type={"date"} />
                </FormHalfContainer>

                <RemoveGroup text={"Remove Work Experience"} />
            </FormWorkGroupStyle>
            ))
    );
}
export default FormWorkGroup;