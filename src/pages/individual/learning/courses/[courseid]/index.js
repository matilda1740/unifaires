import { useRouter } from 'next/router';


const CoursePreviewModule = () => {
    const router = useRouter();

    const courseID = router.query.courseID;

    return (
        <h5>Course: {courseID}</h5>
    );
}

export default CoursePreviewModule;