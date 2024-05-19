import Card from 'react-bootstrap/Card';

import photo from '../assets/images/profile-photo.png';

export default function About() {
  return (
    <>
    <h2>About</h2>
    <Card className='aboutCard'>
      <Card.Img variant="top" src={photo} className='aboutPic'/>
      <Card.Body>
        <Card.Text className='aboutTxt'>
        Hello I'm Rafa! I'm excited to share my journey from chemical engineering to web development. With a degree in chemical engineering, I honed my analytical and problem-solving skills, but over time, I discovered a passion for web development that led me to explore HTML, CSS, and JavaScript. This growing interest inspired me to transition careers and enroll in a full stack web development bootcamp, covering front-end and back-end technologies like Node.js, Express, and MongoDB. My engineering background equips me with valuable problem-solving abilities, analytical thinking, and attention to detail, all of which are crucial in web development. As I progress through the bootcamp, I'm eager to apply my skills to real-world projects, collaborate with other developers, and continuously improve my craft, blending engineering discipline with creative passion to create innovative and impactful web applications.
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}
