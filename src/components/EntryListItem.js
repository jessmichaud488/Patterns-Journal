import React from 'react'
import { connect } from 'react-redux'
import { removeEntry } from '../actions/entries'
import { Link } from 'react-router-dom'
import moment from 'moment'

class EntryListItem extends React.Component {
  /*constructor(props) {
    super(props)
  }*/
  // Removes 'edit entry' and 'delete entry' hover tooltip
  onRemove = () => {
    this.refs.entry.classList.add('disappear')
    setTimeout(() => {
      this.props.removeEntry(this.props)
    }, 400)
  }
  // Opens entry body on click
  openEntry = () => {
    const entryBody = this.refs.entryBody
    entryBody.style.maxHeight ? 
      entryBody.style.maxHeight = null : entryBody.style.maxHeight = entryBody.scrollHeight + 'px'
  }
  // Makes 'edit entry' and 'delete entry' hover tooltip appear
  setEditText = () => {
    this.refs.option.textContent = 'Edit Entry'
    this.refs.option.classList.add('appear')
  }
  setDeleteText = () => {
    this.refs.option.textContent = 'Delete Entry'
    this.refs.option.classList.add('appear')
  }
  removeOptionText = () => {
    this.refs.option.classList.remove('appear')
  }
  render() {
    return (
      <div className="entry" onClick={this.openEntry} ref="entry">
        <div className="entry__header">
          <div className="entry__title-box">
            <span className="entry__title">{this.props.title}</span>
          </div>
          <div className="entry__info-container">
            <div className="entry__info-box">
              {<span className="entry__type">
                {(() => {
                  const entryTypeSplit = this.props.entryType.split('')
                  const entryTypeEdit = entryTypeSplit.map((letter, index) => {
                    if (index === 0) {
                      return letter.toUpperCase()
                    } else {
                      return letter
                    }
                  })
                  return entryTypeEdit.join('')
                })()}
              </span>}
            </div>
            <div className="entry__info-box">
              <span className="entry__instensity-level">
                <i className="fas fa-signal entry__level"></i>
                {this.props.intensityLevel}
              </span>
            </div>
            <div className="entry__info-box">
              <span className="entry__hours">
                <i className="far fa-clock entry__clock"></i>
                {this.props.hoursSlept}
              </span>
            </div>
            <div className="entry__info-box">
              <span className="entry__date">
                <i className="far fa-calendar-alt entry__calendar"></i>
                {moment(this.props.createdAt).format('MMM Do, YYYY')}
              </span>
            </div>
          </div>
        </div>
        <div className="entry__body" ref="entryBody">
          <p className="entry__entry"><i className="fas fa-quote-left entry__quote"></i>{this.props.entry}</p>
          <div className="entry__options">
            <span className="entry__options-text" ref="option"></span>
            <Link to={`/edit/${this.props.id}`} className="entry__link">
              <i 
                className="fas fa-pencil-alt entry__edit" 
                onMouseEnter={this.setEditText} 
                onMouseLeave={this.removeOptionText}>
              </i>
            </Link>
            <i 
              className="fas fa-times-circle entry__delete" 
              onMouseEnter={this.setDeleteText}
              onMouseLeave={this.removeOptionText}
              onClick={this.onRemove}>
            </i>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeEntry: (entry) => dispatch(removeEntry(entry))
})

export default connect(undefined, mapDispatchToProps)(EntryListItem)