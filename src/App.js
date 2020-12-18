import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AddUser from './components/AddUser/AddUser';
import Updates from './components/Updates/Updates';
import BottomMenu from './components/BottomMenu/BottomMenu';
import BottomMenuItem from './components/BottomMenu/BottomMenuItem/BottomMenuItem';

function App() {
  return (
    <Router>
      <div className="App">
        <BottomMenu>
            <Link to="/water-awareness">
              <BottomMenuItem icon="info" title="Water Awareness"/>
            </Link>

            <Link to="/find-water">
              <BottomMenuItem icon="room" title="Find Water" selected={true}/>
            </Link>

            <Link to="/updates">
              <BottomMenuItem icon="notifications" title="Updates"/>
            </Link>
        </BottomMenu>
      </div>
      <Switch>
        <Route path="/">
          <AddUser />
        </Route>

        <Route path="/water-awareness">
          <Updates />
        </Route>

        <Route path="/updates">
          <Updates />
        </Route>

        <Route path="/updates">
          <Updates />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
