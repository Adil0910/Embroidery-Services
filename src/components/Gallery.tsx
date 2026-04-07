import React from "react";

const images = [
  "/img/image1.jfif",
  "/img/hii.jfif",
  "/img/image3.jfif",
  "/img/image4.jfif",
  "/img/image5.jfif",
  "/img/image6.jfif",

];

function Gallery() {
  return (
    <div className="memory-section">
      
      {/* Top Heading */}
      <div className="top-bar">
        <div className="bottom">
        <div className="left">
          <h1>Memories ..</h1>
        </div>

        </div>
      </div>

      
      {/* Image Grid */}
      <div className="masonry">
        {images.map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt="img" />
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      

    </div>
  );
}

export default Gallery;