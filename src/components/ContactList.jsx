import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactFulfilled } from '../components/store/contactsSlice';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name && filter && contact.name.includes(filter)
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
