import { Navbar, Container, Nav, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useLocation } from "react-router"

const Header = ( {appName} ) => {
    const location = useLocation()
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/" className="navbar-brand">{ appName }</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/tenders" className="nav-link">Tenders</Link>
                </Nav>
                <Nav>
                    {location.pathname !== '/new' &&
                        <Link to="/new">
                            <Button variant="success">Add New</Button>
                        </Link>  
                    }                  
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
    )
}
Header.defaultProps = {
    appName: "Tenders Tracker"
}


export default Header

