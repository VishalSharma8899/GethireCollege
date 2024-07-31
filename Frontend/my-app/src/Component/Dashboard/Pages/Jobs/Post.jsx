import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Invite from "../../../Images/Invite.png";
import ActiveButton from "./ActiveButton";

function Post() {
  const lineSegments = [14, 2, 1];

  return (
    <div className="h-auto rounded-lg mx-3 bg-white p-4 md:h-72 md:p-6 lg:p-8">
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className="data flex flex-col mt-8 md:mt-16">
              <div>
                <p className="flex flex-wrap gap-2 text-2xl md:text-3xl font-semibold text-violet-700">
                  Corporate <span className="text-black">Connects</span>
                </p>
              </div>
              <div className="line flex gap-3 mt-2 md:mt-3">
                {lineSegments.map((width, index) => (
                  <div
                    key={index}
                    className="bg-violet-700 h-1"
                    style={{ width: `${width}rem` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus magni ex, libero corrupti quibusdam dolor quia voluptate sapiente, voluptatibus a, reiciendis voluptatem cumque!
              </p>
              <ActiveButton className="mt-4 md:mt-8 py-2 px-4 text-sm md:text-base" />
            </div>
          </Col>
          <Col sm={12} md={4} className="hidden md:flex justify-center md:justify-end">
            <img className="w-32 h-48 md:w-48 md:h-64" src={Invite} alt="Invite" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
