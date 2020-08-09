
// ACTIONS
export const CREATE_TODO = 'CREATE_TODO'
export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE'
export const DELETE_TODO = 'DELETE_TODO'

/**
 * CREATORS
 * @param {*} text Takes a unique identifier as a parameter
 * @returns the action - a json object with type and payload props
 */
export const createTodo = text => (
  {
    type: CREATE_TODO,
    payload: { text }
  }
)

export const markAsComplete = text => (
  {
    type: MARK_AS_COMPLETE,
    payload: { text },
  }
)

export const deleteTodo = text => (
  {
    type: DELETE_TODO,
    payload: { text }
  }
)
