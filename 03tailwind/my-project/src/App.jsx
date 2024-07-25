import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={

    username:"hitesh",
    age:21
  }

  let myArr=[1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind css</h1>
{/* <Card username="chai&code" someobj={myArr} btnText="click me"/> */}
{/* <Card  username="rajesh" btnText="visit me"/> */}
 <Card/>
    </>
  )
}

export default App
