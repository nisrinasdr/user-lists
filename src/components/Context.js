import React, { useState, useContext, useEffect } from 'react'

const url = 'https://randomuser.me/api/?results=20'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [userData, setUserData] = useState([])
    const [dataPerPages, setDataPerPages] = useState(4)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    
    // Fetching data from API
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
          try {
            const response = await fetch(url)
            const data = await response.json()
            const {results} = data
    
            setUserData(
              results.map(data => { return {
                id: data.login.uuid,
                firstName: data.name.first,
                lastName: data.name.last,
                phone: data.phone,
                email: data.email,
                country: data.location.country,
                picture: data.picture.large
              }
            }))
            setLoading(false)
          } catch(error) {
            console.log(error)
            setLoading(false)
          }
        }
      
        fetchData()
      }, [])

  

    return <AppContext.Provider value={{
        userData,
        setUserData,
        dataPerPages,
        setDataPerPages,
        currentPage,
        setCurrentPage,
        loading,
        darkMode,
        setDarkMode
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
