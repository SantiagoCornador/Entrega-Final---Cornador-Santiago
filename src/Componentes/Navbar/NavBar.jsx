import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Tienda SC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Nosotros</Nav.Link>
                        <Nav.Link href="#pricing">Talles</Nav.Link>
                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Buzos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Pantalones
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        
                        <Nav.Link href="#deets">Ubicación</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Envios
                        </Nav.Link>
                        5<CartWidget/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar