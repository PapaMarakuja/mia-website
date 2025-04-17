import './main.scss';
import { scrollIntoElement } from '../../../hooks/scrollIntoElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';

function Main() {
  const handleButtonClick = () => {
    window.open(
      `https://wa.me/5547997501164?text=${encodeURIComponent(
        'Olá, Mia. Tenho interesse em seu trabalho, pode me ajudar?'
      )}`,
      '_blank'
    );
  };

  return (
    <section id='home' className='main-section'>
      <div className="hero-background"></div>
      <div data-aos='fade-up' className='main-text'>
        <span className="greeting">Designer & Brand Strategist</span>
        <h1 className='main-title'>Olá, eu sou a <span className="highlight">Mia</span></h1>
        <p className='main-sub-title'>
          Com uma visão disruptiva e autenticidade que rompem barreiras, crio marcas
          autênticas e impactantes.
        </p>
        <div className='btn-section gap-1 md:flex-row'>
          <button className='btn btn-secondary w-fit' onClick={handleButtonClick}>
            Entrar em contato
          </button>
          <button
            className='btn btn-secondary-ghost w-fit'
            onClick={() => scrollIntoElement('projects')}
          >
            Ver todos os trabalhos
          </button>
        </div>
      </div>
      <div data-aos='fade-left' className='main-image'>
        <img loading='lazy' src='/assets/main-image.png' alt="Mia Sotel" />
      </div>

      <div className="scroll-indicator" onClick={() => scrollIntoElement('services')}>
        Desça para ver mais{' '}
        <FontAwesomeIcon className='text-2xl text-primary' icon={faLongArrowDown} />
      </div>
    </section>
  );
}

export default Main;
