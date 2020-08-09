import React from 'react'

// TODO: does todo have to be an object?
export const TodoListItem = ({ todo }) => (
  <li>
    {todo.text}
    {todo.isCompleted
      ? <button className="usa-button usa-button--base usa-button--small margin-left-2">Delete</button>
      : <button className="usa-button usa-button--accent-cool usa-button--small margin-left-2">Mark as Completed</button>}
  </li>
)
