import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function CertificationCard(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="certificate" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {props.description && (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}
        {props.issuer && (
          <Card.Text>
            <strong className="purple">Issued by: </strong>
            {props.issuer}
          </Card.Text>
        )}
        {props.date && (
          <Card.Text>
            <strong className="purple">Date: </strong>
            {props.date}
          </Card.Text>
        )}
        {props.credentialId && (
          <Card.Text>
            <strong className="purple">Credential ID: </strong>
            {props.credentialId}
          </Card.Text>
        )}
        {props.certLink && (
          <Button
            variant="primary"
            href={props.certLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; View Certificate
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;