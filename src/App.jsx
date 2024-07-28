import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./component/cards"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    UserName: "Yash Bhamania",
    age: 24
  }

  let myArr = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-7'>Tailwind test</h1>
      <Card chennal="Yash" btnTxt="Click Me!" />
      <Card chennal="Bhamania"  />
      <Card chennal="Hello World!"  />
    </>
  )
}

export default App
