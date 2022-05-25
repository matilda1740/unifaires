import React, { useState } from 'react';
import Link from 'next/link';

import {useRouter} from 'next/router'
import { AddWrapperOverlay, AddWrapperStyle, AddNavigationRow, NavSelection, DetailsSection, ImageColumn, FormColumn, AddButtonsRow, Buttons } from './addnew.style';

const AddNewWrapper = ({content}) => {

    const router = useRouter();
    
    return (
        <AddWrapperOverlay>
            <AddWrapperStyle>
                <AddNavigationRow>
                    <Link href="/business/dashboard/organizations/create">
                    <NavSelection className={ router.pathname === "/business/dashboard/organizations/create" ? "active" : ""}>Organization/Business</NavSelection>
                    </Link>
                    <Link href="/business/dashboard/instructors/create">
                    <NavSelection className={ router.pathname === "/business/dashboard/instructors/create" ? "active" : ""}>Instructor/Admin</NavSelection>
                    </Link>
                    <Link href="/business/dashboard/students/create">
                    <NavSelection className={ router.pathname === "/business/dashboard/students/create" ? "active" : ""}>Student/Staff</NavSelection>
                    </Link>
                </AddNavigationRow>

                <DetailsSection>
                    {content}
                </DetailsSection>
            </AddWrapperStyle>
        </AddWrapperOverlay>
    );
};

export default AddNewWrapper;