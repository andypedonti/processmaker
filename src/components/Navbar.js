import React from "react";
import { Navbar, NavLink, Nav, Container, Form } from "react-bootstrap";
import {  Link, useLocation, withRouter } from "react-router-dom";
import "../components/Navbar.css";
import {Github} from '@styled-icons/boxicons-logos/Github';
import { EmailOutline} from '@styled-icons/evaicons-outline/EmailOutline';
import {LinkedinWithCircle} from '@styled-icons/entypo-social/LinkedinWithCircle';
import styled from "styled-components";

const Linkedin = styled(LinkedinWithCircle)`
color: #C42021;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

const LittleGithub = styled(Github)`
color: #FFA630;

cursor: pointer;
&:hover {
    color: white;
    
}
`;

const Email = styled(EmailOutline)`
color: #329F5B;
cursor: pointer;
&:hover {
    color: white;
    
}
`;

function Topbar() {
    
    const location = useLocation();
    
    return(
<Navbar className="Navbar" >
  <Navbar.Brand style={{color: "#F7F7F2"}}>Andy Pedonti</Navbar.Brand>
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link style={{color: "#F7F7F2"}} 
      to="/" className={location.pathname=== "/" ? "nav-link active" : "nav-link"}
      >
        Home
        </Link>
      <Link style={{color: "#F7F7F2"}} 
      to="/portfolio" className={location.pathname==="/portfolio" ? "nav-link active" : "nav-link"}
      >
      Portfolio
      </Link>
    </Nav>
     <Form className="d-flex">
    <Email 
    size="40" 
    onClick={event => window.location.href="mailto:andy.pedonti@gmail.com"}
    />
    <LittleGithub 
    size="40"
    onClick={event => window.location.href="https://github.com/andypedonti"}
    />
    <Linkedin
    size="35" 
    onClick={event => window.location.href="https://www.linkedin.com/in/andy-pedonti/"}
    />
     </Form>
    
  </Navbar.Collapse>
</Navbar>
        
 );
}

export default withRouter(Topbar);


