import './BottomMenu.css';

function BottomMenu({children}) {
  return (
    <div id="bottom-bar" className="bottom-bar">
        <div className="bottom-menu">
          {children}
        </div>
    </div>
  );
}

export default BottomMenu;
