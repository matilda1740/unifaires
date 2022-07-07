import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { FormContext } from './Form';

const FormStyleInput = styled.div`
    /* Common Style fo Full and Half */
    font-weight: 300;
    margin: 10px 0 15px 0;
    label {
        color: rgba(18, 53, 91, 0.5);
        margin-bottom: 5px;
    }
    input {
        outline: none;
        border-bottom: 1px solid rgba(18, 53, 91, 0.2);
        border-top: none;
        border-left: none;
        border-right: none;   
        font-weight: 500;
        background: transparent;
        ::placeholder{
            font-weight: 500;
            color: rgba(18, 53, 91, 0.9);
        }    
    }

    /*  */
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
        border-bottom: 1px solid rgba(88, 50, 218, 0.9);
        *{
            font-weight: 300;
            color: rgba(88, 50, 218, 1);
          ::placeholder{
            font-weight: 500;
            color: rgba(88, 50, 218, 1);
        }    
        }

        input { font-weight: 500; }
    }

    &.covered_blue{
        outline: none;
        border: none !important; 
        
        background-color: #F3F5F7;
        border-radius: 6px;
        font-weight: 500; 
        margin: 0 ;

        ::placeholder{
            font-weight: 500;
            color: rgba(18, 53, 91, 0.9);
        } 

        input { 
            border-bottom: none !important; 
            padding: 5px 10px;
            font-weight: 500; 
            height: 40px;
            margin: -20px 0 10px 0 ;

        }
    }
`;

const FormInput = (props) => {

    const {label, size, name, type='text', placeholder, variant, value} = props;

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
        <FormStyleInput className={hasFocus ? `focus ${size} ${variant}` : `${size} ${variant}`}>
            <label>{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                ref={ref}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleFormChange}
            />
        </FormStyleInput>
    );
}
export default FormInput