import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "../assets/styles/Home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Home - Sri Sai Engineering & Technical Services";
  }, []);

  return (
    <div className="home">
      <div className="video">
        {/* <video muted autoPlay loop poster={require('../assets/images/homePic.png')}> */}
        <video muted poster={require("../assets/images/homePic.png")}>
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
        <div>
          <img src={require("../assets/clients/VRKP.webp")} alt="vrkp" />
          <h5>VRKP SPONGE & POWER PLANT LLP</h5>
          <p>❖ 2 X 350 TPD Sponge iron Civil work</p>
          <p>❖ 25 MW Power Plant</p>
          <p>
            <b>Year:</b> 2023 – Present
          </p>
          <p>
            <b>Work Order Value:</b> 12.5 Cr
          </p>
        </div>
        <div>
          <img src={require("../assets/clients/smiore.png")} alt="smiore" />
          <h5>SMIORE MANGANESE & ORES LTD</h5>
          <p>
            ❖ 380 m<sup>3</sup> Blast Furnace civil work
          </p>
          <p>❖ Railway Under Bridge civil work</p>
          <p>
            <b>Year:</b> 2023 – 2024
          </p>
          <p>
            <b>Work Order Value:</b> 25.7 Cr
          </p>
        </div>
        <div>
          <img src={require("../assets/clients/jai_raj.jpeg")} alt="jai_raj" />
          <h5>JAI RAJ ISPAT LIMITED</h5>
          <p>❖ 0.4 M T Rolling Mill civil work</p>
          <p>❖ 75 sqm Sinter plant civil work</p>
          <p>
            <b>Year:</b> 2019 – Present
          </p>
          <p>
            <b>Work Order Value:</b> 75 Cr
          </p>
        </div>
        <div>
          <img src={require("../assets/clients/sks.png")} alt="sks" />
          <h5>SKS STEELS TRIVISTA STEEL AND POWER PLANT PVT LTD </h5>
          <p>❖ 2 x 100 TPD Sponge iron Unit</p>
          <p>❖ 1 x 150 TPD Sponge iron Unit</p>
          <p>❖ Rolling mill & Furnace work</p>
          <p>
            <b>Year:</b> 2016 – 2018
          </p>
          <p>
            <b>Work Order Value:</b> 17.5 C
          </p>
        </div>
        <div>
          <img src={require("../assets/clients/mukand.png")} alt="mukand" />
          <h5>MUKAND SUMI SPECIAL STEEL LTD</h5>
          <p>❖ 0.6 M T rolling mill Accessories</p>
          <p>❖ Water complex, Raw Water reservoir, 200 KVA Substation.</p>
          <p>
            <b>Year:</b> 2013 – Present
          </p>
          <p>
            <b>Work Order Value:</b> 12.5 Cr
          </p>
          <p>
            <b>Consultancy:</b> Korus Delhi
          </p>
        </div>
        {/* <div>
          <img
            src={require("../assets/company_logos/jai_raj.jpeg")}
            alt="jai_raj"
          />
          <h5>JAI RAJ ISPAT LIMITED</h5>
          <p>0.4 M T Rolling Mill civil work</p>
          <p>75 sqm Sinter plant civil work</p>
          <p>Year: 2019 – Present</p>
          <p>Work Order Value: 75 Cr</p>
        </div> */}
      </div>

      <Carousel />
      <Footer />
    </div>
  );
};

export default Home;
