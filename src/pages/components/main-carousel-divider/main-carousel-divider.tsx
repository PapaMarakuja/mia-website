import InfiniteMarqueeComponent from '../../../components/infinite-marquee/infinite-marquee';
import './main-carousel-divider.scss';

function CarouselDivider() {
  const wrapperItems = [
    'Visual ID',
    'Branding',
    'Creativity',
    'Innovation',
    'Aesthetics',
    'Illustration',
    'UI design',
    'UX design',
  ];

  return (
    <div className='divider'>
      <div className='dark-rectangle'>
        <InfiniteMarqueeComponent items={wrapperItems} />
      </div>
    </div>
  );
}

export default CarouselDivider;
