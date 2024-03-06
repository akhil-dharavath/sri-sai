import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <h2>Looking for something?</h2>
      <p>
        Unfortunately the page you are looking for has been moved or deleted
      </p>
      <Button variant="contained" component={Link} to="/">
        Go back to HomePage
      </Button>
    </div>
  );
};

export default PageNotFound;
