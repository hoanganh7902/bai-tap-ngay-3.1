import React, { useState } from 'react'

export default function SignUpForm() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [checkPass, setCheckPass] = useState()
    const [message, setMessage] = useState()
    console.log("passsword", password);
    console.log("check passs", checkPass);
    console.log("message", message);

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const handleSignUp = (e) => {
        console.log(">>>> run handle");

        e.preventDefault()
        if (validEmail.test(email) && (password === checkPass)) {
            setMessage(`A confirmation email has been sent to ${email}.`)
        } if (password !== checkPass) {
            setMessage("Password must match Confirm Password")            
            setTimeout(() => {
                setMessage("")
            }, 3000);
        }
        setEmail("")
        setPassword("")
        setCheckPass("")

    }

    console.log(">>>> run render");

    return (
        <div>
            <form>
                <h1>Sign up form</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} required
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" id="confirm" value={checkPass} required
                        onChange={(e) => setCheckPass(e.target.value)} />
                </div>
                <button type='submit' onClick={handleSignUp}>Send</button>
            </form>
            {message}
        </div>
    )
}
