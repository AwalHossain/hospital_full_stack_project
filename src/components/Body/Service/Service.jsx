import React from 'react';
import './Service.css';
const Service = (props) => {
    const {title, desc, id, img} =props.data;
    return (
        // Card Details
            <div>
                <div className='mx-auto text-center shadow p-3 mb-5 bg-white rounded'>
                    <span className='bookTitle fw-bold h3 '>Cosmetic Surgery</span>
                    <h4>10.05am -11.30am</h4>
                    <p >10 space available</p>
                    <button className='bookBtn'>Book Appointment</button>
                </div>
            </div>    );
};

export default Service;