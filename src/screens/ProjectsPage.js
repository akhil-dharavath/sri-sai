import React, { useEffect } from "react";
import "../assets/styles/Projects.css";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  useEffect(() => {
    document.title = 'Projects - Sri Sai Engineering & Technical Services';
    window.scrollTo(0,0);
  }, []);

  return (
    <div className="Projects">
      <div className="projects" id="projects">
        {/* <h2>PROJECTS</h2> */}
        <ProjectCard
          direction="right"
          img={require("../assets/clients/MSPL_logo.svg.png")}
          name="MSPL Limited"
          titles={["Year", ]}
          values={["2023 – 2024", ]}
          desc={[" Baldota Group of Companies ,Hosapete", "1MT Pelletizing Plant"]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/VRKP.webp")}
          name="VRKP SPONGE & POWER PLANT LLP"
          titles={["Year", "Work Order Value"]}
          values={["2023 – Present", "12.5 Cr"]}
          desc={["2 X 350 TPD Sponge iron Civil work", "25 MW Power Plant"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/smiore.png")}
          name="SMIORE MANGANESE & ORES LTD"
          titles={["Year", "Work Order Value"]}
          values={["2023 – 2024", "25.7 Cr"]}
          desc={[
            "380 cum Blast Furnace civil work",
            "Railway Under Bridge civil work",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/jai_raj.jpeg")}
          name="JAI RAJ ISPAT LIMITED"
          titles={["Year", "Work Order Value"]}
          values={["2019 – Present", "75 Cr"]}
          desc={[
            "0.4 M T Rolling Mill civil work",
            "75 sqm Sinter plant civil work",
            "680 cum oxygen plant civil work",
            "Central store building",
            "Water Reservoir 25 Lacs CUM capacity",
            "7 km RCC compound wall",
            "Roads",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/sks.png")}
          name="SKS STEELS TRIVISTA STEEL AND POWER PLANT PVT LTD A1 GOLD"
          titles={["Year", "Work Order Value"]}
          values={["2016 – 2018", "17.5 C"]}
          desc={[
            "2 x 100 TPD Sponge iron Unit",
            "1 x 150 TPD Sponge iron Unit",
            "Rolling mill & Furnace work",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/mukand.png")}
          name="MUKAND SUMI SPECIAL STEEL LTD"
          titles={["Year", "Work Order Value", "Consultancy"]}
          values={["2013 – Present", "12.5 Cr", "Korus Delhi"]}
          desc={[
            "0.6 M T rolling mill Accessories",
            "Water complex,Thickner, Raw Water reservoir, ECR building, 200 KVA Substation.",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/kalyani.png")}
          name="KALYANI STEELS A1 STEELS RAMANJANEYA ISPAT SRIHARI SPONGE IRON VANYA STEELS ILC SPONGE & POWER LTD"
          titles={["Year", "Work Order Value"]}
          values={["2015 – 2018", "18.5 cr"]}
          desc={["Rolling Mill work, GI pipe-line mill, Sponge iron work."]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/slr.png")}
          name="SLR METALIKS LTD"
          titles={["Works", "Year", "Work Order Value"]}
          values={[
            "Re-Heating mill, Intermediate mill, Finishing mill 1, 2 & 3, Cooling bed, Scale pit, Water complex, ECR 2, Power plant AFBC, Ground hoppers, Coal shed & Main security building, Garret coiler",
            "2014 – 2017",
            "22.5 cr",
          ]}
          desc={["Rolling Mill (0.4 Million Tons)"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/minera.png")}
          name="MINERA STEEL & POWER PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2013", "3.5 cr"]}
          desc={["Gas Fire Unit"]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/salasar.png")}
          name="SALASAR IRON & STEEL PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2013", "2.3 cr"]}
          desc={["Rolling Mill"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/helicon.jpeg")}
          name="HELICON AGRO CHEMICALS PVT LTD (RAICHUR)"
          titles={["MD", "Year", "Work Order Value"]}
          values={["Mr. Moolimani", "2013", "6.5 Cr"]}
          desc={["Foundations Building", "Equipment shed"]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/apple.jpeg")}
          name="APPLE SPONGE IRON & POWER PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2012", "2.3 Cr"]}
          desc={[
            "D Hirehal, Obulapura, Ananthapur Dist, AP",
            "Rolling Mill 500 TPD",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/biop_maruti.jpeg")}
          name="BIOP MARUTI SHOW ROOM"
          titles={["Year", "Work Order Value"]}
          values={["2012", "2.5 Cr"]}
          desc={["Koppal Dist, Karnataka", "Buildings"]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/biop.png")}
          name="BIOP STEELS & POWER PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2012", "4.2 Cr"]}
          desc={[
            "Obulapuram Village, D Hirehal Mandal, Ananthapur Dist, AP",
            "2x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/minera.png")}
          name="MINERA STEEL & POWER PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2013", "1.75Cr"]}
          desc={[
            " (SMS/SID/CPP), Yerabanahally, Sandur (Tq), Bellary Dist – 583115",
            "SMS 15 MT",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/raghavendra.jpeg")}
          name="RAGHAVENDRA SWAMY TEMPLE"
          titles={["Year", "Work Order Value"]}
          values={["2011-2012", "3.5 Cr"]}
          desc={["Manthralayam, kurnool Dist, AP", "G+1 = 3.500 M2 Mukhadwara"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/kasturi.png")}
          name="KASTURI ISPAT PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2011-2012", "4 Cr"]}
          desc={[
            "Hire Bagnal Village, Koppal Dist, Karnataka",
            "Rolling Mill & SMS",
            "15MT x 2 Nos Induction Furnaces",
            "500 TPD Rolling mill",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/agarwal.webp")}
          name="AGARWAL SPONGE & ENERGY PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2011-2012", "6 Cr"]}
          desc={[
            "Survey No:-899A,899B & 900,Haraginadoni Road, Veni Veerapura Cross, Kudithini village,Bellry Dt",
            "12MW Power Plant",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/hrg.png")}
          name="HRG ALLOYS PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2010-2011", "12 Cr"]}
          desc={[
            "Hospet",
            "Consultancy:-Thermax Ltd,Sai Chamber,15 Mumbai, Pune Road, Wakdewadi,PUNE-411003,INDIA",
            "AM-SPP:- Mr. Aseem Barkule contact No:- 09423570145",
            "12MW Power Plant Construction",
            "2x100 TPD Sponge Iron Unit",
            "Rolling Mill & SMS",
            "500 TPD & 15 tons X 2 Induction furnace",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/bhukwalka.webp")}
          name="BHUWALKA PIPES LTD"
          titles={["Year", "Work Order Value"]}
          values={["2010-2011", "3.1 Cr"]}
          desc={[
            "Toranagallu,Bellary Dist",
            "Pipes Manufacturing Shed & Equipment foundations Civil work",
          ]}
        />
        <ProjectCard
          direction="left"
          // img={require("../assets/clients/helicon.jpeg")}
          name="RAMANJANEYA STEEL PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "3.9 Cr"]}
          desc={["Ananthapur Dist, AP", "2x100 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/rav.png")}
          name="RAV’S STEEL PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "4.2 Cr"]}
          desc={["Ananthapur Dist, AP", "2x100 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/slv.png")}
          name="SLV STEELS & ALLOYS PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "4.5 Cr"]}
          desc={[
            "TS No 969-3A,Ward No 10,Nemakal village, Bommanahal (Mdl), Ananthapur Dist.",
            "2x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/bhel.png")}
          name="BHEL & KPTCL"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "5 Cr"]}
          desc={["Bellary", "1x500 MW power Plant through BHEL"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/ultratech.png")}
          name="ULTRATECH CEMENT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "8.5 Cr"]}
          desc={[
            "Ginigera Village, Koppal Dist, karnataka",
            "Administration Building, Clinker Building",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/arshad.png")}
          name="ARSHAD ISPAT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2009-2010", "3.2 Cr"]}
          desc={[
            "Budugumpa, NH-13, Koppal (Tq & Dist)",
            "2x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/jai_raj.jpeg")}
          name="JAIRAJ ISPAT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2008-2009", "4.5 Cr"]}
          desc={[
            "8 Phase, III I.D.A, Jeedimetla, Hyderabad – 500055, INDIA",
            "2x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/basai.jpeg")}
          name="BASAI STEEL PVT LTD"
          titles={["Year", "Work Order Value"]}
          values={["2008-2009", "9.5Cr"]}
          desc={[
            "Ward No.3, Plat No.412 Opp:KPG Farms,Sidiginomola Village,Bellary(Tq & Dist) -583138, Karnataka.",
            "3x100 TPD",
            "Sponge Iron Unit",
            "Rolling Mill & SMS",
            "12MW Power Plant",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/kmmi.png")}
          name="KMMI STEEL PVT LTD"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["HIQ,Chennai", "2008-2009", "5.5 Cr"]}
          desc={[
            "10MW Power Plant",
            "0.5MT Pelletizing Plant",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/padmavathi.png")}
          name="PADMAVATHI FERROUS LTD"
          titles={["Consultancy", "MD", "Year", "Work Order Value"]}
          values={[
            "Swamy",
            "Madhur Goel,contact No:- 09896096000",
            "2007-2009",
            "8.2 Cr",
          ]}
          desc={[
            "Bellary Dist",
            "4x100 TPD",
            "Sponge Iron Unit",
            "8MW Power Plant Construction",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/thermax.png")}
          name="THERMAX LIMITED"
          titles={["Worked at", "Year", "Work Order Value"]}
          values={["Harekrishna Metalics Pvt Ltd", "2008-2009", "6 Cr"]}
          desc={[
            "Sai Chamber,15 Mumbai, Pune Road, Wakdewadi, PUNE-411003, INDIA",
            "AM-Aseem Barkule contact No:-09423570145",
            "12MW Power Plant Construction",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/ravi.webp")}
          name="RAVI KIRAN POWER PLANT"
          titles={["Year", "Work Order Value"]}
          values={["2007-2008", "5.6 Cr"]}
          desc={["Gangavathi, Karnataka", "8MW Power Plant Construction"]}
        />
        <ProjectCard
          direction="left"
          // img={require("../assets/clients/indra")}
          name="INDRA KARAN POWER PLANT"
          titles={["Year", "Work Order Value"]}
          values={["2007-2008", "4.3 Cr"]}
          desc={[
            "Chikkajanthkalli",
            "Kampli Road,Gangavathi(Karnataka)",
            "8 MW Power Plant Construction",
          ]}
        />
        <ProjectCard
          direction="right"
          // img={require("../assets/clients/kara")}
          name="KARASAN CONSTRUCTION SOLUTIONS"
          titles={["Consultancy", "Name of MD", "Year", "Work Order Value"]}
          values={[
            "Mr. Obule Reddy (Bangalore)",
            "Mr.Karthik",
            "2007-2008",
            "1.8 Cr",
          ]}
          desc={["Cement Plant Construction"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/bmm.png")}
          name="BMM ISPAT LTD"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["ITC (Raipur)", "2007- 2010", "16.5 Cr"]}
          desc={[
            "Hospet, Bellary Dist",
            "500 TPD x 2 Sponge Iron",
            "1MT Pelletizing Plant",
            "Rolling Mill 1 M ton capacity (Bar bundling Mill, ECR 1, 2, 3 bldgs, Finishing Mill, Pump house)",
            ".5 Mtrs Hum Pipe-Line laying for drainage system",
          ]}
        />
        <ProjectCard
          direction="right"
          // img={require("../assets/clients/bhana")}
          name="BHANASHANKARI STEEL & ALLOY PVT LTD"
          titles={["Consultancy", "Name of MD", "Year", "Work Order Value"]}
          values={[
            " ITC(Raipur)",
            "Neelakanta Reddy, Bellary",
            "2007-2008",
            "2.5 Cr",
          ]}
          desc={["2x50 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/kmmi.png")}
          name="KMMI STEEL PVT LTD"
          titles={["Consultancy", "Name of E.D", "Year", "Work Order Value"]}
          values={["Popuri(Hyderabad)", "Tanveer Ahmed", "2007-2009", "9.3 Cr"]}
          desc={["4x100 TPD", "Sponge Iron Unit", "12 M W Power Plant"]}
        />
        <ProjectCard
          direction="right"
          // img={require("../assets/clients/dha")}
          name="DHANA BAD FUELS"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["2007-2008", "3.8 Cr"]}
          desc={[
            "Mangalpur, Burdwan(West Bangal)",
            "3x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/amiya.png")}
          name="AMIYA STEEL PVT LTD"
          titles={["Consultancy", "Name of MD", "Year", "Work Order Value"]}
          values={["Popuri(Hyderabad)", "Amiya Mondal", "2006-2007", "3.5 Cr"]}
          desc={[
            "Mejhia, Bankura (West Bengal)",
            "2x100 TPD",
            "Sponge Iron Unit",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/aditya.webp")}
          name="ADITYA SPONGE IRON"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["Popuri(Hyderabad)", "2006-2007", "3.5 Cr"]}
          desc={["Keonjhar (Orissa)", "3x100 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="left"
          // img={require("../assets/clients/sri")}
          name="SRI VENKATESWARA SPONGE & POWER LTD"
          titles={[
            "Village",
            "Dist",
            "Consultancy",
            "Name of the owner",
            "Year",
            "Work Order Value",
          ]}
          values={[
            "Halkundi",
            "Bellary",
            "ITC",
            "Mr. Bhavani Prasad",
            "2006-2007",
            "3.2 Cr",
          ]}
          desc={["35,50,100 TPD with pre-heating kiln", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="right"
          // img={require("../assets/clients/hos")}
          name="HOSPET ISPAT LTD"
          titles={[
            "Village",
            "Post",
            "Dist",
            "Consultancy",
            // "Name of MD",
            "Year",
            "Work Order Value",
          ]}
          values={[
            "Alla Nagar",
            "Hirebagnal",
            "Koppal(Karnataka)",
            "Popuri(Hyderabad)",
            "2006-2007",
            "4.3 Cr",
          ]}
          desc={["2x100 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/hare.png")}
          name="HARE KRISHNA METALICS PVT LTD"
          titles={[
            "Village+Post",
            "Dist",
            "Managing Director",
            "Consultancy",
            // "Name of MD",
            "Year",
            "Work Order Value",
          ]}
          values={[
            "Hirebagnal",
            "Koppal (Karnataka)",
            "Sandeep Agarwal",
            "ITC",
            "2006-2007",
            "8.5 Cr",
          ]}
          desc={[
            "2x100 TPD with pre heating kilns",
            "Sponge Iron Unit",
            "12 M W Power Plant (Thermax)",
          ]}
        />
        <ProjectCard
          direction="right"
          img={require("../assets/clients/theertha.jpeg")}
          name="THEERTHA ENGINEERING PVT LTD"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["Mecon", "2002-2005", "30 Cr"]}
          desc={[
            "Gujarat",
            "1 mtr DIA 2.5 mtr pipe line for drinking water Narmada Bachao to Bhuj in Gujarat",
          ]}
        />
        <ProjectCard
          direction="left"
          img={require("../assets/clients/grace.png")}
          name="GRACE INDUSTRIES LTD"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["Popuri(Hyderabad)", "2001-2002", "4.5 Cr"]}
          desc={["Chandrapur (Maharashtra)", "2x100 TPD", "Sponge Iron Unit"]}
        />
        <ProjectCard
          direction="right"
          // img={require("../assets/clients/default.png")}
          name="GOPAL SPONGE & POWER LTD"
          titles={["Consultancy", "Year", "Work Order Value"]}
          values={["POPURI (Hyderabad)", "2000-2001", "5 Cr"]}
          desc={["Raipur (C.G.)", "2x100 TPD", "Sponge Iron Unit"]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
