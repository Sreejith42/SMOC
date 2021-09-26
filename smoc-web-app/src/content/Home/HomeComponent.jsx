import React from "react";
import "./home.css";
import { ReactComponent as HeaderImage } from "../../assests/homeheaderimage.svg";
// import WheelChair from "../../assests/wheelchairassist.svg";
import Orthopeadic from "../../assests/Orthopedics.svg";
import Physiotherapy from "../../assests/Physiotherapy.svg";
import sportmedicine from "../../assests/Sportsmedicine.svg";

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>Ortho Zone</h1>
            <ul>' We Keeps You Moving '</ul>
          </div>
          <div>
            <HeaderImage />
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-one">
          <div className="home-section-items">
            <h2>Shoulder</h2>
            <div style={{ display: "flex" }}>
              <ul>
                1. Arthroscopic Bankart Repair
                <br />
                2. SLAP Repair
                <br />
                3. Posterior Labral Repair
                <br />
                4. Rotator Cuff Repair
                <br />
                5. Shoulder Replacement
                <br />
                6. Shoulder Fractures
                <br />
              </ul>
              <ul>
                7. Shoulder Cyst Surgeries
                <br />
                8. Periarthritis Shoulder / Adhesive Capsulitis / Frozen
                Shoulder
                <br />
                9. Rotator Cuff Strain
                <br />
                10. Shoulder Instability
                <br />
                11. Shoulder Arc Syndrome
                <br />
              </ul>
            </div>
          </div>
          <div className="home-section-one-img">
            <img src={Orthopeadic} alt="ortho" />
          </div>
        </div>
        <div className="home-section-two">
          <div className="home-section-two-img">
            <img src={sportmedicine} alt="sport" />
          </div>
          <div className="home-section-items-middle">
            <h2>Hip & Ankle & Elbow</h2>
            <div>
              1. Hip ACR
              <br />
              2. Bipolar Arthroscopy
              <br />
              3. Avascular Necrosis Management <br />
              4. Hip Fractures Fixation
              <br />
              5. Ankle Fractures
              <br />
              6.Ankle Ligament Surgeries
              <br />
              7.Lateral Epicondylitis / Tennis Elbow
              <br />
              8.Medial Epicondylitis / Golfer's Elbow
              <br />
            </div>
          </div>
        </div>
        <div className="home-section-three">
          <div className="home-section-items">
            <h2>Knee</h2>
            <div style={{ display: "flex" }}>
              <ul>
                1. ACL & PCL Reconstruction
                <br />
                2. PLC Injuries
                <br />
                3. Meniscal Repair
                <br />
                4. Loose Body Removal
                <br />
                5. Excision of Tumor
                <br />
                6. synovectomy
                <br />
                7. Patellar Instability
                <br />
              </ul>
              <ul>
                8. Cartilage Repair
                <br />
                9. Collateral Ligament Injuries
                <br />
                10. Total Knee Replacement
                <br />
                11.Revision Total Knee Replacement
                <br />
                12. Knee Preservation Surgeries
                <br />
                13. High Tibial Osteotomy
                <br />
              </ul>
            </div>
          </div>
          <div className="home-section-three-img">
            <img src={Physiotherapy} alt="physio" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
