import createStore, comb
import { combineReducers } from "redux";
import { createStore, combineReducers } from 'redux'

// object that contains several properties/functions (e.g. tells store how to update todos).
const reducers = {}

const rootReducer = combineReducers(reducers)

export const configureStore = _ => createStore(rootReducer)