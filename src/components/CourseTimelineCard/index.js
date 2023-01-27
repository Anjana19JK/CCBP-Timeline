import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {timelineItemsList} = props
  const {courseTitle, description, duration, tagsList} = timelineItemsList
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
