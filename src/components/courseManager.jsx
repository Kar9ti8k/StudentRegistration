import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const CourseManager = () => {
  const { courses, setCourses } = useAppContext()
  const [newCourse, setNewCourse] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)
  const [editValue, setEditValue] = useState('')

  const handleAdd = () => {
    if (newCourse.trim() && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse])
      setNewCourse('')
    }
  }

  const handleDelete = (index) => {
    const updated = courses.filter((_, i) => i !== index)
    setCourses(updated)
  }

  const handleEdit = (index) => {
    setEditingIndex(index)
    setEditValue(courses[index])
  }

  const handleSave = () => {
    if (editValue.trim()) {
      const updated = [...courses]
      updated[editingIndex] = editValue
      setCourses(updated)
      setEditingIndex(null)
      setEditValue('')
    }
  }

  return (
    <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-sm'>
      <h2>Manage Courses</h2>
      <div className='pl-4 flex'>
        {' '}
        <input
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder='Enter course'
          className='bg-blue-50 w-[18rem] h-8 '
        />
        <button
          onClick={handleAdd}
          className='bg-blue-500 text-white ml-2 w-[4rem] rounded-sm'
        >
          Add
        </button>
      </div>
      <ul className='mt-2 list-disc pl-4'>
        {courses.map((course, index) => (
          <li key={index} className='flex items-center gap-2'>
            {editingIndex === index ? (
              <>
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button
                  onClick={handleSave}
                  className='bg-blue-500 text-white px-2'
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {course}
                <button
                  onClick={() => handleEdit(index)}
                  className='text-blue-600 px-8'
                >
                  {' '}
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className='text-red-600 px-8'
                >
                  {' '}
                  &times;
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseManager
