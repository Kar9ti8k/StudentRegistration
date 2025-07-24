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

  return (
    <>
      <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-2xs'>
        <h1 className='m-2 pl-2'>Course Type</h1>
        <div>
          <select>
            <option value=''>Select Course</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          <select>
            <option value=''>Select Type</option>
            {courseTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default CourseOfferingManager
