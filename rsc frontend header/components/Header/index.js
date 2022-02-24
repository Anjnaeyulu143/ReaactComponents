// import React from "react";
// import { Container, Toolbar, Typography, Divider } from "@mui/material";
// import { Dropdown, DropdownButton } from "react-bootstrap";

// const Header = () => {
//   return (
//     <>
//       <Toolbar className="bg-primary text-white">
//         <Typography>NoteZipper</Typography>
//         <div className="ml-auto">
//           <input
//             type="search"
//             className="form-control w-100"
//             placeholder="Search"
//           />
//         </div>

//         <div className="d-none d-md-inline ml-auto">
//           <div className="d-flex align-items-center text-light">
//             <Typography color="inherit" className="mr-2">
//               Notes
//             </Typography>
//             <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </DropdownButton>
//           </div>
//         </div>
//       </Toolbar>

//       <Divider />
//     </>
//   );
// };

// export default Header;

import React from "react";
import {
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link href="/">My Notes</Nav.Link>
            <NavDropdown title="Anjaneyulu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
