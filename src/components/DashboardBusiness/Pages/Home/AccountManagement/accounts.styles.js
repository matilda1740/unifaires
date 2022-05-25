import styled from 'styled-components';


export const AccountsHeadSection = styled.section`
    width: 100%;
    height: 160px;
    margin-bottom: 24px;

    .title_row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 15px 0;

        h5 { 
            color: #12355B; 
            margin: 5px 0 0 5px;
            width: 75%;
        }


        .right_div{
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

export const AccountsBarWrapper = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
`;

export const AccountsBarEach = styled.div`
    background: #F7F5FD;
    border: 1px solid #EEEAFB;
    box-shadow: 0px 8px 30px 4px rgba(102, 102, 102, 0.08);
    border-radius: 8px;
    width: 200px;
    height: 100%;
    padding: 24px;

    :nth-child(n+1) { margin-right: 20px; }

    h6 { 
        color: #082262; 
        text-transform: capitalize;
    }
    span { 
        font-weight: 500;
        color: #000000;
    }

    transition: all 0.3s ease-in-out;
    :hover { 
        cursor: pointer; 
        border: 1px solid rgba(88, 50, 218, 1);
    }
    &.active {
        border: 1px solid rgba(88, 50, 218, 1);
    }
`;

export const AccountsContentSection = styled.section`
    display: flex;
    flex-flow: row wrap; 
    width: 100%;
    height: auto;
    margin: 30px 0 0 0;

`;

export const EmptyAccountsContentSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    margin: 30px 0 0 0;

    h6 {
        text-align: center;
    }
`;
export const AccountsOverlay = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 25;

    
`;