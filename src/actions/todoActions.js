
// ACTIONS
export const CREATE_TODO = 'CREATE_TODO'
export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE'
export const DELETE_TODO = 'DELETE_TODO'

/**
 * CREATORS
 * @param {*} id Takes a unique identifier as a parameter
 * @returns the action - a json object with type and payload props
 */
export const createTodo = title => (
  {
    type: CREATE_TODO,
    payload: { title }
  }
)

export const markAsComplete = title => (
  {
    type: MARK_AS_COMPLETE,
    payload: { title },
  }
)

export const deleteTodo = title => (
  {
    type: DELETE_TODO,
    payload: { title }
  }
)