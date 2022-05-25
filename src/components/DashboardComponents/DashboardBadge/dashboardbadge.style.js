import styled from 'styled-components';
import { variant } from 'styled-system';

const DashboardBadgeStyle = styled.div`
    width: 280px;
    height: 104px;
    background: #FFFFFF;
    box-shadow: 0px 8px 30px 4px rgba(102, 102, 102, 0.08);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    margin: 0 25px 20px 0;

    .col1{
        width: 80%;
        color: #082262;
        font-weight: 600;
        p{
            color: #082262;
            font-weight: 500 !important;
        }
        span{
            font-weight: 500 !important;
        }
    }

    .icon{
        /* width: 20% !important; */
        background-color: rgba(184, 188, 202, 0.1);
        border-radius: 50px;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img, svg{
            width: 18px;
            color: #5832DA;
        }
    }

  /* Material style goes here */
  &.is-material {

  }


`;

// prop types can also be added from the style functions
DashboardBadgeStyle.propTypes = {
  ...variant.propTypes,
};

DashboardBadgeStyle.displayName = 'DashboardBadgeStyle';

export default DashboardBadgeStyle;
