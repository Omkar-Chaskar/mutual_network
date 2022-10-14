import React from 'react';
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from 'react-router-dom';

function Navbar() {
    let location = useLocation();
  return (
    <Nav variant="tabs" defaultActiveKey={location.pathname}>
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link className="link-dark fw-bolder">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <LinkContainer to={"/seperation"}>
              <Nav.Link className="link-dark fw-bolder">Separation</Nav.Link>
            </LinkContainer>
          </Nav.Link>
        </Nav.Item>
      </Nav>
  )
}

export default Navbar