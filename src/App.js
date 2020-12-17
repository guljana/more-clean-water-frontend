import BottomMenuItem from './components/BottomMenuItem/BottomMenuItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="bottom-bar" className="bottom-bar">
        <div className="bottom-menu">
          <BottomMenuItem id="water-awareness" icon="info" title="Water Awareness"/>
          <BottomMenuItem  id="find-water" icon="room" title="Find Water" selected={ true }/>
          <BottomMenuItem  id="updates" icon="notifications" title="Updates"/>
        </div>
      </div>
      <div id="container" className="map-container">
        <div className="map">
        </div>
        <div className="search">
          <form action>
            <label htmlFor="fsearch">Search</label>
            <input type="text" id="fsearch" name="fsearch" placeholder="Search areas" />
          </form>
          <div className="search__mylocation material-icons">
            gps_fixed
          </div>
        </div>
        <div className="map-labels">
          <div className="map-labels__item station">
            <div className="map-labels__icon material-icons">room</div>
            <div className="map-labels__title">
              Clean Water Station
            </div>
          </div>
          <div className="map-labels__item natural">
            <div className="map-labels__icon material-icons">room</div>
            <div className="map-labels__title">
              Natural Water Source
            </div>
          </div>
          <div className="map-labels__item updates">
            <div className="map-labels__icon material-icons">info</div>
            <div className="map-labels__title">
              Updates
            </div>
          </div>
          <div className="map-labels__item groundwater">
            <div className="map-labels__icon material-icons">waves</div>
            <div className="map-labels__title">
              Groundwater
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
