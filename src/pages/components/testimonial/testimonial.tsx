import './testimonial.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

function Testimonial() {
  const clients = [
    {
      id: 1,
      name: 'Julie Molina',
      message:
        'The logo is super modern and perfectly reflects the brand’s personality. Love it',
      image: '/src/assets/julie.jpg',
    },
    {
      id: 2,
      name: 'Bueno’s',
      message:
        'You know that thing about less is more? It’s perfect here. Now Bueno’s says it easily and we understand right away. Show!',
      image: '/src/assets/buenos.png',
    },
    {
      id: 3,
      name: 'Bake by Mia',
      message:
        'We are in love! The idea of getting out of the ordinary and bringing these lyrics differently was awesome, congratulations!!!!!',
      image: '/src/assets/bake-by-mia.png',
    },
    {
      id: 4,
      name: 'Carrot Wines',
      message:
        'I simply loved! The vibe of this look is awesome, easy to enjoy. Just imagine opening a wine with this top visual identity? It’s success for sure!',
      image: '/src/assets/carrot-wines.jpg',
    },
  ];

  return (
    <section className='flex text-center gap-8 services-section'>
      <h1 className='main-title'>
        Check out what my
        <br /> clients are saying
      </h1>
      <div className='swipper-wrapper'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwiper'
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <div className='card'>
                <div className='card-image'>
                  <img src={client.image} alt={client.name} />
                </div>
                <h1 className='card-title'>{client.name}</h1>
                <p className='card-text'>{client.message}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className='carousel'>
        {clients.map((client, index) => (
          <div key={index} className='card'>
            <div className='card-image'>
              <img src={client.image} alt={client.name} />
            </div>
            <h1 className='card-title'>{client.name}</h1>
            <p className='card-text'>{client.message}</p>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default Testimonial;
