import { Rating } from "@material-ui/lab";
import React, { Fragment, useEffect, useState } from 'react';
import useAuth from "../../Hooks/useAuth";
import './Review.css';
const ShowReview = () => {
    const [review, setReview] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        // trackPromise(
          fetch("http://localhost:5000/api/getReview/")
            .then((res) => res.json())
            .then((result) => setReview(result.review))
        // );
      }, []);
  return (
    <Fragment>
    <h1 className="text-4xl text-center my-28">Customer Review</h1>
    <div className="reviews">
      {review &&
        review.map((rv) => (
                     <div className="reviewCard">
            {/* <img src={profilePng} alt="User" /> */}
            <p>{rv.name}</p>
            <Rating value={rv.rating} />
            <span className="reviewCardComment">{rv.desc}</span>
          </div>
        ))}
    </div>
  </Fragment>
  )
}

export default ShowReview