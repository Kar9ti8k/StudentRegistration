import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const CourseOfferingManager = () => {
  const { courses, courseTypes, offerings, setOfferings } = useAppContext()
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)

  const handleAdd = () => {
    if (selectedCourse && selectedType) {
      const newOffering = `${selectedType} - ${selectedCourse}`
      if (!offerings.includes(newOffering)) {
        setOfferings([...offerings, newOffering])
        setSelectedCourse('')
        setSelectedType('')
      }
    }
  }

  const handleDelete = (index) => {
    const updated = offerings.filter((_, i) => i !== index)
    setOfferings(updated)
  }

  const handleEdit = (index) => {
    const [type, course] = offerings[index].split(' - ')
    setSelectedType(type)
    setSelectedCourse(course)
    setEditingIndex(index)
  }

  const handleSave = () => {
    if (selectedCourse && selectedType) {
      const updated = [...offerings]
      updated[editingIndex] = `${selectedType} - ${selectedCourse}`
      setOfferings(updated)
      setSelectedCourse('')
      setSelectedType('')
      setEditingIndex(null)
    }
  }

  return (
    <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-sm'>
      <h2>Manage Course Offerings</h2>
      <div className='flex'>
        {' '}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value=''>Select Type</option>
          {courseTypes.map((type, i) => (
            <option key={i} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option value=''>Select Course</option>
          {courses.map((course, i) => (
            <option key={i} value={course}>
              {course}
            </option>
          ))}
        </select>
        {editingIndex !== null ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button
            className='bg-blue-700 h-10 w-[4rem] text-white pointer '
            onClick={handleAdd}
          >
            Add
          </button>
        )}
      </div>{' '}
      <ul>
        {offerings.map((offer, index) => (
          <li key={index}>
            {offer}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseOfferingManager
