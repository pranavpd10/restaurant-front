import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css';

let Navbar = () => {
    return (
        <>
            <div className={styles.navbar} >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/reviews">Reviews</NavLink>
                <NavLink className={({ isActive }) => isActive ? styles.active : null} to="/contact">
                    Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar