import { TextField } from '@material-ui/core';

function Personal(props) {
    
    const {isActive} = props;

    return (
        <li className={`personal${isActive ? ' active' : ''}`}>

        </li>
    )
}

export default Personal;