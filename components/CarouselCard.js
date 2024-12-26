import React from "react";

const CarouselCard = ({src,active,alt}) => {
  return (
    <div className={`carousel-item ${active}`}>
      <img
        src={src}
        className="d-block w-100 carouselImage"
        alt={alt}
      />
    </div>
  );
};

export default CarouselCard;
