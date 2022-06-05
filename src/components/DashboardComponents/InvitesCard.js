import { MoreHorizOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

import avatarIcon from 'public/images/dashboard/Dashboard/avatarIcon.svg'

const InvitesCardStyle = styled.div`

background: rgba(247, 245, 253, 1);
border-radius: 12px;
height: 80px;
width: 100%;
margin-bottom: 20px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0px 24px;

.profile_div{
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    img {
        width: 20%;
        height: 100%;
        align-self: flex-start;
    }
    .left_div {
        display: flex;
        align-self: flex-start;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        margin-left: 20px;
        height: 100%;
        width: 80%;

            h6 {
                margin-bottom: 0px;

            }
            p{
                color:  rgba(18, 53, 91, 0.5);
                margin-bottom: 0;
                text-transform: lowercase;

            }
}
}

    p{ 
        text-transform: capitalize;
        font-weight: 500;
    }

    p.accepted { color: #7DBF10; }
    p.pending, svg { color: #12355B; }
    p.rejected { color: #FF0C3E; }

    svg {
        :hover{ cursor:pointer }
    }
`;


const InvitesCard = ({name, email, role, status}) => {

    return (
    <InvitesCardStyle>
        <div className="profile_div">
            <img src={avatarIcon?.src} alt="Profile" />
            <div className="left_div">
                <h6>{name}</h6>
                <p>{email}</p>
            </div>
        </div>


        <h6>{role}</h6>
        <p className={status}>{status}</p>

        <MoreHorizOutlined />
    </InvitesCardStyle>
    )
}
export default InvitesCard;