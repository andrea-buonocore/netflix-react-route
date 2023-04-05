import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../img/netflix_logo.png'
import Avatar from '../img/avatar.png'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MyNavbar = () => {

    const location = useLocation()
    console.log('LOCATION OBJECT', location)

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
                        <Link className="nav-link" to="/not-found">Home</Link>
                        <Link className={location.pathname === '/booking' ? 'nav-link active' : 'nav-link'} to="/">TvShows</Link>
                        <Link className="nav-link" to="/not-found">Movies</Link>
                        <Link className="nav-link" to="/not-found">Search</Link>
                        <Link className="nav-link" to="/not-found">Recently Added</Link>
                        <Link className="nav-link" to="/not-found">My List</Link>
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