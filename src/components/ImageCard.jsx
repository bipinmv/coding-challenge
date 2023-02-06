import React, { useMemo, useState } from "react";
import "../assets/styles/image-card.scss";
import ICON_PLAY from "../assets/images/play.svg";
import ICON_ADD from "../assets/images/add.svg";
import DetailView from "./DetailView";

const ImageCard = ({ imageSrc, title, year, rating, runTime, director, language, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const expandStyle = useMemo(
    () => ({
      height: showDetails ? "auto" : "0",
      transition: "height 1.5s",
    }),
    [showDetails]
  );

  return (
    <>
      <div style={expandStyle}>
        {showDetails && (
          <DetailView
            imageSrc={imageSrc}
            title={title}
            year={year}
            rating={rating}
            runTime={runTime}
            director={director}
            language={language}
            description={description}
          />
        )}
      </div>
      <div className="card-container">
        <div
          className="d-flex align-items-center justify-content-center"
          onClick={() => setShowDetails(!showDetails)}
        >
          <img src={imageSrc} className="card-image" />
        </div>
        <div className="u-font-14 text-start u-text-ellipsis my-2">{title}</div>
        <div className="d-inline-flex align-items-center justify-content-start w-100">
          <img src={ICON_PLAY} alt="" className="me-3" />
          <img src={ICON_ADD} alt="" />
        </div>
      </div>
    </>
  );
};

export default ImageCard;
