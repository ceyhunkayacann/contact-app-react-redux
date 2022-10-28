import { useState } from 'react'
import { useDispatch } from "react-redux";
import { addContact } from '../redux/contactSlice'
import { nanoid } from '@reduxjs/toolkit'

function Form() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !number) return false

        const names = name.split(',')


        dispatch(addContact({ id: nanoid(), name, phone_number: number }));
        setName('')
        setNumber('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input placeholder='Phone Number' value={number} onChange={(e) => setNumber(e.target.value)} />
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Form