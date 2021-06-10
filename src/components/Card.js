import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const Card = ({firstName, lastName, phone, email, country, picture}) => {
    
    return(
        <div className="card">
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