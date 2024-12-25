import React, { useEffect } from "react";
import Footer from "../components/Footer";
import EquipmentCard from "../components/EquipmentCard";
import '../assets/styles/OurEquipments.css';

const equipmentData = [
  { name: "200 cat Hitachi", src: require("../assets/equipments/200_cat_hitachi.webp"), amount: "03" },
  { name: "Tippers", src: require("../assets/equipments/tipper.webp"), amount: "10" },
  { name: "JCB", src: require("../assets/equipments/jcb.jpeg"), amount: "03" },
  { name: "RMC unit Batching", src: require("../assets/equipments/rmc.jpeg"), amount: "05" },
  { name: "1080 Batching Plant", src: require("../assets/equipments/1080.jpeg"), amount: "08" },
  { name: "800 Batching Plant", src: require("../assets/equipments/800.jpeg"), amount: "04" },
  { name: "Concrete Feed Pumps", src: require("../assets/equipments/concrete.jpeg"), amount: "05" },
  { name: "Self loader Concrete machine", src: require("../assets/equipments/self.jpeg"), amount: "02" },
  { name: "Mixing miller (0.3m3)", src: require("../assets/equipments/mixing.jpeg"), amount: "20" },
  { name: "Mixing Miller 1 big capacity", src: require("../assets/equipments/mixing1.webp"), amount: "05" },
  { name: "Vibrators", src: require("../assets/equipments/vibrator.jpeg"), amount: "60" },
  { name: "Needles (60mm,40mm)", src: require("../assets/equipments/needles.webp"), amount: "200" },
  { name: "De-water Pumps (3HP,4HP)", src: require("../assets/equipments/de-water.webp"), amount: "20" },
  { name: "Curing pumps(1/2HP,1HP)", src: require("../assets/equipments/curing.webp"), amount: "25" },
  { name: "Hydraulic lift (Hoist)", src: require("../assets/equipments/hydraulic.webp"), amount: "05" },
  { name: "Welding machines", src: require("../assets/equipments/welding.jpeg"), amount: "20" },
  { name: "Cutting machine", src: require("../assets/equipments/cutting.webp"), amount: "10" },
  { name: "Staging pipes", src: require("../assets/equipments/staging.avif"), amount: "5000" },
  { name: "Transit mixers", src: require("../assets/equipments/transit.jpeg"), amount: "20" },
  { name: "Cup locks 1500", src: require("../assets/equipments/cuplock.webp"), amount: "15,000 M2" },
  { name: "Shuttering plates", src: require("../assets/equipments/shuttering.webp"), amount: "10,000 M2" },
];

const OurEquipmentsPage = () => {
  useEffect(() => {
    document.title = 'Our Equipments - Sri Sai Engineering & Technical Services';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="our-equipments">
        <div className="equipments">
          {equipmentData.map((equipment, index) => (
            <EquipmentCard
              key={index}
              name={equipment.name}
              src={equipment.src}
              amount={equipment.amount}
            />
          ))}
        </div>

        <div className="table-wrapper">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">SI No</th>
                <th scope="col">Particulars</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {equipmentData.map((equipment, index) => (
                <tr key={index}>
                  <th>{String(index + 1).padStart(2, '0')}</th>
                  <td>{equipment.name}</td>
                  <td>{equipment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurEquipmentsPage;
