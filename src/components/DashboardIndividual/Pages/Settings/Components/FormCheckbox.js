import React from 'react'
import styled from 'styled-components';

const FormCheckboxStyle = styled.div`
    width: 100%;
    height: 40px; 
    text-align: left;
    display: flex;
    align-items: center;
    margin: 10px 0 5px 0;
    input { 
      width: 5%;
      height: 90%;
      margin: 0 8px 0 0;
      :hover {
        cursor: pointer;
      }
    }
    p{
      color: rgba(0, 0, 0, 1);
      width: 95%;
      height: 100%;
      margin-bottom: 0;
      font-weight: 300;
    }
    #checkbox:checked{
      accent-color: #5832DA !important;
    }
    @media screen and (max-width: 480px) {
      p { height: 60%;}
    }
`;

export const CheckboxContext = React.createContext({
  form: {}
});

export default function FormCheckbox(props) {
    const { text } = props;
  return (
    <FormCheckboxStyle>
        <input id="checkbox" type="checkbox" name="" value=""/>
        <p>{text}</p><br/>
    </FormCheckboxStyle>
  )
}
