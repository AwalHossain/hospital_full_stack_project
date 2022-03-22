import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar';
import "./Dashboard.css";

export const Dashboard = () => {
  const { register, handleSubmit, reset } = useForm();
  const [info, setInfo] = useState("");
  const [isLoading, setLoading] = useState(false);
  //Css
  const formStyle =
    "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  const inputStyle =
    "bg-white h-12 w-full px-5 pr-10 mt-5 rounded-full text-sm border-2 border-solid border-gray-300 focus:outline-none";

  //Sending data to the database
  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    setInfo(data);
    // trackPromise(
      fetch("http://localhost:5000/api/createService", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.success) {
            reset();
            alert("data added");
            setLoading(false);
          }
        })
    // );
  };


  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        {/* <Navbar/> */}
        <div style={{height:"100%"}}>
	        <div style={{height:"calc(100% - 64px)", overflowY:"scroll"}}>
	          <div className="d-flex card-section">
		        	<div className="cards-container">
                  <h2>From dashboard</h2>
                  <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-sm text-center px-4 my-3 text-xl">Add item</h3>

      <div>
      <label for="first">Surgery Name</label>
        <input
          type="text" class="form-control "
          placeholder="Title"
          {...register("title", { required: true })}
        />
      </div>

        <div>
        <label for="first">Surgery Description</label>
        <input
        type="text" class="form-control"
          placeholder="desc"
          {...register("desc", {
            required: true,
          })}
        />
        </div>
          <div>
          <label for="first">Space Available</label>
          <input
          type="text" class="form-control"
          placeholder="Available space"
          {...register("available", { required: true })}
        />
          </div>
          <div>
          <label for="first">Appointment Time</label>
          <input
         type="text" class="form-control"
          placeholder="Time"
          {...register("time", { required: true })}
        />
          </div>
          <div>
          <label for="first">Appointment Cost</label>
          <input
         type="text" class="form-control"
          placeholder="Cost"
          {...register("cost", { required: true })}
        />
          </div>
          <div>
          <label for="first">Image Link</label>
          <input
         type="text" class="form-control"
          placeholder="Link"
          {...register("img", { required: true })}
        />
          </div>
        {/* Spinner for Loading */}
        {isLoading && <div className="spinner mt-10"></div>}
        <input
 type="submit" class="btn btn-primary my-2"
        />
      </form>
	            </div>
	          </div>
	          <footer className="footer">

	          </footer>
	        </div>
        </div>
      </div>
    </div>
  );
}
