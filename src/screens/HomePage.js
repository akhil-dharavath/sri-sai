import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../assets/styles/Home.css";

const clients = [
  {
    logo: require("../assets/clients/VRKP.webp"),
    name: "VRKP SPONGE & POWER PLANT LLP",
    projects: ["2 X 350 TPD Sponge iron Civil work", "25 MW Power Plant"],
    year: "2023 – Present",
    workOrderValue: "12.5 Cr",
  },
  {
    logo: require("../assets/clients/smiore.png"),
    name: "SMIORE MANGANESE & ORES LTD",
    projects: [
      "380 m³ Blast Furnace civil work",
      "Railway Under Bridge civil work",
    ],
    year: "2023 – 2024",
    workOrderValue: "25.7 Cr",
  },
  {
    logo: require("../assets/clients/jai_raj.jpeg"),
    name: "JAI RAJ ISPAT LIMITED",
    projects: [
      "0.4 M T Rolling Mill civil work",
      "75 sqm Sinter plant civil work",
    ],
    year: "2019 – Present",
    workOrderValue: "75 Cr",
  },
  {
    logo: require("../assets/clients/sks.png"),
    name: "SKS STEELS TRIVISTA STEEL AND POWER PLANT PVT LTD",
    projects: [
      "2 x 100 TPD Sponge iron Unit",
      "1 x 150 TPD Sponge iron Unit",
      "Rolling mill & Furnace work",
    ],
    year: "2016 – 2018",
    workOrderValue: "17.5 Cr",
  },
  {
    logo: require("../assets/clients/mukand.png"),
    name: "MUKAND SUMI SPECIAL STEEL LTD",
    projects: [
      "0.6 M T rolling mill Accessories",
      "Water complex, Raw Water reservoir, 200 KVA Substation",
    ],
    year: "2013 – Present",
    workOrderValue: "12.5 Cr",
    consultancy: "Korus Delhi",
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "Home - Sri Sai Engineering & Technical Services";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="video">
        <video
          muted
          autoPlay
          loop
          poster={require("../assets/images/homePic.png")}
        >
          {/* <video muted poster={require("../assets/images/homePic.png")}> */}
          <source
            src={require("../assets/company_images/home.mp4")}
            type="video/mp4"
          />
          <img
            src={require("../assets/images/homePic.png")}
            alt="when video not supported"
          />
        </video>

        {/* Animation text */}
        <div className="text_animation">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className={`left-text`}
          >
            Sri Sai Engineering
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className={`right-text`}
          >
            & Technical Services
          </div>
        </div>
      </div>

      {/* Our Commitments */}
      <h2 className="text-center pt-5">Our Commitment</h2>
      <div className="commitment">
        <img src={require("../assets/images/commit.jpg")} alt="commitment" />
        <div>
          <div>
            <p>
              <b>Mission: </b>
              Sri Sai Engineering & Technical Service will provide efficient and
              innovative services in its area of expertise and be a safe and
              considerate employer.
            </p>
          </div>
          <div>
            <p>
              <b>Vision: </b>
              To contribute towards the growth by increasingly, and achieving
              customer satisfaction not only for outstanding workmanship, but
              also quality design, concepts functionality and style.
            </p>
          </div>
        </div>
      </div>

      {/* Specialists In */}
      <h2 className="text-center pt-3">Specialists In</h2>
      <div className="commitment specialists">
        <div>
          <div>
            <p>
              <SwipeRightAltIcon /> Sponge iron of 50 TPD, 100 TPD & 350 TPD
            </p>
            <p>
              <SwipeRightAltIcon /> Power plants of 12 MW, 25 MW, 30 MW, 40 MW &
              500 MW
            </p>
            <p>
              <SwipeRightAltIcon /> Steel plants:
            </p>
            <div>
              <p>
                <ArrowRightIcon /> Rolling Mill - 0.5 Million ton & 1 Million
                ton elevated mills
              </p>
              <p>
                <ArrowRightIcon /> Furnaces - 15 MT, 20 MT, 30 MT induction
                furnaces
              </p>
              <p>
                <ArrowRightIcon /> Blast Furnaces - 380 m<sup>3</sup>, 680 m
                <sup>3</sup> & 980 m<sup>3</sup>
              </p>
              <p>
                <ArrowRightIcon /> Sinter Plant - 75M sqm
              </p>
              <p>
                <ArrowRightIcon /> Oxygen Plant - 350 m<sup>3</sup> & 680 m
                <sup>3</sup>
              </p>
            </div>
            <p>
              <SwipeRightAltIcon /> Fertilizers Units
            </p>
            <p>
              <SwipeRightAltIcon /> STP plants
            </p>
          </div>
        </div>
        <img
          src={require("../assets/images/specialist.jpg")}
          alt="commitment"
        />
      </div>

      {/* Latest Projects */}
      <h2 className="text-center pt-3">Latest projects</h2>
      <div className="latest_projects">
        {clients.map((client, index) => (
          <div key={index} className="client-info-card">
            <img src={client.logo} alt={client.name} />
            <h5>{client.name}</h5>
            {client.projects.map((project, index) => (
              <p key={index}>❖ {project}</p>
            ))}
            <p>
              <b>Year:</b> {client.year}
            </p>
            <p>
              <b>Work Order Value:</b> {client.workOrderValue}
            </p>
            {client.consultancy && (
              <p>
                <b>Consultancy:</b> {client.consultancy}
              </p>
            )}
          </div>
        ))}
      </div>

      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
