import React from 'react';
import './MiddlePart.css';

const MiddlePart = () => {
    return (
        <div className="py-5">
            {/* Beneficial part */}
            <hr />
            <h3 style={{color:"#555756"}} className="fs-1 text fw-bold text-center sevc ">Our Service</h3>
            <div className='container'>
            <div className="row px-2 md:px-5 my-5 row-cols-md-2 row-cols-lg-2 icon-item">
                <div className="d-flex p-0 align-items-center">
                <div className="icon ">
                <i className="fas fa-brain"></i>
                </div>
                <div className="px-2">
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Therapiya</span>
                <p className="mx-auto">Sirius WordPress Theme features a slick and clean design that is suitable for virtually any type of website</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon ">
                <i class="fas fa-prescription-bottle"></i>
                </div>
                <div className="px-2">
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Pharamcology</span>
                <p className="">Walking, running, dancing, swimming, yoga are a few physical activity.</p>
                </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i class="fas fa-tooth"></i>
                </div>
                <div className="px-2">
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Dentistry</span>
                <p className=" mx-auto">You have to know which exercises are useful for which ..</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i className="fas fa-heartbeat"></i>
                
                </div>
                <div className="px-2">
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Cardiology</span>
                <p className=" mx-auto">People are most productive when they wake up, and setting .</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i class="fas fa-virus"></i>
                </div>
                <div className="px-2">
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Viruslogy</span>
                <p className=" mx-auto">People are most productive when they wake up, and setting .</p>
                </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                <div className="icon">
                <i class="fas fa-eye"></i>
                </div>
                <div className="px-2">
                {/* <h4>Eye Surgery</h4> */}
                <span style={{color:"#555756 "}} className="fs-3 text fw-bold ">Eye Surgery</span>

                <p className=" mx-auto">People are most productive when they wake up, and setting .</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MiddlePart;