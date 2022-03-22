import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './Header.css';
const Header = () => {
    const {user, logOut} = useAuth();
    const [fix, setFix] = useState(false);

 

      console.log(fix);
    return (

        // Navigaion Bar
      <div className="sticky-top cotainer">
             <nav class={fix ? "nav navbar-expand-lg navbar-light bg-light" :" navbar navbar-expand-lg navbar-light bg-light p-0"}>
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/home" >
                     
                        <span className='logo fw-bold'>veryWell</span>
                        <span className='logo-1'>health</span>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex align-items-center  ms-auto  mb-2 mb-lg-0">
                          {/* Menu Part */}
                            <li className="nav-item">
                            <Link className="nav-link text-black text-capitalize"  to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-black text-capitalize"  to="/appointment">Appointment</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-black text-capitalize"  to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link  text-capitalize"  to="/package">Plan</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link  text-capitalize" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-capitalize"  to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-capitalize"  to="/admin/dashboard">Admin</Link>
                            </li>
                            <li className="nav-link text-capitalize" >{
                              user?.email?  <button onClick={logOut} className="px-5 fs-5 py-1"><Link to="/login">LogOut</Link><li>{user.displayName}</li></button> :
                              <Link  to="/login">                            <button className="px-5 fs-5 py-1 lowercase nav-link text-capitalize">Login</button></Link>
                              }</li>
                        </ul>
                     </div>
                   </div>
                </nav>
        </div>
    );
};

export default Header;