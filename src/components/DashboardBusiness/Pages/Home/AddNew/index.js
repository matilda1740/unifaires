import React, { useState } from 'react';
import Link from 'next/link';

import {useRouter} from 'next/router'
import { AddWrapperOverlay, AddWrapperStyle, AddNavigationRow, NavSelection, DetailsSection, ImageColumn, FormColumn, AddButtonsRow, Buttons } from './addnew.style';

const AddNewWrapper = ({isOpen, updateModalType, modalType, closeModal, orgContent, insContent, stdContent}) => {

    const router = useRouter();
    
    return (
        <AddWrapperOverlay>
            <AddWrapperStyle>
                <AddNavigationRow>
                    <NavSelection onClick={updateModalType("organization")} className={ modalType === "organization" ? "active" : ""}>Organization/Business</NavSelection>
                    <NavSelection onClick={updateModalType("instructor")}  className={ modalType === "instructor" ? "active" : ""}>Instructor/Admin</NavSelection>
                    <NavSelection onClick={updateModalType("student")}  className={ modalType === "student" ? "active" : ""}>Student/Staff</NavSelection>
                </AddNavigationRow>

                <DetailsSection>
                    {
                        modalType === "student" ? stdContent :
                        modalType === "instructor" ? insContent
                        : orgContent
                    }
                </DetailsSection>

                <AddButtonsRow>
                    <Buttons className="primary">Add User</Buttons>
                    <Buttons className="secondary" onClick={closeModal}>Cancel</Buttons>
                </AddButtonsRow>                
            </AddWrapperStyle>
        </AddWrapperOverlay>
    );
};

export default AddNewWrapper;