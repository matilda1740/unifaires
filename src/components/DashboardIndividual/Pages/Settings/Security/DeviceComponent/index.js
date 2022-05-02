import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';

const DeviceComponentStyle = styled.div`
    display: flex; 
    width: 100%;
    height: 45px;
    margin: 15px 0;

    .device_icon {
        width: 15%;
        height: 100%;
        img{
            object-fit: contain;
            width: 100%;
            height: 100%;
            margin-left: -10px;
        }
    }
    .device_details{
        border-bottom: 1px solid rgba(18, 53, 91, 0.2);
        width: 85%;
        height: 100%;
        display: flex; 

        .div1{
            display: flex; 
            flex-direction: column;
            width: 90%;
            height: 100%;
        }
        h6{ font-size: 14px;}
        p{ font-size: 10px;}
        .div2{
            width: 10%;
            height: 100%;
            display: flex; 
            align-self: flex-end;
            justify-content: center;
            align-items: center;
            img {
                width: 10px;
                height: 10px;
            }
        }

    }
`;

const DeviceComponent = (props) => {

    const {image, type, location, date, time, icon} = props; 

    return (
        <DeviceComponentStyle>
            <div className="device_icon">
                <img src={image?.src} alt="Phone" />
            </div>
            <div className="device_details">
                <div className="div1">
                    <Heading as="h6" content={type} />
                    <Text as="p" content={`${location} . ${date} at ${time}`} />
                </div>
                <div className="div2"><img src={icon?.src} alt="Options" /></div>
                
            </div>
        </DeviceComponentStyle>
    );
}

export default DeviceComponent;