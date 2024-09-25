import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faBehance, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const handleButtonClick = (site: number) => {
    const sites: { [key: number]: string } = {
      1: 'https://www.instagram.com/miasoteldesign?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      2: 'https://www.behance.net/miiasotel',
      3: 'https://t.me/miimiamia',
    };
    window.open(sites[site] || '', '_blank');
  };

  return (
    <footer>
      <img src='/src/assets/miaSotel.png' alt='' />
      <hr />
      <div className='bottom'>
        <p>@ Copyright 2024 - Mia Sotel - Todos os direitos reservados.</p>
        <p>hello@miasotel.com</p>
      </div>
    </footer>
  );
}

export default Footer;
