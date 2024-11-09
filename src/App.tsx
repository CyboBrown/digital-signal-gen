import { SetStateAction, useState } from "react";
import { Navbar, Container, Button, Form, InputGroup } from "react-bootstrap";
import SignalTable from "./SignalTable";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [currentCode, setCurrentCode] = useState("");

  function handleChange(e: { target: { value: SetStateAction<string> } }) {
    setInput(e.target.value);
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Digital Signal Generator</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse> */}
          <Form inline>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">0/1</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Input Binary"
                className="mr-sm-2"
                aria-label="Binary Code"
                value={input}
                onChange={handleChange}
              />
              <Button
                onClick={() => {
                  setCurrentCode(input);
                  console.log("Generate: " + input);
                }}
                type="submit"
              >
                Generate
              </Button>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
      <SignalTable code={currentCode}></SignalTable>
    </>
  );
}

export default App;
