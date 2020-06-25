import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    const divStyles = {
        display: 'flex'
    }
    const linkStyles = {
        fontSize: '1.2em',
        textDecoration: 'none',
        margin: '.5em',
        color: "gray",
        border: '2px solid pink',
        padding: '1em'
    }

    return (
        <div style={divStyles}>
            <Link style={linkStyles} to="/">Home</Link>
            <Link style={linkStyles} to="/posts/new">Create a post</Link>
        </div>
    )
}
