// App Wrappers and Globally available styles 

import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  body {    
    ${'' /* font-family: 'Lato', sans-serif; */}
    font-family: Maison Neue;
    font-style: normal;
    font-weight: 200 !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal !important;

    ${'' /* font-family: 'Lato', sans-serif; */}
    ${'' /* font-family: 'Maison Neue'; */}
  }
  section {
    position: relative;
  }
  .slogan{
        color: #5832DA !important;
      text-transform: capitalize !important;
      letter-spacing: 0 !important;
      ${'' /* font-weight: 400 !important; */}
      font-weight: normal !important;
      font-size: 30px !important;
  }
  .reusecore__button {
    font-weight: 500;
  }
  @media only screen and (max-width: 667px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 667px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media only screen and (width: 320px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const AppWrapper = styled.div`

  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
    font-family: 'Maison Neue';

  body {    
    font-family: 'Maison Neue';
  }
  .sticky-active {
    .navbar {
      padding: 20px 0 21px;
      background-color: ${themeGet('colors.white', '#ffffff')};
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .mobile-menu {
        top: 72px;
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    /* font-weight: 700; */
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
    color: ${themeGet('colors.primary', '#5832DA')};
    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: ${themeGet('colors.headingColor', '#0F2137')};
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`;


