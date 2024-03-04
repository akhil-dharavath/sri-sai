import React, { useEffect } from "react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import '../assets/styles/About.css'

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Sri Sai Engineering & Technical Services';
    window.scrollTo(0,0);
  }, []);

  return (
    <>
    <div className="about-us">
      <div className="who_we_are">
        <h2>Who We Are?</h2>
        <p>
          Specialists in Sponge Iron, Power Plants, Steel Plants and Chemical
          Industries Constructions.
        </p>
      </div>
      <div className="background">
        <h2>Company Background</h2>
        <p>
          <SwipeRightAltIcon />{" "}Sri Sai Engineering & Technical Services is a multi disciplined
          civil works contractor. Our company has the knowledge, experience and
          resources to undertake projects of any size.
        </p>
        <p>
          <SwipeRightAltIcon />{" "}S.S.E.T.Services employs and maintains a stable and experienced work
          force with the necessary qualifications to meet the strict quality
          requirements of our local Councils.
        </p>
        <p>
          <SwipeRightAltIcon />{" "}S.S.E.T.Services has successfully completed projects over a period
          of 16 years around the India including Tamilnadu, Chhattisgarh,
          Gujarat, Andhra Pradesh and Karnataka.
        </p>
        <p>
          <SwipeRightAltIcon />{" "}We pride ourselves on providing buy in to our projects and will
          offer alternative and innovative solutions that can result in savings
          in both time and cost for our clients.
        </p>
      </div>
      <div className="what_we_offer">
        <h2>What we Offer</h2>
        <p><SwipeRightAltIcon />{" "}Iron and Steel Industries.</p>
        <p><SwipeRightAltIcon />{" "}Sponge Iron Unit.</p>
        <p><SwipeRightAltIcon />{" "}Rolling Mill.</p>
        <p><SwipeRightAltIcon />{" "}SMS.</p>
        <p><SwipeRightAltIcon />{" "}Furnace.</p>
        <p><SwipeRightAltIcon />{" "}Power Plants.</p>
        <p><SwipeRightAltIcon />{" "}Cement industries.</p>
        <p><SwipeRightAltIcon />{" "}Fertilization Plants.</p>
        <p><SwipeRightAltIcon />{" "}Residential and Commercial Buildings.</p>
        <p><SwipeRightAltIcon />{" "}Earth Works and CC Roads.</p>
      </div>
      <div className="management">
        <h2>Management</h2>
        <div className="people">
          <AboutCard
            src={require("../assets/images/unknown.jpeg")}
            name="T.R.S.Narayana"
            position="Managing Director"
            content="As a founding member of S.S.E.T.Service, Narayana plays the role of
          the principal contractor. With over 20 years of experience in handling
          civil projects. Through his recognition of market opportunities and
          desire to build a reputable and suitable contracting business.
          Narayana has been able to develop the company into a major player in
          the local contracting industry."
          />
          <AboutCard
            src={require("../assets/images/unknown.jpeg")}
            name="Prasenjit Singh Deo"
            position="Director"
            content="Having fifteen years experience in the position of contracting
          division manager. He has experience in managing numerous sizeable and
          complex civil engineering. In 2006 he accepted the position of
          construction manager at S.S.E.T.Services. He estimates and tenders
          contract work. Prasenjit has the responsibility for ensuring the
          overall success of our contract works."
          />
          <AboutCard
            src={require("../assets/images/unknown.jpeg")}
            name="T Sri Lakshmi"
            position="Business Manager"
            content="Sri Lakshmi has been with S.S.E.T.Service since 2006. Her role
          includes the development and management of company finance,
          administration system and quality systems. Sri Lakshmi holds a degree
          in B.Com and she has the responsibility for ensuring the overall
          success of our company."
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
