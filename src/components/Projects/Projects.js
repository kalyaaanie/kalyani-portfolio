import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import shoppingCartImg from "../../Assets/Projects/shoppingCartImg.png";

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
          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgmiProjectImg}
              isBlog={false}
              title="BGMI Tournaments "
              description="Developed a web application to streamline the process of organizing and participating in BGMI (Battlegrounds Mobile India) tournaments."
              ghLink="https://github.com/monk0707/bgmi-tournaments"
              demoLink="https://www.bgmitournaments.in/"
            />
          </Col>*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCartImg}
              isBlog={false}
              title="SHOPPING CART"
              description="Developed a versatile and responsive shopping cart application in which users can add and delete items in the cart."
              ghLink="https://github.com/kalyaaanie/shopping-cart"
              demoLink="https://shopping-cart-nw57.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/kalyaaanie/Random-Password-Generator"
              demoLink=" https://randompasswordgenerator111.netlify.app/"            
            />
          </Col>

{/*  <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xpensyImg}
              isBlog={false}
              title="Xpensy"
              description="Xpensy — a voice-powered budget tracker that makes managing money super easy. Built with React, Material UI, and Speechify, it lets you add income and expenses just by talking. No typing, no fuss."
              ghLink="https://github.com/kalyaaanie/Xpensy"
              demoLink="https://xpensy.vercel.app/"
            />
          </Col>*/}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Sorting Algorithm Visualizer"
              description="A Sorting Algorithm Visualizer is a tool that graphically demonstrates how different sorting algorithms arrange data. It uses bars or other visual elements to represent array elements, showing comparisons and swaps in real time. Common algorithms like Bubble Sort, Merge Sort, and Quick Sort are animated for better understanding. The visual feedback helps users grasp time and space complexities intuitively. It’s widely used in education to teach sorting logic interactively."
              ghLink="https://github.com/kalyaaanie/Sorting-Algorithm-Visualizer"
              demoLink="https://sorting-algorithm-visualizer11.netlify.app/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacTwist"
              description="TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://github.com/kalyaaanie/tictactoe"
              demoLink="https://tictacctoe1111.netlify.app/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
  </Container>
  );
}

export default Projects;
