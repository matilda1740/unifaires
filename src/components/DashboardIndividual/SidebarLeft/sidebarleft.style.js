import styled from 'styled-components';

export const MobileHeader = styled.div`
    @media screen and (max-width: 480px) {
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 38px 18px 0px 18px;
        .ellipse {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid rgba(88, 50, 218, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 16px;
                height: 16px;
            }
        } 
        &.mobile_header {
            margin: 10px 0px 30px 0;
        }
    } 
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

const SidebarCard = styled.section`
    background: linear-gradient(180deg, rgba(176, 214, 255, 0.1) 0%, rgba(163, 189, 217, 0.1) 100%);
    width: 22.5%;
    /* width:30%; */
    height:1000px;
    svg { 
        font-size: 1.25rem;
        /* path { stroke-linecap: round; } */
        
    }
    .dash_selected {
        border-left: 4px solid rgba(88, 50, 218, 1);
        p, svg{
            color: rgba(88, 50, 218, 1);
        }
    }
    h4 {
        margin: 20px 0 0 35px !important;
    }
    h5 {
        margin: 0px 0 0px 36.25px !important;
        opacity: 0.5;
        text-transform: capitalize;
    }

  @media screen and (max-width: 480px) {
    background: #fff;
    width: 100%;
    height: 100%;
    padding: 12px;
    transition: all 0.3s ease-in-out;
    z-index: 12;
    position: absolute;
  
        /* OPEN/CLOSE NAVIGATION */
        &.expanded {
            display: none;
        }
        &.not_expanded {
            display: block;
        }
        & .dash_sectionTwo{
            margin-top: 30px; 
        } 
        /* Reposition Dashboard Links */
        h4 { margin: 20px 0 0 23px;}
        h5 { margin: 0px 0 0 23.25px;}
        .dash_row{ padding: 0 30px 0 14px;}
        .dash_sectionTwo button{ margin: 20px 30px 40px 14px; }
  }

`;
export default SidebarCard