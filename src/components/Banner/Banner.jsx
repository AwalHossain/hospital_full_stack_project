import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    // Banner goes here
    <div className="">
      <div
        id="carouselExampleCaptions"
        class="carousel slide position-relative "
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner h-50">
          <div class="carousel-item active position-relative">
            <img
              className="slide-img"
              src="
          https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/medical.jpg"
              class="d-block w-100 "
              alt="..."
            />
            <div class="carousel-caption d-block d-md-block">
              <h1 className="">

                <span className="display-5 text fw-bold text-start h1"> Helping You</span>
                <br />
                <span style={{color:"#555756 "}} className=" display-5 text fw-bold "> Stay Happy One</span>
              </h1>
              <div>
                <a className="mt-2" href="#">CHECK OUT</a>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              className="slide-img"
              src="https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/gallery9.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption-2 d-block d-md-block">
              <h1 className="">

                <span className="display-5 text fw-bold text-start h1"> Helping You</span>
                <br />
                <span style={{color:"#555756 "}} className=" display-5 text fw-bold "> Stay Happy One</span>
              </h1>
              <div>
                <a className="mt-2" href="#">CHECK OUT</a>
              </div>
            </div>
          </div>

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
