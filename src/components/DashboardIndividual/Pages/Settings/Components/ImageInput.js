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
        width: 20%;
        height: 100%; 
        display: flex;
        flex-direction: column;

        img {
            object-fit: contain;
            width: 80px;
            height: 100%;   
            :hover {
                cursor: pointer;
            }
        }
        input {   
            width: 80px;
            height: 100px;   

            /* display: none; */
        }   
    }
    .image_details_container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 15px 5px;
        width: 80%;
        height: 100%; 

        *{
            margin-bottom: 5px;
        }
        p{
        color: rgba(173, 168, 190, 1);

        }
    }
`;

const ImageInput = (props) => {

    const { title, text } = props;

    // HANDLE IMAGE ADDING
    const [profileImage, setProfileImage] = useState();

    const loadImage = (event) => {
        const image = document.querySelector("#display_userImage");
        // image.src = URL.createObjectURL(event.target.files[0]);

        if(event.target.files[0] !== undefined){
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = "block"
            setProdImage(event.target.files[0])
        }else {
            image.src = avatarProfile ;
        }        
    }

    return (
        <ImageInputStyle>
            <div className="image_container">
                <input onChange={loadImage} type="file" name="profile_image" accept="image/*" />
                <img id="display_userImage" src={avatarProfile?.src} alt="Avatar" />
            </div>
            <div className="image_details_container">
                <Heading as="h6" content={title} />
                <Text as="p" content={text}  />
            </div>
        </ImageInputStyle>
    );
}

export default ImageInput