import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col, Card } from "react-bootstrap";

function Github() {
  // Generate a cache-busting query parameter
  const timestamp = new Date().getTime();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
         My <strong className="purple">Github</strong>

      </h1>
      <GitHubCalendar
        username="mathesh4193"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />

      <Col md={8} style={{ marginTop: "30px", textAlign: "center" }}>
        <Card className="p-3 shadow rounded">
          <h2 className="purple">LeetCode Progress</h2>
          <img
            src={`https://leetcard.jacoblin.cool/913122104084-MatheshM?theme=dark&font=Baloo%202&ext=heatmap&t=${timestamp}`}
            alt="LeetCode Stats"
            style={{ maxWidth: "100%", borderRadius: "12px" }}
          />
        </Card>
      </Col>
    </Row>
  );
}

export default Github;
