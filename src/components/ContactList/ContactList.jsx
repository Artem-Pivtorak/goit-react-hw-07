import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';


export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
        </li>
      ))}
    </ul>
  );
};
