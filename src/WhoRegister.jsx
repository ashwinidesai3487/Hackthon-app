import React from 'react'
import { Container, Navbar, Nav, Button ,Row, Col} from 'react-bootstrap';
import Register from '../src/Assets/register.png';
const WhoRegister = () => {
  return (
    <section id="who">
    <div className="text-light py-5" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
   
   
   <Container className="cust_Container">
      <div>
        <Row>
          {/* Left Side with Image */}
          <Col xs={12} md={5} className="d-flex justify-content-center align-items-center position-relative">
            <img src={Register} className="register_image" alt="Register" />
            <div className="border_line"></div>
          </Col>

          {/* Header */}
          <Col xs={12} md={3} className='mt-4'>
            <h1 className="register_header">Who Should Register</h1>
          </Col>

          {/* Content */}
          <Col xs={12} md={3} className='mt-4 mb-3'>
            <span className="register_content">
            The JG Hackathon is open to every Junglee: across teams, locations, and expertise! Whether you're from Tech, Design, Marketing, or Operations, this is your stage to innovate and create.<br/><br/>

Form a squad of up to 5 champions, bring your ideas to life, and solve exciting challenges. Coders, creators, and innovative thinkers, this adventure is for everyone. Let’s collaborate, think big, and make an impact together!
            </span>
          </Col>
        </Row>
      </div>
    </Container>
   
        </div>
        </section>
  )
}

export default WhoRegister
