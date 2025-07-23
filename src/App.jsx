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
      <div className='bg-lime-50 h-[39rem] w-full '>
        <h1 className='text-[2rem]'>Student Registration System</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 m-4 bg-lime-200 m-4 h-auto w-auto shadow-2xs '>
          <CoureseType />
          <CourseManager />
          <CourseOfferingManager />
          <StudentRegistration />
        </div>
      </div>
    </>
  )
}

export default App
