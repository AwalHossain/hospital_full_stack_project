import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [info, setInfo] = useState("");
    const [isLoading, setLoading] = useState(false);
    const {user } = useAuth()
    const name = user.displayName;
    const email = user.email;
    //Css
    const formStyle =
      "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2";
  
    //Sending data to the database
    const onSubmit = (data) => {
      setLoading(true);
      console.log(data);
      setInfo(data);
      const total = {...data, name, email }
      // trackPromise(
        fetch("https://sleepy-peak-11374.herokuapp.com/api/review", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(total),
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
    <div className='container'>
        <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-sm text-center px-4 my-3 text-xl">Add Your Review</h3>

      <div>
      <label for="first">title</label>
        <input
          type="text" class="form-control "
          placeholder="Title"
          {...register("title", { required: true })}
        />
      </div>

        <div>
        <label for="first">Reviw Description</label>
        <input
        type="text" class="form-control"
          placeholder="Review "
          {...register("desc", {
            required: true,
          })}
        />
        </div>
          <div>
          <label for="first">Rating</label>
          <input
          type="number" class="form-control"
          placeholder="Your Rating"
          {...register("rating", { required: true })}
        />
          </div>
        {/* Spinner for Loading */}
        {isLoading && <div className="spinner mt-10"></div>}
        <input
 type="submit" class="btn btn-primary my-2"
        />
      </form>
    </div>
  )
}

export default Review