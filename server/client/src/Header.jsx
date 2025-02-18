import { Link } from "react-router-dom";
import style from "./index.module.css"

import Logo from "./assets/logo4.png"

const Header = () => {
    return (

        
        <header className={style.header}>


            <div>
                <Link to='/'>
            <img className={style.didlydoo} src={Logo} alt='logo Didlydoo'/>
            </Link>
            </div>
            <nav className={style.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/events/:id">Events</Link></li> */}
                    <li><Link to="/editEvent">Add Event</Link></li>
                    <li><Link to="/attendees">Attendees</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header