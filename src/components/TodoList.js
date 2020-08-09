import React from 'react'
import { connect } from 'react-redux'
import { TodoListItem } from "./TodoListItem"
import { TodoInput } from './TodoInput'

/**
 *
 * @param {*} todos An object passed once connected to store.
 */
export const TodoListBase = ({ todos }) => {
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

const mapStateToProps = state => ({
  todos: state.todos
})

// Connect to store
export const TodoList = connect(mapStateToProps)(TodoListBase)
