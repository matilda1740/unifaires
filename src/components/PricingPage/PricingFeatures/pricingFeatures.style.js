import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.section`
  padding: 75px 0 25px 0;
  overflow: hidden;
    .slogan{
        color: #5832DA;
      text-transform: capitalize;
      letter-spacing: 0;
      font-weight: 400;
      font-size: 30px;
      line-height: 125%;
  }
  @media only screen and (max-width: 1366px) {
    padding: 60px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 45px 0;
  }

  table {
    width: 100%;
border-radius: 16px;
border-collapse: collapse;
  }
  tr {
    height: 50px;
  }
  td {
    padding: 0 10px;

  }
  thead tr {
background-color: rgba(88, 50, 218, 0.05);
color: #808080;
  }
  /* tr td:first-of-type {
    padding: 0 30px;

  } */
  tr td:nth-of-type(n+2) {
    text-align:center;
  }

  tr td i {
color: rgba(88, 50, 218, 0.9);


  }
`;


export default SectionWrapper;
