import React, { useState, useEffect } from "react";
import "./App.css";
import CenterImage from "./CenterImage";
import HeaderComponent from "./Header";
import RightImages from "./RightImages";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [centerImage, setCenterImage] = useState({});
  const [update, setUpdate] = useState(false);
  function updateCenterImage(image) {
    setCenterImage(image);
  }
  useEffect(() => {
    // Create a promise that simulates loading data from a server
    const dataPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            img_src:
              "https://media.istockphoto.com/id/165913693/vector/happy-moon.jpg?s=612x612&w=0&k=20&c=6pXWK30o_FEYm9du_-08kih1aZgLeFbPRqDmoZl8r6w=",
          },
          {
            id: 2,
            img_src: "https://img.freepik.com/premium-vector/naughty-boy-jumping-sofa_679557-364.jpg?w=2000",
          },
          {
            id: 3,
            img_src:
              "https://previews.123rf.com/images/lenm/lenm1801/lenm180100348/93880217-illustration-of-stickman-family-with-their-pet-birds.jpg",
          },
          {
            id: 4,
            img_src:
              "http://atlas-content-cdn.pixelsquid.com/stock-images/cartoon-boy-jack-holding-pie-chart-8JY7QWB-600.jpg",
          },
          {
            id: 5,
            img_src:
              "https://media.istockphoto.com/id/1169889406/vector/happy-children-playing-joyfully-on-the-playground.jpg?s=612x612&w=0&k=20&c=EVLZGWz2RHCvl0brH85CihdX_REcMMezmY3Qh0Kpvrw=",
          },
          {
            id: 6,
            img_src:
              "https://img.freepik.com/premium-vector/cartoon-little-kid-holding-surfboard_29190-4608.jpg?w=2000",
          },
          {
            id: 7,
            img_src:
              "https://media.istockphoto.com/id/1346505488/vector/illustration-of-a-witch-flying-on-a-broom.jpg?s=612x612&w=0&k=20&c=QcualrAJabIU2cAIAigZpb8E8lnCTk-w_NyeXjDdjFg=",
          },
          {
            id: 8,
            img_src: "https://thumbs.dreamstime.com/b/illustration-cartoon-kids-painting-farm-background-101226926.jpg",
          },
          {
            id: 9,
            img_src:
              "https://image1.masterfile.com/getImage/NjQ1LTAyMTUzNDMwZW4uMDAwMDAwMDA=ACnKB7/645-02153430en_Masterfile.jpg",
          },
          {
            id: 10,
            img_src:
              "https://media.istockphoto.com/id/1371739885/video/education-animation-video-education-background-videos-study-hard-student.jpg?s=640x640&k=20&c=olcmk4dewogipOpPD1m3NAV_YnVoJSBqxoyhVp7QMeA=",
          },
        ]);
      }, 2000);
    });
    dataPromise
      .then((data) => {
        setJsonData(data);
        setImageLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <HeaderComponent />
      {imageLoaded ? (
        <div className="imageContainer">
          <CenterImage jsonData={jsonData} centerImage={centerImage} setCenterImage={setCenterImage} active={update} />
          <RightImages jsonData={jsonData} updateCenterImage={updateCenterImage} updateClick={setUpdate} />
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default App;
