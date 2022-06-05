import styled from 'styled-components';

export const SkillsModalOverlay = styled.section`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 25;
`;

export const SkillsModalWrapper = styled.section`
    width: 1000px;
    height: 800px;
    padding: 48px 36px;
    background: #FFFFFF;
    border-radius: 20px;
    margin: 20px 100px;

    p { color: rgba(128, 128, 128, 1); }
`;
export const SkillsSectionHeader = styled.div`
    width: 100%;
    height: 50px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
        color: rgba(88, 50, 218, 1); 
        :hover { cursor:pointer; } 
        }
`;


export const SkillsSectionTitle = styled.div`
    width: 100%;
    height: 24px;
    margin: 5px 0;
    h6 { color: rgba(88, 50, 218, 1); }
`;

export const EachSkillRow = styled.div`
    width: 100%;
    /* height: 100%; */
    height: 200px;
    margin: 15px 0;
    padding: 16px;
    background: #F5F7F9;
    border-radius: 16px;   
    display: flex;
    flex-direction: row wrap;
`;

export const SkillBubble = styled.div`
    border-radius: 36px;
    width: fit-content;
    height: 40px;
    padding: 10px 25px;
    margin: 0 16px;
    font-size: 14px;
    font-weight: 300;
    display: flex;
    align-items: center;
    :hover { cursor: pointer; }
    &.selected {
        background: #5832DA;
        color: #FFFFFF;
    }
    &.not_selected {
        background: rgba(238, 234, 251, 1);
        color: #5832DA;
    }
`;

export const SkillsButtonRow = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 0;
`;
export const SkillsButton= styled.button`

    &.beginning { align-self: flex-start; }
    &.end { align-self: flex-end; }


    
`;

export default SkillsModalWrapper;