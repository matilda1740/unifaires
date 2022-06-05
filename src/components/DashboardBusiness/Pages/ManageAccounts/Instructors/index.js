import React, { useState } from 'react';
import Link from 'next/link';

import { instructors } from 'common/data/appData';

import DataTables from '../DataTables';

const columns = [

    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'name',
        headerName: 'Account Name',
        description: '',
        sortable: false,
        width: 160,
    },
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    }, 
    {
        field: 'position',
        headerName: 'Position',
        description: '',
        sortable: false,
        width: 180,
        valueGetter: (params) =>`${params.row.role || ''} | ${params.row.company || ''}`,
    }, 
    {
        field: 'phone',
        headerName: 'Phone Number',
        description: '',
        sortable: false,
        width: 140,
    },
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    },   
    {
        field: 'email',
        headerName: 'Email',
        description: '',
        sortable: false,
        width: 160,
    },
    {
        field: 'status',
        headerName: 'Status',
        description: '',
        sortable: false,
        width: 100,
        cellClassName: 'status_bar'
    }, 

];

const ManageInstructors = () => {

    return (
    <DataTables datarows={instructors} datacols={columns} />
    );
};

export default ManageInstructors;
