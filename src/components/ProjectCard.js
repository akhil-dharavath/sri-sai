import React from "react";
import "../assets/styles/Projects.css";

const ProjectCard = ({ direction, name, img, titles, values, desc,logo }) => {
  return (
    <div className={direction}>
      {/* <img src={img} alt={name} /> */}
      {img ? (
        <img className="logo" src={img} alt={name} />
      ) : (
        <div className="logo no_logo"/>
      )}
      <div className="desc">
        {/* <p className="heading">{name}</p> */}
        <h5>{name}</h5>
        {desc &&
          desc.length > 0 &&
          desc.map((description, index) => <p key={index}>❖ {description}</p>)}
        {titles &&
          titles.length > 0 &&
          titles.map((title, index) => (
            <p key={index}>
              <span style={{ fontWeight: "bold" }}>{title}:</span>{" "}
              {values[index]}
            </p>
          ))}
      </div>
    </div>
  );
};

export default ProjectCard;
