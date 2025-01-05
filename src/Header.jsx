import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{ height: "46px", backgroundColor: "lightblue", lineHeight: "46px" }}>
            <Link to="/">Home</Link>
            <Link to="/create">Create User</Link>
            <Link to="/login">Login</Link>
            <Link to="/paginate">Paginate</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/item-details">ItemDetails</Link>
        </div>
    )
}
