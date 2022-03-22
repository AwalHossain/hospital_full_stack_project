import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const {serviceId} = useParams();
    const [file, setFile] =useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/api/service/${serviceId}`)
        .then(res => res.json())
        .then(data => setFile(data.service))
    },[serviceId])

    console.log(file);
   

    
    return (
        <div className="d-flex container my-5 justify-content-center">
            {/* Details & dynamic route */}
            <div className="d-md-flex justify-content-center " >
            <img src={file?.img} className="img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{file?.title}</h5>
                <p className="card-text">{file?.desc}</p>
                <Link className="btn btn-primary" to={`/appointment/${file._id}`}>Make an Appointment</Link>
            </div>
            </div>
        </div>
    );
};

export default Details;