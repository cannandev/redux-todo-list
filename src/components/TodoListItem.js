import React from 'react'
import { connect } from 'react-redux'
import { markAsComplete, deleteTodo } from '../actions/todoActions'

// TODO: does todo have to be an object?

export const TodoListItemBase = ({ todo, deleteOnClick, doneOnClick }) => {
  const deleteButtonStyle = `usa-button usa-button--default usa-button--small margin-left-2`
  const doneButtonStyle = `usa-button usa-button--accent-cool usa-button--small margin-left-2`

  return (
    (
      <li>
        {todo.text}
        {todo.isCompleted && <span role="img" aria-label="done">✔️</span>
        }
        {todo.isCompleted
          ? <button
            className={deleteButtonStyle} onClick={_ => deleteOnClick(todo.text)}>Delete</button>
          : <button
            className={doneButtonStyle} onClick={_ => doneOnClick(todo.text)}>Mark as Completed</button>}
      </li>
    )
  )
}

const mapDispatchToProps = dispatch => ({
  doneOnClick: text => dispatch(markAsComplete(text)),
  deleteOnClick: text => dispatch(deleteTodo(text)),
})

export const TodoListItem = connect(null, mapDispatchToProps)(TodoListItemBase)
