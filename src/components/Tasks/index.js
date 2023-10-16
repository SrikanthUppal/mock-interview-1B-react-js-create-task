import './index.css'

const Tasks = props => {
  const {taskDetails, tagsList} = props
  const {tag, task} = taskDetails
  const findTag = tagsList.find(each => each.optionId === tag)
  console.log(findTag)
  return (
    <li className="task-list-item">
      <p className="task">{task}</p>
      <p className="tag-text-value">{findTag.displayText}</p>
    </li>
  )
}
export default Tasks
