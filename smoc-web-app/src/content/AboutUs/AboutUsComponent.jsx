import React from "react";
import "./AboutUsComponent.css";
import { ReactComponent as AboutHeader } from "../../assests/AboutusImage.svg";
import DRORTHO from "../../assests/DrSrinivas.svg";
import PHYSICIAN from "../../assests/DrGopan.svg";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";

const AboutUsComponent = () => {
  const listData = [];
  for (let i = 0; i < 2; i++) {
    listData.push({
      href: "https://ant.design",
      title: `ant design part ${i}`,
      avatar:
        "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      description:
        "Ant Design, a design language for background applications, is refined by Ant UED Team.",
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  return (
    <div className="about">
      <div className="home-header">
        <div className="home-header-section-one">
          <div className="align-middle">
            <h1>About Us</h1>
          </div>
          <div>
            <AboutHeader />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-section-one">
          <h1>SMOC</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            explicabo id adipisci ratione hic quidem in voluptatem quis expedita
            quam, natus eius aliquam accusamus. Aliquid facere facilis autem
            consequuntur possimus.
          </p>
        </div>

        <div className="about-section-two">
          <h1>OUR DOCTORS</h1>

          <List
            itemLayout="vertical"
            size="large"
            dataSource={listData}           
            renderItem={(item) => (
              <List.Item
                key={item.title}
                style={{backgroundColor:"whitesmoke",borderRadius:"10px",marginTop:"20px"}}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta                 
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </List.Item>
            )}
          />

          {/* <div className="about-section-two-container-one">
          <div class="about-section-two-img">
            <img src={DRORTHO} alt="DRORTHO"></img>
          </div>         
            <p className="about-section-two-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium,minima laudantium officia, nesciunt at consequatur dolores ipsa
              dolor repudiandae necessitatibus provident excepturi ad explicabo
              architectlabore? Autem nisi aliquid natus!
            </p>          
        </div> */}

          {/* <div className="about-section-two-container-two">
          <p className="about-section-two-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium,           
            minima laudantium officia, nesciunt at consequatur dolores ipsa
            dolor            
            repudiandae necessitatibus provident excepturi ad explicabo
            architecto            
            labore? Autem nisi aliquid natus!
          </p>
          <div className="about-section-two-img">
            <img src={PHYSICIAN} alt="DRPHY"></img>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
