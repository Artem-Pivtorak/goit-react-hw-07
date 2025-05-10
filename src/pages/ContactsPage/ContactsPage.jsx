// src/pages/ContactsPage.jsx

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

import ContactForm from '..//../components/ContactForm/ContactForm';

import ContactList from '..//../components/ContactList/ContactList';
import Filter from '..//../components/Filter/Filter';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <h1>Контакти</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
