import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './CustomNavbar';
import AboutPage from './AboutPage';
import AboutHackton from './AboutHackton';
import WhoRegister from './WhoRegister';
import Rule from './Rule';
import Rewards from './Rewards';
import Panel from './Panel';
function App() {
  return (
    <div>
      <CustomNavbar />
      <AboutPage />
      <AboutHackton />
      <WhoRegister />
      <Rule />
      <Rewards />
      <Panel />
    </div>
  );
}

// const CustomNavbar = () => {
//   return (
//     <Navbar variant="dark" expand="lg" sticky="top">
//       <Container>
       
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#about" active>About</Nav.Link>
//             <Nav.Link href="#who">Who Should Register</Nav.Link>
//             <Nav.Link href="#rules">Hackathon Rules</Nav.Link>
//             <Nav.Link href="#rewards">Rewards</Nav.Link>
//             <Nav.Link href="#jury">Jury</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//           <Button variant="warning">Register Now</Button>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };


export default App;

