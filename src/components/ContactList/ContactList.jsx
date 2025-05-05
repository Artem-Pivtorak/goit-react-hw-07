import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onDelete(contact.id)} style={{ marginLeft: '10px' }}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
