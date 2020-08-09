import { createStore, combineReducers } from 'redux'
import { todos } from './reducers/todos'

// object that contains several properties/functions (e.g. tells store how to update todos).
const reducers = {
  todos
}

const rootReducer = combineReducers(reducers)

export const configureStore = _ => createStore(rootReducer)