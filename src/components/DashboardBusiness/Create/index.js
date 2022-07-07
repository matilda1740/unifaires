import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SectionHeading, SeeAllStyle } from 'components/DashboardBusiness/business.style';
import styled from 'styled-components';
import BillingButton from 'components/DashboardIndividual/Pages/Settings/Billings/BillingButton';
import { ArrowBack } from '@mui/icons-material';

import { individualModule } from 'common/data/appData'; // Temporary Import before apis 

const CreateWrapperStyle = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const CreateFormStyle = styled.div`
    display: flex;
    width: 100%;

    &.form_column {
        flex-direction: column;
    }
    &.form_row {
        .job_form {
        flex-direction: row;
        }
    }
    @media screen and (max-width: 786px) {
      &.form_row .smaller_form{
        display: flex;
        flex-direction: column;
      }
      &.form_row .job_form {
            padding: 0px;
            margin: 10px 0 0 0;
      }
    }
`;

const ButtonRow = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px 0 0 5px;
    button{
        margin-right: 16px !important;
        border-radius: 6px !important;
        font-size: 12px;
    }
    @media screen and (max-width: 786px) {
        button {
        font-size: 10px;
        margin-right: 4px !important;
        width: 100px !important;

        }
    }
`;

const CreateWrapper = ({content, formMode, objType}) => {

    const {userOptions} = individualModule;

    const [createObject, setCreateObject] = useState();
    const [updateObject, setUpdateObject] = useState();

    const [objectDetails, setObjectDetails] = useState();

    const router = useRouter();
    const { query } = router;

    const handleCreateObject = (data) => {
        // CALL AXIOS FUNCTION TO CREATE JOBS

    }

    const handleUpdateObject = (id, data) => {
        // CALL AXIOS FUNCTION TO UPDATE JOBS
    }   

    const getObjectFromMock = (objID) => {
        let matched = userOptions.map( section => section.courses.filter( obj => obj.id === objID)).reduce( (all, obj) => ({...all, ...obj}), {})
        setObjectDetails(matched[0]);
    }
    
    React.useEffect(() => {
        if(formMode === "update"){
            // FUNCTION TO GET JOB DETAILS FROM DATABASE BUT FOR NOW FROM MOCK DATA
            getObjectFromMock(query.id)
        }
    }, [])    
    return (
        <>
            <SectionHeading>
                <Link href={`/business/${objType}`}>
                    <SeeAllStyle className="start">
                    <ArrowBack />
                    <p>My {objType}</p>
                    </SeeAllStyle>
                </Link>
            </SectionHeading> 

            <CreateFormStyle className={ objType === "courses" && "form_row"}>
                {content}
            </CreateFormStyle>

            <ButtonRow>
            <BillingButton 
                text={ formMode === "update" ? "Create" : "Update" + ` ${objType}` }
                variant={"primary"}
                size={"smaller_btn"}
            />
            <BillingButton 
                text={"Save Draft"}
                variant={"white"}
                size={"smaller_btn"}

            />
            <BillingButton 
                text={`Delete ${objType}`}
                variant={"red"}
                size={"smaller_btn"}

            />                
            </ButtonRow>
        </>
    );
}

export default CreateWrapper;