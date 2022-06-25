import style from "./navbar.module.css";
import { BsGearFill } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="hstack justify-content-between">
      <h1>Hours Estimation Tool</h1>
      <BsGearFill size="3rem" />
    </div>
  );
};
