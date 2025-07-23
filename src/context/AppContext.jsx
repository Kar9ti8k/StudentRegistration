import React, { createContext, useContext } from 'react'

const AppContext = createContext()
export const AppProvider = ({ children }) => {
  const [courseTypes, setCourseTypes] = useState([
    'Individual',
    'Group',
    'Special',
  ])
  const [courses, setCourses] = useState(['Hindi', 'English', 'Urdu'])
  const [offerings, setOfferings] = useState([])
  const [registrations, setRegistrations] = useState([])

  return (
    <AppContext.Provider
      value={{
        courseTypes,
        setCourseTypes,
        courses,
        setCourses,
        offerings,
        setOfferings,
        registrations,
        setRegistrations,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = useContext(AppContext)
