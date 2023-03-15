import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card'
import ImageCard from './components/Card/Card';
import { Row } from 'react-bootstrap';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <Header
        title="Galería de imagenes en React"
      />
      <Row>
        <ImageCard
          src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
          title="Floater"
          description="Correr sobre el labio de la ola"
        />
        <ImageCard
          src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
          title="Floater"
          description="Correr sobre el labio de la ola"
        />
        <ImageCard
          src="https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg"
          title="Floater"
          description="Correr sobre el labio de la ola"
        />
      </Row>
      <Footer
        description="ilustraciones descriptivas de maniobras de Surf"
      />
    </div>
  )
}

export default App;
