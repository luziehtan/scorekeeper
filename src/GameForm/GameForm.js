import React from 'react'
import './GameForm.css'
import Button from '../Button/Button'

export default function GameForm({ onCreateGame }) {
  return (
    <form className="GameForm">
      <label className="GameForm__label">
        Name of Game:
        <br />
        <input name="player" placeholder="e.g. Carcassonne" />
      </label>
      <label className="GameForm__label">
        Player Names:
        <br />
        <input name="player" placeholder="e.g. John Doe, Jane Doe" />
      </label>
      <Button 
        onSubmit={handleSubmit}
        text='Create Game' />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onCreateGame(name)
    form.reset()
    input.focus()
  }
}