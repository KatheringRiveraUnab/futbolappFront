import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {FaUserLock} from 'react-icons/fa';
import {GiSoccerBall} from 'react-icons/gi'
import { Link, Outlet} from 'react-router-dom';
export const CompNavMenu = () => {
  return (
    <>
    <Navbar expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/"><GiSoccerBall size={40} /></Navbar.Brand>
        <Navbar.Brand href="/">Futbol a tu Alcance</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="SignIn">Posiciones</Nav.Link>
            <Nav.Link href="SignIn">Calendario</Nav.Link>
            <Nav.Link as={Link} to={'/SignUp'}>Registrarse</Nav.Link>
            <Nav.Link href="SignIn"><FaUserLock /></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet>

      </Outlet>

    </section>
    </>
  );
}

export default CompNavMenu;