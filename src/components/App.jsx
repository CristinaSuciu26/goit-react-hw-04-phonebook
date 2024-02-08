import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './contact-form/ContactForm';
import ContactList from './contact-list/ContactList';
import Filter from './filter/Filter';
import styles from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    } else {
      setContacts([]);
    }
  }, []);

  useEffect(() => {
    if (contacts !== null) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const addContact = (name, number) => {
    if (name.trim() === '' || number.trim() === '') return;

    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(` ${name} is already in contacts!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
    setFilter('');
  };

  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(() => updatedContacts);
    setFilter('');
  };

  if (contacts === null) {
    return <div>Loading...</div>;
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.phonebookContainer}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={addContact} />
      </div>

      <div className={styles.contactsContainer}>
        <h2>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList
          className={styles.form}
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
};
