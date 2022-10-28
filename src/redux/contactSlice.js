import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter()

export const contactSelectors = contactAdapter.getSelectors(state => state.contacts)

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactAdapter.getInitialState(),
    reducers: {
        addContact: contactAdapter.addOne,
    },
})


export const { addContact, addContacts } = contactSlice.actions;
export default contactSlice.reducer