import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.scss';
import {
  faBehance,
  faDribbble,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/' || location.pathname === '/#home';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!isHomePage) {
        return;
      }

      const sections = ['home', 'services', 'projects', 'contact'];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top > 150 || rect.bottom < 150) {
          continue;
        }

        setActiveSection(section);
        return;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleButtonClick = (index: number) => {
    const sites = [
      'https://dribbble.com/SotelMia',
      'https://www.instagram.com/itsmiasotel',
      'https://www.behance.net/miiasotel',
      'https://t.me/miimiamia',
    ];
    window.open(sites[index] || '', '_blank');
  };

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    setActiveSection(id);

    // If we're not on the home page, navigate to home first
    if (!isHomePage) {
      navigate('/', { replace: true });
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Increased timeout to allow for page transition
    } else {
      // We're already on the home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`grid w-full ${scrolled ? 'scrolled' : ''}`}>
      <nav className='navbar'>
        <div className='desktop-navbar flex'>
          <div className='container navbar-container'>
            <div className='flex-start navbar-logo'>
              <Link to='/#home' onClick={(e) => handleLinkClick(e, 'home')}>
                <img src='/assets/logo.png' alt='Mia Sotel Logo' />
              </Link>
            </div>
            <ul className='desktop-navbar-wrapper'>
              <li className={activeSection === 'services' ? 'active' : ''}>
                <Link
                  className='navbar-link'
                  to='/#services'
                  onClick={(e) => handleLinkClick(e, 'services')}
                >
                  Serviços
                </Link>
              </li>
              <li className={activeSection === 'projects' ? 'active' : ''}>
                <Link
                  className='navbar-link'
                  to='/#projects'
                  onClick={(e) => handleLinkClick(e, 'projects')}
                >
                  Projetos
                </Link>
              </li>
              <li className={activeSection === 'contact' ? 'active' : ''}>
                <Link
                  className='navbar-link'
                  to='/#contact'
                  onClick={(e) => handleLinkClick(e, 'contact')}
                >
                  Contato
                </Link>
              </li>
            </ul>
            <div className='navbar-btn-wrapper'>
              <button onClick={() => handleButtonClick(0)} className='navbar-btn' aria-label="Dribbble">
                <FontAwesomeIcon icon={faDribbble} />
              </button>
              <button onClick={() => handleButtonClick(1)} className='navbar-btn' aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </button>
              <button onClick={() => handleButtonClick(2)} className='navbar-btn' aria-label="Behance">
                <FontAwesomeIcon icon={faBehance} />
              </button>
              <button onClick={() => handleButtonClick(3)} className='navbar-btn' aria-label="Telegram">
                <FontAwesomeIcon icon={faTelegram} />
              </button>
            </div>
          </div>
        </div>
        <ul className='mobile-navbar-wrapper'>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <Link
              className='navbar-link'
              to='/#home'
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              Home
            </Link>
          </li>
          <li className={activeSection === 'services' ? 'active' : ''}>
            <Link
              className='navbar-link'
              to='/#services'
              onClick={(e) => handleLinkClick(e, 'services')}
            >
              Serviços
            </Link>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <Link
              className='navbar-link'
              to='/#projects'
              onClick={(e) => handleLinkClick(e, 'projects')}
            >
              Projetos
            </Link>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <Link
              className='navbar-link'
              to='/#contact'
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
