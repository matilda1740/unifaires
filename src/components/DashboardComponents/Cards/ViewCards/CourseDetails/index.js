import React, { useState } from 'react'
import Link from 'next/link';
import Text from 'components/Layout/Text';
import {AccessTimeOutlined, BookmarkBorderOutlined, BookmarkOutlined, GroupsOutlined,  ImportContactsOutlined, RoomOutlined } from '@mui/icons-material';
import dashCard from 'public/images/cardbg1.jpeg'
import { CardDetailsStyle } from '../view.card.style'
import { LinearProgress, Rating } from '@mui/material';

const CourseDetails = ({ sectionType, category, location, title, description, lessons, time, students, price, rating, tags, percentage, status}) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const toggleBookmark = () => setIsBookMarked(!isBookMarked)

    // LEAVE A RATING
    const [starReview, setStarReview] = useState(0);
    return (
    <CardDetailsStyle className={sectionType}>
        <h6>{category}</h6>
        <p>{title}</p>    
    {
        status === 1 ? 
        <>
            <div className="rating_div">
                <p>Leave a rating</p>
                <Rating className="simple-controlled" fill="#12355b" precision={0.5} size="small"
                    value={starReview} 
                    onChange={(event, newValue) => {setStarReview(newValue);}}
                />
            </div>

            {/* Progress Bar */}
            <LinearProgress className="progressBar" variant="determinate" value={percentage} />
            <p>{percentage}% Complete</p>

        </>
        : 
        <>
            <div className="location_div">
                <RoomOutlined /><p>{location}</p>
            </div>
            <div className="rating_div">
                <p>{rating}</p><Rating className="half-rating-read" defaultValue={rating} fill="#12355b" precision={0.5} readOnly size="small" />
            </div>
            
            <p>{`${lessons} Lessons - ${time} hrs`}</p>

            <p className="price_p">$ {price}</p>

            <div className="tags_bookmark_row">
                {
                    tags?.map( (tag, i) => (
                    <div className="tag" key={i}><p>{tag}</p></div>
                    ))
                }
                {
                    !isBookMarked ? <BookmarkBorderOutlined onClick={toggleBookmark} /> : <BookmarkOutlined onClick={toggleBookmark}/>
                }
            </div>
        </>
    }

    </CardDetailsStyle>
    )
    }
export default CourseDetails;