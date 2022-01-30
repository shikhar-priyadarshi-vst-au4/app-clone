import React from "react";

const ImageElem = ({ src = "" }) => {
  return (
    <>
      <div className="img-container">
        <span className="tr-icon"></span>
        <img src={src} alt="" className="img" />
      </div>
    </>
  );
};

export default ImageElem;
