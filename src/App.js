import BottomMenuItem from './components/BottomMenuItem/BottomMenuItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="bottom-bar" className="bottom-bar">
        <div className="bottom-menu">
          <BottomMenuItem target="water-awareness" icon="info" title="Water Awareness"/>
          <BottomMenuItem target="find-water" icon="room" title="Find Water" selected={true}/>
          <BottomMenuItem target="updates" icon="notifications" title="Updates"/>
        </div>
      </div>
    </div>
  );
}

export default App;
