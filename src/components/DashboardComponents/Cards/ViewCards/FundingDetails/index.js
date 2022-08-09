import React, { useState } from 'react'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import {AccessTimeOutlined, BookmarkBorderOutlined, BookmarkOutlined, GroupsOutlined,  ImportContactsOutlined, RoomOutlined } from '@mui/icons-material';
import dashCard from 'public/images/cardbg1.jpeg'
import { CardDetailsStyle} from '../view.card.style'

const FundingDetails = ({ sectionType, location, title, company, description, duration, price, type, status, purpose}) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const toggleBookmark = () => setIsBookMarked(!isBookMarked)

    return (
    <CardDetailsStyle className={sectionType}> 
    <h6>{title}</h6>
    <p>{company}</p>
    <div className="location_div">
        <RoomOutlined /><p>{location}</p>
    </div>

    <p className="price_p">$ {price}</p>

    <div className="tags_bookmark_row">
    
        <div className={status === 0 ? "primary tag" : status === 1 ? "granted tag" : status === 2 ? "waiting tag" : status === 3 ? "rejected tag" : "tag"}><p>{type}</p></div>
        <div className="primary tag"><p>{purpose}</p></div>
    </div>
    <div className="tags_bookmark_row">
        <p>{duration}</p>
        {
            !isBookMarked ? <BookmarkBorderOutlined onClick={toggleBookmark} /> : <BookmarkOutlined onClick={toggleBookmark}/>
        }
    </div>

    </CardDetailsStyle>
    )
    }
export default FundingDetails;