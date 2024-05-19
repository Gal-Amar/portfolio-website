import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/DonkeyWebPic.jpeg";
import IMG2 from "../../assets/Zerli.jpeg";
import IMG3 from "../../assets/PortfolioWebPic.jpeg";
import IMG4 from "../../assets/safeplanwindow.png";

import ZerliWorkProcess from "./ZerliWorkProcess";
import DonkeyWorkProcess from "./DonkeyWorkProcess";
import PortfolioWorkProcess from "./PortfolioWorkProcess";
import SafePlanWorkProcess from "./SafePlanWorkProcess";
import PortfolioData from "./PortfolioData";

const data1 = [
  {
    id: 1,
    image: IMG2,
    badge: "Complete",
    title: "Zerli- Flower shop",
    description: "Mid-term Project, Written in Java",
    github: "https://github.com/Gal-Amar/Zerli/tree/main",
    demo: "https://youtu.be/uiTDp1Rb5aQ",
  },
  {
    id: 2,
    image: IMG4,
    badge: "complete",
    title: "Safe Plan",
    description: "Travel planning website",
    github: "https://github.com/Gal-Amar/Safe-Plane",
    demo: "https://youtu.be/DqGb0fgMiRQ",
  },
  {
    id: 3,
    image: IMG3,
    badge: "Complete",
    title: "Gal Amar Portfolio",
    description: "Resume Website",
    github: "https://github.com/Gal-Amar/portfolio-website",
    demo: "https://tinyurl.com/3kmmk99z",
  },
];

const data2 = [
  {
    id: 4,
    image: IMG1,
    badge: "In Progress",
    title: "Donkey And Friends",
    description: "Coloring pages website",
    github: "https://github.com/Gal-Amar/donkey-website",
    demo: null,
  },
];

const ProcessHandler = (props) => {
  console.log(props.id);
  switch (props.id) {
    case 1:
      return <ZerliWorkProcess />;
    case 2:
      return <SafePlanWorkProcess />;
    case 3:
      return <PortfolioWorkProcess />;
    case 4:
      return <DonkeyWorkProcess />;
    default:
      return null;
  }
};

const Portfolio = () => {
  const [openId, setOpenId] = useState(null);

  const ToggleProcess = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>
      <PortfolioData
        data={data1}
        openId={openId}
        toggleProcess={ToggleProcess}
        processHandler={ProcessHandler}
      />

      {openId !== 4 && (
        <div className="work-process-section large-devices">
          <ProcessHandler id={openId} />{" "}
        </div>
      )}
      <div style={{ marginTop: "1rem" }} />
      <PortfolioData
        data={data2}
        openId={openId}
        toggleProcess={ToggleProcess}
        processHandler={ProcessHandler}
      />
      {openId === 4 && (
        <div className="work-process-section large-devices">
          <ProcessHandler id={openId} />{" "}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
