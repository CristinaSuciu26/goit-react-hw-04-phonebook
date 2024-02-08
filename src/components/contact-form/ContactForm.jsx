import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleNameChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddContact = () => {
    onAddContact(formData.name, formData.number);
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <div className={styles.form}>
      <label className={styles.inputs}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handleNameChange}
        />
      </label>
      <label className={styles.inputs}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formData.number}
          onChange={handleNameChange}
        />
      </label>

      <button className={styles.addContactBtn} onClick={handleAddContact}>
        Add Contact
      </button>
    </div>
  );
};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
export default ContactForm;
