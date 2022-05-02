import React, {useState} from 'react';
import styled from 'styled-components';

const FormRadioButtonStyle = styled.div`
    width: 100%;
    height: 20px;
    margin: 10px 0;
    font-weight: 300 ;
    display: flex;
    label {
        margin-right: 100px;
        color: rgba(47, 48, 52, 1);

    }

    .input_and_pill{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 40px;
        height: 20px;
        position: relative;
        margin-left: 2.5px;

        input {
            z-index: 6;
            opacity: 0; /* To hide radio buttons behind the toggle pill */
            :hover {
                cursor: pointer;
            }
        }
    }
    .pill_container {
        width: 45px;
        height: 20px;
        position: absolute;
        margin-left: 177px;
        .toggle_pill{
            position: relative;
            height: 20px;
            width: 45px;
            background: rgba(238, 234, 251, 1);
            border-radius: 100px;
            transition: all 500ms;
            z-index: 4;

        }
        .toggle_bubble{
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: white;
            border-radius: 50%;
            transition: all 500ms;
            z-index: 5;
            margin: 2.5px 2.5px;
            /* :hover {
                cursor: pointer;
            } */
        }   
    }

    .pill_container.active {
        .toggle_bubble {
            margin: 2.5px  2.5px  2.5px 27.5px;
        }
        .toggle_pill {
            background: rgba(88, 50, 218, 1) !important;
        }
    }
    .pill_container.not_active {
        .toggle_bubble {
            margin: 2.5px 27.5px 2.5px 2.5px;
        }
        .toggle_pill {
            background: rgba(238, 234, 251, 1);
        }
    }
`;

const FormRadioButton = (props) => {
    const {label} = props;
    const [checked, setChecked] = useState(false);
    const [active, setActive] = useState(false);

    const toggle = (value) => !value;

    return (
        <FormRadioButtonStyle>
            <label>{label}</label>
            <div className="input_and_pill">
                <input
                    onChange={() => setChecked(toggle)}
                    id="unchecked"
                    type="radio"
                    checked={!checked}
                    onClick={() => setActive(false)}
                />
                <input
                    onChange={() => setChecked(toggle)}
                    id="checked"
                    type="radio"
                    checked={checked}
                    onClick={() => setActive(true)}
                />           
            </div>
            <div className={ active ? "pill_container active" : "pill_container not_active"}>
                <div className="toggle_bubble"></div>
                <div className="toggle_pill"></div>
            </div> 
        </FormRadioButtonStyle>
    );
}
export default FormRadioButton