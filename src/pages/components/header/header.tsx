import { scrollIntoElement } from '../../../hooks/scrollIntoElement';
import './header.scss';

function Header() {
  return (
    <header className='grid'>
      <nav className='navbar'>
        <div className='desktop-navbar flex'>
          <div className='container navbar-container'>
            <div className='flex-start'>
              <a href='#home' onClick={() => scrollIntoElement('home')}>
                <img src='/src/assets/logo.png' alt='Mia' />
              </a>
            </div>
            <ul className='desktop-navbar-wrapper flex-end'>
              <li>
                <a
                  className='navbar-link'
                  href='#services'
                  onClick={() => scrollIntoElement('services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className='navbar-link'
                  href='#projects'
                  onClick={() => scrollIntoElement('projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className='navbar-link'
                  href='#contact'
                  onClick={() => scrollIntoElement('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className='mobile-navbar-wrapper'>
          <li>
            <a className='navbar-link' href=''>
              About
            </a>
          </li>
          <li>
            <a className='navbar-link' href=''>
              Services
            </a>
          </li>
          <li>
            <a className='navbar-link' href=''>
              Projects
            </a>
          </li>
          <li>
            <a className='navbar-link' href=''>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
