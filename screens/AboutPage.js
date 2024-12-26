import React, { useEffect } from "react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import '../assets/styles/About.css';

const ListItem = ({ text }) => (
  <p>
    <SwipeRightAltIcon /> {text}
  </p>
);

const managementTeam = [
  {
    src: require("../assets/images/unknown.jpeg"),
    name: "T.R.S.Narayana",
    position: "Managing Director",
    content: "As a founding member of S.S.E.T.Service, Narayana plays the role of the principal contractor. With over 20 years of experience in handling civil projects. Through his recognition of market opportunities and desire to build a reputable and suitable contracting business. Narayana has been able to develop the company into a major player in the local contracting industry."
  },
  {
    src: require("../assets/images/unknown.jpeg"),
    name: "Prasenjit Singh Deo",
    position: "Director",
    content: "Having fifteen years experience in the position of contracting division manager. He has experience in managing numerous sizeable and complex civil engineering. In 2006 he accepted the position of construction manager at S.S.E.T.Services. He estimates and tenders contract work. Prasenjit has the responsibility for ensuring the overall success of our contract works."
  },
  {
    src: require("../assets/images/unknown.jpeg"),
    name: "T Sri Lakshmi",
    position: "Business Manager",
    content: "Sri Lakshmi has been with S.S.E.T.Service since 2006. Her role includes the development and management of company finance, administration system and quality systems. Sri Lakshmi holds a degree in B.Com and she has the responsibility for ensuring the overall success of our company."
  }
];

const AboutPage = () => {
  useEffect(() => {
    document.title = 'About - Sri Sai Engineering & Technical Services';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="about-us">
        <section className="who_we_are">
          <h2>Who We Are?</h2>
          <p>Specialists in Sponge Iron, Power Plants, Steel Plants and Chemical Industries Constructions.</p>
        </section>

        <section className="background">
          <h2>Company Background</h2>
          {[
            "Sri Sai Engineering & Technical Services is a multi disciplined civil works contractor. Our company has the knowledge, experience and resources to undertake projects of any size.",
            "S.S.E.T.Services employs and maintains a stable and experienced work force with the necessary qualifications to meet the strict quality requirements of our local Councils.",
            "S.S.E.T.Services has successfully completed projects over a period of 16 years around the India including Tamilnadu, Chhattisgarh, Gujarat, Andhra Pradesh and Karnataka.",
            "We pride ourselves on providing buy in to our projects and will offer alternative and innovative solutions that can result in savings in both time and cost for our clients."
          ].map((text, index) => (
            <ListItem key={index} text={text} />
          ))}
        </section>

        <section className="what_we_offer">
          <h2>What we Offer</h2>
          {["Iron and Steel Industries", "Sponge Iron Unit", "Rolling Mill", "SMS", "Furnace", "Power Plants", "Cement industries", "Fertilization Plants", "Residential and Commercial Buildings", "Earth Works and CC Roads"].map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </section>

        <section className="management">
          <h2>Management</h2>
          <div className="people">
            {managementTeam.map(({ src, name, position, content }, index) => (
              <AboutCard
                key={index}
                src={src}
                name={name}
                position={position}
                content={content}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
