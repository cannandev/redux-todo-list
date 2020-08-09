import React from 'react'

// TODO: does todo have to be an object?
export const TodoListItem = ({ todo }) => (
  <li>
    {todo.text}
    {todo.isCompleted
      ? <button className="usa-button usa-button--base">Delete</button>
      : <button className="usa-button usa-button--accent-cool">Mark as Completed</button>}
  </li>
)
