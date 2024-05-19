import resume from '../assets/files/resume-placeholder.pdf'

export default function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <div className='resumeDiv'>
          <h6>Download my<a href={resume} download style={{textDecoration:'none'}}> resume</a></h6>
          <h5>Front-end Projects</h5>
        <ul>
          <li>HTML</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
          <h5>Back-end Projects</h5>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </>
  );
}
