import React from "react";
import "./home.css";
import homeHeader from "../../assests/homeHead.jpg";
import Orthopeadic from "../../assests/shoulder.jpg";
import Physiotherapy from "../../assests/knee.jpg";
import sportmedicine from "../../assests/hip.jpg";
import Elbow from "../../assests/elbow.jpg";
import Lumbar from "../../assests/lumbar.jpg";
import Other from "../../assests/other.jpg";
import Sacaral from "../../assests/sacaral.jpg";
import Spine from "../../assests/spine.jpg";
import Wrist from "../../assests/wrist.jpg";
import { Card } from "antd";
import OSC from "../../assests/osc.jpg";
const { Meta } = Card;

const HomeComponent = () => {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <span className="home-header-data">
              <img src={OSC} alt="logo" style={{ width: "30%" }}></img>
              <div className="home-header-data-inner">
                <h1>Ortho Zone</h1>
                <ul className="about-us-content-list">
                  ' We Keeps You Moving '
                </ul>
              </div>
            </span>

            <br />
          </div>
          <div className="about-us-header-image">
            <img src={homeHeader} alt="homeimage" />
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-one">
          <div className="home-section-items">
            <h2>Shoulder</h2>
            <div className="home-section-content-details">
              <ul>
                <li>Arthroscopic Bankart Repair</li>
                <li>SLAP Repair</li>
                <li>Posterior Labral Repair</li>
                <li>Rotator Cuff Repair</li>
                <li>Shoulder Replacement</li>
                <li>Shoulder Fractures</li>
              </ul>
              <ul>
                <li>Shoulder Cyst Surgeries</li>
                <li>
                  Periarthritis Shoulder / Adhesive Capsulitis / Frozen Shoulder
                </li>
                <li>Rotator Cuff Strain</li>
                <li>Shoulder Instability</li>
                <li>Shoulder Arc Syndrome</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={Orthopeadic} alt="ortho" />
          </div>
        </div>
        <div className="home-section-two">
          <div>
            <img src={sportmedicine} alt="sport" />
          </div>
          <div className="home-section-items home-section-items-two">
            <h2>Hip & Ankle & Elbow</h2>
            <div className="home-section-content-details ">
              <ul>
                <li>Hip ACR</li>
                <li>Bipolar Arthroscopy</li>
                <li>Avascular Necrosis Management</li>
                <li>Hip Fractures Fixation</li>
                <li>Ankle Fractures</li>
                <li>Ankle Ligament Surgeries</li>
                <li>Lateral Epicondylitis / Tennis Elbow</li>
                <li>Medial Epicondylitis / Golfer's Elbow</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-section-three">
          <div className="home-section-items">
            <h2>Knee</h2>
            <div className="home-section-content-details">
              <ul>
                <li>ACL & PCL Reconstruction</li>
                <li>PLC Injuries</li>
                <li>Meniscal Repair</li>
                <li>Loose Body Removal</li>
                <li>Excision of Tumor</li>
                <li>synovectomy</li>
                <li>Patellar Instability</li>
              </ul>
              <ul>
                <li>Cartilage Repair</li>
                <li>Collateral Ligament Injuries</li>
                <li>Total Knee Replacement</li>
                <li>Revision Total Knee Replacement</li>
                <li>Knee Preservation Surgeries</li>
                <li>High Tibial Osteotomy</li>
              </ul>
            </div>
          </div>
          <div>
            <img src={Physiotherapy} alt="physio" />
          </div>
        </div>
        <div className="home-section-four">
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Elbow} />}
          >
            <Meta
              title={<h3>Elbow</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>Lateral Epicondylitis / Tennis Elbow</li>
                    <li>Medial Epicondylitis / Golfer's Elbow</li>
                  </ul>
                </div>
              }
            />
          </Card>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Wrist} />}
          >
            <Meta
              title={<h3>Wrist & Fingers</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>Carpal Tunnel Syndrome</li>
                    <li>Trigger Finger</li>
                    <li>Dequervains Syndrome</li>
                  </ul>
                </div>
              }
            />
          </Card>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Spine} />}
          >
            <Meta
              title={<h3>Cervicaa Vertebrae(Spine)</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>Cervical Brachialgia</li>
                    <li>Cervical Spondylosis</li>
                    <li>Cervical Disc Prolapse</li>
                  </ul>
                </div>
              }
            />
          </Card>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Lumbar} />}
          >
            <Meta
              title={<h3>Lumbar Spine</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>Lumbar Disc Position</li>
                    <li>Lumbar Spondylosis</li>
                    <li>Ankylosing Spondylitis (balloon Spine)</li>
                    <li>Lumbar Disc Prolapse</li>
                    <li>Sciatic Nerve Tension</li>
                  </ul>
                </div>
              }
            />
          </Card>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Sacaral} />}
          >
            <Meta
              title={<h3>Sacral & Coccyx</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>SI Joint Dysfunction</li>
                    <li>Coccydynia</li>
                  </ul>
                </div>
              }
            />
          </Card>
          <Card
            style={{ width: 320 }}
            cover={<img alt="example" src={Other} />}
          >
            <Meta
              title={<h3>Other Conditions</h3>}
              description={
                <div className="home-section-content-details">
                  <ul>
                    <li>Osteoarthritis</li>
                    <li>Rheumatoid Arthritis</li>
                    <li>Fibromyalgia</li>
                    <li>Low Back Ache</li>
                    <li>Kyphosis, Scoliosis & Osteoporosis</li>
                    <li>Paget’s Disease</li>
                    <li>Borsitics & Planter Foscitics</li>
                  </ul>
                </div>
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
