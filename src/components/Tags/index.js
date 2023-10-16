import './index.css'

const Tags = props => {
  const {tagDetails, onClickTag, isActive} = props
  const onClickTagButton = () => {
    onClickTag(tagDetails.optionId)
  }

  const buttonStyle = isActive ? 'active-btn' : 'inActive-btn'

  return (
    <li className="tag-list-item">
      <button type="button" className={buttonStyle} onClick={onClickTagButton}>
        {tagDetails.displayText}
      </button>
    </li>
  )
}
export default Tags
