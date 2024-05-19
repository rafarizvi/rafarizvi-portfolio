
import github from '../assets/icons/github.png';
import stack from '../assets/icons/stack.png';
import linkedIn from '../assets/icons/linkedin.png';

function Footer() {
  return (
    <footer className='icons'>
      <a href='https://github.com/rafarizvi'><img src={github}></img></a>
      <a href='https://stackoverflow.com/'><img src={stack}></img></a>
      <a href='https://www.linkedin.com/in/rafa-rizvi-5b6412139'><img src={linkedIn}></img></a>
    </footer>
  )
}

export default Footer
