import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/movie.png";
import income from "../../Assets/Projects/Income.png";
import hostel from "../../Assets/Projects/hostel.png";
import recipe from "../../Assets/Projects/RecipeApp.png";
import memory from "../../Assets/Projects/memory.png";
import kanban from "../../Assets/Projects/kanban.png";
import portfolio from "../../Assets/Projects/portfolio.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel Management System"
              description="Developed a role-based web-based Hostel Management System with student and warden access, featuring attendance, leave, and outpass modules integrated with Firebase for real-time sync and authentication."
              ghLink="https://github.com/mathesh4193/mathesh4"
              demoLink="https://hostel-management-vcet.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={income}
              isBlog={false}
              title="Income Expense Calculator"
              description="This is a responsive web application built using HTML, CSS, and JavaScript that allows users to track their income and expenses easily. It stores data in the browser using LocalStorage, so user data persists even after closing or refreshing the page."
              ghLink="https://github.com/mathesh4193/Income-Expense-Calculator"
              demoLink="https://incomeexpo.netlify.app//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe App"
              description="Developed a dynamic recipe application using React.js, TailwindCSS, and Axios with TheMealDB API, featuring search, filters, detailed recipe view, and favorites with localStorage persistence."
              ghLink="https://github.com/mathesh4193/recipe-app"
              demoLink="https://recipe-app44.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Search App"
              description="A full-featured movie search application built with React that integrates with the OMDB API. Users can search for movies, view detailed information, and manage a list of favorites."
              ghLink="https://github.com/Mathesh4193/movie_search_app"
              demoLink="https://movieser.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="Built a responsive Memory Game using HTML, CSS, and JavaScript with card flipping, shuffle, pair-matching logic, and restart functionality."
              ghLink="https://github.com/mathesh4193/Memory-Game-Task"
              demoLink="https://memorygamemini.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="kanban"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/mathesh4193/Kanban-Board"
              demoLink="https://kanban-board44.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
              <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Mathesh portfolio"
              description="Built a responsive personal portfolio website using React and Tailwind CSS to showcase projects, skills, and contact details with a modern, optimized design."
              ghLink=""
              demoLink=""
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
