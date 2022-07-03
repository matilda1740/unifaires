import React, { useState } from 'react'
import styled from 'styled-components';

const FormStyle = styled.form`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: scroll;

    &.job_form{
    padding: 10px 5px;
    margin: -20px 0 0 0;
    .business_job_section{
      height: 20px;
      margin: 10px 5px 10px 5px;
    }
    }


`;

export const FormHalfContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormEachPhoneContainer = styled.div`
    width: 100%;
    font-weight: 300;
    margin-top: 10px;
    :first-of-type{
      margin-right: 5px;
    }
  label {
    color: rgba(18, 53, 91, 0.5);
  }
  .PhoneInput{
    margin: 10px 0 15px 0;
    width: 99%;
    .PhoneInputCountry{
      .PhoneInputCountryIcon {
        box-shadow: 0 0 0 0;
      }
    }
    input {
        width: 100%;
        outline: none;
        border-bottom: 1px solid rgba(18, 53, 91, 0.2);
        border-top: none;
        border-left: none;
        border-right: none;   
        font-weight: 500;

      ::placeholder{
          font-weight: 500;
          color: rgba(18, 53, 91, 1);
      }   
      :focus {
        color: rgba(88, 50, 218, 1);
        ::placeholder{
          color: rgba(88, 50, 218, 1);
        }
      }
    }
  }

      /* BUSINESS FORMS */
    &.business_phone_input{
      width: 50%;
      .PhoneInput{
        background: rgba(243, 245, 247, 1);
        padding: 10px 14px;
        border-radius: 6px;
        margin: 4px 0 15px 0;
        input {
        outline: none;
        border: none;
        background: rgba(243, 245, 247, 1);
          ::placeholder {
            color: rgba(128, 128, 128, 1);

          }
        }
      }
    }
  @media screen and (max-width: 480px) {
    label{ font-size: 12px; }
    /* .PhoneInput{ width: 50%;} */
  }
`;

export const FormContext = React.createContext({
  form: {}
});


export default function Form(props) {

  const { children, initialValues, className, handleSubmit = () => {}  } = props;
  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return (
    <FormStyle className={className}>
      <FormContext.Provider value={{
        form,
        handleFormChange
      }}>
        {children}
      </FormContext.Provider>
    </FormStyle>
  )
}
