import styled from 'styled-components';

export const NavRowStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 2rem;

  width: 17.14rem;
  height: 14rem;
  background: #F3F5F7;
  border-radius: 1rem;
  transition: all 0.3s ease-in-out;

  svg { 
    font-size: 2rem;
    font-weight: 300;
    color: #12355B;
  }
    
  h6 { margin-bottom: 0; color: #12355B;}
  p{ text-align:center; }

  :nth-child(n+1){ margin-right: 0.75rem;}
  :nth-child(n+4){ margin-top: 0.75rem;}

  :hover {
    cursor: pointer;
    transform: scale(1.01);

    svg, h6, p {
      color: rgba(88, 50, 218, 1);
    }

  }
  @media screen and (max-width:480px){
    width: 100%;
    height: 10rem;
    padding: 1rem 2rem;
    :nth-child(n+2){ margin-top: 0.75rem;}
    :nth-child(n+1){ margin-right: 0rem;}

  }

`;