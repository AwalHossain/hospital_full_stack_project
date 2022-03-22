import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const {title, desc, id, time, available, _id} =props.data;
    console.log(title);
    return (
        // Card Details
            <div>
                <div className='mx-auto text-center shadow p-3 mb-5 bg-white rounded'>
                    <span className='bookTitle fw-bold h3 '>{title}</span>
                    <h4>{time}</h4>
                    <p >{available} space avaiable</p>
                    <Link to={`details/${_id}`}> <button className='bookBtn'>Book Appointment</button> </Link>
                </div>
            </div>   
            
            );
};

export default Service;