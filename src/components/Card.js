import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { useGlobalContext } from './Context'

// Card for user data
const Card = ({firstName, lastName, phone, email, country, picture}) => {
    const {darkMode} = useGlobalContext()

    return(
        <div className={darkMode? "card card-dark":"card"}>
            <img className="card-picture" src={picture} alt={firstName} />
            <div className="card-text">
                <h2>{firstName} {lastName}</h2>
                <p className="country">{country}</p>
                <div className="phone">
                    <FaPhoneAlt className="card-text-icon"/> 
                    <p>{phone}</p>
                </div>
                <div className="email">
                    <FaEnvelope className="card-text-icon"/>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card