import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    id,
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseDetails
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul>{tagsList}</ul>
    </div>
  )
}

export default CourseTimelineCard
