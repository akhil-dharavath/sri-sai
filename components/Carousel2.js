import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CarouselCard from "./CarouselCard";

const Carousel2 = () => {
  return (
    <div id="carouselExample1" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={require("../assets/company_images2/2.jpeg")}
            className="d-block w-100 carouselImage"
            alt="one"
          />
        </div>
        {/* <CarouselCard
          src={require("../assets/company_images2/1.jpeg")}
          alt="two"
        /> */}
        <CarouselCard
          src={require("../assets/company_images2/17.jpeg")}
          alt="seventeen"
        />
        {/* <CarouselCard
          src={require("../assets/company_images2/3.jpeg")}
          alt="three"
        /> */}
        <CarouselCard
          src={require("../assets/company_images2/4.jpeg")}
          alt="four"
        />
        <CarouselCard
          src={require("../assets/company_images2/5.jpeg")}
          alt="five"
        />
        <CarouselCard
          src={require("../assets/company_images2/6.jpeg")}
          alt="six"
        />
        <CarouselCard
          src={require("../assets/company_images2/7.jpeg")}
          alt="seven"
        />
        <CarouselCard
          src={require("../assets/company_images2/8.jpeg")}
          alt="eight"
        />
        <CarouselCard
          src={require("../assets/company_images2/9.jpeg")}
          alt="nine"
        />
        <CarouselCard
          src={require("../assets/company_images2/10.jpeg")}
          alt="ten"
        />
        <CarouselCard
          src={require("../assets/company_images2/11.jpeg")}
          alt="eleven"
        />
        <CarouselCard
          src={require("../assets/company_images2/12.jpeg")}
          alt="twelve"
        />
        <CarouselCard
          src={require("../assets/company_images2/13.jpeg")}
          alt="thirteen"
        />
        <CarouselCard
          src={require("../assets/company_images2/14.jpeg")}
          alt="fourteen"
        />
        <CarouselCard
          src={require("../assets/company_images2/15.jpeg")}
          alt="fifteen"
        />
        <CarouselCard
          src={require("../assets/company_images2/16.jpeg")}
          alt="sixteen"
        />
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample1"
        data-bs-slide="prev"
      >
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
        <NavigateBeforeIcon sx={{ fontSize: 150, color: "aqua" }} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample1"
        data-bs-slide="next"
      >
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
        <NavigateNextIcon sx={{ fontSize: 150, color: "aqua" }} />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel2;
