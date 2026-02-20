import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Nieuw: voor de verzendstatus
  const [errorMessage, setErrorMessage] = useState(''); // Nieuw: voor foutmeldingen

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // LET OP: Pas de poort (3001) aan naar de poort van jouw backend!
      const response = await fetch('http://localhost:3001/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(result.error || 'Er ging iets mis.');
      }
    } catch (error) {
      setErrorMessage('Kan geen verbinding maken met de server. Staat je backend aan?');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2>Neem <span className={styles.highlight}>Contact</span> Op</h2>

        <div className={styles.contentWrapper}>
          
          <div className={styles.infoBox}>
            <h3>Let's Connect</h3>
            <p>
              Heb je een website in gedachten neem dan contact op. 
              Kijken of we samen in contact kunnen komen tot iets moois.
            </p>
            
            <div className={styles.details}>
              <div className={styles.detailItem}>
                <span>📧</span>
                <a href="mailto:Mateovukoje16@gmail.com">Mateovukoje16@gmail.com</a>
              </div>
              <div className={styles.detailItem}>
                <span>📍</span>
                <span>Nederland (Zuid-Holland) (Rotterdam)</span>
              </div>
            </div>
          </div>

          <div className={styles.formBox}>
            {isSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Bedankt {formData.name}! 🚀</h3>
                <p>Ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op.</p>
                <button onClick={() => setIsSubmitted(false)} className={styles.resetBtn}>
                  Nog een bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Jouw Naam</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Hoe mag ik je noemen?" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Emailadres</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="voorbeeld@email.nl" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Je Bericht</label>
                  <textarea 
                    name="message" 
                    placeholder="Vertel me over je project..." 
                    rows="5"
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>

                {/* Foutmelding display als er iets misgaat */}
                {errorMessage && <p style={{color: 'red', marginBottom: '1rem'}}>{errorMessage}</p>}

                <button 
                  type="submit" 
                  className={styles.submitBtn} 
                  disabled={isLoading}
                >
                  {isLoading ? 'Verzenden...' : 'Verstuur Bericht'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;