import './available-services.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';

function AvailableServices() {
  const handleButtonClick = () => {
    window.open(
      `https://wa.me/5547997501164?text=${encodeURIComponent(
        'Olá, Mia. Tenho interesse em seu trabalho, pode me ajudar?'
      )}`,
      '_blank'
    );
  };

  return (
    <section id='services' className='services-section'>
      <div className="services-background"></div>
      <div data-aos='fade-up' className="services-header">
        <h1 className='services-title'>
          Serviços <span className="highlight">Disponíveis</span>
        </h1>
      </div>
      <div data-aos='fade-up' className='services-container'>
        <section className='service-item'>
          <div className='service-content'>
            <h2 className='service-title'>Branding</h2>
            <p className='service-description'>
              Eu te ajudo a fazer sua marca brilhar de verdade! Com uma estratégia de
              branding criativa e feita sob medida, a ideia é transformar seu negócio em
              algo memorável e relevante.
              <br className='block' />
              Vamos juntos dar vida à sua visão, criando uma marca que atraia seu público
              e traga valor para seu negócio de forma genuína.
            </p>
            <div className="service-cta" onClick={handleButtonClick}>
              <span>Entrar em contato</span>
              <div className='cta-icon'>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </div>
          </div>
          <div className='service-image-wrapper'>
            <img
              className='service-image'
              src='/assets/branding.png'
              alt='Branding'
            />
          </div>
        </section>

        <section className='service-item reverse'>
          <div className='service-content'>
            <h2 className='service-title'>Identidade Visual</h2>
            <p className='service-description'>
              Aqui a missão é traduzir a essência da sua marca em uma identidade visual
              única. Desde o logo até as cores e tipografias, meu foco é criar algo que
              realmente converse com o público.
              <br className='block' />A identidade visual é como uma primeira impressão, e
              eu vou garantir que a sua seja marcante e inesquecível.
            </p>
            <div className="service-cta" onClick={handleButtonClick}>
              <span>Entrar em contato</span>
              <div className='cta-icon'>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </div>
          </div>
          <div className='service-image-wrapper'>
            <img
              className='service-image'
              src='/assets/web-design.png'
              alt='Identidade Visual'
            />
          </div>
        </section>

        <section className='service-item'>
          <div className='service-content'>
            <h2 className='service-title'>Web Design</h2>
            <p className='service-description'>
              Crio sites modernos, responsivos e pensados para oferecer a melhor
              experiência para quem navega.
              <br className='block' />O objetivo? Que seu site seja bonito, funcional e
              fácil de ser encontrado! Vamos desenvolver juntos um site que não só tenha a
              cara do seu negócio, mas que também entregue uma navegação super fluida em
              qualquer dispositivo.
            </p>
            <div className="service-cta" onClick={handleButtonClick}>
              <span>Entrar em contato</span>
              <div className='cta-icon'>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </div>
          </div>
          <div className='service-image-wrapper'>
            <img
              className='service-image'
              src='/assets/visual-id.png'
              alt='Web Design'
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default AvailableServices;
