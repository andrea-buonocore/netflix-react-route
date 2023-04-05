import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/netflix_logo.png'
import Avatar from '../img/avatar.png'
const MyNavbar = () => {
    return (
        <Navbar className="py-0 navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={Logo}       
                        width="120"
                        className="d-inline-block align-top"
                        alt="Netflix"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">TV Shows</Nav.Link>
                        <Nav.Link href="#">Movies</Nav.Link>
                        <Nav.Link href="#">Recently Added</Nav.Link>
                        <Nav.Link href="#">My List</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><i class="bi bi-search text-light"></i></Nav.Link>
                        <Nav.Link className='text-light'>KIDS</Nav.Link>
                        <Nav.Link><i class="bi bi-bell text-light"></i></Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" id="switchUser">
                                <img
                                    src={Avatar}
                                    width="30"
                                    height="30"
                                    className="d-inline align-top"
                                    alt="avatar"
                                />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;