import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import "../assets/styles/Principles.css";

const PrinciplesPage = () => {
  useEffect(() => {
    document.title = "Principles - Sri Sai Engineering & Technical Services";
    window.scrollTo(0, 0);
  }, []);

  const principles = [
    {
      title: "Time & Quality",
      description:
        "At Sri Sai Engineering & Technical Services, we understand the importance of deadlines and the significance of quality. We commit to delivering all projects within the agreed time frames without compromising on the meticulous attention to detail that ensures top-notch quality. Each task is undertaken with utmost care and dedication to guarantee excellence in every aspect.",
    },
    {
      title: "Growth",
      description:
        "In a rapidly evolving technological landscape, we embrace growth as an essential element of our ethos. We continuously seek opportunities for improvement, leveraging the latest advancements in technology to enhance our processes and services. By staying at the forefront of innovation, we ensure that our solutions are always cutting-edge and future-ready.",
    },
    {
      title: "Customer",
      description:
        "Our clients are not just business partners; they are our most valuable assets. Customer satisfaction is not merely a goal but our unwavering commitment. We prioritize understanding and meeting our clients' needs, striving to exceed their expectations at every turn. Building lasting relationships based on trust, transparency, and reliability is at the heart of everything we do.",
    },
    {
      title: "Team",
      description:
        "At Sri Sai Engineering & Technical Services, we recognize that our success is a collective effort driven by the passion, intelligence, and innovation of our team members. We foster an environment that nurtures talent, encourages creativity, and promotes collaboration. Our aim is not only to be a world-class team but also to cultivate one, where every individual is empowered to thrive and contribute their best.",
    },
  ];

  return (
    <>
      <div className="principles ">
        <p className="position-relative z-2">
          Welcome to Sri Sai Engineering & Technical Services, where excellence
          is not just a goal but a way of life. Our core values drive everything
          we do, from project delivery to team development. Here's a glimpse
          into what sets us apart:
        </p>
        {principles.map((principle) => (
          <div>
            <p className="">
              <span>
                {principle.title}
                <SwipeRightAltIcon />
              </span>{" "}
              {principle.description}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default PrinciplesPage;
