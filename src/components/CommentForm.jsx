import React, { useState } from 'react';
import '../styles/CommentForm.css';

const CommentForm = ({ comments, setComments }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isAccepted, setIsAccepted] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const ISODate = new Date().toLocaleString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const newComment = {
      name,
      message,
      date: ISODate,
    };

    if (isAccepted) {
      setComments([...comments, newComment]);
      setName('');
      setMessage('');
      setEmail('');
      setIsAccepted(false);
      setErrorText('');
    } else {
      setErrorText('Bitte akzeptiere die Datenschutzerklärung');
    }
  };

  const handlePrivacyChange = (e) => {
    setIsAccepted(e.target.checked);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h4>Schreib einen Kommentar</h4>

        <p className='text-p'>Deine E-Mailadresse wird nicht öffentlich angezeigt. Erforderliche Felder sind mit * markiert.</p>

        <label htmlFor="message"></label>
        <textarea
          id="message"
          name="message"
          value={message}
          placeholder="Nachricht"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />

        <label htmlFor="name"></label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Ihre E-Mail Adresse"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <div className="privacy-container">
          <input type="checkbox" id="privacy" checked={isAccepted} onChange={handlePrivacyChange} />

          <label htmlFor="privacy">Ich habe die Datenschutzerklärung gelesen und akzeptiere sie.</label>
        </div>

        {errorText && <p className="error">{errorText}</p>}

        <button type="submit">Kommentar Abschicken</button>
      </form>
    </div>
  );
};

export default CommentForm;