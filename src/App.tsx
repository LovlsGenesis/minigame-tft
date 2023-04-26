import { useEffect, useRef, useState } from 'react'
import { ImageItem } from './components/image.js'
import {baseItems, fullItems, emblems} from "./minigame-data.js"
import './App.css'
import { Item } from './types/types.js'

type GameStatus = {
  default: "begin",
  running: "running",
  ended: "ended"
}

function App() {

  const [score, setScore] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  const [itemToGuess, setItemToGuess] = useState<Item | null>()
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [guessedItems, setGuessedItems] = useState<Item[]>([])
  const [startGame, setStartGame] = useState<boolean>(false)

  const handleGameStart = () => {
    if (guessedItems.length === 0) {
      setGuessedItems(fullItems)
    }

    if (timer === 0 ) {
      setTimer(500)
    }
    setStartGame(true)
    randomizeItem()
    setScore(0)
  }

  const randomizeItem = () => {
    if (guessedItems.length > 0) {
      const random = Math.floor(Math.random() * guessedItems.length);
      const randomizedItem = guessedItems[random]
      setGuessedItems(guessedItems.filter(item => item !== randomizedItem))
      setItemToGuess(randomizedItem)
    } else {
      setItemToGuess(null)
    }
  }

  const nextItem = () => {
    if (selectedItems.length > 0 && selectedItems.length <= 2) {
      if (itemToGuess) {
        let comparing
        if (selectedItems.length === 1) {
          const selectedItemsDuplicate = selectedItems.flatMap(i => [i,i])
          comparing = itemToGuess.components?.every((itemId, index) => itemId === selectedItemsDuplicate[index])
        } else {
          comparing = itemToGuess.components?.every((itemId, index) => itemId === selectedItems[index])
        }
        if (comparing) {
          setScore(score + 1)
        }
      }
      randomizeItem()
    }
  }

  const handleSelectedItem = (array: number[]) => {
    if (array.length <= 2) {
      setSelectedItems(array)
    }
  }

  useEffect(() => {
    let interval: any
    if (startGame) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }

    if (timer === 0) {
      clearInterval(interval);
      setStartGame(false)
      setItemToGuess(null)
    }

    return () => {
      clearInterval(interval)
      startGame
    }

  }, [guessedItems, selectedItems, startGame, timer, setTimer])

  return (
    <div className="App">
      { !itemToGuess &&
        <div className="pregame">
          <div className="menu">
            <button onClick={() => handleGameStart()}>Start</button>
            <div className="time">
              <div className="timeTitle">
                Choose Time:
              </div>
              <button onClick={() => setTimer(30)}>30s</button>
              <button onClick={() => setTimer(60)}>60s</button>
            </div>
            <div>
              <p>Score: {score}</p>
            </div>
          </div>
        </div>
      }
      { (startGame && itemToGuess) &&
          <div className="game">
            <div className="game-window">
              <div>
                <div className="gameinfo">
                  <p className="score">Score: {score}</p>
                  <p className="timer">Remaining Time: {timer}s</p>
                </div>
                <div className="guess">
                  <ImageItem key={itemToGuess.name} item={itemToGuess} list={false}/>
                  <p>Guess the components of: <br /> {itemToGuess.name}</p>
                </div>
                <div className="items">
                  Select Components:
                  <div className="items_image">
                  {baseItems.map((item) => <ImageItem key={item.name} item={item} list={true} selected={selectedItems} setSelected={handleSelectedItem}/>)}
                  </div>
                  <span>You can select 1 or 2 items</span>
                </div>
                <button onClick={() => nextItem()}>Next</button>

              </div>
          </div>
        </div>
      }
    </div>
  )
}

export default App
