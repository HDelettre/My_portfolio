// IMPORT COMPONENTS
import FooterContainer from "./components/header/Footer.container";
import HeaderContainer from "./components/header/Header.Container";
import LeftSide from "./components/left_side/Left.side";
import RightSide from "./components/right_side/Right.Side";

function App() {
  return (
    <>
    <HeaderContainer />
    <div className="container">
      <LeftSide />
      <RightSide />
    </div>
    <FooterContainer />
    </>
  );
}

export default App;
