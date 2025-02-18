import React, { useState, useEffect } from "react";
import axios from "axios";

const EditEvent = ({ event, onCancel }) => {
    const [name, setName] = useState(event.name)
    const [author, setAuthor] = useState(event.author)
    const [description, setDescription] = useState(event.description)

    const handleSave = () => {
        axios
            .patch(`http://localhost:3000/api/events/${event.id}`, {
                name: name,
                author: author,
                description: description,
            })
            .then(() => {
                onCancel()
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <section>
            <h2 className="edit-title">Edit Event</h2>

            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="author">Author</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <section>
                <table>
                <td><button type="button" onClick={handleSave}>Save</button></td>
                <td><button type="button" onClick={onCancel}>Cancel</button></td>
                </table>
                </section>
            </form>
        </section>
    )
}

export default EditEvent