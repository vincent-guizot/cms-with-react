import React from 'react'
import { 
  NavLink,
 } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/home" activeStyle={{
                        fontWeight: 'bold',
                        background: 'lightgreen',
                        padding: '5px'
                    }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/users" activeStyle={{
                        fontWeight: 'bold',
                        background: 'lightgreen',
                        padding: '5px'
                    }}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
            </ul>

            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            
        </div>
    )
}
