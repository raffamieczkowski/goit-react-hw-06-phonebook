import { createSlice } from '@reduxjs/toolkit';

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
