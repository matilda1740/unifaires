import React, { useState } from 'react';
import Link from 'next/link';

import { students, studentsColumns } from 'common/data/_mock/business/students';
import DataTables from '../DataTables';


const ManageStudents = () => {
    return (
    <DataTables datarows={students} datacols={studentsColumns} />
    );
};

export default ManageStudents;
