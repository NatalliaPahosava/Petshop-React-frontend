import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Pets Adoption</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adoption">Adoption</Nav.Link>
            <NavDropdown title="Health" id="basic-nav-dropdown">
              <NavDropdown.Item href="/health">Vacine</NavDropdown.Item>
              <NavDropdown.Item href="/health">Neuter</NavDropdown.Item>
              <NavDropdown.Item href="/health">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header
