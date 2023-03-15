import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css'


const ImageCard = props => {
    const {src, title, description} = props
    return (
        <Card className='card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ImageCard