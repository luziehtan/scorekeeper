import React from 'react'
import Player from './Player/Player'
import PlayerForm from './PlayerForm/PlayerForm'
import GameForm from './GameForm/GameForm'
import Navigation from './Navigation/Navigation'
import './App.css'

function App() {
  const [players, setPlayers] = React.useState([])

  return (
    <div className="App">
      <GameForm onCreateGame={console.log('Create Game')}/>
      <PlayerForm onAddPlayer={addPlayer} />
      {players.map(({ name, score, id }, index) => (
        <Player
          key={id}
          name={name}
          score={score}
          onPlus={() => onPlus(index)}
          onMinus={() => onMinus(index)}
        />
      ))}
      <button onClick={resetScores}>Reset scores</button>
      <button onClick={resetAll}>Reset all</button> 
      <Navigation 
        activeIndex={0}
        onNavigate={() => console.log('onNavigate')} />
    </div>
  )

  function onPlus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function onMinus(index) {
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function addPlayer(name) {
    setPlayers([...players, { name, score: 0, id: players.length + 1 }])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

}
export default App