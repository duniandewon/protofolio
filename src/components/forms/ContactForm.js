import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    subject: '',
    email: '',
    message: '',
  });

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    clearFields();
    alert(contact);
  };

  const clearFields = () =>
    setContact({
      name: '',
      subject: '',
      email: '',
      message: '',
    });

  return (
    <form className='contact-form' onSubmit={onSubmit}>
      <div className='input-field'>
        <label htmlFor='name'>Name</label>
        <input
          className='form-control'
          type='text'
          name='name'
          id='name'
          placeholder='Name'
          value={contact.name}
          onChange={onChange}
          required
        />
      </div>
      <div className='input-field'>
        <label htmlFor='subject'>Subject</label>
        <input
          className='form-control'
          type='text'
          name='subject'
          id='subject'
          placeholder='Subject'
          value={contact.subject}
          onChange={onChange}
          required
        />
      </div>
      <div className='input-field'>
        <label htmlFor='email'>Email</label>
        <input
          className='form-control'
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          value={contact.email}
          onChange={onChange}
          required
        />
      </div>
      <div className='input-field'>
        <label htmlFor='message'>Message</label>
        <textarea
          className='form-control'
          name='message'
          id='message'
          placeholder='Message'
          rows='3'
          value={contact.message}
          onChange={onChange}
          required
        />
      </div>
      <button className='btn primary'>submit</button>
    </form>
  );
};

export default ContactForm;
