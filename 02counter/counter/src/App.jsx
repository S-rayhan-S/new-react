import { useState ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

   let [counter, setCounter] = useState(15);
   const intervalRef=useRef(null);
  // let counter=5
  const addValue = () => {   
    clearInterval(intervalRef.current) 
    intervalRef.current= setInterval(() => updateCount(true), 1000)
  }
  const removeCount = () => {
    clearInterval(intervalRef.current)
    intervalRef.current=setInterval(() => updateCount(false), 1000)
  } 

  function updateCount(flag) {
    console.log("Value added", Math.random());
    if(counter<=0 ||counter>=30 ){setCounter(counter=16)}
    else if (flag){
      setCounter(counter++)
    }     
    else {
     setCounter(counter=counter - 1)
    }
    
  }

  return (
    <>
        
        <h1>Chai aur React</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue} >Add value {counter}</button>
        <button onClick={removeCount}>Remove value {counter}</button>

        <p><footer>{counter}</footer></p>
    </>
  )
}

export default App
