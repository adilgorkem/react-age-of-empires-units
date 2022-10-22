import React, { useState } from 'react';
import './Homepage.css'
import Units from './Units'

const Homepage = () => {
    const page = [
        { title: "Home Page" },
        { title: "Units" }
    ]

    const [currentView, setView] = useState("Home");
    const HomePageHandler = () => {
        setView("Home");
    }

    const UnitsPageHandler = () => {
        setView("Units");
    }

    if (currentView === "Home") {
        return (
            <div className='homepage'>
                <div className='header'>
                    <h1 className='hp'>{page[0].title}</h1>
                    <nav className='navbar'>
                        <button className='btn btn-1' onClick={HomePageHandler}>Home</button>
                        <button className='btn btn-2' onClick={UnitsPageHandler}>Units</button>
                    </nav>
                </div>
            </div>
        )
    }

    if (currentView === "Units") {
        return (
            <div>
                <div className='header'>
                    <h1 className='units'>{page[1].title}</h1>
                    <nav className='navbar'>
                        <button className='btn btn-1' onClick={HomePageHandler}>Home</button>
                        <button className='btn btn-2' onClick={UnitsPageHandler}>Units</button>
                    </nav>
                </div>
                <Units/>
            </div>
        )
    }

};

export default Homepage;
