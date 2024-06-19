import './infinite-marquee.scss';

interface InfiniteSliderProps {
  items: string[];
}

const InfiniteMarqueeComponent: React.FC<InfiniteSliderProps> = ({ items }) => {
  return (
    <div className='wrapper'>
      {items.map((item, index) => (
        <p key={index} className={`wrapper-item item${index + 1}`}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default InfiniteMarqueeComponent;
