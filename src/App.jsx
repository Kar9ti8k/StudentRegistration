import { useState } from 'react'
import './App.css'
import CoureseType from './components/coureseType'
import CourseManager from './components/courseManager'
import CourseOfferingManager from './components/courseOfferingManager'
import StudentRegistration from './components/studentRegistration'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <h1>Student Registration System</h1>
        <CoureseType />
        <CourseManager />
        <CourseOfferingManager />
        <StudentRegistration />
      </div>
    </>
  )
}

export default App
