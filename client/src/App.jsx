import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CreatePost from './components/createPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HELLO MERN BLOG</h1>
      <p>~ Burak</p>
      <CreatePost />
    </>
  )
}

export default App
