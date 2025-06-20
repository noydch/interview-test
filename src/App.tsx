import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Routes from './routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes />
    </>
  )
}

export default App
