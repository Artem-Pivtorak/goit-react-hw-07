import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import css from './App.module.css';

import { fetchContacts, addContact, deleteContact } from './redux/contactsOps';
import { selectContacts, selectError, selectLoading } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox filter={filter} onChange={setFilter} />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
