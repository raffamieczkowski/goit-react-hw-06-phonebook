import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return contact;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return id;
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addContact.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return state.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
