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
        text: `As a designer, I create visual identities that capture the essence of your brand. From color selection and typography to designing impactful logos, my goal is to build an identity that resonates with your audience and reflects your values. Let’s transform your brand's first impression into an unforgettable experience.`,
        image: '/assets/branding.png',
      };
    } else if (selectedTab === 1) {
      obj = {
        title: 'Visual Identity',
        text: `Brand positioning is essential to make your company stand out in a competitive market. I work to define your brand's voice, values, and promise, ensuring it is perceived uniquely and relevantly. Together, we can build an authentic narrative that connects your brand with your target audience.`,
        image: '/assets/visual-id.png',
      };
    } else if (selectedTab === 2) {
      obj = {
        title: 'Web Design',
        text: `If your brand needs a fresh start, rebranding can be the solution. With a strategic and creative approach, I help reinvent your brand by modernizing its visual identity and repositioning it in the market. Let’s revitalize your brand’s perception and reach new audiences!`,
        image: '/assets/web-design.png',
      };
    }

    return <ServiceTab title={obj.title} text={obj.text} image={obj.image} />;
  };

  return (
    <section id='services' className='flex text-center services-section'>
      <div data-aos='zoom-in'>
        <h1 className='main-title'>
          What can I <br /> do for you?
        </h1>
        <p className='main-sub-title'>
          Boost your company's identity and <br />
          achieve better results.
        </p>
      </div>
      <div data-aos='zoom-in' className='tabs-wrapper'>
        <ul className='tabs-group'>
          <Tab
            label='Branding'
            onClick={() => handleTabChange(0)}
            isActive={selectedTab === 0}
          />
          <Tab
            label='Visual Id'
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
