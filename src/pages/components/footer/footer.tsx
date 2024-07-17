import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faBehance, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <section className='top'>
        <div className='image-side'>
          <img src='/src/assets/logo-dark.png' alt='logo Mia' />
        </div>
        <div className='text-side'>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <div className='btn-group'>
            <button id='instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button id='behance'>
              <FontAwesomeIcon icon={faBehance} />
            </button>
            <button id='telegram'>
              <FontAwesomeIcon icon={faTelegram} />
            </button>
          </div>
        </div>
      </section>
      <hr />
      <div className='bottom'>
        <p>@ Copyright 2024 - Mia Sotel - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
