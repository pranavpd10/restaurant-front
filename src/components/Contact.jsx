import React from 'react'
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom'


import '../App.css'
function Contact({ currRoute }) {
    console.log("currRoute " + currRoute)
    return (
        <>
            <div>Welcome! We are here to help you Contact</div>
            <NavLink to={`${currRoute}/address`}>address</NavLink>
            <NavLink to={`${currRoute}/help`}>Help</NavLink>

            <Routes>
                <Route path="address" element={<Addr />}></Route>
                <Route path="help" element={<HelpComponent />}></Route>
            </Routes>
        </>

    )
}


let Addr = () => {
    return <div>Address card</div>
}


let HelpComponent = () => {
    return <div>Get the help form</div>
}


export default Contact