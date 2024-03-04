import React, { useEffect } from "react";
import Footer from "../components/Footer";
import SwipeRightAltIcon from "@mui/icons-material/SwipeRightAlt";
import "../assets/styles/Support.css";

const SupportPage = () => {
  useEffect(() => {
    document.title = "Support - Sri Sai Engineering & Technical Services";
    window.scrollTo(0,0);
  }, []);

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
          <p>
            <b>
              Initial Inspections
              <SwipeRightAltIcon />
            </b>{" "}
            Thorough assessments to understand the scope and requirements of
            your project.
          </p>
          <p>
            <b>
              Project Specification Development
              <SwipeRightAltIcon />
            </b>{" "}
            Crafting detailed project specifications to ensure clarity and
            precision in execution.
          </p>
          <p>
            <b>
              Cost Estimate Preparation
              <SwipeRightAltIcon />{" "}
            </b>
            Accurate cost estimations tailored to your project needs and budget
            constraints.
          </p>
          <p>
            <b>
              Construction Supervision
              <SwipeRightAltIcon />{" "}
            </b>
            Overseeing construction activities, particularly those not mandating
            an architect or engineer, to maintain quality and compliance.
          </p>
          <p>
            <b>
              Lead Hazard Reduction
              <SwipeRightAltIcon />{" "}
            </b>
            Determining lead hazard reduction needs and providing oversight for
            lead abatement activities.
          </p>
          <p>
            <b>
              Temporary Relocation Coordination
              <SwipeRightAltIcon />{" "}
            </b>
            Facilitating temporary relocations when necessary during
            construction or renovation.
          </p>
          <p>
            <b>
              Financing Cost Assistance
              <SwipeRightAltIcon />{" "}
            </b>
            Providing assistance with financing costs, including preparation of
            security agreements and handling recording or filing fees.
          </p>
          <p>
            <b>
              Application Processing
              <SwipeRightAltIcon />{" "}
            </b>
            Streamlining the processing of individual applications for
            assistance.
          </p>
          <p>
            <b>
              Income Eligibility Determination
              <SwipeRightAltIcon />{" "}
            </b>
            Ensuring compliance with income eligibility requirements and
            verifying applicant information.
          </p>
          <p>
            <b>
              Value Determination
              <SwipeRightAltIcon />{" "}
            </b>
            Conducting value assessments for new construction or determining
            post-rehabilitation values for existing structures.
          </p>
          <p>
            <b>
              Environmental Clearance Processes
              <SwipeRightAltIcon />{" "}
            </b>
            Managing project-specific environmental clearance procedures to meet
            regulatory standards.
          </p>
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
          <p>
            <SwipeRightAltIcon />{" "}
            advising the Management Committee on Service Recipients’operations.
          </p>
          <p>
            <SwipeRightAltIcon />{" "}
            interfacing with stakeholders and government officials.
          </p>
          <p>
            <SwipeRightAltIcon />{" "}
            Acting as the main point of communication between the board
            ofdirectors and senior management of Service Recipients.
          </p>
          <p>
            <SwipeRightAltIcon />{" "}
            providing oversight of the engagement and delivery of third-party
            legalservices for the benefit of Service Recipients
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SupportPage;
