import React from 'react'
import { connect } from 'react-redux'
import { markAsComplete } from '../actions/todoActions'

// TODO: does todo have to be an object?

export const TodoListItemBase = ({ todo }) => {
  const buttonStyles = `usa-button usa-button--accent-cool usa-button--small margin-left-2`
  return (
    (
      <li>
        {todo.text}
        {todo.isCompleted && <span>Done!</span>}
        {todo.isCompleted
          ? <button className={buttonStyles}>Delete</button>
          : <button className={buttonStyles}>Mark as Completed</button>}
      </li>
    )
  )
}

const mapDispatchToProps = dispatch => ({
  // doneOnClick: dispatch(markAsComplete(state))
})

export const TodoListItem = connect(null, mapDispatchToProps)(TodoListItemBase)