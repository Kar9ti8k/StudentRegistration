import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
const CourseManager = () => {
  // const [courses, setCourses] = useState(['Hindi', 'English', 'Urdu'])
  const { courses, setCourses } = useAppContext()

  const [newCourse, setNewCourse] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState('')
  const addCourse = () => {
    if (newCourse && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse])
      setNewCourse('')
    }
  }

  const updateCourse = (index) => {
    const updated = [...courses]
    updated[index] = editValue
    setCourses(updated)
    setEditIndex(null)
    setEditValue('')
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
          <input
            type='text'
            className='bg-blue-50 w-[18rem] h-8 '
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white ml-2 w-[4rem] rounded-sm'
            onClick={addCourse}
          >
            Create
          </button>
        </div>
        <ul className='mt-2 list-disc pl-4'>
          {courses.map((course, index) => (
            <li key={index} className='flex items-center gap-2'>
              {editIndex === index ? (
                <>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className='border p-1'
                  />
                  <button
                    onClick={() => updateCourse(index)}
                    className='bg-blue-500 text-white px-2'
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{course}</span>
                  <button
                    onClick={() => {
                      setEditIndex(index)
                      setEditValue(course)
                    }}
                    className='text-blue-600'
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteCourse(index)}
                    className='text-red-600'
                  >
                    &times;
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseManager
