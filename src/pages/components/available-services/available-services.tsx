import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ArrowUpRight } from '../../../assets/arrow-up-right-icon';
import './available-services.scss';
import { faMailForward } from '@fortawesome/free-solid-svg-icons';

function AvailableServices() {
  const services = ['Visual identity', 'Brand positioning', 'Rebranding', 'Ui Design'];
  return (
    <section className='flex text-center services-section'>
      <h1 className='main-title'>
        What can I <br /> do for you?
      </h1>
      <p className='main-sub-title'>
        Boost your company's identity and <br />
        achieve better results.
      </p>
      <button className='btn btn-secondary'>
        Enter in contact <FontAwesomeIcon icon={faMailForward} />
      </button>
      <div className='services-grid'>
        {services.map((service, index) => (
          <div className='service-item' key={index}>
            {service}
            <div className='btn btn-secondary'>
              <ArrowUpRight />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AvailableServices;
