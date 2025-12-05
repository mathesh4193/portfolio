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
import flight from "../../Assets/Projects/flight.png"; // Add this if missing

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
              description="A responsive app built with HTML, CSS, and JavaScript to track income and expenses with persistent data storage using LocalStorage."
              ghLink="https://github.com/mathesh4193/Income-Expense-Calculator"
              demoLink="https://incomeexpo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe App"
              description="A dynamic recipe app built with React, TailwindCSS, and Axios using TheMealDB API, featuring search, filters, detailed views, and favorites saved in LocalStorage."
              ghLink="https://github.com/mathesh4193/recipe-app"
              demoLink="https://recipe-app44.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Search App"
              description="A React-based movie search app integrating OMDB API for detailed movie info, search, and favorites management."
              ghLink="https://github.com/Mathesh4193/movie_search_app"
              demoLink="https://movieser.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="A fun memory card-matching game built using HTML, CSS, and JavaScript with shuffle, flip, match logic, and restart options."
              ghLink="https://github.com/mathesh4193/Memory-Game-Task"
              demoLink="https://memorygamemini.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanban}
              isBlog={false}
              title="Kanban Board"
              description="A React-based Kanban board to organize tasks with drag-and-drop support, task creation, status columns, and workflow visualization."
              ghLink="https://github.com/mathesh4193/Kanban-Board"
              demoLink="https://kanban-board44.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Mathesh Portfolio"
              description="A modern personal portfolio built with React and Tailwind CSS to showcase skills, projects, and contact information."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Booking System"
              description="A full-stack flight booking system enabling users to search flights, check availability, book tickets, and manage reservations with real-time confirmation."
              ghLink="https://github.com/mathesh4193/Mathesh_client_flight"
              demoLink="https://matheshflight.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
