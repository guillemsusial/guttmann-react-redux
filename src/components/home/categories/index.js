import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./index.sass";
const immagenes = require.context("/src/assets/images", true);

function home_categories() {
  return (
    <div className='categories'>
      <ButtonGroup >
        <Button>Simon</Button>
        <Button>Sequence</Button>       
      </ButtonGroup>
    </div>
  );
}

export default home_categories;
