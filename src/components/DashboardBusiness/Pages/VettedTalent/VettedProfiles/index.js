import React, { useState } from 'react';
import Link from 'next/link';

import { vettedrequests, vettedColumns} from 'common/data/_mock/business/vettedrequests';

import DataTables from '../../ManageAccounts/DataTables';
import { VettedProfileCard, VettedProfileWrapper } from '../vetted.styles';

import randomColor from "randomcolor";

const VettedProfiles = () => {

    

    return (
    <VettedProfileWrapper>
        {
            vettedrequests.map( profile => (
                <VettedProfileCard key={profile.id}>
                    <div className="tag_div">
                        <p>{profile.careermajor}</p>
                    </div>
                    <div className="image_container">
                        <img src={profile.image} alt="Profile" />
                    </div>
                    <div className="details_container">
                        <h5>{profile.name}</h5>
                        <p>{profile.phone} | {profile.email}</p>
                        <h6>{profile.jobtitle}</h6>
                    </div>
                </VettedProfileCard>
            ))
        }
    </VettedProfileWrapper>
    );
};

export default VettedProfiles;
