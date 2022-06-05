import React, { useState } from 'react';
import Link from 'next/link';

import { organizations, organizationsColumns } from 'common/data/_mock/business/organizations';
import DataTables from '../DataTables';


const ManageOrganizations = () => {
    return (
    <DataTables datarows={organizations} datacols={organizationsColumns} />
    );
};

export default ManageOrganizations;
