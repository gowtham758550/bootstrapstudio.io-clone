import { Container,
         Nav,
         Navbar,
         NavDropdown,
        } from "react-bootstrap"
import '../styles/NavigationBar.css'

import Buttons from "./Buttons"

export default function NavigationBar () {
    return (
        <>
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img 
                        src="https://bootstrapstudio.io/assets/img/logo_128.png" 
                        alt="" 
                        width={40}
                        height={40}
                    />
                    Bootstrap Studio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="primary-navbar" />
                <Navbar.Collapse id='primary-navbar'>
                    <Nav className='ms-auto'>
                        <Nav.Link className="text-white" href="#features">
                            <span className="nav-item">Features</span>
                        </Nav.Link>
                        <NavDropdown title={<span className="text-white">Extras</span>} id="extras">
                            <NavDropdown.Item className="text-center" href="#sites-platform">Sites Platform</NavDropdown.Item>
                            <NavDropdown.Item className="text-center" href="#smart-forms">Smart Forms</NavDropdown.Item>
                            <NavDropdown.Item className="text-center" href="#ecommerce">Ecommerce</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="text-white" href="#docs">
                            <span className="nav-item">Docs</span>
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#forum">
                            <span className="nav-item">Forum</span>
                        </Nav.Link>
                        <Buttons className='sm-hidden' value="Purchase" variant="primary" /> 
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}