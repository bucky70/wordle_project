import './App.css';
import Board from './components/Board';
import KeyBoard from './components/KeyBoard';
import {createContext, useState} from "react";
import { boardDefault } from './Words';

export const Appcontext = createContext("");

function App() {
  const [board,setBoard]= useState(boardDefault);
  const [currAttempt,setCurrAttempt] = useState({attempt:0, letterPos:0})
  return <div className="App">
    <nav>
    <h1>Wordle</h1>
    </nav>
    <Appcontext.Provider value={{board,setBoard,currAttempt,setCurrAttempt}}>
      <div className="game">
      <Board></Board>
      <KeyBoard></KeyBoard>
      </div>    
    </Appcontext.Provider>
    </div>
}

export default App;
