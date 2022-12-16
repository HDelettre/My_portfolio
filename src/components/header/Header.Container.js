import React from "react";

// IMPORT PICTURES
import photo from "../../pictures/herve_delettre.jpg";

const HeaderContainer = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src={photo} alt="Hervé Delettre" />
        <div className="header_left--title">
          <h1>Hervé DELETTRE</h1>
          <h2>Développeur Web</h2>
          <div className="header_left--contact">
            <p>Contact:</p>
            <p>
              <i className="fa-regular fa-envelope-open"></i>
              herve.delettre@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen"></i>+33 (0)6.84.58.99.70
            </p>
          </div>
        </div>
      </div>

      <div className="header_right">
        <div className="header_right--button">LinkedIn</div>
        <div className="header_right--button">Curriculum Vitae</div>
        <div className="header_right--button">Projet</div>
      </div>
    </div>
  );
};

export default HeaderContainer;
