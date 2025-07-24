import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const CourseType = () => {
  const { courseTypes, setCourseTypes } = useAppContext()
  const [courseValue, setCourseValue] = useState('')

  const dataAdd = () => {
    if (courseValue && !courseTypes.includes(courseValue)) {
      setCourseTypes([...courseTypes, courseValue])
      setCourseValue('')
    }
  }

  const deleteType = (index) => {
    const courseTypeDelete = courseTypes.filter((_, i) => i !== index)
    setCourseTypes(courseTypeDelete)
  }

  return (
    <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-sm'>
      <h1 className='m-2 pl-2'>Course Type</h1>
      <div className='pl-4 flex'>
        <input
          type='text'
          className='bg-blue-50 w-[18rem] h-8'
          value={courseValue}
          onChange={(e) => setCourseValue(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white ml-2 w-[4rem] rounded-sm'
          onClick={dataAdd}
        >
          Create
        </button>
      </div>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index} className='flex items-center gap-2 m-4'>
            {type}{' '}
            <button className='text-red-500' onClick={() => deleteType(index)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseType
