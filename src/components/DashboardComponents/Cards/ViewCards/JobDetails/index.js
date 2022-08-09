import React, { useState } from 'react'
import {BookmarkBorderOutlined, BookmarkOutlined} from '@mui/icons-material';
import { CardDetailsStyle } from '../view.card.style'

const JobDetails = ({ sectionType, id, title, company, status, place, type, description, salary, period, features, dateCreated}) => {
    const [isBookMarked, setIsBookMarked] = useState(false);
    const toggleBookmark = id => (e) => {
        e.stopPropagation()
        setIsBookMarked(!isBookMarked)
        console.log(e, id)
    }

    return (
    <CardDetailsStyle className={sectionType}>
    <div className="title_row">
        <p>{company}</p>

        {
            status === 4 ? 
            <div className="disabled tag"><p>Unassigned</p></div>
            : status === 3 ? 
            <div className="rejected tag"><p>Rejected</p></div>
            : status === 2 ?
            <div className="waiting tag"><p>Screening</p></div>
            : status === 1 ?
            <div className="granted tag"><p>Accepted</p></div>
            :
            <div className="primary tag"><p>Apply</p></div>
        }
    </div>

    <h6>{title}</h6>
    <div className="location_div"><p>{place}</p></div>
    
    <p className="price_p">$ {salary} <span>{period}</span></p>

    <div className="tags_bookmark_row">
        {
            features?.map( (tag, i) => (
            <div key={i} className="secondary tag"><p>{tag}</p></div>
            ))
        }
    </div>
    <div className="tags_bookmark_row">
        <p>{dateCreated}</p>
        {
            !isBookMarked ? <BookmarkBorderOutlined onClick={toggleBookmark(id)} /> : <BookmarkOutlined onClick={toggleBookmark(id)}/>
        }
    </div>

    </CardDetailsStyle>
    )
    }
export default JobDetails;