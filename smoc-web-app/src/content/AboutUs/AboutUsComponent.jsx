import React from "react";
import "./AboutUsComponent.css";
import AboutUs from "../../assests/AboutUs.jpg";
import { List } from "antd";
import DoctorSrinivas from "../../assests/DrSrinivas.jpeg";
import DoctorGopan from "../../assests/GopanDR.jpg";

const AboutUsComponent = () => {
  return (
    <div className="about">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>About Us</h1>
            <br />
            <ul className="about-us-content-list content-about-align">
              <li>Management of sports injuries</li>

              <li>Sports injury rehabilitation</li>
              <li>
                Management and rehabilitation of joint disorders including joint
                replacement surgeries
              </li>
            </ul>
          </div>
          <div className="about-us-header-image">
            <img src={AboutUs} alt="aboutus" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-two">
          <List itemLayout="vertical" size="large">
            <List.Item
              key={"srinivas"}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginTop: "50px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <List.Item.Meta
                title={<h2>DR. Srinivas</h2>}
                description={
                  <div className="list-item-image-desc">
                    <h3>
                      Dr. Srinivas did his Undergraduate and post graduate
                      training at Medical college Trivandrum. He also obtained
                      Diplomate of National Board from the National Board of
                      Exams,Newdelhi. He underwent various training both in
                      India and abroad in countries like Australia,France and
                      Thailand.
                      <br />
                      <br />
                      His focus of interest is in the field of sports injuries
                      and joint replacement. Presently working as Senior
                      consultant at Cosmopolitan Hospitals, Trivandrum. He is a
                      visiting Consultant at Lister Hospitals, Marthandam and
                      Al-Arif Hospitals, Trivandrum Training
                    </h3>
                    <img
                      height={200}
                      width={200}
                      style={{ borderRadius: "50%", margin: "auto" }}
                      alt="docimage"
                      src={DoctorSrinivas}
                    />
                  </div>
                }
              />
              <ul>
                1. Fellowship in Traumatology and Joint replacement at Ganga
                Hospitals, Coimbatore.
                <br /> 2. Fellowship in Arthroscopy and Arthroplasty at KAMINENI
                Hospitals, Hyderabad. <br />
                3. Fellowship in Knee Arthroscopy at Ortho One Hospital,
                Coimbatore.
                <br /> 4. Shoulder Arthroscopy Fellowship at Deenanath
                Mangeshwar Hospital,Pune. <br />
                5.Shoulder training at Western Orthopaedic centre, Perth,
                Australia <br />
                6. Shoulder training at ACPS Shoulder institute Annecy, France{" "}
                <br /> 7. Cadaver training in Shoulder arthroscopy at Various
                Centres in India and Abroad-Chucalankoran, Medical College,
                Bangkok, Thailand
              </ul>
            </List.Item>

            <List.Item
              key="Mr. Gopan BPT, MPT (Physiotherapist)"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                marginTop: "50px",
                marginBottom:"40px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <List.Item.Meta
                title={<h2>DR. Gopan - BPT, MPT (Physiotherapist)</h2>}
                description={
                  <div className="list-item-image-desc">
                    <h3>
                      Dr Gopan did his bachelors degrees in Physiotherapy from
                      PSG Institute of Medical Science and Research, Coimbatore
                      and he has completed his Masters from Rajiv Gandhi
                      university, Bangalore.
                      <br />
                      <br /> With more than 13 years of hands-on excellence in
                      his key areas which are Orthopaedic and sports injury
                      management, currently he is the consultant physiotherapist
                      at Ortho Zone, Trivandrum.
                    </h3>
                    <img
                      height={200}
                      width={200}
                      style={{ borderRadius: "50%", margin: "auto" }}
                      alt="docimage"
                      src={DoctorGopan}
                    />
                  </div>
                }
              />
              <ul>
                Other Key Areas,
                <br />
                1. Knee, Shoulder, Ankle and Elbow Arthroscopic Post Surgery
                Rehab <br /> 2. Joint Replacement Surgeries of Knee, Hip and
                Shoulder.
                <br /> 3. Management of Fractures around Knee, Hip, Ankle,
                Shoulder, Elbow and Wrist Joints
              </ul>
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
