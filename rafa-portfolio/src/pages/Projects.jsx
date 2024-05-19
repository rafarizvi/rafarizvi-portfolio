import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProjectCard({ projects }) {

  return (
    <main>
      <h2>Portfolio</h2>
      <div className='projDiv'>
        {projects.map((project) => (
          <div key={project.id} className="AllProjectCards">
            <Card style={{ width: '18rem' }} className="projectCard">
              <Card.Img variant="top" src={project.projectImg} className='projectImg'/>
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>{project.projectDescription}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>


  );
}

