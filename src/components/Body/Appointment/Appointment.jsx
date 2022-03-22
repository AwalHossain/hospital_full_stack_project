import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Appointment.css';
const Appointment = () => {
  const [number, setNumber] = useState("");
  const [timee, setTime] = useState("");
  // const [cost, setCost] = useState("");
  const [date, setDate] = useState("");
  const [file, setFile] =useState([]);
  const [confirm, setconfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const {id} = useParams();

  const {user} = useAuth();

  // useEffect for loading service
  useEffect(()=>{
    fetch(`http://localhost:5000/api/service/${id}`)
    .then(res => res.json())
    .then(data => setFile(data.service))
},[id])

  const email = user.email;
  const displayName = user.displayName;
  const cost = file.cost>100 ? file?.cost - file?.cost * 0.25 : file.cost;
  const serviceId = file._id;
  const title = file.title;
  const time = file.time;

  const handleSubmit = (e) => {


    e.preventDefault();
    setLoading(true);


    const address = {
      email,
      displayName,
      date,
      confirm,
      number,
      title,
      time
      // service,
    };
    const appointment = {
      // userId,
      ...address,
      cost:cost.toString(),
      serviceId
    };

    fetch("http://localhost:5000/api/createAppointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          alert("Appointment added");
          console.log( data);
          setLoading(false);
        }
      })



  };
    return (
      <div>
      <h1 className="text-center my-5">Make an Appointment for {file.title}</h1>
      <div className="container my-5">
        <form
          onSubmit={handleSubmit}
          id="ft-form"
          method="POST"
          accept-charset="UTF-8"
        >
          <fieldset>
            <legend>For person</legend>
            <label>
              Name
              <input value={displayName} type="text" name="name" required />
            </label>
            <div class="two-cols">
              <label>
                Email address
                <input value={email} type="email" name="email" required />
              </label>
              <label>
                Phone number
                <input
                  required
                  onBlur={(e) => setNumber(e.target.value)}
                  type="tel"
                  name="phone"
                />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Appointment request</legend>

            <div class="two-cols">
              <label>
                Date
                <input
                  onBlur={(e) => setDate(e.target.value)}
                  type="date"
                  name="Appointment request"
                  required
                />
              </label>

              <div class="inline">
                {/* <label>
                  <input
                    onBlur={(e) => setTime(e.target.value)}
                    type="hidden"
                    name="Morning desired"
                    value="no"
                  />
                  <input
                    onBlur={(e) => setTime(e.target.value)}
                    type="checkbox"
                    name="Morning desired"
                    value="Monrning"
                  />
                  Morning
                </label> */}
                {/* <label>
                  <input
                    onBlur={(e) => setTime(e.target.value)}
                    type="hidden"
                    name="Afternoon desired"
                    value="no"
                  />
                  <input
                    onBlur={(e) => setTime(e.target.value)}
                    type="checkbox"
                    name="Afternoon desired"
                    value="afternoon"
                  />
                  Afternoon
                </label> */}
              </div>
            </div>
            <p>Confirmation requested by</p>
            <div class="inline">
              <label>
                <input
                  onChange={(e) => setconfirm(e.target.value)}
                  type="radio"
                  name="Confirmation requested by"
                  value="email"
                  required
                />
                Email
              </label>
              <label>
                <input
                  type="radio"
                  onChange={(e) => setconfirm(e.target.value)}
                  name="Confirmation requested by"
                  value="phone"
                  required
                />
                Phone call
              </label>
              <br />
             <label>
              Cost
            </label>

            {file.cost>100 ? 
            <input value={file?.cost - file?.cost * 0.25}  type="text" name="cost" class="form-control" required />
            :<input value={file?.cost }  type="text" name="cost" class="form-control" required />
}
{file.cost > 100 ? <p>Your got discounted price </p> : <p>Sorry, You are not eligble for discount</p>} 
            </div>
          </fieldset>

            <div class="btns">
              <input type="submit" value="Submit request" />
            </div>
         

        </form>
        {/* {loading ? (
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          " "
        )} */}
      </div>
    </div>
    );
};

export default Appointment;