import './contact.scss';

function Contact() {
  return (
    <section className='flex text-center gap-8 experience-section'>
      <h1 className='main-title contact-title'>
        Do you have amazing projects in mind?
        <br /> Let's talk
      </h1>
      <div className='btn-section gap-1 md:flex-row'>
        <button className='btn btn-big btn-primary'>Get in touch</button>
        <button className='btn btn-big btn-primary-ghost'>
          Request a quote via email
        </button>
      </div>
    </section>
  );
}

export default Contact;
