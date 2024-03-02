import React, { useEffect } from "react";
import Footer from "../components/Footer";
import EquipmentCard from "../components/EquipmentCard";
import '../assets/styles/OurEquipments.css'

const OurEquipmentsPage = () => {
  useEffect(() => {
    document.title = 'Our Equipments - Sri Sai Engineering & Technical Services';
  }, []);

  return (
    <>
      <div className="our-equipments">
        <div className="equipments">
          <EquipmentCard
            name="200 cat Hitachi"
            src={require("../assets/equipments/200_cat_hitachi.webp")}
            amount="03"
          />
          <EquipmentCard
            name="Tippers"
            src={require("../assets/equipments/tipper.webp")}
            amount="10"
          />
          <EquipmentCard
            name="JCB"
            src={require("../assets/equipments/jcb.jpeg")}
            amount="03"
          />
          <EquipmentCard
            name="RMC unit Batching"
            src={require("../assets/equipments/rmc.jpeg")}
            amount="05"
          />
          <EquipmentCard
            name="1080 Batching Plant"
            src={require("../assets/equipments/1080.jpeg")}
            amount="08"
          />
          <EquipmentCard
            name="800 Batching Plant"
            src={require("../assets/equipments/800.jpeg")}
            amount="04"
          />
          <EquipmentCard
            name="Concrete Feed Pumps"
            src={require("../assets/equipments/concrete.jpeg")}
            amount="05"
          />
          <EquipmentCard
            name="Self loader Concrete machine"
            src={require("../assets/equipments/self.jpeg")}
            amount="02"
          />
          <EquipmentCard
            name="Mixing miller (0.3m3)"
            src={require("../assets/equipments/mixing.jpeg")}
            amount="20"
          />
          <EquipmentCard
            name="Mixing Miller 1 big capacity"
            src={require("../assets/equipments/mixing1.webp")}
            amount="05"
          />
          <EquipmentCard
            name="Vibrators"
            src={require("../assets/equipments/vibrator.jpeg")}
            amount="60"
          />
          <EquipmentCard
            name="Needles (60mm,40mm)"
            src={require("../assets/equipments/needles.webp")}
            amount="200"
          />
          <EquipmentCard
            name="De-water Pumps (3HP,4HP)"
            src={require("../assets/equipments/de-water.webp")}
            amount="20"
          />
          <EquipmentCard
            name="Curing pumps(1/2HP,1HP)"
            src={require("../assets/equipments/curing.webp")}
            amount="25"
          />
          <EquipmentCard
            name="Hydraulic lift (Hoist)"
            src={require("../assets/equipments/hydraulic.webp")}
            amount="05"
          />
          <EquipmentCard
            name="Welding machines"
            src={require("../assets/equipments/welding.jpeg")}
            amount="20"
          />
          <EquipmentCard
            name="Cutting machine"
            src={require("../assets/equipments/cutting.webp")}
            amount="10"
          />
          <EquipmentCard
            name="Staging pipes"
            src={require("../assets/equipments/staging.avif")}
            amount="5000"
          />
          <EquipmentCard
            name="Transit mixers"
            src={require("../assets/equipments/transit.jpeg")}
            amount="20"
          />
          <EquipmentCard
            name="Cup locks 1500"
            src={require("../assets/equipments/cuplock.webp")}
            amount="15,000 M2"
          />
          <EquipmentCard
            name="Shuttering plates"
            src={require("../assets/equipments/shuttering.webp")}
            amount="10,000 M2"
          />
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
            <tr>
              <th>01</th>
              <td>200 cat Hitachi</td>
              <td>03</td>
            </tr>
            <tr>
              <th>02</th>
              <td>Tippers</td>
              <td>10</td>
            </tr>
            <tr>
              <th>03</th>
              <td>JCB </td>
              <td>03 </td>
            </tr>
            <tr>
              <th>04</th>
              <td>RMC unit Batching </td>
              <td>05 </td>
            </tr>
            <tr>
              <th>05</th>
              <td>1080 Batching Plant </td>
              <td>08 </td>
            </tr>
            <tr>
              <th>06</th>
              <td>800 Batching Plant </td>
              <td>04 </td>
            </tr>
            <tr>
              <th>07</th>
              <td>Concrete Feed Pumps </td>
              <td>05 </td>
            </tr>
            <tr>
              <th>08</th>
              <td>Self loader Concrete machine</td>
              <td>02 </td>
            </tr>
            <tr>
              <th>09</th>
              <td>Mixing miller (0.3m3) </td>
              <td>20 </td>
            </tr>
            <tr>
              <th>10</th>
              <td>Mixing Miller 1 big capacity </td>
              <td>05 </td>
            </tr>
            <tr>
              <th>11</th>
              <td>Vibrators </td>
              <td>60 </td>
            </tr>
            <tr>
              <th>12</th>
              <td>Needles (60mm,40mm) </td>
              <td>200 </td>
            </tr>
            <tr>
              <th>13</th>
              <td>De-water Pumps (3HP,4HP) </td>
              <td>20 </td>
            </tr>
            <tr>
              <th>14</th>
              <td>Curing pumps(1/2HP,1HP) </td>
              <td>25 </td>
            </tr>
            <tr>
              <th>15</th>
              <td>Hydraulic lift( Hoist)</td>
              <td>05 </td>
            </tr>
            <tr>
              <th>16</th>
              <td>Welding machines </td>
              <td>20 </td>
            </tr>
            <tr>
              <th>17</th>
              <td>Cutting machine</td>
              <td>10 </td>
            </tr>
            <tr>
              <th>18</th>
              <td>Staging pipes </td>
              <td>5000 NUMBERS </td>
            </tr>
            <tr>
              <th>19</th>
              <td>Transit mixers </td>
              <td>20 </td>
            </tr>
            <tr>
              <th>20</th>
              <td>Cup locks 1500 </td>
              <td>15,000 M2</td>
            </tr>
            <tr>
              <th>21</th>
              <td>Shuttering plates </td>
              <td>10,000 M2</td>
            </tr>
          </tbody>
        </table>
        </div>

        {/* <div className="py-5" /> */}
      </div>

      <Footer />
    </>
  );
};

export default OurEquipmentsPage;
