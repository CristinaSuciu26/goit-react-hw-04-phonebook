import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts.map(contact => (
        <li key={contact.id}>
          {`${contact.name} - ${contact.number}`}
          <button
            onClick={() => onDeleteContact(contact.id)}
            className={styles.contactsListBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
