import React from 'react'
import { TodoListItem } from "./TodoListItem"
import { TodoInput } from './TodoInput'

// fake todo data to build out app
const todos = [
  {
    id: 1,
    title: 'Go to store',
    isCompleted: false
  },
  {
    id: 2,
    title: 'Buy a new car',
    isCompleted: false
  },
  {
    id: 3,
    title: 'Learn Redux',
    isCompleted: true
  },
  {
    id: 4,
    title: 'Make a spare key',
    isCompleted: true
  },
]

export const TodoList = _ => {
  return (
    <div className="mobile-lg:grid-col-4 margin-top-4 mobile-lg:margin-top-0">
      <h1>My Todos</h1>
      <TodoInput />
      <ul className="usa-list usa-list">
        {todos.map(todo => <TodoListItem todo={todo} key={todo.id} />)}
      </ul>
    </div>
  )
}

