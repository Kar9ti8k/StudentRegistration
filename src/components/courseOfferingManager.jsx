import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const CourseOfferingManager = () => {
  const { courses, courseTypes, offerings, setOfferings } = useAppContext()
  // const [courseTypes, setCourseTypes] = useState([
  //   'Individual',
  //   'Group',
  //   'Special',
  // ])
  // const [courses, setCourses] = useState(['Hindi', 'English', 'Urdu'])
  // const [offerings, setOfferings] = useState([])
  const [selectedCourse, setSelectedCourse] = useState('')
  const [selectedType, setSelectedType] = useState('')
  console.log(courseTypes)

  const addOffreing = () => {
    if (selectedType && selectedCourse) {
      const newOffering = {
        id: new Date(),
        course: selectedCourse,
        type: selectedType,
      }
      setOfferings([...offerings, newOffering])
      setSelectedCourse('')

      setSelectedType('')
    }
  }

  const deleteOfferings = (data) => {
    setOfferings(offerings.filter((o) => o.id !== data.id))
  }

  return (
    <>
      <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-2xs'>
        <h1 className='m-2 pl-2'>Course Type</h1>
        <div className='gap-4'>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
          >
            <option value=''>Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value=''>Select Type</option>
            {courseTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <button onClick={addOffreing}>add</button>
        <ul className='mt-2'>
          {offerings.map((o) => (
            <li key={o.id} className='flex justify-between mt-1'>
              <span>{`${o.type} - ${o.course}`}</span>
              <button
                className='bg-red-500 text-white px-2 py-1'
                onClick={() => deleteOfferings(o)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CourseOfferingManager
