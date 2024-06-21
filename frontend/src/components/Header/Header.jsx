import React from 'react'
import './Header.css'
const Header = () => {
  
    const handleViewEventClick = () => {
      document.getElementById('event-display').scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div className='header' >
        <div className="header-contents">
            <h2>Schedule Event</h2>
            <p>"Good fortune is what happens when opportunity meets with planning" -Thomas Edison</p>
            <p>"he who has a why to live can beaar almost any how" -Friedrich Nietzsche</p>
            <button onClick={handleViewEventClick}>View Event</button>
        </div>
    </div>
  )
}

export default Header