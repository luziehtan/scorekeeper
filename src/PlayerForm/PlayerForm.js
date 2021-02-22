import React from 'react'
import './PlayerForm.css'

export default function PlayerForm({onAddPlayer}) {
    return(
        <form className="PlayerForm">
            <label className="PlayerForm__label">
                Add Player:<br />
                <input
                    onSubmit={onAddPlayer}
                    type="text"
                    placeholder="Player Name"
                />
            </label>
        </form>
    )
}