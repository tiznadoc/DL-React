import {Navbar,Container} from "react-bootstrap";
import './header.css';

const Header = props =>{
    const {title} = props
    return (
        <Navbar className="nav-bar">
            <Container>
                <Navbar.Brand href="#home"><h1>{title}</h1></Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header