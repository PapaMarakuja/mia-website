import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { faHeadset, faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className='grid'>
      <nav className='navbar'>
        <div className='desktop-navbar flex'>
          <div className='container navbar-container'>
            <div className='flex-start'>
              <img src='/src/assets/navbar-logo.png' alt='logo Mia' />
            </div>
            <ul className='desktop-navbar-wrapper'>
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
            <div className='flex-end'>
              <button className='btn btn-primary'>
                Enter in contact <FontAwesomeIcon icon={faPhoneAlt} />
              </button>
            </div>
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
