import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.scss';
import { faMailBulk, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section className='flex text-center gap-8 experience-section'>
      <h1 className='main-title contact-title'>
        Do you have amazing
        <br /> projects in mind?
        <br /> Let's talk
      </h1>
      <div className='btn-section gap-1 md:flex-row'>
        <button className='btn btn-responsive btn-primary'>
          Get in touch <FontAwesomeIcon icon={faPaperPlane} />
        </button>
        <button className='btn btn-responsive btn-primary-ghost'>
          Request a quote via email <FontAwesomeIcon icon={faMailBulk} />
        </button>
      </div>
    </section>
  );
}

export default Contact;
