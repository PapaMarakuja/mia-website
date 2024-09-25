import { useState } from 'react';
import './contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    form_name: '',
    form_phone: '',
    form_email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('🐒 - e.target.id:', e.target.id);
    console.log('🐒 - e.target.value:', e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { form_name, form_phone, form_email } = formData;

    if (!form_name || !form_email) {
      return;
    }

    const subject = `New Contact: ${form_name}`;
    const body = `Name: ${form_name}\nPhone: ${form_phone}\nEmail: ${form_email}`;

    window.location.href = `mailto:hello@miasotel.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id='contact' className='contact-section' data-aos='zoom-in'>
      <div className='left-container'>
        <h1 className='main-title contact-title'>
          Do you have
          <br /> amazing projects
          <br /> in mind? Let's talk
        </h1>
      </div>
      <div className='right-container'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='form_name'>
            Name <b>*</b>
          </label>
          <input
            id='form_name'
            type='text'
            value={formData.form_name}
            onChange={handleChange}
            autoComplete='off'
          />
          <label htmlFor='form_phone'>Phone</label>
          <input
            id='form_phone'
            type='text'
            value={formData.form_phone}
            onChange={handleChange}
            autoComplete='off'
          />
          <label htmlFor='form_email'>
            Email <b>*</b>
          </label>
          <input
            id='form_email'
            type='email'
            value={formData.form_email}
            onChange={handleChange}
            inputMode='email'
            autoComplete='off'
          />
          <button type='submit' className='btn btn-secondary'>
            Send E-mail
          </button>
        </form>
        <p>
          Fields with <b>*</b> are required
        </p>
      </div>
    </section>
  );
}

export default Contact;
