import React, { useState } from "react";
import "./CenterImage.scss";

function CenterImage({ jsonData, centerImage, active }) {
  const [description, setDescription] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [savedImages, setSavedImages] = useState([]);
  const [count, setCount] = useState(1);
  const emojiData = [
    { id: "smile", description: "😂" },
    { id: "rocket", description: "🚀" },
  ];
  function handleChange(event) {
    setDescription(event.target.value);
    if (event.target.value === "smile" || event.target.value === "rocket") {
      const filteredData = emojiData.filter((data) => data.id === event.target.value).map((val) => val.description);
      console.log(filteredData);
      setSuggestions(filteredData);
    } else {
      setSuggestions([]);
    }
  }
  function handleSave() {
    const centerImageSave = {
      id: centerImage.id,
      img_src: centerImage.img_src,
    };
    setCount(count + 1);
    setSavedImages([...savedImages, centerImageSave]);
  }
  console.log(centerImage);
  return (
    <div className="centerImage">
      <div className="saved-images">
        <img
          src={jsonData[0].img_src}
          alt={jsonData[0].img_src}
          style={{ marginBottom: "20px" }}
          className="saved-image"
        />
        {savedImages.map((image) => (
          <div>
            <div className="pageCount">{count}</div>
            <img
              key={image.id}
              src={image.img_src}
              style={{ marginBottom: "20px" }}
              alt={image.id}
              className="saved-image"
            />
          </div>
        ))}
      </div>
      {!active ? (
        <div className="mainCenterImageBox">
          <img className="center-image" src={jsonData[0].img_src} alt={jsonData[0].img_src} />
          <div className="inpiutFeild">
            <input
              className="inputTag"
              type="text"
              value={description}
              onChange={handleChange}
              placeholder="Start typing here"
            />
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleSave} className="save-button">
            Add New page
          </button>
        </div>
      ) : (
        <div className="mainCenterImageBox">
          <img className="center-image" src={centerImage.img_src} alt={centerImage.img_src} />
          <div className="inpiutFeild">
            <input
              className="inputTag"
              type="text"
              value={description}
              onChange={handleChange}
              placeholder="Start typing here"
            />
            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((item) => (
                  <li>{item}</li>
                ))}
              </div>
            )}
          </div>
          <button onClick={handleSave} className="save-button">
            Add New page
          </button>
        </div>
      )}
    </div>
  );
}

export default CenterImage;
