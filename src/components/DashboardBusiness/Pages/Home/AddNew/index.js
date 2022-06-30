import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';

import {useRouter} from 'next/router'
import { ModalWrapperOverlay, ModalWrapperStyle, AddNavigationRow, NavSelection, DetailsSection, ImageColumn, FormColumn, AddButtonsRow, Buttons, PopUpViewCard } from './addnew.style';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import { Close } from '@mui/icons-material';
// import { JobCard } from 'components/DashboardBusiness/business.style';

const ModalWrapper = ({isOpen, updateModalType, modalType, closeModal, orgContent, insContent, stdContent, details}) => {

    const router = useRouter();
    
    const [modalFunc, setModalFunc] = useState("popup")

    useEffect(() => {
        if(modalType === "student" || modalType === "instructor" || modalType === "organization" ){
            setModalFunc("addnew")
        }
    }, [modalFunc])
    return (
        <ModalWrapperOverlay>
            <ModalWrapperStyle>
                {
                    modalFunc === "addnew" ?
                    <>
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
                    </>
                    :
                    <DetailsSection className="popup">
                    {
                        details?.map( job => (
                            <PopUpViewCard key={job.id}>
                                <div className="top_row_div">
                                    <div className="company_logo_div">
                                        <img src={job.logo?.src}  alt="Image" />
                                    </div>
                                    <div className="title_div">
                                        <Heading as="h6" content={job.company}></Heading>
                                        <Heading as="h5" content={job.title}></Heading>
                                    </div>

                                    <div className="ellipse">
                                    <Close onClick={closeModal} />                            
                                    </div>
                                </div>

                                <div className="timing_row">
                                    <button>{job.location}</button>
                                    <button>{job.duration}</button>
                                </div>                        
                                <Text as="p" content={job.description}></Text>
                                
                                <Link 
                                    href={{
                                    pathname: "/business/jobs/[id]/applicants",
                                    query: { id: job.id }
                                    }}
                                >
View Applicants
                                    {/* <BillingButton 
                                    text={"View Applicants"}
                                    variant={"regular"}
                                    position={"end"}
                                    /> */}
                                </Link>                            
                            </PopUpViewCard>
                        ))
                    }
                    </DetailsSection>
                }
            </ModalWrapperStyle>
        </ModalWrapperOverlay>
    );
};

export default ModalWrapper;