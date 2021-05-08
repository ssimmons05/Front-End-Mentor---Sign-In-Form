import React, {useState} from 'react'
import './SignIn.css'

const SignIn = () => {

const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [submit, setSubmit] = useState(false);

    function enterFirstName(event) {
        setFirstName(event.target.value)
    }
    
    function enterLastName(event) {
        setLastName(event.target.value)
    }
    
    function enterEmail(event) {
        setEmail(event.target.value)
    }
    
    function enterPassword(event) {
        setPassword(event.target.value)
    }
    
    function submitInfo(event) {
        setSubmit(event.target.value)
    }

    return (
        <div className="form">
            <form onSubmit={submitInfo}>
                <input type="text" name="first name" value={firstName} placeHolder="First Name" onChange={enterFirstName}/><span>Please enter your first name.</span>
                <input type="text" name="last name" value={lastName} placeHolder="Last Name" onChange={enterLastName}/><span>Please enter your last name.</span>
                <input type="email" name="email" value={email} placeHolder="Email" onChange={enterEmail}/><span>Please enter your email address.</span>
                <input type="password" name="password" value={password} placeHolder="Password" onChange={enterPassword}/><span>Please enter your password.</span>
                <button type="button">Claim Your Free Trial</button>
            </form>
        </div>
    )
}

export default SignIn
