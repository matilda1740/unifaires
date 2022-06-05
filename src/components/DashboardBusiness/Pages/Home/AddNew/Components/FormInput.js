import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

const FormStyleInput = styled.div`
    font-weight: 300;
    margin: 10px 0 15px 0;
    outline: none;
    border: none;
    label {
        color: rgba(18, 53, 91, 0.5);
        margin-bottom: 5px;
    }
    input {
        outline: none;
        border: none;
        background: rgba(243, 245, 247, 1);
        padding: 10px 14px;
        border-radius: 6px;
        ::placeholder{
            font-weight: 500;
            color: rgba(128, 128, 128, 1);
        }   
        ::value {
            font-weight: 500;
            color: rgba(18, 53, 91, 1);
        } 
    }
    &.full {
        width: 100%;
        label, input {
            width: 100%;
        }
    }
    &.half {
        width: 50%;
        display: flex;
        flex-direction: column;
        label,input {
        width: 99%;
        }
    }
    &.focus {
       input{
        border: 1px solid rgba(18, 53, 91, 0.9);

       }
        *{
            font-weight: 500;
            color: rgba(18, 53, 91, 1);

        ::placeholder{
            font-weight: 500;
            color: rgba(18, 53, 91, 1);
        }    
        }
    }
`;

const FormInput = (props) => {

    const {label, size, name, type='text', placeholder} = props;

    const ref = useRef();
    const [hasFocus, setFocus] = useState(false);

    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setFocus(true);
        }
    }, []);


    // FORM STATE FROM BUSINESS ADD USER

    // 1. SET TYPE OF ADD: "ORG/INSTRUCTOR/STUDENT"

    return (
        <FormStyleInput className={hasFocus ? `focus ${size}` : size}>
            <label>{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                ref={ref}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
            />
        </FormStyleInput>
    );
}
export default FormInput