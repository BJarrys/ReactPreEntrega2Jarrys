import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/BlancoBoutique.png';
import logoText from '../../img/BlancoBoutiqueText.png';

import './NavBar.css';

const NavBar = ({ background }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Quienes Somos</Nav.Link>
            <Nav.Link href="#link">Novedades</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Juego de Sábanas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sábanas ajustables
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cubrecamas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Acolchados
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#cart">
          <img className='logo-text' src={logoText} alt="logo" />
            </Nav.Link>
            <Nav.Link href="#cart">
            <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
