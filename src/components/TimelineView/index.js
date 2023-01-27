import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const {categoryId} = timelineItemsList
  console.log(timelineItemsList)

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList} />
      {timelineItemsList.map(eachItem =>
        categoryId === 'COURSE' ? (
          <CourseTimelineCard
            key={eachItem.id}
            timelineItemsList={timelineItemsList}
          />
        ) : (
          <ProjectTimelineCard
            key={eachItem.id}
            timelineItemsList={timelineItemsList}
          />
        ),
      )}
    </div>
  )
}

export default TimelineView

