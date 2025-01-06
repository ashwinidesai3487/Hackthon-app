import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import rules_img from "../src/Assets/Hackathon rules.png";
import Dos from '../src/Assets/✅ Dos.png';
import Donts from '../src/Assets/❌ Don’ts.png';

const Rule = () => {
  return (
    <section id="rules">
    <div
      className="text-light py-5"
      style={{ backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Container>
        <Row>
          <Col xs="12" md="7">
            <h1 style={{ fontSize: "60px", fontWeight: "300" }}>
              Hackathon Rules
            </h1>

            <p style={{ fontSize: "11.5px", fontWeight: "700" }}>
              5 Members Max. Per Team: Each team can have a maximum of 5 members.
              We encourage teams to collaborate and leverage diverse skill sets,
              ensuring a blend of expertise while maintaining a manageable team
              size.
              <br /> <br />
              At Least One Engineer and One Product Professional on Each Team:
              To ensure the ideas are innovative, technically feasible, and
              market-ready, each team must include at least one engineer and one
              Product professional.
            </p>

            <h2 style={{ fontSize: "30px", fontWeight: "700" }}>
              Things to Keep in Mind
            </h2>

            <p style={{ fontSize: "11.5px", fontWeight: "700" }}>
              Power Up Your Ideas: It’s not just about having an idea: it needs
              to be fully powered up, operational, and ready to showcase. Teams
              should present a working prototype or solution that is functional
              and ready for a live demo.
              <br />
              <br />
              Collaboration Is Key: Innovate, collaborate, and enjoy the
              process. The best ideas emerge from diverse perspectives and
              teamwork. Bring your skills, passion, and collaborative mindset to
              turn your vision into reality.
              <br /> <br /> Challenge the Norms: Push boundaries, think
              creatively, and challenge conventional thinking. However, remember
              to maintain ethical standards and respect for all. Innovation
              thrives with integrity, so let’s create something exceptional,
              responsibly!
            </p>

            <Row>
              <Col xs="6" md="6">
                {/* <h2 style={{ fontSize: "30px", fontWeight: "700" }}>Dos</h2> */}
                <img src={Dos} width="85px" />
                <ul style={{ listStyle: "none", paddingLeft: "0" ,marginTop:"5px"}}>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Collaborate Like a Pro</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Teamwork wins the day! Share ideas, leverage strengths, and
                      embrace diverse perspectives to craft something
                      extraordinary.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Focus on Functionality</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      A working, demo-ready solution beats a fancy concept any
                      day. Prioritize implementation.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Follow Ethical Guidelines</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Respect intellectual property, maintain integrity, and stick
                      to ethical standards throughout your project.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Communicate Clearly</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Pitch your idea like a pro to both teammates and judges.
                      Clarity is everything.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Enjoy the Journey</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Hackathons are for learning, innovating, and having fun.
                      Dive in and make memories with your team!
                    </span>
                  </li>
                </ul>
              </Col>

              <Col xs="6" md="6">
              <img src={Donts} width="85px" />
                <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700",marginTop:"5px" }}>Go Solo</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      This is a team sport. Form a squad of up to 5, including an
                      engineer and a Product professional, to unlock your full
                      potential.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Cut Corners on Quality</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Speed matters, but not at the cost of quality. Ensure your
                      solution is polished and functional.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Break the Rules</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Stick to the guidelines—team size, roles, and project
                      scope—to ensure fairness and fun for all.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Copy and Paste</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      Originality is king. Steer clear of plagiarism and let your
                      own ideas shine.
                    </span>
                  </li>
                  <li>
                    <h4 style={{ fontSize: "20px", fontWeight: "700" }}>Forget to Test</h4>
                    <span style={{ fontSize: "11px", fontWeight: "400" }}>
                      A glitch-free, tested product speaks louder than unrealized
                      dreams. Impress the judges with a flawless demo!
                    </span>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col xs="12" md="5" className="d-none d-md-block">
  <img src={rules_img} alt="Hackathon rules visual" />
</Col>
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default Rule;