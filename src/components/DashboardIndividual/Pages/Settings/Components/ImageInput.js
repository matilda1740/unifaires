import React, { useState, useContext } from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

// IMAGES AND ICONS
import avatarProfile from 'public/images/dashboard/settings/avatarProfile.png'

// STYLING
const ImageInputStyle = styled.div`
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
        input {   
            width: 100%;
            height: 100%;   
            opacity: 0;
            position: absolute;
        }  
        img {
            object-fit: fill;
            width: 100%;
            height: 100%;   
            border-radius: 50%;
            position: absolute;
            :hover { cursor: pointer; }
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
    @media screen and (max-width: 480px) {
        .image_container { margin-right: 5px; }
    }
`;

const ImageInput = (props) => {

    const { title, text } = props;

    // HANDLE IMAGE ADDING
    const [profileImage, setProfileImage] = useState();

    const loadImage = (event) => {
        const image = document.querySelector("#display_userImage");
        if(event.target.files[0] !== undefined){
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = "block"
            setProfileImage(event.target.files[0])
        }else {
            image.src = avatarProfile ;
        }        
    }

    return (
        <ImageInputStyle>
            <div className="image_container">
                <img id="display_userImage" src={avatarProfile?.src} alt="Avatar" />
                <input onChange={loadImage} type="file" name="profile_image" accept="image/*" />
            </div>
            <div className="image_details_container">
                <Heading as="h6" content={title} />
                <Text as="p" content={text}  />
            </div>
        </ImageInputStyle>
    );
}

export default ImageInput