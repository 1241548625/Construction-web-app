import React from "react";
import project1 from "../asset/Project1.jpg";
import project2 from "../asset/Project2.jpg";
import project3 from "../asset/Project3.jpg";
import project4 from "../asset/Project4.jpg";
import Navbar from "./Navbar";
import "./ProjectPage.css";

const project = [
  {
    title: "project1",
    image: project1,
    description: "This is a short description",
  },
  {
    title: "project2",
    image: project2,
    description: "This is a short description",
  },
  {
    title: "project3",
    image: project3,
    description: "This is a short description",
  },
  {
    title: "project4",
    image: project4,
    description: "This is a short description",
  },
  {
    title: "project1",
    image: project1,
    description: "This is a short description",
  },
];

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="portition"></div>
      {project.map((project) => (
        <div class="project-container">
          <h3 class="title"></h3>
          <div class="content">
            <a href="" target="_blank">
              <div class="content-overlay"></div>
              <img class="content-image" src={project.image} alt="" />
              <div class="content-details fadeIn-bottom">
                <h3 class="content-title">{project.title}</h3>
                <p class="content-text">{project.description}</p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
