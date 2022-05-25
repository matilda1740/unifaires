import styled from 'styled-components';


export const AddWrapperOverlay = styled.section`
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

export const AddWrapperStyle = styled.section`
    background: #FFFFFF;
    /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2); */
    border-radius: 32px;
    padding: 40px;
    width: 650px;
    height: 650px;
    display: flex; 
    flex-direction: column;

    margin: 100px 0 0 0;
`;

export const AddNavigationRow = styled.section`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
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