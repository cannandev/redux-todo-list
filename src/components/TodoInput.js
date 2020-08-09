import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/todoActions'

export const TodoInputBase = ({ addOnClick }) => {
  const [inputText, setText] = useState('')

  return (
    <fieldset>
      <label for="new-item-input">Add a new item</label>
      <input
        type="text"
        value={inputText}
        onChange={e => setText(e.target.value)}
        name="new-item-input"
        id="new-item-input"
      />
      <button className="usa-button"
        onClick={() => {
          addOnClick(inputText)
          setText('')
        }}>Add</button>
    </fieldset>
  )
}

/**
 * TODO: comment
 * @param {*} dispatch a function.
 */
export const mapDispatchToProps = dispatch => ({
  addOnClick: inputText => dispatch(createTodo(inputText)),
})

export const TodoInput = connect(null, mapDispatchToProps)(TodoInputBase)
