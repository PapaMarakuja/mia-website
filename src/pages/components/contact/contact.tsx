import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.scss';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id='contact' className='flex text-center gap-8 experience-section'>
      <h1 className='main-title contact-title'>
        Do you have amazing
        <br /> projects in mind?
        <br /> Let's talk
      </h1>
      <div className='btn-section gap-4 md:flex-row'>
        <button className='btn btn-responsive btn-primary'>Get in touch</button>
        <button className='btn btn-responsive btn-secondary-ghost btn-inherit-hover'>
          <span className='btn-text-with-icon text-icon-border-secondary'>
            <span>Request a quote via email</span>
            <div className='btn-text-icon-border'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Contact;
