import React from 'react'
import { useGlobalContext } from './Context'

const DarkModeButton = () => {
    const {darkMode, setDarkMode} = useGlobalContext()

    return(
        <button 
         className={darkMode? "button-theme card card-dark":"button-theme card"}
         onClick={() => setDarkMode(!darkMode)}>
            <p>Change to {darkMode? "Light Mode":"Dark Mode"}</p>
        </button>
    )
}

export default DarkModeButton