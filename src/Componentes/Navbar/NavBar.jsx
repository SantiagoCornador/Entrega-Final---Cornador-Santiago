import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return  (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Link to='/'>
        <Navbar.Brand href="#home">Tienda SC</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className ={({isActive})=>isActive ? 'btn btn-primary':'btn btn-outline-primary'} to='/'>Inicio</NavLink>
            <NavLink className ={({isActive})=>isActive ? 'btn btn-primary':'btn btn-outline-primary'} to='/category/Remeras'>Remeras</NavLink>
            <NavLink className ={({isActive})=>isActive ? 'btn btn-primary':'btn btn-outline-primary'} to='/category/Buzos'>Buzos</NavLink>
            <NavLink className ={({isActive})=>isActive ? 'btn btn-primary':'btn btn-outline-primary'} to='/category/Pantalones'>Pantalones</NavLink>
            <NavLink className ={({isActive})=>isActive ? 'btn btn-primary':'btn btn-outline-primary'} to='/category/Zapatillas'>Zapatillas</NavLink>
          
          </Nav>
          <Nav>
            <Link to='/Detalle'>
              4 <CartWidget/>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar