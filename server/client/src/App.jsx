import './App.module.css'
import'./index.module.css'
import { Routes, Route } from "react-router-dom";
import Index from '../pages/Index.jsx'
import Home from '../pages/Home.jsx'
import Event from '../pages/Event.jsx'
import AddEvent from '../pages/AddEvent.jsx'
import Attendees from '../pages/Attendees.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route index element={<Home />} />
        <Route path="events/:id" element={<Event />} />
        <Route path="editEvent" element={<AddEvent />} />
        <Route path="attendees" element={<Attendees />} />
      </Route>
    </Routes>
  )
}

export default App
