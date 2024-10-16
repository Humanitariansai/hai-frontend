import React, { useState } from 'react';
import '../app/css/contact.css'

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with:', { name, email });
  };

  return (
    <div className="form-container">
      <h2>Connect with us</h2>
      <form onSubmit={handleSubmit} className="connect-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
