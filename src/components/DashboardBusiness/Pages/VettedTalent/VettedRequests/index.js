import React, { useState } from 'react';
import Link from 'next/link';

import { vettedrequests, vettedColumns} from 'common/data/_mock/business/vettedrequests';

import DataTables from '../../ManageAccounts/DataTables';


const VettedRequests = () => {

    return (
    <DataTables datarows={vettedrequests} datacols={vettedColumns} />
    );
};

export default VettedRequests;
