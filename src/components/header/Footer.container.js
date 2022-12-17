import React from 'react';

const FooterContainer = () => {
  return (
    <div className='footer'>

      <div className='footer_boxleft'>
        <h3>Mes Services: Backend</h3>
        <ul>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Mongo DB</li>
          <li>MySQL / Sequelize</li>
        </ul>
      </div>

      <div className='footer_boxleft'>
        <h3>Mes Services: Frontend</h3>
        <ul>
          <li>Javascript</li>
          <li>React.js</li>
          <li>React Redux</li>
          <li>Sass</li>
        </ul>
      </div>

      <div className='footer_boxright'>
        <h3>Contactez-moi</h3>
        <ul>
          <li><i className="fa-regular fa-envelope-open"></i>
              herve.delettre@gmail.com</li>
              <li><i className="fa-solid fa-mobile-screen"></i>+33 (0)6.84.58.99.70</li>
              <li><i className="fa-brands fa-linkedin"></i>@herve-delettre-dev-web</li>
              <li><i className="fa-brands fa-github"></i>github.com/HDelettre</li>
        </ul>
      </div>

      <div className='footer_boxright'>
        <h3>Et encore ...</h3>
        <ul>
          <li>Anglais professionnel</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterContainer;
