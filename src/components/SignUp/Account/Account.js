import { TextField } from '@material-ui/core';

function Account(props) {
    
    const {isActive} = props;

    return (
        <li className={`account${isActive ? ' active' : ''}`}>

        </li>
    )
}

export default Account;