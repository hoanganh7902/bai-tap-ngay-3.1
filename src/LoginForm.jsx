import React, { useState } from 'react'

export default function LoginForm() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    console.log(message, email, password);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email.includes('@trienkhaiweb.com') && password.length >= 8) {
            setMessage(`Welcome ${email}!`);
        } else {
            setMessage('Invalid credentials. Please try again.');
        }
    } 

    return (
        <>
            <form>
                <div style={{ margin: '10px' }}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' 
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div style={{ margin: '10px' }}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' 
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>
                {message && <p>{message}</p>}
            </form>
        </>

    )
}
