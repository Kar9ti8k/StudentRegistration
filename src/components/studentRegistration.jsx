import React, { useState, useEffect } from 'react'
import { useAppContext } from '../context/AppContext'

const StudentRegistration = () => {
  const { offerings, registrations, setRegistrations, courseTypes } =
    useAppContext()

  const [studentName, setStudentName] = useState('')
  const [selectedOfferingId, setSelectedOfferingId] = useState('')
  const [filterType, setFilterType] = useState('')
  const [error, setError] = useState('')

  const filteredOfferings = filterType
    ? offerings.filter((o) => o.type === filterType)
    : offerings

  // Clear error on any field change
  useEffect(() => {
    setError('')
  }, [studentName, selectedOfferingId, filterType])

  const handleRegister = (e) => {
    e.preventDefault()

    const trimmedName = studentName.trim()
    const selectedId = Number(selectedOfferingId)
    const offering = offerings.find((o) => o.id === selectedId)

    if (!trimmedName) {
      setError('Please enter a valid student name')
      return
    }

    if (!selectedOfferingId) {
      setError('Please select a course')
      return
    }

    if (!offering) {
      setError('Selected course not found')
      return
    }

    // Check for duplicate registration
    const isDuplicate = registrations.some(
      (r) =>
        r.name.toLowerCase() === trimmedName.toLowerCase() &&
        r.offering.id === selectedId
    )

    if (isDuplicate) {
      setError('This student is already registered for the selected course')
      return
    }

    const registration = {
      id: Date.now(),
      name: trimmedName,
      offering,
    }

    setRegistrations([...registrations, registration])
    setStudentName('')
    setSelectedOfferingId('')
  }

  return (
    <div className='max-w-md mx-auto bg-white p-4 rounded-sm shadow-md'>
      <form onSubmit={handleRegister} className='space-y-4'>
        <h1 className='text-lg font-semibold'>Course Registration</h1>

        {error && (
          <div className='text-red-500 text-sm' role='alert'>
            {error}
          </div>
        )}

        <div>
          <label htmlFor='courseType' className='block text-sm font-medium'>
            Course Type
          </label>
          <select
            id='courseType'
            className='w-full border p-2 rounded mt-1'
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value=''>All Course Types</option>
            {courseTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor='studentName' className='block text-sm font-medium'>
            Student Name
          </label>
          <input
            id='studentName'
            className='w-full border p-2 rounded mt-1 bg-blue-50'
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder='Enter student name'
            aria-required='true'
          />
        </div>

        <div>
          <label htmlFor='courseSelect' className='block text-sm font-medium'>
            Course Selection
          </label>
          <select
            id='courseSelect'
            className='w-full border p-2 rounded mt-1'
            value={selectedOfferingId}
            onChange={(e) => setSelectedOfferingId(e.target.value)}
            aria-required='true'
          >
            <option value=''>Select a course</option>
            {filteredOfferings.map((o) => (
              <option key={o.id} value={o.id}>
                {`${o.type} - ${o.course}`}
              </option>
            ))}
          </select>
          {filteredOfferings.length === 0 && (
            <p className='text-sm text-gray-500 mt-1'>
              No courses available for this type.
            </p>
          )}
        </div>

        <button
          type='submit'
          className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
          disabled={!studentName || !selectedOfferingId}
        >
          Register
        </button>
      </form>

      {registrations.length > 0 && (
        <div className='mt-6'>
          <h2 className='text-md font-semibold'>Registered Students</h2>
          <ul className='mt-2 max-h-60 overflow-y-auto'>
            {registrations.map((r) => (
              <li key={r.id} className='py-1'>
                {r.name} - {r.offering.type} - {r.offering.course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StudentRegistration
