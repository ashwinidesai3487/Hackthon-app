import React, { useState } from 'react';
import { Container, Row, Col,Tabs, Tab ,Card,Button } from "react-bootstrap";
import blank from '../src/Assets/Blank_Container.png';
const Panel = () => {
    const [activeTab, setActiveTab] = useState('panel1');


    const teamMembersJury = [
        {
          name: 'Nishu Goyal',
          role: 'Chief Technology Officer',
          image: blank,
        },
        {
          name: 'Abhishek Bharti',
          role: 'SVP of Technology',
          image: blank,
        },
        {
          name: 'Bharat Bhatia',
          role: 'Chief Marketing Officer',
          image: blank,
        },
        {
          name: 'Apoorv Kalra',
          role: 'Chief Product Officer',
          image: blank,
        },
      ];
    
      const teamMembersOrganizing = [
        {
            name: 'Nishu Goyal',
            role: 'Chief Technology Officer',
            image: blank,
          },
          {
            name: 'Abhishek Bharti',
            role: 'SVP of Technology',
            image: blank,
          },
          {
            name: 'Bharat Bhatia',
            role: 'Chief Marketing Officer',
            image: blank,
          },
          {
            name: 'Apoorv Kalra',
            role: 'Chief Product Officer',
            image: blank,
          },
      ];


  return (

    <section id="jury">

   
    <div className="text-light py-5" style={{ backgroundSize: 'cover', backgroundPosition: 'center',marginBottom:"50px" }}>
     <Container>
      <Row className="align-items-center">
        {/* Panel Heading */}
        <Col xs={12} md={6}>
          <h2 className="heading">Panel & Planners</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12}>
          <Tabs
            id="panel-planners-tabs"
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3 custom-tabs"
            justify
          >
            <Tab eventKey="panel1" title="Jury">
              {/* Jury Team Member Cards */}
              <Row>
                {teamMembersJury.map((member, index) => (
                  <Col xs={12} md={3} key={index} className="mb-4">
                    <Card  className='cust_card'>
                      <Card.Img variant="top" src={member.image} />
                      <Card.Body className={index % 2 === 1 ? 'custom_body_Tab2' : 'custom_body_Tab1'}>
                        <Card.Title className='text-center'>{member.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-center">
                          {member.role}
                        </Card.Subtitle>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="panel2" title="Organizing Committee">
              {/* Organizing Committee Team Member Cards */}
              <Row>
                {teamMembersOrganizing.map((member, index) => (
                  <Col xs={12} md={3} key={index} className="mb-4">
                    <Card className='cust_card'>
                      <Card.Img variant="top" src={member.image} />
                      <Card.Body className={index % 2 === 1 ? 'custom_body_Tab2' : 'custom_body_Tab1'}>
                        <Card.Title className='text-center'>{member.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-center">
                          {member.role}
                        </Card.Subtitle>
                       
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>

    <div className="end_div">
  <Row>
    <Col xs={12} md={6}>
      <p style={{ marginLeft: "20px" }}>Have questions?</p>
    </Col>

    <Col xs={12} md={6}>
      <p>Reach out to the organizing committee <br />members if you have any questions.</p>
    </Col>
  </Row>
</div>



          </div>

          </section>

  )
}

export default Panel
