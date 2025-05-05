import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

import css from './App.module.css';

import { fetchContacts, addContact, deleteContact } from './redux/contactsOps';
import { selectFilteredContacts, selectError, selectLoading } from './redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
