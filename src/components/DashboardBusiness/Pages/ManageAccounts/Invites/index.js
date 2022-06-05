import React, { useState } from 'react';
import Link from 'next/link';

import { invites, invitesColumns } from 'common/data/_mock/business/invites';
import DataTables from '../DataTables';


const ManageInvites = () => {
    return (
    <DataTables type={"invites"} datarows={invites} datacols={invitesColumns} />
    );
};

export default ManageInvites;
