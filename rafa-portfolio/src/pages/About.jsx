import Card from 'react-bootstrap/Card';

import photo from '../assets/images/weather.png'

export default function About() {
  return (
    <>
    <h2>About</h2>
    <Card className='aboutCard'>
      <Card.Img variant="top" src={photo} className='aboutPic'/>
      <Card.Body>
        <Card.Text className='aboutTxt'>
        I'm Rafa Rizvi, a future web developer!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
          Officiis id maiores laboriosam iusto eum architecto beatae optio ea aliquam quidem facilis aliquid inventore, minima alias nostrum voluptatem. Fugiat, ut consequatur?
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}
