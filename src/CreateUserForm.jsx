import React, { useState } from 'react'
import UserList from './UserList';

export default function CreateUserForm() {
    const [info, setInfo] = useState([])
    console.log(info);

    const [userName, setUserName] = useState('')
    const [age, setAge] = useState()
    const [email, setEmail] = useState('')
    console.log(userName, age, email);


    const handleSubmit = (e) => {
        e.preventDefault();
        setInfo([...info, { username: userName, age: age, email: email }])
        setUserName('')
        setAge('')
        setEmail('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create User</h1>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={userName} required
                        onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" value={age} required
                        onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} required
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type='submit'>Send</button>
            </form>
           <UserList info={info} />
        </>

    )
}
