import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './recent-projects.scss';
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../../App.scss';

function getScreenWidth() {
  const width = window.screen.width;
  return width;
}

function RecentProjects() {
  const isMobile = () => getScreenWidth() < 890;
  const images = [
    {
      src: '/assets/grid-image-4.png',
      title: 'Cenourinha',
      description: '',
      fade: isMobile() ? 'flip-right' : 'fade-right',
      link: 'https://www.behance.net/miiasotel',
    },
    {
      src: '/assets/grid-image-1.png',
      title: 'Bake by Mia',
      description: '',
      fade: isMobile() ? 'flip-left' : 'fade-left',
      link: 'https://www.behance.net/gallery/201312849/Bake-By-Mia',
    },
    {
      src: '/assets/grid-image-2.png',
      title: 'Roast & Sip',
      description: '',
      fade: isMobile() ? 'flip-right' : 'fade-right',
      link: 'https://www.behance.net/gallery/208621705/Roast-Sip',
    },
    {
      src: '/assets/grid-image-3.png',
      title: `Bueno's. Cores e Revestimentos`,
      description: '',
      fade: isMobile() ? 'flip-left' : 'fade-left',
      link: 'https://www.behance.net/gallery/187682561/Buenos-Cores-e-Revestimentos',
    },
  ];

  const redirectTo = (url: string) => {
    window.open(url || '', '_blank');
  };

  return (
    <section id='projects' className='flex text-center gap-0 services-section'>
      <div className='gallery'>
        {images.map((image, index) => (
          <div key={index} className='image-container' data-aos={image.fade}>
            <img loading='lazy' src={image.src} alt={image.title} />
            <div className='overlay' onClick={() => redirectTo(image.link)}>
              <h3>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <a href='' className='see-more'>
        <span>Ver mais projetos</span>
        <div className='see-more-icon'>
          <FontAwesomeIcon icon={faLongArrowRight} />
        </div>
      </a>
    </section>
  );
}

export default RecentProjects;
