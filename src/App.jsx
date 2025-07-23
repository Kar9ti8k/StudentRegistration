import { useState } from 'react'
import './App.css'
import CoureseType from './components/coureseType'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>Student Registration System</h1>
        <CoureseType />
      </div>
    </>
  )
}

export default App
