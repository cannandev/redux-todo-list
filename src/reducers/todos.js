import { CREATE_TODO, MARK_AS_COMPLETE, DELETE_TODO } from '../actions/todoActions'

// Named after resource being reduced
export const todos = (state = [], action) => {
  // destructuring???
  const { type } = action

  // TODO: Comment
  switch (type) {
    case CREATE_TODO:
    case MARK_AS_COMPLETE:
    case DELETE_TODO:
    default:
      return state
  }
}