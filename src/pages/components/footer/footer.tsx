import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faBehance, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const handleButtonClick = (site: number) => {
    const sites: { [key: number]: string } = {
      1: 'https://www.instagram.com/miasoteldesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      2: 'https://www.behance.net/milenestel',
      3: 'https://t.me/miimiamia',
    };
    window.open(sites[site] || '', '_blank');
  };

  return (
    <footer>
      <section className='top'>
        <div className='image-side'>
          <img src='/src/assets/logo.png' alt='Mia' />
        </div>
        <div className='text-side'>
          <ul>
            <li>Social Media</li>
          </ul>
          <div className='btn-group'>
            <button id='instagram' onClick={() => handleButtonClick(1)}>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button id='behance' onClick={() => handleButtonClick(2)}>
              <FontAwesomeIcon icon={faBehance} />
            </button>
            <button id='telegram' onClick={() => handleButtonClick(3)}>
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
