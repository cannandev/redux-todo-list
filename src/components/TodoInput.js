import React from 'react'
import { useState } from 'react'

export const TodoInput = _ => {
  const [text, setText] = useState('')

  return (
    <fieldset>
      <label for="new">Add a new item</label>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        name="new"
        id="new"
      />
      <button className="usa-button">Add</button>
    </fieldset>
  )
}