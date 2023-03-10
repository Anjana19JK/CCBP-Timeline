import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {timelineItemsList} = props
  const {
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = timelineItemsList

  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
