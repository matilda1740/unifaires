import { FileDownloadOutlined } from '@mui/icons-material';
import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import { FormContext } from './Form';

// export const useDragDrop = () => {

// }

const FormDragDropStyle = styled.div`
    width: 100%;
    height: 200px;
    margin: 10px 0;
    border-radius: 6px;
    background-color: #F3F5F7;
    outline: 2px dashed rgba(18, 53, 91, 0.5);
    outline-offset: -10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;
    *{
        margin: 2.5px 0;
        color: rgba(18, 53, 91, 1);
    }

    label {
        position:relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all 0.3s ease-in-out;

         :hover { 
            cursor: pointer;
            * { 
            color: #5832DA;
            }
        }       
    svg { 
        font-size: 3rem;
        pointer-events: none;
        :hover { 
            cursor: pointer;
            color: #5832DA;
        }
    }        
    }

    input{ 
 	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;       
    }
    button {
        width: 120px;
        height: 36px;
        margin: -15px 0 0 0;
        background-color: rgba(18, 53, 91, 1);
    }

    video {
        border-radius: 6px;
        background-color:transparent;
    }

    .upload, .done, .error {
        display: none;
    }
`;

const draggingStyle = {
    backgroundColor: "rgba(18, 53, 91, 0.5)",
    outline: "2px dashed rgba(18, 53, 91, 0.8)"
}
const droppingStyle = {
    backgroundColor: "rgba(18, 53, 91, 0.8)",
    outline: "2px dashed rgba(18, 53, 91, 1)"
}
 
const FormDragDrop = ({handleClick}) => {

    const [data, setData] = useState([]);
    // MANAGE DRAG AND DROP EVENTS
    const [isDragging, setIsDragging] = useState(false);
    const [isDropping, setIsDropping] = useState(false);

    // DRAGGING PART

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (e.type === "dragenter" || e.type === "dragover"){
            setIsDragging(true)
        }else if(e.type === "dragleave"){
            setIsDragging(false)
        }
    }

    const onDragEnd = (event) => {}


    // DROPPING PART
    const onDragEnter = (event) => {
        event.preventDefault();
        setIsDropping(true)
    }
    const onDragOver = (event) => {
        event.preventDefault();
    }
    const onDragLeave = (event) => setIsDropping(false)

    const onDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            // at least one file has been dropped so do something
            // handleFiles(e.dataTransfer.files);
        }
    };
    
    const handleChange = (e) => {
        // e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            let files = e.target.files[0];
            // let files = URL.createObjectURL(e.target.files[0]);
            setData(() => [...data, files])
            console.log(data, files)

            // handleClick(data)
        }        
    }

    return (
        <FormDragDropStyle 
            className={isDragging ? draggingStyle : isDropping ? droppingStyle : ""}
            onDragEnter={handleDrag}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            >
        {
            data?.length === 0 ?
            <>
            <label htmlFor="input_file"><FileDownloadOutlined /><strong>Choose a file</strong><span className="box__dragndrop"> or drag it here</span>.</label>
            <input onClick={handleChange} className="input_file" type="file" name="video" id="input_file" accept="video/mp4,video/x-m4v,video/*" />
            </>
        :
            <video id="video" width="200" height="120" controls>
                <source src={data[0]}></source>
            </video>
        }

        {/* <button>Upload</button>       */}

        <p className="upload">Uploading</p> 
        <p className="done">Done!</p>
        <p className="error">Error!</p> 

        </FormDragDropStyle>
    );
}

export default FormDragDrop;