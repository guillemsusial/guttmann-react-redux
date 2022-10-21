import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const immagenes = require.context("/src/assets/images", true);
const juegos =['Simon','Sequence'];
function home_categories() {
  return (
    
    <div className='categories' >
      <div className='boton'>
        <ButtonGroup className='buttonGroup' >
          <Button>Categoria1</Button>
          <Button>Categoria2</Button>      
        </ButtonGroup>
      </div>
      <Row className="g-4 juegos ">
      {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
      {juegos.map((_, idx) =>(
        <Col>
          <Card>
            <Card.Img variant="top"  className='juego'/>{/*falta src="" */}
            <Card.Body>
              <Card.Title>{juegos[idx]}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}



export default home_categories;
