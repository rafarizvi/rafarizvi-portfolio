import resume from '../assets/files/resume-placeholder.pdf'

export default function Resume() {
  return (
    <>
      <h2>Resume</h2>
      <div className='resumeDiv'>
        <ul>
          <li>Download my<a href={resume} download style={{textDecoration:'none'}}> resume</a></li>
          <li>resume text with downloadable link</li>
        </ul>
      </div>
    </>
  );
}
