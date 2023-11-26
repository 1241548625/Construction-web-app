import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "../config";
import Project1 from "../asset/project1/Project1.jpg";

const ProjectDetail = () => {
  const params = useParams();
  const [projectFolder, setProjectFolder] = useState();
  const [images, setImages] = useState();

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

  return (
    <div>
      {params.projectId}
      {images !== undefined
        ? images.map((image, index) => {
            return <img src={image} alt={image} />;
          })
        : ""}
    </div>
  );
};

export default ProjectDetail;
