import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
const CourseManager = () => {
  const [courses, setCourses] = useState(['Hindi', 'English', 'Urdu'])
  // const { courses, setCourses } = useAppContext()

  const [newCourse, setNewCourse] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState('')
  const addCourse = () => {
    if (newCourse && !courses) {
      setCourses([...CourseManager, newCourse])
      setNewCourse('')
    }
  }
  const deleteCourse = (index) => {
    const filiterd = courses.filter((_, i) => i !== index)
    setCourses(filiterd)
  }
  return (
    <>
      <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-2xs'>
        <h1 className='m-2 pl-2'>Courses</h1>
        <div className='pl-4 flex  '>
          <input type='text' className='bg-blue-50 w-[18rem] h-8 ' />
          <button
            className='bg-blue-500 text-white ml-2 w-[4rem] rounded-sm'
            onClick={addCourse}
          >
            Create
          </button>
        </div>
        <ul className='mt-2 list-disc pl-4'>
          {courses.map((course, index) => (
            <li key={index} className='flex items-center gap-2 pl-4'>
              {course}
              <button onClick={() => deleteCourse(index)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseManager
