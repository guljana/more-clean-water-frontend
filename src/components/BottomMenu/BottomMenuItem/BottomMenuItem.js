import './BottomMenuItem.css';

function BottomMenuItem({target, icon, title, selected}) {
  return (
    <button data-target={target} className={`bottom-menu-item ${selected ? 'selected' : ''}`}>
        <div className="bottom-menu-item__icon material-icons">
            {icon}
        </div>
        <div className="bottom-menu-item__title">
            {title}
        </div>
    </button>
  );
}

export default BottomMenuItem;
