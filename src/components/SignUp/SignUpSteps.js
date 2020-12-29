import { TextField } from '@material-ui/core';

function Account({isActive, onChange}) {
    return (
        <li className={`account${isActive ? ' active-flex' : ''}`}>
            <TextField
                autoComplete="on"
                required id='email'
                label='Email'
                onChange={onChange}
            />
            <TextField
                autoComplete="on"
                required id='password'
                label='Password'
                type="password"
                onChange={onChange}
            />
            <TextField
                autoComplete="on"
                required id='confirm-password'
                label='Confirm password'
                type="password"
                onChange={onChange}
            />
        </li>
    )
}

function Personal({isActive, onChange}) {
    return (
        <li className={`personal${isActive ? ' active-flex' : ''}`}>
            <TextField
                autoComplete="on"
                required id='firstName'
                label='First name'
                onChange={onChange}
            />
            <TextField
                autoComplete="on"
                required id='lastName'
                label='Last name'
                onChange={onChange}
            />
            <TextField
                autoComplete="on"
                required id='county'
                label='County'
                onChange={onChange}
            />
            <TextField
                autoComplete="on"
                required id='postCode'
                label='Post code'
                onChange={onChange}
            />
        </li>
    )
}

function Confirmation({isActive, form, email, firstName, lastName, county, postCode}) {
    return (
        <li className={`confirmation${isActive ? ' active-flex' : ''}`}>
            <ul>
                <li>Email: {email}</li>
                <li>First name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>County: {county}</li>
                <li>Post code: {postCode}</li>
            </ul>
        </li>
    )
}

export {Account, Personal, Confirmation};