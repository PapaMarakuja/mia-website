import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehance,
  faDribbble,
  faInstagram,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const handleButtonClick = (index: number) => {
    const sites = [
      'https://dribbble.com/SotelMia',
      'https://www.instagram.com/itsmiasotel',
      'https://www.behance.net/miiasotel',
      'https://t.me/miimiamia',
    ];
    window.open(sites[index] || '', '_blank');
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-logo">
          <img src='/assets/miaSotel.png' alt='Mia Sotel Logo' />
        </div>

        <div className="social-links">
          <button onClick={() => handleButtonClick(0)} className='social-btn' aria-label="Dribbble">
            <FontAwesomeIcon icon={faDribbble} />
          </button>
          <button onClick={() => handleButtonClick(1)} className='social-btn' aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </button>
          <button onClick={() => handleButtonClick(2)} className='social-btn' aria-label="Behance">
            <FontAwesomeIcon icon={faBehance} />
          </button>
          <button onClick={() => handleButtonClick(3)} className='social-btn' aria-label="Telegram">
            <FontAwesomeIcon icon={faTelegram} />
          </button>
        </div>

        <hr />

        <div className='bottom'>
          <p>© Copyright 2025 - Todos os direitos reservados.</p>
          <p className="made-with">Design com ♥ por Mia Sotel</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
