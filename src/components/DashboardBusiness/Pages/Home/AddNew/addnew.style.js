import styled from 'styled-components';

export const PopUpViewCard = styled.div`
    min-width: 400px;
    min-height: 200px;

    width: fit-content;
    height: fit-content;

    display: flex;
    flex-direction: column;
    border-radius: 12px;
    /* padding: 16px; */

    background-color: rgba(192, 118, 84, 0.00);

    .top_row_div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        margin: 10px 0;
        .company_logo_div{
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(141.54deg, #D4FAEA 7.01%, #B79FD4 96.64%);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content:center;

            img {
                width: 32px;
                height: 32px;
                margin: 16px 0;
            }
        }
        .title_div {
            h5, h6 {
                margin: 5px 0; 
            }
            h6 { 
                color: rgba(173, 168, 190, 1);
                font-size: 12px;
                line-height: 140%;
                letter-spacing: 0.02em;
                text-transform: uppercase;   
            }
            h5{
                color:  rgba(192, 118, 84, 1) !important;
                line-height: 100%;
                font-size: 16px;
            }
        }

        .ellipse{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: rgba(192, 118, 84, 0.1);
            border-radius: 50%;
        }

    }
    p{ margin-bottom: 0;}
    svg { 
        font-size: 1rem;
        :hover { cursor: pointer }
        color: rgba(192, 118, 84, 1);
    }
    .timing_row{
    display: flex;
    width: 100%;
    button {
        background: rgba(173, 168, 190, 0.1);
        border-radius: 16px;
        padding: 0px 18px;
        font-size: 13px;
        font-weight: 500;
        line-height: 150%;
        height: 30px;
        color: #12355B;
        margin: 4px 16px 16px 0;
        width: fit-content;
        min-width: 90px;
    }
}
a{
        border-radius: 8px;
        border: 1px solid rgba(18, 53, 91, 1);
        color: #12355B;
        width: 150px ;
        height: 45px ;
        background: transparent;
        margin: 10px 0 0 auto !important;   
        text-decoration: none;
        padding: 12.5px 15px;
        align-self: flex-end; 
        text-align: center;
}
`;

export const ModalWrapperOverlay = styled.section`
    background: rgba(0, 0, 0, 0.25);
    width: calc(100% + 60px);
    height: 1000px;
    display:flex;
    justify-content: center;
    margin: -40px -30px; /* To overcome module column padding */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10
`;

export const ModalWrapperStyle = styled.section`
    background: #FFFFFF;
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); */
    border-radius: 32px;
    padding: 40px;
    width: fit-content;
    max-width: 650px;
    height: fit-content;
    max-height: 650px;
    display: flex; 
    flex-direction: column;

    margin: 12.5% 0 0 0; 
`;

export const AddNavigationRow = styled.section`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 0px 0px 20px 0px;
`;

export const NavSelection = styled.div`
    background: rgba(238, 234, 251, 1);

    border: none;
    box-shadow: 0px 8px 30px 4px rgba(102, 102, 102, 0.08);
    border-radius: 8px;
    padding: 18px 12px;
    width: 30%;
    color: #082262;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease-in-out;

    &.active {
        border: 1px solid #5832DA;
    }
    :hover { 
        cursor: pointer;
        transform: scale(1.01);
        color: #5832DA;

        }
`;

export const DetailsSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 20px 0px;
    &.popup {
        margin: 0px 0px;
    }
`;

export const ImageColumn = styled.div`
    height: 100%;
    width: 30%;
    display: flex;
    flex-direction: column;
    .image_container{
        border-radius: 16px;
        width: 160px;
        height: 160px;
    }
`;

export const FormColumn = styled.div`
    height: 100%;
    width: 67.5%;
    display: flex;
    flex-direction: column;
`;

export const AddButtonsRow = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Buttons = styled.button`
    border-radius: 8px;
    /* padding: 18px 24px; */
    font-weight: 500;
    width: 150px;
    height: 36px;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    margin: 0 10px !important;
    :hover { cursor: pointer}

    &.primary {
        background: #5832DA;
        color: #FFFFFF;
    }
    &.secondary {
        background: rgba(238, 234, 251, 1);
        color: #5832DA;
    }
    &.cancel {
        background: #FFDBE3;
        color: #FF0C3E;
    }
`;