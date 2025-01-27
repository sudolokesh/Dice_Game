import React, { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay';

export default function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const ToggleGamePlay = () => {setIsGameStarted((prev) => !prev);  };

    return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={ToggleGamePlay} />}
    </>
  )
}
