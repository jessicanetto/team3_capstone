import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { signUpWithEmailAndPassword } from "../Services/Firebase";
import "../Styles/Signup.css"

const SignUp =() => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signUpWithEmailAndPassword(email, password)
        history.push(`/`)
    }

    return(
        <div className="signup-container">
            <h1 className="header">Create Account</h1>
            <form className="signup" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
            <input 
            type="email"
            name="email" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}/>

            <label htmlFor="password">Password</label>
            <input 
            type="text"
            name="password"
            onChange={(e)=> setPassword(e.target.value)}
            value={password} />

            <button type="submit">
                Sign Up
            </button>
           
            <span>Already have an account? <Link to="/">Login</Link></span>
            </form>
        </div>
    )
}

export default SignUp;