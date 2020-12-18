import './App.css';
import AddUser from './components/AddUser/AddUser';
import BottomMenu from './components/BottomMenu/BottomMenu';
import BottomMenuItem from './components/BottomMenu/BottomMenuItem/BottomMenuItem';

function App() {
  return (
    <div className="App">
      <AddUser/>
      <BottomMenu>
          <BottomMenuItem target="water-awareness" icon="info" title="Water Awareness"/>
          <BottomMenuItem target="find-water" icon="room" title="Find Water" selected={true}/>
          <BottomMenuItem target="updates" icon="notifications" title="Updates"/>
      </BottomMenu>
    </div>
  );
}

export default App;
