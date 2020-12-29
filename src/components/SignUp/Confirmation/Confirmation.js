import { TextField } from '@material-ui/core';

function Confirmation({isActive, form, email, firstName, lastName, county, postCode}) {
    return (
        <li className={`confirmation${isActive ? ' active' : ''}`}>
            <ul>
                <li>Email: {email}</li>
                <li>First name: {firstName}</li>
                <li>Last Name: {lastName}</li>
                <li>County: {county}</li>
                <li>postcode: {postCode}</li>
            </ul>
        </li>
    )
}

export default Confirmation;