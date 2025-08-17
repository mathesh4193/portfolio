import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCard";
import Particle from "../Particle";
import html from "../Certification/html.jpg";
import react from "../Certification/react.jpg";
import googlecloud from "../Certification/googlecloud.jpg";
import socialnetwork from "../Certification/socialnetwork.jpg";
import cloudcomputing from "../Certification/couldcomputing.jpg"
import android from "../Certification/android.jpg";




function Certification() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I’ve earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={html}
              title="Html and css Certification"
              description=" HTML defines webpage elements, CSS enhances their visual presentation."
              issuer="Guvi"
              date="Aug 2025"
              credentialId="y95q2hLz8078p11f34"
              certLink="https://www.guvi.in/verify-certificate?id=45k18X70M753vQ541P"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={react}
              title="React.js Certification"
              description="covers React.js fundamentals, hooks, state management, and advanced patterns."
              issuer="Guvi"
              date="Aug 2025"
              credentialId="45k18X70M753vQ541P"
              certLink="https://www.guvi.in/verify-certificate?id=45k18X70M753vQ541P"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={googlecloud}
              title="Trust and Security with Google Cloud Certificate"

              description="Google Cloud ensures trust by providing enterprise-grade security and compliance."
              issuer="Backend Masters"
              date="jun 2025"
              credentialId="bvCpFgZ0TVb"
              certLink="https://simpli-web.app.link/e/bvCpFgZ0TVb"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={socialnetwork}
              title="Social Network"
              description="Built a social network platform with user authentication, profile management, and real-time messaging."
              issuer="Nptel"
              date="Nov 2023"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={cloudcomputing}
              title="Cloud Computing Intership"
              description="Cloud computing intership provides scalable, on-demand computing resources over the internet."
              issuer="Quantanics TechServ Pvt Ltd"
              date="Jul 2024"
            />
          </Col>
           <Col md={4} className="project-card">
            <CertificationCard
              imgPath={android}
              title="Android App Development Intership"
              description="Android app development involves creating mobile applications for the Android operating system using Java or Kotlin."
              issuer="NSIC"
              date="Dec 2023"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certification;