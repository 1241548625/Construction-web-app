import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../config";
import "./ProjectDetail.css";
import Navbar2 from "./Navbar2";

const ProjectDetail = () => {
  const params = useParams();
  const [images, setImages] = useState();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const importComponent = async () => {
      const images = [];
      const img_folder = Projects[params.projectId].img_folder;

      for (let i = 0; i < img_folder.length; i++) {
        const module = await import(`../asset/${img_folder[i]}`);
        images.push(module.default);
      }

      setImages(images);
    };

    importComponent();
  }, []);

  const showImage = (index) => {
    setCurrentImage((index + images.length) % images.length);
  };

  const changeImage = (n) => {
    showImage(currentImage + n);
  };
  return (
    <div>
      <Navbar2 />
      {images !== undefined ? (
        <div className="project-detail-container">
          <img
            className="image"
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
          />
          <div className="button-project">
            <button className="btn" onClick={() => changeImage(-1)}>
              Prev
            </button>
            <button className="btn" onClick={() => changeImage(1)}>
              Next
            </button>
          </div>
        </div>
      ) : (
        "no piactur"
      )}
    </div>
  );
};

export default ProjectDetail;
