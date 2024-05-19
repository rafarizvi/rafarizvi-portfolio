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
              <Card.Img variant="top" src={project.projectImg} className='projectImg' />
              <Card.Body className='projectContent'>
                <a href={project.deployedLink}><Card.Title>{project.projectName}</Card.Title></a>
                <Card.Text>{project.projectDescription}</Card.Text>
                <a href={project.github}><Button className='projectBtn'>Github</Button></a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </main>
  );
}

