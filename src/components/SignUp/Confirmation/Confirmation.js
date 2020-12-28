import { TextField } from '@material-ui/core';

function Confirmation(props) {
    
    const {isActive} = props;

    return (
        <li className={`confirmation${isActive ? ' active' : ''}`}>

        </li>
    )
}

export default Confirmation;