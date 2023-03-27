import './App.css';
import {useCallback, useEffect, useState } from 'react'
import {wordsList} from './data/words'
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages =[
  {id:1, name: 'start'},
  {id:2, name: 'game'},
  {id:3, name: 'end'}
]
function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)
  const [pickedword, setPickedword] = useState('')
  const [pickedCategory, setpickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  
  const pickedWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random( ) *  Object.keys(categories).length)]

    console.log(category)


    ///pick a radom word

    const word = words[category][Math.floor(Math.random( ) *  words[category].length)]

    console.log(word)
    return {word, category}
  }
  const startGame = () =>{

const {word, category }= pickedWordAndCategory()

let wordLetters = word.split('')
wordLetters = wordLetters.map((l)=> l.toLowerCase())

console.log(word, category)
console.log(wordLetters) 

setPickedword(word)
setpickedCategory(category)
setLetters(letters)


    setGameStage(stages[1].name)
  }


  //processes the letter input

  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }

  //end

  const retry = () =>{
    setGameStage(stages[0].name)
  }
  return (
  <div className="App">
  {gameStage === 'start' && <StartScreen startGame={startGame}/>} 
  {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>} 
  {gameStage === 'end' && <GameOver retry = {retry}/>} 

 </div>
  );
}

export default App;
