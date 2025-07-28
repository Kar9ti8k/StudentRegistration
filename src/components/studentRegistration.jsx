import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const StudentRegistration = () => {
  const { offerings, registrations, setRegistrations, courseTypes } =
    useAppContext()

  const [studentName, setStudentName] = useState('')
  const [selectedOfferingId, setSelectedOfferingId] = useState('')
  const [filterType, setFilterType] = useState('')

  const handleRegister = () => {
    if (studentName.trim() && selectedOfferingId) {
      const updated = [...registrations]
      updated.push({ name: studentName, offering: selectedOfferingId })
      setRegistrations(updated)
      setStudentName('')
      setSelectedOfferingId('')
    }
  }

  const filteredOfferings = filterType
    ? offerings.filter((o) => o.startsWith(filterType))
    : offerings

  const grouped = offerings.reduce((acc, offer) => {
    acc[offer] = registrations.filter((r) => r.offering === offer)
    return acc
  }, {})

  return (
    <div className='max-w-md mx-auto bg-white p-4 rounded-sm shadow-md'>
      <h2>Student Registrations</h2>

      <input
        placeholder='Enter student name'
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      {/* <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option value=''>All Types</option>
        {courseTypes.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select> */}

      <select
        className=' border p-2 rounded mt-1'
        value={selectedOfferingId}
        onChange={(e) => setSelectedOfferingId(e.target.value)}
      >
        <option value=''>Select Offering</option>
        {filteredOfferings.map((offer, i) => (
          <option key={i} value={offer}>
            {offer}
          </option>
        ))}
      </select>

      <button
        onClick={handleRegister}
        className='w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
      >
        Register
      </button>

      <h3 className='text-md font-semibold'>Registered Students</h3>
      {Object.keys(grouped).map((offer, idx) => (
        <div key={idx}>
          <strong>{offer}</strong>
          <ul>
            {grouped[offer].length === 0 ? (
              <li>No students registered</li>
            ) : (
              grouped[offer].map((r, i) => <li key={i}>{r.name}</li>)
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default StudentRegistration
