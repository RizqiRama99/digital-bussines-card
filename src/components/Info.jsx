import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Photo from '../assets/photo.jpg'


const Info = () =>{
    return(
        <div>
            <div className='info'>
                <img src={Photo} alt="Muhammad Rizqi Ramadhan" srcset="" />
                <h1>Muhammad Rizqi Ramadhan</h1>
                <p>IT Enthusiast</p>
                <div className='contacts-button'>
                <address>
                <a href="mailto:rizqiramadhanfarid@gmail.com">
                <button className='email'>
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    <span>Email</span></button>
                </a>
                </address>
                <button className='linkedin'>
                    <a href="https://www.linkedin.com/in/muhammad-rizqi-ramadhan/" target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    <span>Linkedin</span>

                    </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Info