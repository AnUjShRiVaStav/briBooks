import React from "react";
import "./RightImages.scss";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

function RightImages({ jsonData, updateCenterImage, updateClick }) {
  function handleClick(image) {
    updateCenterImage(image);
    updateClick(true);
  }

  return (
    <div className="mobileView">
      <div style={{ height: "6rem" }}>
        <div className="mobileHead">
          <div className="headText">Change background</div>
          <div className="searchIcon">
            <BiSearch />
          </div>
        </div>
        <div className="imagination">
          <div>Imagination</div>
          <div>
            <IoMdArrowDropdown />
          </div>
        </div>
      </div>
      <div className="mobileContainer" style={{ height: "calc(90vh - 8rem)", overflow: "scroll" }}>
        {jsonData.map((image) => (
          <img
            key={image.id}
            src={image.img_src}
            alt={image.description}
            className="right-image"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>

      <div className="mobileFooter" style={{ height: "2rem" }}>
        {" "}
        Upload a custom Image
      </div>
    </div>
  );
}

export default RightImages;
