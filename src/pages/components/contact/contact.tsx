import './contact.scss';

function Contact() {
  const handleButtonClick = () => {
    window.open(
      `https://wa.me/5547996986738?text=${encodeURIComponent(
        'Olá, Mia. Tenho interesse em seu trabalho, pode me ajudar?'
      )}`,
      '_blank'
    );
  };

  return (
    <section id='contact' className='flex text-center gap-8 experience-section'>
      <h1 className='main-title contact-title'>
        Do you have amazing
        <br /> projects in mind?
        <br /> Let's talk
      </h1>
      <div className='btn-section gap-4 md:flex-row'>
        <button className='btn btn-responsive btn-primary' onClick={handleButtonClick}>
          Get in touch
        </button>
        <button className='btn btn-responsive btn-secondary-ghost btn-inherit-hover'>
          <span className='btn-text-with-icon text-icon-border-secondary'>
            <span>Request a quote via email</span>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Contact;
