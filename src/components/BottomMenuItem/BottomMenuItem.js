import './BottomMenuItem.css';

function BottomMenuItem({id, icon, title, selected}) {
  return (
    <button data-target={id} className={`bottom-menu-item ${selected ? 'selected' : ''}`}>
        <div className="bottom-menu-item__icon material-icons">
            <a href="findwater.html">{icon}</a>
        </div>
        <div className="bottom-menu-item__title">
            <a href="findwater.html">{title}</a>
        </div>
    </button>
  );
}

export default BottomMenuItem;
