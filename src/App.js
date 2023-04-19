import './App.css';
import React, {useState} from 'react';
import MainMenu from "./Components/MainMenu"
import EndScreen from "./Components/EndScreen"
import Quiz from "./Components/Quiz"
function App() {
  const [gameState, setGameState] = useState("menu");
  
  return (
    <div className="App"> 
    <h1>Quiz App</h1>

    {gameState === 'menu' && <MainMenu />}
    {gameState === 'quiz' && <Quiz />}
    {gameState === 'endScreen' && <EndScreen />}
    </div>
  );
}

export default App;
