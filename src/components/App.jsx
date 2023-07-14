import React, { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContactFulfilled, deleteContactFulfilled, setFilter, setContacts } from './store/contactsSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    if (!name || !number) {
      alert('Name and number are required.');
      return;
    }

    const lowerCaseName = name.toLowerCase();
    const existingContact = contacts.find((contact) => contact.name.toLowerCase() === lowerCaseName);

    if (existingContact) {
      alert(`"${name}" is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      dispatch(addContactFulfilled(newContact));
    }
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContactFulfilled(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} setFilter={handleFilterChange} />
      <ContactList contacts={contacts} filter={filter} deleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
