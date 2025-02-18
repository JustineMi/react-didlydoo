import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import "../src/App.module.css";
import "../src/index.module.css";

const Attendees = () => {
    const { name } = useParams()
    const [attendees, setAttendees] = useState([])
    const [attendeesDetails, setAttendeesDetails] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/api/attendees/')
            .then(res => setAttendees(res.data))
            .catch(error => console.log(error))
    }, [])

    //pour avoir tous les event où une personne participe ?
    // useEffect(() => {
    //     if (name) {
    //         axios.get(`http://localhost:3000/api/attendees/${name}`)
    //             .then(res => setAttendeesDetails(res.data))
    //             .catch(error => console.log(error))
    //     }
    // }, [name])

    {/* Pour avoir des dates sans doublons (Set)*/ }
    const attendeesDates = Array.from(new Set(attendees.flatMap(attendee => attendee.events)
        .flatMap(event => event.dates.map(d => d.date))))

    return (
        <>
            <section className='tableau-attendees'>
                <h2 className='attendees-title'>Attendees:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Names</th>
                            {attendeesDates.map(date => (
                                <th key={date}>{date}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.map(({ name, events }) => (
                            <tr key={name}>
                                <td>{name}</td>
                                {attendeesDates.map(date => {
                                    const event = events.find(({ dates }) =>
                                        dates.some(({ date: dateEvent }) => dateEvent === date))

                                    const datesInfos = event ? event.dates.find(({ date: dateEvent }) => dateEvent === date) : null

                                    let available = ""
                                    if (datesInfos) {
                                        available = datesInfos.available ? "✅" : "❌"
                                    }

                                    return (
                                        <td key={`${name}${date}`}>
                                            <h4>{available || "No dates"}</h4>
                                        </td>
                                    )
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default Attendees