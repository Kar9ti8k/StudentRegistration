import { React, useState } from 'react'
import { useAppContext } from '../context/AppContext'
const initialCourses = ['Individual', 'Group', 'Special']

const CoureseType = () => {
  // const { courseType, setCoureseType } = useAppContext
  const [courseType, setCoureseType] = useState(initialCourses)
  const [courseValue, setCoureseValue] = useState('')

  const dataAdd = () => {
    if (courseValue && !courseType.includes(courseValue)) {
      setCoureseType([...courseValue, courseType])
      setCoureseValue('')
    }
  }

  const deleteType = (index) => {
    const courseTypeDelete = courseType.filter((_, i) => i !== index)
    setCoureseType(courseTypeDelete)
  }
  return (
    <>
      <div className='h-[14rem] bg-white w-[25rem] flex flex-col items-start rounded-sm shadow-2xs'>
        <h1 className='m-2 pl-2'>Course Type</h1>
        <div className='pl-4 flex  '>
          <input
            type='text'
            className='bg-blue-50 w-[18rem] h-8 '
            value={courseValue}
            onChange={(e) => setCoureseValue(e.target.value)}
          />
          <button
            className='bg-blue-500 text-white ml-2 w-[4rem] rounded-sm'
            onClick={dataAdd}
          >
            Create
          </button>
        </div>
        <ul>
          {courseType.map((type, index) => (
            <li key={index} className='flex items-center gap-2 m-4'>
              {type} <button onClick={() => deleteType(index)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default CoureseType
