import React from "react";
// import CV from "../../assets/cv";

const CTA = () => {
  return (
    <div className="cta">
      <a href={"../../assets/cv"} download="Gal-Amar-CV" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        let's Talk
      </a>
    </div>
  );
};

export default CTA;
