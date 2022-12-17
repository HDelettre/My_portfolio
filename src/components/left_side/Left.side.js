import React from "react";

// IMPORT PICTURES
import nodejs from '../../pictures/logo-node-js.png';
import javascript from '../../pictures/javascript.png';
import logoreact from '../../pictures/react.png';
import logoredux from '../../pictures/redux.png';
import logomongo from '../../pictures/logomongo.png';
import logomysql from '../../pictures/logomysql.jpg';

const LeftSide = () => {
  return (
    <div className="leftside">
      <h2>About Me</h2>
      <p>
        Après trente années passées dans le milieu de l'ingénierie dans les
        domaines du pétrole/gaz et du nucléaire, j'ai pris la décision de me
        reconvertir dans le développement web.
        <br />
        Après avoir accompli avec succès ma formation auprès d'OPENCLASSROOMS,
        j'ai développé de bonnes pratiques de programmation, que ce soit en
        HTML/CSS, la base, mais surtout en <strong>JAVASCRIPT</strong>, node.js,
        express.js. Côté Front, j'apprécie grandement la polivalence et la
        souplesse du framework <strong>REACT.js</strong>. Ce site est d'ailleurs
        en React.<br/>
        Reliez le tout à une base de données, relationnelle ou non,
        ajoutez-y une touche de <strong>REDUX</strong>, et vous obtenez un beau
        site web, dynamique et responsive.
        <br />
        Ne vous inquiétez pas de l'usine à gaz qui se trouve derrière la façade,
        cela me connait, j'en ai fait pendant des années ...<br/>
        Je recherche un poste de développeur web frontend, backend, idéalement 
        full-stack. Tout m'intéresse dans ce vaste univers, j'ai soif d'apprendre 
        de tout projet que vous pourriez me confier !
      </p>

      <div className="leftside_line"></div>

      <div className="leftside_competences">
        <img src={nodejs} alt='logo node.js' title='node.js' />
        <img src={javascript} alt='logo javascript' title='Javascript' />
        <img src={logoreact} alt='logo react' title="react.js" />
        <img src={logoredux} alt='logo redux' title="react redux" />
        <img src={logomongo} alt='logo mongoDB' title="mongo DB" />
        <img src={logomysql} alt='logo mysql' title="MySQL" />
      </div>
    </div>
  );
};

export default LeftSide;
