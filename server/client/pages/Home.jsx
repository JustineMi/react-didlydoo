import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "../src/App.module.css";
import "../src/index.module.css";


const Home = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/events/')
            .then(res => setEvents(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div className='events-wrapper'>
            <h2 className='home-title'>Events</h2>
            <table className='home-table'>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Dates</th>
                        {/* <th>Attendees</th> */}
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.id}>
                            <td className="event-name">
                                <Link to={`/events/${event.id}`}>{event.name}</Link>
                            </td>
                            <td>{event.description}</td>
                            <td>{event.author}</td>
                            <td>
                                {event.dates.map(d => (
                                    <p key={`${event.id}${d.date}`}>{d.date}</p>
                                ))}
                            </td>
                            {/* <td>{event.participants ? event.participants.length : 0}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Home;

//code avant css :

/*const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/events/')
            .then(res => setEvents(res.data))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <div className='events-wrapper'>
                <h2 className='home-title'>Events</h2>
                <div className='events-container'>
                    {events.map(event => (
                        <div key={event.id} className='event-item'>
                            <h3>
                                <Link to={`/events/${event.id}`}>{event.name}</Link>
                            </h3>
                            <p>{event.description}</p>
                            <p>Author: {event.author}</p>

                            {event.dates.map(d => (
                                <p key={`${event.id}${d.date}`}>{d.date}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};*/