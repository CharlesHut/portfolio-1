import gamegaze from '../assets/images/gamegaze.png'; 
import CRIB from '../assets/images/CRIB.png';
import weather from '../assets/images/weather.png';
function projects(){
return(
    <section id="projects">
    <h2 id="projects-heading" className="animated">Projects</h2>
    <div className="projects-showcase">
      <div className="projects-showcase-item">
        <figure className="project-tile animated" id="kojo-img">
          <a href="https://github.com/urie-w/CribQuests" target="_blank"> <img src={CRIB} alt="Kojo" /></a>
        </figure>
        <div className="blackground animated" />
        <div className="projects-info animated">
          <h2>CRIBQUEST</h2>
          <p>
            CribQuest is a website thats similar to facebook marketplace in the sense that you can search and find houses around you as well as post listings for sale.   
           </p>
          <br />
          
        </div>
      </div>
      <div className="projects-showcase-item">
        <figure className="project-tile animated" id="wiki-img">
          <a href="https://github.com/bragonese1/game-gaze" target="_blank"> <img src={gamegaze} alt="Wikiportal" /> </a>
        </figure>
        <div className="blackground animated" />
        <div className="projects-info animated" id="wiki">
          <h2>GAME GAZE</h2>
          <p>
            Game gaze is a video game search website where you can find any game along with a bunch of information about the game such as how to purchase it, what platform you can play it on, and how expesive the game is.</p>
          <br />
      
        </div>
      </div>
      <div className="projects-showcase-item">
        <figure className="project-tile animated" id="weather-img">
          <a href="https://github.com/CharlesHut/bootcamp-assignment-6" target="_blank"><img src={weather} alt="Weather Reader" /></a>
        </figure>
        <div className="blackground animated" />
        <div className="projects-info animated" id="weather">
          <h2>Weather Reader</h2>
          <p>
            Weather Reader is a website where you can put in any city and it will show a 7 day forcast for that area. 
           </p>
          <br />
        </div>
      </div>
    </div>
    </section> 
)
}
export default projects