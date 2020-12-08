import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

export const Header: React.FC = () => {
   return (
      <section className="header">
         <div className="header__content">
            <h1>React TODO</h1>
            <ul>
               <li><NavLink to="/about">HOME</NavLink></li>
               <li><NavLink to="/">TODOS</NavLink></li>
            </ul>
         </div>
      </section>
   )
}