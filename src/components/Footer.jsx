import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () =>{
    return (
        <div className='footer'>
        <a href="https://www.google.com/" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faInstagram} className='instagram'/>
        </a>
        <a href="https://www.github.com/" target="_blank" rel='noreferrer'>
        <FontAwesomeIcon icon={faGithub}  className='github'/>
        </a>
        
      </div>
    )
}

export default Footer