import { TextField } from '@material-ui/core';

function Account({isActive, onChange}) {
    return (
        <li className={`account${isActive ? ' active' : ''}`}>
            <TextField autoComplete="on" required id='email' label='Email' onChange={onChange}/>
            <TextField autoComplete="on" required id='password' label='Password' type="password" onChange={onChange}/>
            <TextField autoComplete="on" required id='confirm-password' label='Confirm password' type="password" onChange={onChange}/>
        </li>
    )
}

export default Account;