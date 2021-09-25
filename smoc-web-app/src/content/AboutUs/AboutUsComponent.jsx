import React from "react";
import "./AboutUsComponent.css";
// import { ReactComponent as AboutHeader } from "../../assests/AboutusImage.svg";
import AboutUs from "../../assests/AboutUs.jpg";
import { List } from "antd";
// import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const AboutUsComponent = () => {
  return (
    <div className="about">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>About Us</h1>
            <p>
              Management of sports injuries, <br />
              Sports injury rehabilitation,
              <br />
              Management and rehabilitation of joint disorders including joint
              replacement surgeries
            </p>
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
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title={"Dr Srinivas"}
                description=" Dr. Srinivas did his Undergraduate and post graduate training at Medical college trivandrum He also obtained Diplomate of National Board from the National Board of Exams,Newdelhi. He underwent various training both in India and abroad in countries like Australia,France and Thailand.
                His focus of interest is in the field of sports injuries and joint replacement
                Presently working as Senior consultant at Cosmopolitan Hospitals, Trivandrum. He is a visiting Consultant at Lister Hospitals, Marthandam and Al-Arif Hospitals, Trivandrum
                Training  
                "
              />
              1. Fellowship in Traumatology and Joint replacement at Ganga
              Hospitals, Coimbatore. 2.Fellowship in Arthroscopy and
              Arthroplasty at KAMINENI Hospitals, Hyderabad. 3.Fellowship in
              Knee Arthroscopy at Ortho One Hospital, Coimbatore. 4.Shoulder
              Arthroscopy Fellowship at Deenanath Mangeshwar Hospital,Pune.
              5.Shoulder training at Western Orthopaedic centre, Perth,
              Australia 6.Shoulder training at ACPS Shoulder institute Annecy,
              France 7.Cadaver training in Shoulder arthroscopy at Various
              Centres in India and Abroad-Chucalankoran, Medical College,
              Bangkok, Thailand
            </List.Item>

            <List.Item
              key="Mr. Gopan BPT, MPT (Physiotherapist)"
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: "10px",
                marginTop: "20px",
              }}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                title="Mr. Gopan BPT, MPT (Physiotherapist)"
                description="Mr Gopan did his bachelors degrees in Physiotherapy from PSG Institute of Medical Science and Research , Coimbatore and he has completed his Masters from Rajiv Gandhi university, Banglore .

                With more than 13 years of hands-on excellence in his key areas which are Orthopedic and sports injury management currently is the consultant physiotherapist at OrthoZone.
                
                "
              />
              Other Key Areas 1.Knee, Shoulder, Ankle and Elbow Arthroscopic
              Post Surgery Rehab 2.Joint Replacement Surgeries of Knee, Hip and
              Shoulder. 3.Management of Fractures around Knee, Hip, Ankle,
              Shoulder, Elbow and Wrist Joints
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
