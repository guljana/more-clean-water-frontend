import { TextField } from '@material-ui/core';

function Personal({isActive, onChange}) {
    return (
        <li className={`personal${isActive ? ' active' : ''}`}>
            <TextField autoComplete="on" required id='firstName' label='First name' onChange={onChange}/>
            <TextField autoComplete="on" required id='lastName' label='Last name' onChange={onChange}/>
            <TextField autoComplete="on" required id='county' label='County' onChange={onChange}/>
            <TextField autoComplete="on" required id='postCode' label='Post code' onChange={onChange}/>
        </li>
    )
}

export default Personal;