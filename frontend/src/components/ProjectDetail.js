import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../config";
import "./ProjectDetail.css";
import Navbar from "./Navbar";

const ProjectDetail = () => {
  const params = useParams();
  const [images, setImages] = useState();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const importComponent = async () => {
      console.log("Import Component");
      // console.log(Projects);
      // console.log(typeof params.projectId);
      // console.log(Projects["1"]);
      // console.log(Projects[params.projectId].img_folder);
      // Project1[params.projectId].img_folder.forEach((path) => {
      //   const modules = import(`../asset/${path}`);

      // });
      const images = [];
      const img_folder = Projects[params.projectId].img_folder;
      console.log(Projects[params.projectId]);
      console.log(img_folder);
      for (let i = 0; i < img_folder.length; i++) {
        const module = await import(`../asset/${img_folder[i]}`);
        images.push(module.default);
      }
      // let p = Projects[params.projectId].img_folder;
      // const module = await import(`../asset/${p}`);
      setImages(images);
    };
    console.log(Projects);
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
      <Navbar />
      {/* {params.projectId}
      {images !== undefined
        ? images.map((image, index) => {
            return <img src={image} alt={image} />;
          })
        : ""} */}
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
        " "
      )}
    </div>
  );
};

export default ProjectDetail;
