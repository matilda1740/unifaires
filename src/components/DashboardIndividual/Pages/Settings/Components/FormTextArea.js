import React, {useState, useRef, useEffect} from 'react';

import styled from 'styled-components';
import { FormContext } from './Form';

const FormTextAreaStyle = styled.div`
    margin: 10px 0 15px 0;

    label {
        color: rgba(18, 53, 91, 0.5);
        margin-bottom: 5px;
        font-weight: 500;
    }
    textarea {
        outline: none;
        border: none; 
        background-color: #F3F5F7;
        border-radius: 6px;
        font-weight: 300;
        padding: 10px 10px;
        overflow-y: scroll;
        font-weight: 500;
        ::-webkit-scrollbar { display: none; }

        ::placeholder{
            font-weight: 500;
            color: rgba(18, 53, 91, 0.9);
        }      
    }
    &.job_textarea{
        margin: -20px 0 0 0;
        textarea{
            height: 400px;
        }
    }
    &.full {
        width: 100%;
        label, textarea {
            width: 100%;
        }
    }
    &.focus {
        *{
            font-weight: 500;
            color: rgba(88, 50, 218, 1);
        ::placeholder{
            font-weight: 500;
            color: rgba(88, 50, 218, 1);
        }}
    }
    &.msg_textarea{
        textarea {
            height: 240px;
            margin: -20px 0 0 0;
        }
    }
`;

const FormTextArea = (props) => {

    const {label, size, name, placeholder, variant, value, defaultValue} = props;

    const ref = useRef();
    const [hasFocus, setFocus] = useState(false);

    const formContext = React.useContext(FormContext);
    const { form, handleFormChange } = formContext;

    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setFocus(true);
        }
    }, []);
    return (
        <FormTextAreaStyle className={hasFocus ? `focus ${size} ${variant}` : `${size} ${variant}`}>
            <label>{label}</label>
            <textarea
                placeholder={placeholder}
                name={name}
                ref={ref}
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleFormChange}
            />
        </FormTextAreaStyle>
    );
}
export default FormTextArea;