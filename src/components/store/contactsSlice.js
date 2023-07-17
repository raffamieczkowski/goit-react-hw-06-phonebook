import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    addContactFulfilled(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContactFulfilled(state, action) {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const {
  setFilter,
  setContacts,
  addContactFulfilled,
  deleteContactFulfilled,
} = contactsSlice.actions;
export default contactsSlice.reducer;
