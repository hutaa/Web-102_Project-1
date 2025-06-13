import React from "react";
import event1 from '../assets/oceancity.jpg'  
import event2 from '../assets/assateagueisland.jpg'  
import event3 from '../assets/antienamnational.jpg'
import event4 from '../assets/swallowfalls.jpeg'
import event5 from '../assets/harriettubman.jpg'
import event6 from '../assets/nationalharbor.jpg'
import event7 from '../assets/innerharbor.jpeg'
import event8 from '../assets/bethesdarow.jpg'
import event9 from '../assets/greatfalls.jpg'
import event10 from '../assets/brookesidegardens.jpg'

const Events = () => {

  return (
    <div className="event-container">
        <div className = "event-types">
          <img src={event1} className='event-img'/>
          <h3>Ocean City</h3>
          <p>A popular beach town with a famous boardwalk, shops, and restaurants.</p>
          <button onClick={() => window.open("https://www.ococean.com/", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event2} className='event-img'/>
          <h3>Assateague Island</h3>
          <p>Known for its wild horses and natural beauty, offering hiking and bird watching.</p>
          <button onClick={() => window.open("https://www.nps.gov/asis/index.htm", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event3} className='event-img'/>
          <h3>Antietam National Battlefield</h3>
          <p>A well-preserved Civil War battlefield. </p>
          <button onClick={() => window.open("https://www.nps.gov/anti/index.htm#:~:text=The%20Battle%20of%20Antietam%20ended,issue%20the%20preliminary%20Emancipation%20Proclamation.&text=Check%20out%20this%20section%20for,visit%20to%20Antietam%20National%20Battlefield.", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event4} className='event-img'/>
          <h3>Swallow Falls State Park</h3>
          <p>Features the highest waterfall in Maryland and scenic hiking trails.</p>
          <button onClick={() => window.open("https://dnr.maryland.gov/publiclands/pages/western/swallowfalls.aspx", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event5} className='event-img'/>
          <h3>Harriet Tubman Underground Railroad National Park</h3>
          <p>Explore the historic sites and learn about the Underground Railroad.</p>
          <button onClick={() => window.open("https://dnr.maryland.gov/publiclands/pages/eastern/tubman.aspx", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event6} className='event-img'/>
          <h3>National Harbor</h3>
          <p>A stunning waterfront hub featuring the Capital Wheel, boutique 
            shopping, restaurants, and street art. Best for sunset dates, 
            scenic photos, or good vibes.</p>
          <button onClick={() => window.open("https://www.nationalharbor.com/", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event7} className='event-img'/>
          <h3>Inner Harbor</h3>
          <p>A vibrant waterfront destination with scenic boat views, the National Aquarium, 
            historic ships, museums, and street performers.</p>
          <button onClick={() => window.open("https://baltimore.org/what-to-do/museums-attractions/a-tour-of-baltimores-inner-harbor/", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event8} className='event-img'/>
          <h3>Bethesda Row</h3>
          <p>A chic and walkable outdoor mall with indie bookstores, stylish boutiques, 
            cozy cafes, and a movie theater.</p>
          <button onClick={() => window.open("https://www.bethesdarow.com/", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event9} className='event-img'/>
          <h3>Great Falls</h3>
          <p>Explore majestic waterfalls and panoramic river views along rocky hiking trails. 
            The ideal destination for an adventurous date or deep convos while reconnecting with nature.</p>
          <button onClick={() => window.open("https://www.nps.gov/grfa/index.htm", "_blank")}>View Location</button>
        </div>
        <div className = "event-types">
          <img src={event10} className='event-img'/>
          <h3>Brookside Gardens</h3>
          <p>A serene botanical garden filled with seasonal flowers, butterflies, gazebos, 
            and walking paths. A peaceful escape for reflection, cute dates, or photography lovers.</p>
          <button onClick={() => window.open("https://montgomeryparks.org/parks-and-trails/brookside-gardens/", "_blank")}>View Location</button>
        </div>
    </div>
  )
}

export default Events
