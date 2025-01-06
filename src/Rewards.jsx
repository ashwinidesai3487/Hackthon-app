import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import rewards_img from '../src/Assets/rewards_group.png';

const Rewards = () => {
  return (
    <section id="rewards">
    <div className="text-light section-spacing" style={{ backgroundSize: 'cover', backgroundPosition: 'center', marginTop: "-86px" }}>
      <Container className="cust_reward_Container">
        <Row>
          <Col xs={12}>
            {/* Main Heading */}
            <h1 style={{ fontSize: "60px", fontWeight: "300", marginBottom: "10px" }} className="mt-3">
              Rewards & Recognition
            </h1>
  
            {/* Subheading */}
            <p style={{ fontSize: "16px", fontWeight: "300", color: "#ffffff", maxWidth: "800px" }}>
              The most innovative solutions will win epic rewards. Here are the amazing prizes that could be yours!
            </p>
          </Col>
        </Row>
  
        {/* Image and Overlay */}
        <Row className="justify-content-center align-items-center mt-4">
          <div style={{ position: "relative", width: "100%" }}>
            {/* Image */}
            <img src={rewards_img} alt="Rewards" style={{ width: "100%", marginTop: "100px", height: "auto" }} />
  
            {/* Text Overlay for Second Place */}
            <div
              style={{
                position: "absolute",
                top: "40%", 
                left: "24%", 
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
             <h2 className="reward-text">₹1,20,000</h2>
<p className="reward-text">+</p>
<p className="reward-text">Amazon echo dot 3rd gen</p>

            </div>
  
            {/* Text Overlay for First Place */}
            <div
              style={{
                position: "absolute",
                top: "12%", 
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              <h2 className="reward-text">₹1,20,000</h2>
              <p className="reward-text">+</p>
              <p className="reward-text">Amazon echo dot 3rd gen</p>
            </div>
  
            {/* Text Overlay for Third Place */}
            <div
              style={{
                position: "absolute",
                top: "38%", 
                left: "80%", 
                transform: "translate(-40%, -50%)",
                textAlign: "center",
                color: "#ffffff",
              }}
            >
              <h2 className="reward-text">₹1,20,000</h2>
              <p className="reward-text">+</p>
              <p className="reward-text">Amazon echo dot 3rd gen</p>
            </div>
          </div>
        </Row>
      </Container>
  
      <p className="text-center" style={{ fontSize: "11.5px", fontWeight: "700" }}>
        Note: The cash prize will be awarded collectively to the winning team, while the other prizes will be given individually to the team members.
      </p>
    </div>
  </section>
  
  
  )
}

export default Rewards
