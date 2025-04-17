import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './recent-projects.scss';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../../App.scss';
import { isMobile } from '../../../hooks/isMobile';
import { Link } from 'react-router-dom';

function RecentProjects() {
  const images = [
    {
      src: '/assets/grid-image-4.png',
      title: 'Nuttini',
      fade: isMobile() ? 'flip-right' : 'fade-right',
      id: 'nuttini',
    },
    {
      src: '/assets/grid-image-1.png',
      title: 'Rôtasu Vigan',
      fade: isMobile() ? 'flip-left' : 'fade-left',
      id: 'rotasu-vigan',
    },
    {
      src: '/assets/grid-image-2.png',
      title: 'Cenourinha',
      fade: isMobile() ? 'flip-right' : 'fade-right',
      id: 'cenourinha',
    },
    {
      src: '/assets/grid-image-3.png',
      title: `Roast & Sip`,
      fade: isMobile() ? 'flip-left' : 'fade-left',
      id: 'roast-and-sip',
    },
  ];

  return (
    <section id='projects' className='projects-section'>
      <div className="projects-background"></div>
      <div data-aos='fade-up' className='projects-header'>
        <h1 className='projects-title'>
          Projetos <span className="highlight">Recentes</span>
        </h1>
      </div>
      <div className='gallery' data-aos='fade-up'>
        {images.map((image, index) => (
          <div
            key={index}
            className='image-container'
          >
            <img src={image.src} alt={image.title} />
            <Link to={`/about/${image.id}`} className='overlay'>
              <h3>{image.title}</h3>
              <div className="view-project">
                <span>Ver projeto</span>
                <FontAwesomeIcon icon={faLongArrowRight} className="arrow-icon" />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Link to="/portfolio" className='see-more'>
        <span>Ver mais projetos</span>
        <div className='see-more-icon'>
          <FontAwesomeIcon icon={faLongArrowRight} />
        </div>
      </Link>
    </section>
  );
}

export default RecentProjects;
