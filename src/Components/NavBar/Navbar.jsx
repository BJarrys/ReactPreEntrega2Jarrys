import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap';

import CartWidget from '../CartWidget/CartWidget';
import logo from '../../img/BlancoBoutique.png';
import logoText from '../../img/BlancoBoutiqueText.png';

import { getAllProducts } from '../../Helpers/GetDatos.jsx';

import './NavBar.css';

const NavBar = ({ background }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts(setProducts);
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <LinkContainer to="/">
        <Navbar.Brand>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div>
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>Quienes Somos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
            <Nav.Link>Novedades</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            {products.map((product) => (
              <LinkContainer to={`/category/${product.Nombre}`}>
              <NavDropdown.Item>{product.Descripcion}</NavDropdown.Item>
            </LinkContainer>
          ))}
            </NavDropdown>
            <LinkContainer to="/">
              <Nav.Link href="#link">Contacto</Nav.Link>
            </LinkContainer>
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
