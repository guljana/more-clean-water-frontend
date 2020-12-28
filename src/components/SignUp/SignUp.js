import { useState } from "react";
import Account from './Account/Account';
import Personal from './Personal/Personal';
import Confirmation from './Confirmation/Confirmation';
import './SignUp.css';

function SignUp() {
    const [form, setForm] = useState({})
    const [step, setStep] = useState(1)

    return (
        <ul className="sign-up">
            <Account isActive={step === 1}/>
            <Personal isActive={step === 2}/>
            <Confirmation isActive={step === 3}/>
        </ul>
    )
}

export default SignUp;



// FirstName, Last Name, Email, Password/confirm password, county and post code fields