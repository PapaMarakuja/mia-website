import { useState } from 'react';
import './available-services.scss';
import ServiceTab from './tabs/service-tab';
import React from 'react';

type TabProps = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};

const Tab: React.FC<TabProps> = ({ label, onClick, isActive }) => (
  <li onClick={onClick} className={`tab ${isActive ? 'tab-active' : ''}`}>
    {label}
  </li>
);

function AvailableServices() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [animate, setAnimate] = React.useState(true);
  const handleTabChange = (index: number) => {
    setAnimate(false);
    setSelectedTab(index);
    setTimeout(() => setAnimate(true), 0); // Resetar a animação
  };

  const renderComponent = () => {
    let obj = { title: '', text: '', image: '' };

    if (selectedTab === 0) {
      obj = {
        title: 'Branding',
        text: `Eu te ajudo a fazer sua marca brilhar de verdade! Com uma estratégia de branding criativa e feita sob medida, a ideia é transformar seu negócio em algo memorável e relevante. Vamos juntos dar vida à sua visão, criando uma marca que atraia seu público e traga valor para seu negócio de forma genuína.`,
        image: '/assets/branding.png',
      };
    } else if (selectedTab === 1) {
      obj = {
        title: 'Identidade Visual',
        text: `Aqui a missão é traduzir a essência da sua marca em uma identidade visual única. Desde o logo até as cores e tipografias, meu foco é criar algo que realmente converse com o público. A identidade visual é como uma primeira impressão, e eu vou garantir que a sua seja marcante e inesquecível.`,
        image: '/assets/visual-id.png',
      };
    } else if (selectedTab === 2) {
      obj = {
        title: 'Web Design',
        text: `Crio sites modernos, responsivos e pensados para oferecer a melhor experiência para quem navega. O objetivo? Que seu site seja bonito, funcional e fácil de ser encontrado! Vamos desenvolver juntos um site que não só tenha a cara do seu negócio, mas que também entregue uma navegação super fluida em qualquer dispositivo.`,
        image: '/assets/web-design.png',
      };
    }

    return <ServiceTab title={obj.title} text={obj.text} image={obj.image} />;
  };

  return (
    <section id='services' className='flex text-center services-section'>
      <div data-aos='zoom-in'>
        <h1 className='main-title'>
          Serviços <br />
          Disponíveis
        </h1>
      </div>
      <div data-aos='zoom-in' className='tabs-wrapper'>
        <ul className='tabs-group'>
          <Tab
            label='Branding'
            onClick={() => handleTabChange(0)}
            isActive={selectedTab === 0}
          />
          <Tab
            label='Identidade Visual'
            onClick={() => handleTabChange(1)}
            isActive={selectedTab === 1}
          />
          <Tab
            label='Web Design'
            onClick={() => handleTabChange(2)}
            isActive={selectedTab === 2}
          />
        </ul>
        <div className={`services-tab ${animate ? 'animate-fade-in' : ''}`}>
          {renderComponent()}
        </div>
      </div>
    </section>
  );
}

export default AvailableServices;
