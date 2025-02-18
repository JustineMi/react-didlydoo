import React, { useEffect, useState } from 'react';
import axios from "axios";
import DatePicker from "react-multi-date-picker"
import "../src/App.module.css";
import "../src/index.module.css";

export default function AddEvent() {
    const [name, setName] = useState("")
    const [dates, setDates] = useState([])
    const [author, setAuthor] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const eventInfos = {
            name,
            dates: dates.map(d => d.format("YYYY-MM-DD")),
            author,
            description,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/events', eventInfos, {
                headers: { 'Content-Type': 'application/json' }
            });
            console.log('Success:', response.data);

            setName('')
            setDates([])
            setAuthor('')
            setDescription('')
        } catch (error) {
            console.error('Error submitting event:', error);
        }
    };

    return (
        <section className='addEvent'>
            <h2 className='add-title'>Add your event</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Event name' required />

                <label>Dates</label>
                <DatePicker
                    multiple
                    value={dates}
                    onChange={setDates}
                    format="YYYY-MM-DD"
                    required
                />

                <label>Author</label>
                <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} placeholder='Harry PotDeFleur' required />

                <label>Description</label>
                <textarea
                    name="description"
                    rows="5"
                    placeholder="Description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />
                <div id='add-button'>
                <button type='submit' className='add-event-page'>Submit</button>
                </div>
            </form>
        </section>
    )
}