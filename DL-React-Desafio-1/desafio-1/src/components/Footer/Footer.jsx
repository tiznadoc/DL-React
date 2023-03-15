import {Navbar,Container,Button} from "react-bootstrap";
import './footer.css';

const Footer = props =>{
    const {description} = props
    return (
        <Navbar fixed="bottom" className="nav-bar">
            <Container>
                <Navbar.Brand href="#home"><p>{description}</p></Navbar.Brand>
                <Button variant="dark">Me Gusta</Button>
            </Container>
        </Navbar>
    );
}

export default Footer
