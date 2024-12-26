import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../assets/company_images/1.jpeg")}
            className="d-block w-100 carouselImage"
            alt="two"
          />
        </div>
        <CarouselCard
          src={require("../assets/company_images/2.jpg")}
          alt="two"
        />
        <CarouselCard
          src={require("../assets/company_images/17.jpeg")}
          alt="seventeen"
        />
        <CarouselCard
          src={require("../assets/company_images/3.jpg")}
          alt="three"
        />
        <CarouselCard
          src={require("../assets/company_images/4.jpg")}
          alt="four"
        />
        <CarouselCard
          src={require("../assets/company_images/5.jpg")}
          alt="five"
        />
        <CarouselCard
          src={require("../assets/company_images/6.jpg")}
          alt="six"
        />
        <CarouselCard
          src={require("../assets/company_images/7.jpg")}
          alt="seven"
        />
        <CarouselCard
          src={require("../assets/company_images/8.jpg")}
          alt="eight"
        />
        <CarouselCard
          src={require("../assets/company_images/9.jpg")}
          alt="nine"
        />
        <CarouselCard
          src={require("../assets/company_images/10.jpg")}
          alt="ten"
        />
        <CarouselCard
          src={require("../assets/company_images/11.jpg")}
          alt="eleven"
        />
        <CarouselCard
          src={require("../assets/company_images/12.jpg")}
          alt="twelve"
        />
        <CarouselCard
          src={require("../assets/company_images/13.jpg")}
          alt="thirteen"
        />
        <CarouselCard
          src={require("../assets/company_images/14.jpeg")}
          alt="fourteen"
        />
        <CarouselCard
          src={require("../assets/company_images/15.jpeg")}
          alt="fifteen"
        />
        <CarouselCard
          src={require("../assets/company_images/16.jpg")}
          alt="sixteen"
        />
        <CarouselCard
          src={require("../assets/company_images/18.jpeg")}
          alt="eighteen"
        />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <NavigateBeforeIcon sx={{ fontSize: 150, color: "aqua" }} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <NavigateNextIcon sx={{ fontSize: 150, color: "aqua" }} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
