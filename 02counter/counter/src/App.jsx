import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(0)
// let counter = 15;
const addvalue=()=>{
  if(counter==20){
     setcounter(counter=20)
  }else{
    setcounter(counter+1)
  }

}
const removevalue=()=>{
if(counter>0){
  setcounter(counter-1)
}else{
  setcounter(counter=0)
}
}



// let [value, setValue] = useState(0)
//  const addvalue = () => {
//   if (value == 20){
//     setValue(value = 20)
//   }
//   else{
//     setValue(value+1)
//   }
    
//   }
  
//   const removevalue = () => {
//     if (value > 0){
//       setValue(value - 1)
//     }
//     else{
//       setValue(value = 0)
//     }
   
//   }

  return (
    <>
    
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>Add value :{counter}</button>
      <br></br>
      <button  onClick={removevalue}>Remove value:{counter}</button>
    </>
     
  )
}

export default App
