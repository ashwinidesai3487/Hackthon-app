import React from 'react'

import { Container, Button, Row, Col } from 'react-bootstrap';
import fill_one from '../src/Assets/fill-1.png'
import fill_two from '../src/Assets/fill-2.png'
import fill_three from '../src/Assets/fill-3.png'
import fill_four from '../src/Assets/fill-4.png'

const AboutHackton = () => {
  return (
    <div className="text-light py-3" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <Container>
      <Row className="align-items-center">
        {/* Left side content (image + text) */}
        <Col xs={12} md={6} style={{ padding: 15 }} className="text-center text-md-start">
          <div
            style={{
              display: 'block',
              marginBottom: '20px',
              textAlign: 'left',
            }}
          >
            <p
              style={{
                fontSize: '60px',
                fontWeight: '300',
                margin: 0,
              }}
            >
              About <br />
              the Hackathon
            </p>
          </div>
        </Col>
  
        {/* Right side content */}
        <Col xs={12} md={3} style={{ padding: 15 }} className="text-center text-md-start">
          <span>
            Gear up for an exhilarating season of innovation and impact! The Junglee Games Hackathon: Season 3 is here, calling on brilliant minds to redefine gaming and technology.
            Innovate, collaborate, and challenge the norm: your idea could shape the future of gaming, enhance business efficiency, or unlock the power of AI.
          </span>
        </Col>
  
        <Col xs={12} md={3} style={{ padding: 15 }} className="text-center text-md-start">
          <span>
            Gaming, enhance business efficiency, or unlock the power of AI. Whether you’re coding, ideating, or designing, this is your stage to shine and make a real difference.
            Let’s build the extraordinary. Are you ready to lead the change?
          </span>
        </Col>
      </Row>
  
      <Row>
        <Col xs={12} md={12} style={{ padding: 15 }}>
          <p>Take the Challenge: Submit your ideas in these categories</p>
        </Col>
      </Row>
  
      <Row>
        <Col xs={12} md={3} style={{ padding: 15 }} className="d-flex justify-content-center">
          <div className="div_AI">
            <div className="ms-2">
              <img src={fill_one} align="center" className="mt-2" style={{ marginLeft: '6px' }} />
            </div>
            <h1 className="subhead">AI</h1>
            <p className="mt-1 p-5 py-0 px-2 desc_inner">
              Unleash the game-changing power of AI! Build innovative AI solutions that will transform gaming as we know it.
            </p>
          </div>
        </Col>
  
        <Col xs={12} md={3} style={{ padding: 15 }} className="d-flex justify-content-center">
          <div className="div_Innovative">
            <div className="ms-2">
              <img src={fill_two} align="center" className="mt-2" style={{ marginLeft: '6px' }} />
            </div>
            <h1 className="subhead">Innovative Ideas</h1>
            <p className="mt-1 p-5 py-0 px-2 desc_inner">
              Have a mind-blowing concept? Share your visionary, disruptive ideas that defy the ordinary and redefine what’s possible in gaming.
            </p>
          </div>
        </Col>
  
        <Col xs={12} md={3} style={{ padding: 15 }} className="d-flex justify-content-center">
          <div className="div_AI">
            <div className="ms-2">
              <img src={fill_three} align="center" className="mt-2" style={{ marginLeft: '6px' }} />
            </div>
            <h1 className="subhead">Roadmap to the Future</h1>
            <p className="mt-1 p-5 py-0 px-2 desc_inner">
              Bring your future vision to life faster than ever: set the course for what’s next in gaming and beyond.
            </p>
          </div>
        </Col>
  
        <Col xs={12} md={3} style={{ padding: 15 }} className="d-flex justify-content-center">
          <div className="div_Innovative">
            <div className="ms-2">
              <img src={fill_four} align="center" className="mt-2" style={{ marginLeft: '5px' }} />
            </div>
            <h1 className="subhead">Productivity & Efficiency</h1>
            <p className="mt-1 p-5 py-0 px-2 desc_inner">
              Design tools or systems that boost engineering workflows and supercharge business operations for maximum impact.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>


  )
}

export default AboutHackton;
