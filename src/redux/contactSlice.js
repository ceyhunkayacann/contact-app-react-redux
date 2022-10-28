import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter()

const contactSlice = createSlice({
    name: 'contacts',
    initialState: contactAdapter.getInitialState(),
    reducers: {
        addContact: contactAdapter.addOne,
    },
})


export const { addContact } = contactSlice.actions;
export default contactSlice.reducer