import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const UserDashboard = () => {
    const [file, setFile] = useState([]);
    const [data, setData] = useState([]);
    const { user } = useAuth();
  
    const email = user?.email
  
    useEffect(() => {
      fetch(`https://sleepy-peak-11374.herokuapp.com/api/getServicId/${email}`)
        .then((res) => res.json())
        .then((data) => setFile(data.appointmenId));
        
    }, [email, file]);

    console.log(file?.title);


    console.log(file)
  
    const handleDelete = (id)=>{
      console.log(id);
      fetch(`https://sleepy-peak-11374.herokuapp.com/api/deleteAppointment/${id}`,{
        method: "delete",
        headers: {
          "content-type":"application/json",
        }
      })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data);
        if(data.success){
          alert(" delete successfull")
        }
      }
 
      );
    }
  return (

    <div className="mt-5 pt-5">
    <section className="main-content">
      <div className="container">
        <h1 className="my-5"> Your Appointment </h1>
        <div className="row">
        {
          file?.map(data=>  <div key={data._id} className="col-sm-6 col-md-6 col-lg-4">
          <div className=" bg-white p-3 mb-4  shadow">
            <div className="d-flex justify-content-between ">
              <div className="user-info">
                <div className="user-info__img">
                  {/* <img src="img/user1.jpg" alt="User Img"> */}
                </div>
                <div className="user-info__basic">
                  <h5
                    className="mb-0 "
                    style={{ textTransform: "uppercase" }}
                  >
                    {user.displayName}
                  </h5>
                </div>
              </div>
              <div className="dropdown open">
                <h6
                  onClick={() => handleDelete(data._id)}
                  className="text-danger"
                >
                  Delete
                </h6>
              </div>
            </div>
            <h6 className="mb-0">{data?.number}</h6>
            <h2>{data?.title}</h2>

            <div className="d-flex justify-content-between mt-4">
              <div>
                <h5 className="mb-0">
                  {data?.time}
                  <small className="ml-1">{data?.date}</small>
                </h5>
              </div>
              <div>
                

                    <button
                      style={{
                        margin: "0 auto",
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px",
                      }}
                    >
                      Pay Now
                    </button>
              </div>
            </div>
          </div>
        </div>)
        }
        </div>
      </div>
    </section>
  </div>
  )
}

export default UserDashboard