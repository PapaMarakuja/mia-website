import AvailableServices from './components/available-services/available-services';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import CarouselDivider from './components/main-carousel-divider/main-carousel-divider';
import Main from './components/main/main';
import RecentProjects from './components/recent-projects/recent-projects';
import Testimonial from './components/testimonial/testimonial';
import './home.scss';

function Home() {
  return (
    <>
      <Header />
      <Main />
      <CarouselDivider />
      <AvailableServices />
      <RecentProjects />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
