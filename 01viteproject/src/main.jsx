import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>custom App | chai</h1>
        </div>
    )
}
// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     childern:'click me to visit google'
// }

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    ' visit google'


)
const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
 reactElement
 
)
