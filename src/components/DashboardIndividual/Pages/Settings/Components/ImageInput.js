import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// IMAGES AND ICONS
import avatarBoxProfile from 'public/images/dashboard/avatarBoxProfile.png'

// STYLING
const ImageInputStyle = styled.div`

    &.circular {
        width: 100%;
        height: 80px;
        display: flex;
        margin: 0px 0 10px 0;
        .image_container {
            height: 80px;   
            display: flex;
            flex-direction: column;
            position: relative;
            width: 80px;
        }
        label {
            border-radius: 50%; 
            img{
            width: 100%;
            height: 100%;   
            border-radius: 50%;
            object-fit:contain;
            }
        }
        @media screen and (max-width: 480px) {
            .image_container { margin-right: 5px; }
        }
    }
    &.squared { 
        .image_container{
            border-radius: 16px;
            width: 160px;
            height: 160px;
        }        
        label {
            border-radius: 6px; 
            img{
            width: 100%;
            height: 100%;   
            border-radius: 6px;
            object-fit:contain;
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
    label {
        position:relative;
        :hover { cursor: pointer; }

        img {
            width: 100%;
            height: 100%;  
            border-radius: 6px; 
        }
    }
 
    .image_details_container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 15px 5px;
        width: 80%;
        height: 100%; 
        *{ margin-bottom: 5px; }
        p{ color: rgba(173, 168, 190, 1); }
    }


`;

const ImageInput = (props) => {

    const { title, text, className, handleClick} = props;

    // HANDLE IMAGE ADDING
    const [profileImage, setProfileImage] = useState();

    const loadImage = (event) => {
        const image = document.querySelector("#display_userImage");
        if(event.target.files[0] !== undefined){
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = "block"
            setProfileImage(event.target.files[0])
            handleClick(event.target.files[0])
        }else {
            image.src = avatarBoxProfile ;
        }        
    }

    return (
        <ImageInputStyle className={className}>
            <div className="image_container">
                <label htmlFor="profile_image">
                    <img id="display_userImage" src={avatarBoxProfile?.src} alt="Avatar" />
                </label>             
                <input onChange={loadImage} type="file" name="profile_image"  id="profile_image" accept="image/*" />
            </div>
            <div className="image_details_container">
                <Heading as="h6" content={title} />
                <Text as="p" content={text}  />
            </div>
        </ImageInputStyle>
    );
}

export default ImageInput