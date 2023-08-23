import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <NavbarBrand>E-commerce React Project</NavbarBrand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">7
                    <LinkContainer to='/cart'>
                        <Nav.Link>
                            <FaShoppingCart /> Cart
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                    <Nav.Link>
                            <FaUser /> Login
                        </Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header