import Home from "./components/Home";
import Game from "./components/Game";
import React from 'react';

function App() {

  const [newGame, setNewGame] = React.useState(false)

  function createNewGame() {
    setNewGame(prevGame => !prevGame)
  }

  return (
    <div className="App">
      {newGame ? <Game newGame={createNewGame} /> : <Home newGame={createNewGame} />}
    </div>
  )
}

export default App;
