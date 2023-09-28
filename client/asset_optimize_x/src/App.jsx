import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import UserLogin from './components/user/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <Home/>
      <UserLogin/>
    </>
  )
}

export default App
