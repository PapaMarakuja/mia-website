import React from 'react';
import './service-tab.scss';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ServiceTabProps {
  title: string;
  text: string;
  image: string;
}

const ServiceTab: React.FC<ServiceTabProps> = ({ title, text, image }) => {
  const handleButtonClick = () => {
    window.open(
      `https://wa.me/5547997501164?text=${encodeURIComponent(
        'Olá, Mia. Tenho interesse em seu trabalho, pode me ajudar?'
      )}`,
      '_blank'
    );
  };

  return (
    <div className='service-tab'>
      <img loading='lazy' src={image} alt={title} className='service-tab-image' />
      <div className='text-side'>
        <h2 className='service-tab-title'>{title}</h2>
        <p className='service-tab-text'>{text}</p>

        <span onClick={handleButtonClick} className='contact'>
          <span>Entrar em contato</span>
          <div className='contact-icon'>
            <FontAwesomeIcon icon={faLongArrowRight} />
          </div>
        </span>
      </div>
    </div>
  );
};

export default ServiceTab;
