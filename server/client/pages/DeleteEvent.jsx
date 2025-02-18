import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function DeleteEvent({ id, onDelete }) {
    const [popUp, setPopUp] = useState(false)
    const [status, setStatus] = useState('')
    

    const handleDel = () => {
        axios.delete(`http://localhost:3000/api/events/${id}`)
            .then(() => {
                setStatus('Suppression réussie avec succès')
                onDelete()
            })
            .catch((error) => {
                console.error(error)
                setStatus("Erreur.")
            })
            .finally(() => {
                setPopUp(false)
            });
    }

    return (
        <section>
            <button onClick={() => setPopUp(true)}>Delete</button>

            {/* Pop Up oui ou non */}
            {popUp && (
                <section>
                    <p>Do you really want to delete THIS event ? 🤨</p>
                    <section>
                        <table>
                        <td><button onClick={handleDel}>Confirm</button></td>
                        <td><button onClick={() => setPopUp(false)}>Cancel</button></td>
                        </table>
                    </section>
                </section>
            )}
        </section>
    )

}