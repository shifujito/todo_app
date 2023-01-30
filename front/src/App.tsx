import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onClick = () => {
    setCount(count + 1);
    alert('This is box #:'+ count)
  }


  return (
    <div className="App">
      <div className='container' onClick={onClick}>
        {count}
      </div>
    </div>
  )
}

export default App
