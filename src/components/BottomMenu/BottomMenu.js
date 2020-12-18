import './BottomMenu.css';

function BottomMenu({children}) {
  return (
    <nav>
      <ul className="bottom-bar">
          <div className="bottom-menu">
            {children}
          </div>
      </ul>
    </nav>
  );
}

export default BottomMenu;
