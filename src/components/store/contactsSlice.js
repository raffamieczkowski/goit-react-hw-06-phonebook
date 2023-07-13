import { createSlice } from '@reduxjs/toolkit';

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(contactsSlice.actions.addContactFulfilled(contact));
    } catch (error) {
    }
  };
};

export const deleteContact = (id) => {
  return async (dispatch) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      dispatch(contactsSlice.actions.deleteContactFulfilled(id));
    } catch (error) {
    }
  };
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
    addContactFulfilled(state, action) {
      state.push(action.payload);
    },
    deleteContactFulfilled(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setFilter, addContactFulfilled, deleteContactFulfilled } = contactsSlice.actions;
export default contactsSlice.reducer;
