import {Component} from 'react'
import {v4} from 'uuid'
import Tags from '../Tags'
import Tasks from '../Tasks'
import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {
    activeTag: tagsList[0].optionId,
    taskInput: '',
    newList: tagsList,
    selectedTag: '',
    list: [],
  }

  onChangeTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({activeTag: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {activeTag, taskInput} = this.state
    const taskValue = {
      id: v4(),
      task: taskInput,
      tag: activeTag,
    }
    this.setState(prevState => ({
      list: [...prevState.list, taskValue],
      activeTag: tagsList[0].optionId,
      taskInput: '',
    }))
  }

  onClickTag = id => {
    this.setState({selectedTag: id})
  }

  render() {
    const {activeTag, taskInput, newList, selectedTag, list} = this.state
    const filterList = list.filter(item => item.tag.includes(selectedTag))
    return (
      <div className="app-container">
        <div className="responsive-container">
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <h1 className="form-heading">Create a task!</h1>
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              id="task"
              className="input-bar"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
              value={taskInput}
            />
            <div className="tags-container">
              <label className="label" htmlFor="tags">
                Tags
              </label>
              <select
                id="tags"
                className="input-bar select-bar"
                onChange={this.onChangeTag}
                value={activeTag}
              >
                {tagsList.map(eachTag => (
                  <option value={eachTag.optionId} key={eachTag.optionId}>
                    {eachTag.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="add-task-button" type="submit">
              Add Task
            </button>
          </form>
          <div className="tag-task-container">
            <h1 className="tags-task-text">Tags</h1>
            <ul className="tags-list">
              {newList.map(eachTag => (
                <Tags
                  key={eachTag.optionId}
                  tagDetails={eachTag}
                  onClickTag={this.onClickTag}
                  isActive={eachTag.optionId === selectedTag}
                />
              ))}
            </ul>
            <h1 className="tags-task-text">Tasks</h1>
            {filterList.length === 0 ? (
              <p className="no-task-text">No Tasks Added Yet</p>
            ) : (
              <ul className="tasks-list">
                {filterList.map(eachTask => (
                  <Tasks
                    key={eachTask.id}
                    taskDetails={eachTask}
                    tagsList={tagsList}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default CreateTask
