import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import hackthon from '../src/Assets/JG hackathon logo 1.png';
import Group from '../src/Assets/Group.png';
import Time from '../src/Assets/time.png';

const AboutPage = () => {
  return (
    <section id="about">
    <div className="text-light py-5" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row className="align-items-center">
          {/* Left side content (image + text) */}
          <Col xs={12} md={6} style={{ padding: 15}}>
  <div
    style={{
      display: 'block', // Remove flexbox to see if that resolves the issue
      marginBottom: '20px',
      textAlign: 'left', // Ensure text is left aligned
    }}
  >
    <img
      src={hackthon}
      alt="Hackathon"
      style={{
        marginBottom: '20px',
        width: '100%',
        maxWidth: '346px',
        height: 'auto',
      }}
    />
    <p
      style={{
        fontSize: "23.83px",
        fontWeight: "400",
        textTransform: "uppercase",
        color: "#FA6F00",
        margin: 0, // Reset margin for p tags
      }}
    >
      Innovate. Collaborate. Lead.
    </p>
    <h1 className="display-4 fw-bold mt-3" style={{ fontSize: "57px", margin: 0,fontWeight:"600" }}>
      Think big. <span style={{ fontWeight: "300" }}>Build Bold.</span>
    </h1>
    <p
      className="lead mt-3"
      style={{
        fontSize: "30px",
        fontWeight: "400",
        margin: 0, // Reset margin for p tags
        padding: "0", // Reset padding
       
      }}
    >
      Shape the future of gaming at the <br/>Junglee Games Hackathon!
    </p>

    <p
  style={{
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "24.69px",
  }}
  className="mt-3"
>
  <span style={{ display: 'inline-block', marginRight: '10px' }}>
    <img
      src={Time} // Replace with the correct path to your image
      alt="Clock"
      width={20} // Adjust the width of the image as needed
      height={20}
      color="white" // Adjust the height to match the aspect ratio
    />
  </span>
  From 2:30 PM on Friday, 6th December to 3 PM on 7th December.</span>
</p>


  </div>
</Col>


          {/* Right side image */}
          <Col xs={12} md={6} className="text-center text-md-right">
            <img
              src={Group}
              alt="Group"
              style={{
                marginBottom: '20px',
                width: '100%',
                maxWidth: '722px',
                height: 'auto',
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default AboutPage;

