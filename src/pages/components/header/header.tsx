import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollIntoElement } from '../../../hooks/scrollIntoElement';
import './header.scss';
import {
  faBehance,
  faDribbble,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

function Header() {
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
    <header className='grid'>
      <nav className='navbar'>
        <div className='desktop-navbar flex'>
          <div className='container navbar-container'>
            <div className='flex-start navbar-logo'>
              <a href='#home' onClick={() => scrollIntoElement('home')}>
                Mia
              </a>
            </div>
            <ul className='desktop-navbar-wrapper'>
              <li>
                <a
                  className='navbar-link'
                  href='#services'
                  onClick={() => scrollIntoElement('services')}
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  className='navbar-link'
                  href='#projects'
                  onClick={() => scrollIntoElement('projects')}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  className='navbar-link'
                  href='#contact'
                  onClick={() => scrollIntoElement('contact')}
                >
                  Contato
                </a>
              </li>
            </ul>
            <div className='navbar-btn-wrapper'>
              <button onClick={() => handleButtonClick(0)} className='navbar-btn'>
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button onClick={() => handleButtonClick(1)} className='navbar-btn'>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button onClick={() => handleButtonClick(2)} className='navbar-btn'>
                <FontAwesomeIcon icon={faBehance} />
              </button>
              <button onClick={() => handleButtonClick(3)} className='navbar-btn'>
                <FontAwesomeIcon icon={faTelegram} />
              </button>
            </div>
          </div>
        </div>
        <ul className='mobile-navbar-wrapper'>
          <li>
            <a
              className='navbar-link'
              href='#home'
              onClick={() => scrollIntoElement('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='navbar-link'
              href='#services'
              onClick={() => scrollIntoElement('services')}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              className='navbar-link'
              href='#projects'
              onClick={() => scrollIntoElement('projects')}
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              className='navbar-link'
              href='#contact'
              onClick={() => scrollIntoElement('contact')}
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
