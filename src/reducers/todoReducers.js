import { CREATE_TODO, MARK_AS_COMPLETE, DELETE_TODO } from '../actions/todoActions'

// Named after resource being reduced
export const todos = (state = [], action) => {
  // destructuring???
  const { type, payload } = action

  /**
   * TODO: comment
   */
  switch (type) {
    case CREATE_TODO: {
      const newTodo = {
        text: payload.text,
        isCompleted: false,
      }
      return state.concat(newTodo)
    }
    case MARK_AS_COMPLETE: {
      const { text } = payload
      return state.map(todo => todo.text === text
        ? { ...todo, isCompleted: true }
        : todo)
    }
    case DELETE_TODO: {
      const { text } = payload
      return state.filter(todo => todo.text !== text)
    }
    default:
      return state
  }
}
