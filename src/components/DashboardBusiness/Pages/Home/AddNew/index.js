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
                    <Link href="/business/accountmanagement/create/organizations">
                    <NavSelection className={ router.pathname === "/business/accountmanagement/create/organizations" ? "active" : ""}>Organization/Business</NavSelection>
                    </Link>
                    <Link href="/business/accountmanagement/create/instructors">
                    <NavSelection className={ router.pathname === "/business/accountmanagement/create/instructors" ? "active" : ""}>Instructor/Admin</NavSelection>
                    </Link>
                    <Link href="/business/accountmanagement/create/students">
                    <NavSelection className={ router.pathname === "/business/accountmanagement/create/students" ? "active" : ""}>Student/Staff</NavSelection>
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