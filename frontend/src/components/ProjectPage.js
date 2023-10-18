import React from "react";
import project1 from "../asset/Project1.jpg";
import project2 from "../asset/Project2.jpg";
import project3 from "../asset/Project3.jpg";
import project4 from "../asset/Project4.jpg";
import Navbar from "./Navbar";
import "./ProjectPage.css";

const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <div className="portition"></div>
      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project1} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>

      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project2} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>

      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project3} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>

      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project4} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>

      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project1} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>

      <div class="project-container">
        <h3 class="title"></h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src={project2} alt="" />
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">This is a title</h3>
              <p class="content-text">This is a short description</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
