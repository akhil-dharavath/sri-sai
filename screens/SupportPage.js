import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import "../assets/styles/Support.css";

const ReusableParagraph = ({ title, description }) => (
  <p>
    <b>
      {title}
      <SwipeRightAltIcon />
    </b>{" "}
    {description}
  </p>
);

const ReusableListItem = ({ description }) => (
  <p>
    <SwipeRightAltIcon /> {description}
  </p>
);

const SupportPage = () => {
  useEffect(() => {
    document.title = "Support - Sri Sai Engineering & Technical Services";
    window.scrollTo(0, 0);
  }, []);

  const technicalServices = [
    {
      title: "Initial Inspections",
      description:
        "Thorough assessments to understand the scope and requirements of your project.",
    },
    {
      title: "Project Specification Development",
      description:
        "Crafting detailed project specifications to ensure clarity and precision in execution.",
    },
    {
      title: "Cost Estimate Preparation",
      description:
        "Accurate cost estimations tailored to your project needs and budget constraints.",
    },
    {
      title: "Construction Supervision",
      description:
        "Overseeing construction activities, particularly those not mandating an architect or engineer, to maintain quality and compliance.",
    },
    {
      title: "Lead Hazard Reduction",
      description:
        "Determining lead hazard reduction needs and providing oversight for lead abatement activities.",
    },
    {
      title: "Temporary Relocation Coordination",
      description:
        "Facilitating temporary relocations when necessary during construction or renovation.",
    },
    {
      title: "Financing Cost Assistance",
      description:
        "Providing assistance with financing costs, including preparation of security agreements and handling recording or filing fees.",
    },
    {
      title: "Application Processing",
      description:
        "Streamlining the processing of individual applications for assistance.",
    },
    {
      title: "Income Eligibility Determination",
      description:
        "Ensuring compliance with income eligibility requirements and verifying applicant information.",
    },
    {
      title: "Value Determination",
      description:
        "Conducting value assessments for new construction or determining post-rehabilitation values for existing structures.",
    },
    {
      title: "Environmental Clearance Processes",
      description:
        "Managing project-specific environmental clearance procedures to meet regulatory standards.",
    },
  ];

  const nonTechnicalServices = [
    "advising the Management Committee on Service Recipients’ operations.",
    "interfacing with stakeholders and government officials.",
    "Acting as the main point of communication between the board of directors and senior management of Service Recipients.",
    "providing oversight of the engagement and delivery of third-party legal services for the benefit of Service Recipients.",
  ];

  return (
    <div className="support">
      <h2>Technical</h2>
      <div className="technical">
        <div>
          <p>
            At Sri Sai Engineering & Technical Services, we offer a
            comprehensive range of services to facilitate your construction and
            renovation projects seamlessly. Whether you're a homeowner, property
            manager, or developer, we provide the expertise and support you need
            from start to finish. Our services include:
          </p>
          {technicalServices.map((service, index) => (
            <ReusableParagraph
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
          <p>
            At Sri Sai Engineering & Technical Services, we are committed to
            delivering excellence in every aspect of your project. Contact us
            today to learn more about how we can support your construction and
            renovation endeavors.
          </p>
        </div>
      </div>

      <h2 className="pt-3">Non Technical</h2>
      <div className="non-technical">
        <div>
          {nonTechnicalServices.map((service, index) => (
            <ReusableListItem key={index} description={service} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
