import React, { useState } from 'react';
import Link from 'next/link';

import { courses, coursesColumns } from 'common/data/_mock/business/courses';
import DataTables from '../DataTables';


const ManageCourses = () => {
    return (
    <DataTables type={"courses"} datarows={courses} datacols={coursesColumns} />
    );
};

export default ManageCourses;
