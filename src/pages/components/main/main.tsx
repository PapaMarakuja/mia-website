import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import './main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollIntoElement } from '../../../hooks/scrollIntoElement';

function Main() {
  return (
    <section id='home' className='main-section'>
      <div className='main-text'>
        <h1 className='main-title'>Hello, I am Mia, a brand designer</h1>
        <p className='main-sub-title'>
          With a disruptive vision and authenticity that break barriers, I create
          authentic and impactful brands.
        </p>
        <div className='btn-section gap-1 md:flex-row'>
          <button className='btn btn-secondary w-fit'>Get in touch</button>
          <button
            className='btn btn-secondary-ghost w-fit'
            onClick={() => scrollIntoElement('projects')}
          >
            <span className='btn-text-with-icon'>
              <span>Check projects</span>
              <div className='btn-text-icon-border'>
                <FontAwesomeIcon icon={faLongArrowRight} />
              </div>
            </span>
          </button>
        </div>
      </div>
      <div className='main-image'>
        <img src='/src/assets/main-image.png' />
      </div>
    </section>
  );
}

export default Main;
