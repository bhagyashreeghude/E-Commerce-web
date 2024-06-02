import { BG_IMG } from "../utils/constant";
import SubComponent from "./SubComponent";
import Navbar from "./Navbar";
const MainComponent = () => {
  return (
    <div>
      <Navbar />
      <img className="w-full " src={BG_IMG} alt="bg-img" />
      <SubComponent />
    </div>
  );
};

export default MainComponent;
