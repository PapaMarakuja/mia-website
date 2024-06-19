import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faBehance, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='flex text-center gap-8 footer-section'>
      <div className='social-col'>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
        </ul>
        <div className='btn-group'>
          <button>
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBehance} />
          </button>
          <button>
            <FontAwesomeIcon icon={faTelegram} />
          </button>
        </div>
      </div>
      <div className='copy-col'>
        <img src='' alt='' />
        <p>@ Copyright 2024 - Mia Sotel - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
