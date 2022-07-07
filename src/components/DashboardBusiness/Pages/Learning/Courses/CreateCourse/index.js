import React, { useState } from 'react';
import Heading from 'components/Layout/Heading';
import Text from 'components/Layout/Text';
import { useRouter } from 'next/router';
import { SectionHeading } from 'components/DashboardBusiness/business.style';
import styled from 'styled-components';
import { FormColumn, ImageColumn } from 'components/DashboardBusiness/Pages/Home/AddNew/addnew.style';
import FormSectionDivider from 'components/DashboardIndividual/Pages/Settings/Components/FormSectionDivider';
import FormTextArea from 'components/DashboardIndividual/Pages/Settings/Components/FormTextArea';
import FormInput from 'components/DashboardIndividual/Pages/Settings/Components/FormInput';
import Form from 'components/DashboardIndividual/Pages/Settings/Components/Form';
import { CancelPresentationOutlined, DeleteOutlined, FileUploadOutlined } from '@mui/icons-material';
import FormDragDrop from 'components/DashboardIndividual/Pages/Settings/Components/FormDragDrop';
import ImageInput from 'components/DashboardIndividual/Pages/Settings/Components/ImageInput';

const UploadContentStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    :nth-child(n+2) {
    margin: 10px 0;
    }

`;
const UploadTitleRow = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    background: #F3F5F7;
    border-radius: 6px;

    p, svg { color: #12355B; }
    p{
        text-transform: capitalize;
        margin-bottom: 0px;
        font-weight: 500;
    }
    svg { 
        font-size: 1.25rem;
        margin-left: 4px;
        :hover{ 
            cursor: pointer;
            color: #5832DA;
        }
    }
    .svg_div{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50px;
        height: 100%;
        
    }
`;
const UploadSectionRow = styled.div`
    width: 100%;
    height: 100%;

`;

// FORM VALIDATION RULES
const CreateCourseForm = ({formMode}) => {    

    const [thumbnail, setThumbnail] = useState("")

    const getThumbnail = (info) => setThumbnail(info)
    
    const [lesson, setLessons] = useState([""])
    const [lessonCount, setLessonCount] = useState(1);
    const [isUploaded, setIsUploaded] = useState()
    const [upLoading, setUpLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const [displayInputField, setDisplayInputField] = useState(false);

    const addUploadRow = () => setLessonCount(lessonCount => lessonCount + 1);

    const deleteUploadRow = () => lessonCount > 1 && setLessonCount(lessonCount => lessonCount - 1) 

    const addUpload = (lesson) => {
        setLessons(() => [...lessons, 
            { lesson: lessonCount,
             name: lesson.name,
             src: lesson.src,
             createdAt: lesson.date
            }])
        console.log(lessons)
    } 

    const toggleField = (e, i) => {
        setDisplayInputField(!displayInputField)
        console.log(e.currentTarget, i)
    }

    return (
        <>
        <Form className={"job_form smaller_form"}>
            <ImageColumn>
                <ImageInput className={"squared"} handleClick={getThumbnail}/>
            </ImageColumn>
            <FormColumn>
                <FormSectionDivider className={"business_job_section"} content={"Course Title"} />
                <FormInput size={"full"} variant={"covered_blue"} label={""} placeholder={"Dynamics of Cloud Computing"} name={"title"} type={"text"} />

                <FormSectionDivider className={"business_job_section"} content={"Course Bio"} />
                <FormTextArea 
                    name={"description"}
                    size={"full"}
                    placeholder={"Please input the job description here..."}
                    variant={"job_textarea"}
                    value={formMode === "update" ? `${jobDetails?.description}` : ""}
                />  
                <FormSectionDivider 
                    className={"business_job_section"} content={"Upload Lessons"} 
                    addBool={true} handleClick={addUploadRow} 
                    variant={"primary"} size={"small_wh"}
                />

                {
                    Array.from({length: lessonCount}, (div, i) => (
                    <UploadContentStyle key={i}>
                    <UploadTitleRow onClick={(event) => toggleField(event, i)}>
                        <p>lesson {`${i+1}`}</p>
                        <div className="svg_div">
                        { 
                        !displayInputField 
                        ?<FileUploadOutlined /> 
                        :<CancelPresentationOutlined />
                        }
                        {
                        i > 0 && <DeleteOutlined onClick={deleteUploadRow} /> 
                        }
                        </div>
                                    
                    </UploadTitleRow>
                    { displayInputField && <FormDragDrop handleClick={addUpload}/>}
                    </UploadContentStyle>
                    ))

                }

                <FormSectionDivider 
                    className={"business_job_section"} content={"What You'll Learn"} 
                />
                <FormTextArea 
                    name={"description"}
                    size={"full"}
                    placeholder={"Add details about what the student will learn here"}
                    variant={"job_textarea"}
                    value={formMode === "update" ? `${jobDetails?.description}` : 
                ""}
                /> 
                <FormSectionDivider className={"business_job_section"} content={"Invite Instructors"} />


            </FormColumn>
        </Form>        
        </>
    );
}

export default CreateCourseForm;