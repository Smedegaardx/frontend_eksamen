import Iconbtn from "../Iconbtn";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";

const TrackSelector = () => {
  return (
    <div>
      <Iconbtn icon={GoTriangleLeft}></Iconbtn>
      <Iconbtn icon={GoTriangleRight}></Iconbtn>
    </div>
  );
};

export default TrackSelector;
