import BottomMenuItem from './BottomMenuItem/BottomMenuItem';
import './BottomMenu.css';

function BottomMenu(  ) {
  return (
    <div id="bottom-bar" className="bottom-bar">
        <div className="bottom-menu">
            <BottomMenuItem target="water-awareness" icon="info" title="Water Awareness"/>
            <BottomMenuItem target="find-water" icon="room" title="Find Water" selected={true}/>
            <BottomMenuItem target="updates" icon="notifications" title="Updates"/>
        </div>
    </div>
  );
}

export default BottomMenu;
