import React from 'react'
import styled from 'styled-components';
import Text from 'components/Layout/Text';
import Heading from 'components/Layout/Heading';
import FormSectionDivider from '../../Settings/Components/FormSectionDivider';
import VideoPlayer from '../../Components/VideoPlayer';
import { ModuleSectionHeader, SectionHeading } from 'components/DashboardBusiness/business.style';
import { ArticlesCard, BooksCard, RecommendationSectionWrapper } from '../../Components/Recommendations';

import BookBg from 'public/images/dashboard/Books.png'
import Thumbnail from 'public/images/dashboard/ThumbnailCourse.png'
import BackURLModule from '../../Components/BackURLModule';


export const CoursePreviewWrapper = styled.section`
    width: 100%;
    height: 100%; 
    display: flex;
    flex-direction: column;
`;
 
export const CoursePreviewStyle = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    h5 {
        margin: 10px 0 20px 2.5px;
    }
    p:first-of-type {
        color: rgba(128, 128, 128, 1);

    }
    p{
        /* color: rgba(77, 77, 77, 1); */
        margin-left: 5px;
    }
`;


export default function CoursePreview({title, video, description }) {

    const recommendations = {
        books: [
            {
                url: BookBg,
                title: "Machine Language",
                author: "James Bond",
            },
            {
                url: BookBg,
                title: "Machine Language",
                author: "James Bond",
            },
            {
                url: BookBg,
                title: "Machine Language",
                author: "James Bond",
            },            
            {
                url: BookBg,
                title: "Machine Language",
                author: "James Bond",
            },
            {
                url: BookBg,
                title: "Machine Language",
                author: "James Bond",
            },            
        ],
        articles: [
            {
                thumbnail: Thumbnail,
                title: "Machine Language Fundamentals",
                preview: "Learning Machine Language and its Fundamentals Learning in blag vba",
                author: {
                    name: "James Bond",
                    profile: Thumbnail
                }
            },
            {
                thumbnail: Thumbnail,
                title: "Machine Language Fundamentals",
                preview: "Learning Machine Language and its Fundamentals Learning in blag vba",
                author: {
                    name: "James Bond",
                    profile: Thumbnail
                }
            },            
            {
                thumbnail: Thumbnail,
                title: "Machine Language Fundamentals",
                preview: "Learning Machine Language and its Fundamentals Learning in blag vba",
                author: {
                    name: "James Bond",
                    profile: Thumbnail
                }
            }            
        ]
    }
  return (
    <CoursePreviewStyle>
        <ModuleSectionHeader>
            <BackURLModule 
            text="My Courses" 
            prevPath="/individual/learning/courses"
            />
        </ModuleSectionHeader>    
        <Heading as={"h5"} content={"JavaScript Complete Beginners Course For Web 2.0"} />
        {/* VIDEO */}
        <VideoPlayer 
            videoSrc={"https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4"} 
                
            />
        <FormSectionDivider content={"About this course"} />

        <Text as={"p"} content={"IBM is recognized as a cognitive solutions and cloud platform company with one purpose - to be essential to the world. We do this in part through innovative learning and credentialing programs that help develop and recognize the talent that fuels innovation to change the world. IBM's Digital Badge Program represents our latest endeavor for recognizing this talent through secure, verifiable digital credential  s representing skill, achievement, and contribution. Earn and share your badge today!"} />

        <SectionHeading className="title_row">
            <Heading as="h5" content={"Recommended Study Materials"}></Heading>
            <div>
                <Text as={"p"} content={"Books"} />
                {/* <Text as={"p"} content={"Articles"} /> */}
            </div>
        </SectionHeading> 

        <RecommendationSectionWrapper>
            {
                recommendations.books.map( book => (
                    <BooksCard url={book.url} title={book.title} author={book.author}/>
                ))
            }
            {/* {
                recommendations.articles.map( article => (
                    <ArticlesCard 
                        thumbnail={article.Thumbnail}
                        title={article.title} 
                        preview={article.preview}
                        author={article.author}
                        />
                ))
            } */}
        </RecommendationSectionWrapper>
    </CoursePreviewStyle>
  )
}
