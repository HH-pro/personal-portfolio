import React from "react";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/gym.png";
import projImg5 from "../assets/img/ecom.png";
import projImg6 from "../assets/img/foo.png";
import projImg7 from "../assets/img/dash.jpg";
import projImg8 from "../assets/img/keeper.png";
import projImg9 from "../assets/img/res.jpeg";
import projImg10 from "../assets/img/ress.jpeg";
import projImg11 from "../assets/img/tech.jpeg";
import projImg12 from "../assets/img/timer.png";
import projImg13 from "../assets/img/todo.png";
import projImg14 from "../assets/img/cv.png";
import projImg15 from "../assets/img/buddy.png";
import projImg16 from "../assets/img/doc.png";
import projImg17 from "../assets/img/job.png";
import projImg18 from "../assets/img/staff.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Gym Website",
      description: "Gym management website & Software",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "E-commerece Store",
      description: "Online store with payments and guest user shopping",
      imgUrl: projImg5,
    },
    {
      title: "E-commerece Store",
      description: "Online store your ideal under one step",
      imgUrl: projImg6,
    },
    {
      title: "E-commerece site",
      description: "Online store with payments and guest user shopping",
      imgUrl: projImg7,
    },
    {
      title: "keeper App",
      description: "Store personal data and information",
      imgUrl: projImg8,
    },
    {
      title: "Special Resturant point",
      description: "Design & Development",
      imgUrl: projImg9,
    },
    {
      title: "Food Corner",
      description: "Online foood corner with Whatsup and cart feature",
      imgUrl: projImg10,
    },
    {
      title: "Tech Corner",
      description: "Online Tech corner with Whatsup and cart featuret",
      imgUrl: projImg11,
    },
    {
      title: "Timer Startup",
      description: "Countdown timer",
      imgUrl: projImg12,
    },
    {
      title: "To-do list site",
      description: "Store your personal information and data",
      imgUrl: projImg13,
    },
    {
      title: "portfolio Website",
      description: "Personal portfolio website",
      imgUrl: projImg14,
    },
    {
      title: "portfolio Website",
      description: "Personal portfolio website",
      imgUrl: projImg15,
    },
    {
      title: "Votting buddy Website",
      description: "Take Quiz about political",
      imgUrl: projImg16,
    },
   
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I am Full stack Web Developer and Unity Game Developer....</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Past Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Past Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Past Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
