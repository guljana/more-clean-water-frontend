import './BottomMenuItem.css';

function BottomMenuItem({icon, title}) {
  return (
    <li className='bottom-menu-item'>
        <div className="bottom-menu-item__icon material-icons">
            {icon}
        </div>
        <div className="bottom-menu-item__title">
            {title}
        </div>
    </li>
  );
}

export default BottomMenuItem;
