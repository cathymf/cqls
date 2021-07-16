import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <link to="/">home</link>
                </li>
                <li>
                    <link to="/about">about</link>
                </li>
                <li>
                    <link to="/contactus">contact us</link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
