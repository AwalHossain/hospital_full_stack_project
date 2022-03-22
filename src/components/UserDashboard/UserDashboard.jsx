import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Users from './Users';

const UserDashboard = () => {
    const [file, setFile] = useState([]);
    const [data, setData] = useState([]);
    const { user } = useAuth();
  
    const email = user?.email
  
    useEffect(() => {
      fetch(`http://localhost:5000/api/getServicId/${email}`)
        .then((res) => res.json())
        .then((data) => setFile(data.appointmenId));
        
    }, []);

    console.log(file)
    // file.map(dt => fetch(`http://localhost:5000/api/service/${dt}`)
    // .then((res) => res.json())
    // .then((data) =>setData(data)))
  
    const handleDelete = ()=>{
        
    }
  return (

    <div className="mt-5 pt-5">
    <section className="main-content">
      <div className="container">
        <h1 className="my-5"> Your Appointment </h1>
        <div className="row">
        {
          file.map(data => <Users id={data} />)
        }
        </div>
      </div>
    </section>
  </div>
  )
}

export default UserDashboard