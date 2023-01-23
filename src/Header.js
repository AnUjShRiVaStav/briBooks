import React from "react";
import "./Header.scss";
import { CgProfile } from "react-icons/cg";
import { GiMountains } from "react-icons/gi";

const HeaderComponent = () => {
  return (
    <div style={{ marginBottom: "40px" }} className="header">
      <ul>
        <li>
          <img
            src=" https://www.bribooks.com/assets/images/BriBooks.svg"
            alt="company-logo"
          />
        </li>

        <button style={{ float: "right" }} className="buttons2">
          <CgProfile /> Noah Behl
        </button>

        <button style={{ float: "right" }} className="buttons">
          <GiMountains /> Change Theme
        </button>
      </ul>
    </div>
  );
};

export default HeaderComponent;
