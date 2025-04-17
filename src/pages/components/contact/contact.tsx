import { useState } from 'react';
import './contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    form_name: '',
    form_phone: '',
    form_email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <section id='contact' className='contact-section'>
      <div data-aos='zoom-in' className='contact-container'>
        <div className='left-container'>
          <h1 className='main-title contact-title'>
            Do you have
            <br /> amazing projects
            <br /> in mind? <span className='highlight'>Let's talk</span>
          </h1>
        </div>
        <div className='right-container'>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label htmlFor='form_name'>
                Nome <b>*</b>
              </label>
              <input
                id='form_name'
                type='text'
                value={formData.form_name}
                onChange={handleChange}
                autoComplete='off'
                placeholder='Seu nome'
              />
            </div>

            <div className='input-group'>
              <label htmlFor='form_phone'>Telefone</label>
              <input
                id='form_phone'
                type='text'
                value={formData.form_phone}
                onChange={handleChange}
                autoComplete='off'
                placeholder='(00) 00000-0000'
              />
            </div>

            <div className='input-group'>
              <label htmlFor='form_email'>
                E-mail <b>*</b>
              </label>
              <input
                id='form_email'
                type='email'
                value={formData.form_email}
                onChange={handleChange}
                inputMode='email'
                autoComplete='off'
                placeholder='seu@email.com'
              />
            </div>

            <button type='submit' className='btn btn-secondary'>
              Enviar E-mail
            </button>
          </form>
          <p className='required-fields'>
            Campos com <b>*</b> obrigatórios.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
