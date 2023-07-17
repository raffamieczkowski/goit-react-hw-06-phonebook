import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactFulfilled } from './store/contactsSlice';

const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);


  const handleDeleteContact = (id) => {
    dispatch(deleteContactFulfilled(id));
  };

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
