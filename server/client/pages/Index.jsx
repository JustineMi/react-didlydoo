import { Outlet, Link } from "react-router-dom";
import style from '../src/index.module.css'
import Logo from '../src/assets/logo4.png'
import { useEffect } from "react";
import Squares from "../src/Reactbits/Backgrounds/Squares/Squares.jsx";
//import SplashCursor from "./SplashCursor.jsx"
import Header from "../src/Header.jsx";
//import PixelTrail from "./PixelTrail/PixelTrail.jsx";
//import Ribbons from '../src/Reactbits/Animations/Ribbons/Ribbons.jsx'
//import ClickSpark from "../src/Reactbits/Animations/ClickSpark/ClickSpark.jsx";

//import GradientText from './src/Reactbits/TextAnimations/GradientText.jsx'



const Index = () => {


    return (
        <>

            <div className="custom">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction='down' // up, down, left, right, diagonal
                    borderColor='#fff'
                    hoverFillColor='#6c3aea'
                />
                <Header />
                
                <main>
                    <Outlet />

                </main>
            </div>
        </>
    )
};

export default Index;


/*
gradient contour
<GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    Add a splash of color!
                </GradientText>





click spark cursos
 <ClickSpark
                sparkColor='#000'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            />

ribbons curser
 <div style={{ height: '0px', position: 'relative', overflow: 'hidden' }}>

                <Ribbons

                    baseThickness={15}

                    colors={['#6c3aea']}

                    speedMultiplier={0.5}

                    maxAge={500}

                    enableFade={false}

                    enableShaderEffect={true}

                    style={{ PointerEvent: 'fill', zIndex: -10 }}

                />

            </div>


pixel curser            
<div style={{ height: '500px', position: 'relative', overflow: 'hidden' }}>
                <PixelTrail
                    gridSize={50}
                    trailSize={0.1}
                    maxAge={250}
                    interpolate={5}
                    color="#fff"
                    gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
                />
            </div>


<SplashCursor />

 <img className={style.didlydoo} src={Logo} alt="logo Didlydoo" />
            <nav className="link">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events/:id">Event</Link>
                    </li>
                    <li>
                        <Link to="/editEvent">AddEvent</Link>
                    </li>
                    <li>
                        <Link to="/attendees">Attendees</Link>
                    </li>
                </ul>
            </nav> */