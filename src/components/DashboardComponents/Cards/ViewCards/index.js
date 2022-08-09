import React, { useState } from 'react'
import dashCard from 'public/images/cardbg1.jpeg'
import { ViewCardStyle } from './view.card.style'
import CourseDetails from './CourseDetails';
import { useRouter } from 'next/router'
import FundingDetails from './FundingDetails';
import JobDetails from './JobDetails';

const ViewCard = (props) => {
    const router = useRouter()
    const [isBookMarked, setIsBookMarked] = useState(false);
    const toggleBookmark = () => setIsBookMarked(!isBookMarked)
    // console.log(props)
    return (
    <ViewCardStyle className={props.sectionType}>
        <div className="image_container" onClick={() => {
                router.push({
                    pathname: "/business/courses/preview/[pid]",
                    query: { pid: props.id }
                })
            }}>
        <img src={dashCard?.src} alt="Image" /> 
        </div>
        {   props.sectionType === "funding" ? <FundingDetails {...props}/>
            :props.sectionType === "jobs" ? <JobDetails  {...props}/>
            :<CourseDetails {...props}/>
        }
    </ViewCardStyle>
    )
    }
export default ViewCard;